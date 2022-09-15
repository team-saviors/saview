package server.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.question.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
