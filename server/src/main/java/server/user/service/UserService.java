package server.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import server.user.entity.User;
import server.user.repository.UserRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User createUser(User user) throws Exception {
        verifyExistsEmail(user.getEmail());
        verifyExistsNickname(user.getNickname());
<<<<<<< HEAD
        verifyExistsLoginId(user.getLoginId());
=======
>>>>>>> fa00bc812c85f523e7cae055eab3c99b2270fa9f
        user.setRole("ROLE_USER");
        return userRepository.save(user);
    }

    public User findUser(long userId) throws Exception {
        return findVerifiedUser(userId);
    }

    public void updateUser(User user) throws Exception {
        User findUser = findVerifiedUser(user.getUserId());
        findUser.setEmail(user.getEmail());
<<<<<<< HEAD
        findUser.setLoginId(user.getLoginId());
=======
>>>>>>> fa00bc812c85f523e7cae055eab3c99b2270fa9f
        findUser.setNickname(user.getNickname());
        if (user.getProfile() != null) findUser.setProfile(user.getProfile());
        userRepository.save(findUser);
    }

    public void deleteUser(long userId) throws Exception {
        User findUser = findVerifiedUser(userId);
        userRepository.delete(findUser);
    }

    private User findVerifiedUser(long userId) throws Exception {
        Optional<User> user = userRepository.findById(userId);
        User findUser = user.orElseThrow(() -> new Exception());
        return findUser;
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

    private void verifyExistsLoginId(String loginId) throws Exception {
        Optional<User> user = Optional.ofNullable(userRepository.findByLoginId(loginId));
        if (user.isPresent()) throw new Exception();
    }
=======
>>>>>>> fa00bc812c85f523e7cae055eab3c99b2270fa9f
}
