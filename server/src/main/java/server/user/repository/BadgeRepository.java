package server.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import server.user.entity.Badge;

public interface BadgeRepository extends JpaRepository<Badge,Long> {
    @Transactional
    @Modifying
    @Query("update Badge b set b.score = :score where b.badgeId = :badgeId")
    int updateScore(@Param("score") int score, @Param("badgeId") long badgeId);
}
