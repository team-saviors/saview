package server.comment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.comment.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
