package server.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.user.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);

    User findByNickname(String nickname);


}
