package server.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import server.exception.BusinessLogicException;
import server.exception.ExceptionCode;
import server.user.entity.RefreshToken;
import server.user.entity.User;
import server.user.repository.RefreshTokenRepository;
import server.user.repository.UserRepository;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {

    private final UserRepository userRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    public void createUser(User user) {
        verifyExistsEmail(user.getEmail());
        verifyExistsNickname(user.getNickname());
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setRole("ROLE_USER");
        user.setProfile("https://saview-dev.s3.ap-northeast-2.amazonaws.com/Saview/logo_circle.png");
    }

    public void updatePassword(String email,
                               String curPassword,
                               String newPassword) {
        User user = findVerifiedUserByEmail(email);
        if (!bCryptPasswordEncoder.matches(curPassword, user.getPassword())) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "기존 비밀번호와 일치하지 않습니다.");
        }
        user.setPassword(bCryptPasswordEncoder.encode(newPassword));
        userRepository.save(user);
    }

    public User findUser(String email) {
        return findVerifiedUserByEmail(email);
    }

    public User findUserById(long userId) {
        User user = findVerifiedUser(userId);
        if (user.getUserStatus().equals(User.UserStatus.USER_QUIT)) {
            throw new BusinessLogicException(ExceptionCode.QUIT_USER);
        }
        return user;
    }

    public void updateRefreshToken(String email, String refreshToken) {
        RefreshToken refreshTokenEntity = RefreshToken.builder().email(email).refreshToken(refreshToken).build();
        refreshTokenRepository.save(refreshTokenEntity);
    }

    public void updateUser(String email, User user) {
        User findUser = findVerifiedUserByEmail(email);
        findUser.setNickname(user.getNickname());
        findUser.setProfile(user.getProfile());
        userRepository.save(findUser);
    }

    public void deleteUser(String email) {
        User findUser = findVerifiedUserByEmail(email);
        findUser.setUserStatus(User.UserStatus.USER_QUIT);
        refreshTokenRepository.deleteByEmail(email);
    }


    private User findVerifiedUser(long userId) {
        Optional<User> user = userRepository.findById(userId);
        return user.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
    }

    private User findVerifiedUserByEmail(String email) {
        Optional<User> user = Optional.ofNullable(userRepository.findByEmail(email));
        return user.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
    }

    private void verifyExistsEmail(String email) {
        Optional<User> user = Optional.ofNullable(userRepository.findByEmail(email));
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.DUPLICATE_EMAIL);
    }

    private void verifyExistsNickname(String nickname) {
        Optional<User> user = Optional.ofNullable(userRepository.findByNickname(nickname));
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.DUPLICATE_NICKNAME);
    }
}
