package server.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.answer.entity.Vote;


public interface VoteRepository extends JpaRepository<Vote, Long> {
    boolean existsByAnswerIdAndUserId(long answerId, long userId);
}
