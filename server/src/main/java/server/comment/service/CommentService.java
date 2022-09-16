package server.comment.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import server.answer.entity.Answer;
import server.comment.dto.CommentResponseDto;
import server.comment.entity.Comment;
import server.comment.mapper.CommentMapper;
import server.comment.repository.CommentRepository;
import server.user.mapper.UserMapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final CommentMapper commentMapper;

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

    public List<CommentResponseDto> findComments(Answer answer, UserMapper userMapper) {
        List<Comment> findAllComments = commentRepository.findAllByAnswer(answer);
        List<CommentResponseDto> commentResponseDtos = new ArrayList<>();
        for (Comment comment : findAllComments) {
            commentResponseDtos.add(commentMapper.commentToCommentResponseDto(comment, userMapper));
        }
        return commentResponseDtos;
    }
}
