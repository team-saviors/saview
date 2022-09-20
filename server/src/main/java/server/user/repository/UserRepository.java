package server.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.user.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
    User findByNickname(String nickname);
<<<<<<< HEAD
<<<<<<< HEAD
    User findByLoginId(String loginId);
=======
>>>>>>> fa00bc812c85f523e7cae055eab3c99b2270fa9f
=======


>>>>>>> d2c55ae6cc67c23b854400ced21b2bf095ef0113
}
