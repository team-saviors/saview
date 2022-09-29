package server.answer.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import server.answer.entity.Answer;
import server.question.entity.Question;
import server.user.entity.User;


public interface AnswerRepository extends JpaRepository<Answer, Long> {
    Page<Answer> findAllByQuestion(Question question, Pageable pageable);
    Page<Answer> findAllByUser(User user, Pageable pageable);

    @Transactional
    @Modifying
    @Query("update Answer a set a.votes = :votes where a.answerId = :answerId")
    int updateVotes(@Param("votes") int votes, @Param("answerId") long answerId);

}
