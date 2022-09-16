package server.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import server.user.entity.User;
import server.user.repository.UserRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public User createUser(User user) throws Exception {
        verifyExistsEmail(user.getEmail());
        verifyExistsNickname(user.getNickname());
        verifyExistsLoginId(user.getLoginId());
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setRole("ROLE_USER");
        return userRepository.save(user);
    }

    public User findUser(long userId) throws Exception {
        return findVerifiedUser(userId);
    }


    private User findVerifiedUser(long userId) throws Exception {
        Optional<User> user = userRepository.findById(userId);
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

    private void verifyExistsLoginId(String loginId) throws Exception {
        Optional<User> user = Optional.ofNullable(userRepository.findByLoginId(loginId));
        if (user.isPresent())
            throw new Exception();
    }
}
