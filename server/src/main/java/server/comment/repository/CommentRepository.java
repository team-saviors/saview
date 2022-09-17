package server.comment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.answer.entity.Answer;
import server.comment.entity.Comment;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findAllByAnswer(Answer answer);
}
