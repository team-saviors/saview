package server.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.answer.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
