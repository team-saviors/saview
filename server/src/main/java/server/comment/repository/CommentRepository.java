package server.comment.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import server.answer.entity.Answer;
import server.comment.entity.Comment;
import server.user.entity.User;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findAllByAnswer(Answer answer);
    Page<Comment> findAllByUser(User user, Pageable pageable);

}
