package server.crawling.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import server.crawling.entity.Recruit;

import java.util.List;
import java.util.stream.Stream;

public interface RecruitRepository extends JpaRepository<Recruit, Long> {
    @Query("select r from Recruit r")
    Stream<Recruit> streamAll();

    List<Recruit> findAll();
}
