package server.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import server.user.entity.RefreshToken;
import server.user.entity.User;
import server.user.repository.RefreshTokenRepository;
import server.user.repository.UserRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    private final RefreshTokenRepository refreshTokenRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;



    public User createUser(User user) throws Exception {
        verifyExistsEmail(user.getEmail());
        verifyExistsNickname(user.getNickname());
<<<<<<< HEAD
<<<<<<< HEAD
        verifyExistsLoginId(user.getLoginId());
=======
>>>>>>> fa00bc812c85f523e7cae055eab3c99b2270fa9f
=======
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
>>>>>>> d2c55ae6cc67c23b854400ced21b2bf095ef0113
        user.setRole("ROLE_USER");
        return userRepository.save(user);
    }

    public void updatePassword(String email, String newPassword) throws Exception {
        User user = findVerifiedUserByEmail(email);
        user.setPassword(bCryptPasswordEncoder.encode(newPassword));
        userRepository.save(user);
    }

    public User findUser(String email) throws Exception {
        return findVerifiedUserByEmail(email);
    }

    public User findUserById(long userId) throws Exception {
        return findVerifiedUser(userId);
    }

    public void updateRefreshToken(String email, String refreshToken) {
        RefreshToken refreshTokenEntity = RefreshToken.builder().email(email).refreshToken(refreshToken).build();
        refreshTokenRepository.save(refreshTokenEntity);
    }

    public void updateUser(String email, User user) throws Exception {
        User findUser = findVerifiedUserByEmail(email);
        findUser.setEmail(user.getEmail());
<<<<<<< HEAD
<<<<<<< HEAD
        findUser.setLoginId(user.getLoginId());
=======
>>>>>>> fa00bc812c85f523e7cae055eab3c99b2270fa9f
=======

>>>>>>> d2c55ae6cc67c23b854400ced21b2bf095ef0113
        findUser.setNickname(user.getNickname());
        if (user.getProfile() != null) findUser.setProfile(user.getProfile());
        userRepository.save(findUser);
    }

    public void deleteUser(String email) throws Exception {
        User findUser = findVerifiedUserByEmail(email);
        userRepository.delete(findUser);
    }

    private User findVerifiedUser(long userId) throws Exception {
        Optional<User> user = userRepository.findById(userId);
        return user.orElseThrow(Exception::new);
    }

    private User findVerifiedUserByEmail(String email) throws Exception {
        Optional<User> user = Optional.ofNullable(userRepository.findByEmail(email));
        return user.orElseThrow(Exception::new);
    }

    private void verifyExistsEmail(String email) throws Exception {
        Optional<User> user = Optional.ofNullable(userRepository.findByEmail(email));
        if (user.isPresent())
            throw new Exception();
    }

    private void verifyExistsNickname(String nickname) throws Exception {
        Optional<User> user = Optional.ofNullable(userRepository.findByNickname(nickname));
        if (user.isPresent())
            throw new Exception();
    }
<<<<<<< HEAD
<<<<<<< HEAD

    private void verifyExistsLoginId(String loginId) throws Exception {
        Optional<User> user = Optional.ofNullable(userRepository.findByLoginId(loginId));
        if (user.isPresent()) throw new Exception();
    }
=======
>>>>>>> fa00bc812c85f523e7cae055eab3c99b2270fa9f
=======

>>>>>>> d2c55ae6cc67c23b854400ced21b2bf095ef0113
}
