package server.jwt.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import server.exception.BusinessLogicException;
import server.exception.ExceptionCode;
import server.user.entity.RefreshToken;
import server.user.entity.User;
import server.user.repository.RefreshTokenRepository;
import server.user.repository.UserRepository;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

@RestController
@RequiredArgsConstructor
@Slf4j
public class RefreshTokenController {

    private final UserRepository userRepository;

    private final RefreshTokenRepository refreshTokenRepository;

    @GetMapping("/refresh")
    public void refreshToken(
            HttpServletRequest request, HttpServletResponse response) throws IOException {
        log.info("Refresh Token 유효성 검사");

        String jwtHeader = request.getHeader("Refresh");

        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setCharacterEncoding("utf-8");
        response.setHeader("Access-Control-Allow-Origin", "*");

        if (jwtHeader == null || !jwtHeader.startsWith("Bearer")) {
            log.info("Refresh 토큰이 없습니다.");
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            new ObjectMapper().writeValue(response.getOutputStream(), ExceptionCode.REFRESH_TOKEN_MISSING);
            return;
        }
        try {
            String refreshToken = jwtHeader.replace("Bearer ", "");

            // Refresh Token 유효성 검사
            JWTVerifier verifier = JWT.require(Algorithm.HMAC512("cos_jwt_token")).build();
            DecodedJWT decodedJWT = verifier.verify(refreshToken);

            // Access Token 재발급

            String email = decodedJWT.getSubject();
            User user = userRepository.findByEmail(email);
            RefreshToken refreshTokenEntity = refreshTokenRepository.findByRefreshToken(refreshToken).orElseThrow(() -> new RuntimeException("만료된 토큰입니다."));

            if (user == null) {
                throw new BusinessLogicException(ExceptionCode.USER_NOT_FOUND);
            } else if (!refreshTokenEntity.getEmail().equals(email)) {
                throw new BusinessLogicException(ExceptionCode.INVALID_REFRESH_TOKEN);
            }

            String accessToken = JWT.create()
                    .withSubject(email)
                    .withExpiresAt(new Date(System.currentTimeMillis() + (1000 * 60 * 30)))
//                    .withExpiresAt(new Date(System.currentTimeMillis() + (1000 * 10)))
                    .withClaim("id", user.getUserId())
                    .withClaim("email", user.getEmail())
                    .sign(Algorithm.HMAC512("cos_jwt_token"));
            response.addHeader("Authorization", "Bearer " + accessToken);

        } catch (TokenExpiredException e) {
            log.info("Refresh Token 만료");
            throw new BusinessLogicException(ExceptionCode.REFRESH_TOKEN_EXPIRED);
//            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//            new ObjectMapper().writeValue(response.getOutputStream(), ExceptionCode.JWT_TOKEN_EXPIRED);
        }
    }

    @PostMapping("/auths/logout")
    public void logout(@RequestHeader(value = "Authorization") String refreshToken) {
        refreshTokenRepository.deleteByRefreshToken(refreshToken.replace("Bearer ",""));
    }
}
