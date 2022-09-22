package server.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.user.entity.RefreshToken;

import javax.transaction.Transactional;
import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
    Optional<RefreshToken> findByRefreshToken(String refreshToken);

    void deleteByEmail(String email);

    @Transactional
    void deleteByRefreshToken(String refreshToken);
}
