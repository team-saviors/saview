package server.crawling.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.crawling.entity.Recruit;

public interface RecruitRepository extends JpaRepository<Recruit, Long> {
}
