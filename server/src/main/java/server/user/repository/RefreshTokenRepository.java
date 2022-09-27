package server.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.user.entity.RefreshToken;
import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
    Optional<RefreshToken> findByRefreshToken(String refreshToken);

    Optional<RefreshToken> findByEmail(String email);

    void deleteByEmail(String email);

    void deleteByRefreshToken(String refreshToken);
}
