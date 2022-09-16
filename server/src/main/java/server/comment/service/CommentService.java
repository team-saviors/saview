package server.comment.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import server.comment.entity.Comment;
import server.comment.repository.CommentRepository;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class CommentService {

    private final CommentRepository commentRepository;

    public void createdComment(Comment comment) {
        commentRepository.save(comment);
    }

    public void updateComment(Comment comment) throws Exception {
        Comment findComment = findVerifiedComment(comment.getCommentId());
        findComment.setContent(comment.getContent());
        commentRepository.save(findComment);
    }

    public void deleteComment(long commentId) throws Exception {
        Comment findComment = findVerifiedComment(commentId);
        commentRepository.delete(findComment);
    }

    public Comment findVerifiedComment(long commentId) throws Exception {
        Optional<Comment> comment = commentRepository.findById(commentId);
        return comment.orElseThrow(Exception::new);
    }
}
