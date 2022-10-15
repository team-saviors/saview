package server.jwt.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import server.exception.ErrorResponse;
import server.exception.ExceptionCode;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class CustomHttp403ForbiddenEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException {
        log.error("Forbidden: {}",authException.getMessage());
        ErrorResponse errorResponse = ErrorResponse.of(ExceptionCode.UNAUTHENTICATED_USER);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setCharacterEncoding("utf-8");
        response.setStatus(HttpStatus.FORBIDDEN.value());
        new ObjectMapper().writeValue(response.getOutputStream(), errorResponse);
    }
}
