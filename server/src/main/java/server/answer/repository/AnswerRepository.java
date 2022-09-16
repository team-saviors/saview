package server.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.answer.entity.Answer;
import server.question.entity.Question;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    List<Answer> findAllByQuestion(Question question);
}
