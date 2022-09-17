package server.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.user.entity.RefreshToken;

import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
    Optional<RefreshToken> findByRefreshToken(String refreshToken);
    boolean existsByLoginId(String loginId);
    void deleteByLoginId(String loginId);
}
