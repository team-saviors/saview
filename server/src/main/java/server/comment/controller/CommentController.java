package server.comment.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.answer.service.AnswerService;
import server.comment.dto.CommentPostPutDto;
import server.comment.entity.Comment;
import server.comment.mapper.CommentMapper;
import server.comment.service.CommentService;
import server.user.service.UserService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@Validated
@RequiredArgsConstructor
@RestController
public class CommentController {

    private final CommentService commentService;
    private final CommentMapper commentMapper;
    private final AnswerService answerService;
    private final UserService userService;


    @PostMapping("/answers/{answer-id}/comments")
    public ResponseEntity<Void> postComment(@Positive @PathVariable("answer-id") long answerId,
                                            @Valid @RequestBody CommentPostPutDto commentPostPutDto,
                                            Authentication authentication) {

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String email = userDetails.getUsername();

        Comment comment = commentMapper.commentPostPutDtoToComment(commentPostPutDto);
        comment.setAnswer(answerService.findVerifiedAnswer(answerId));
        comment.setUser(userService.findUser(email));

        final Long commentId = commentService.createdComment(comment);

        return ResponseEntity.created(URI.create("/comments/" + commentId)).build();
    }

    @PutMapping("/comments/{comment-id}")
    public ResponseEntity<Void> putComment(@Positive @PathVariable("comment-id") long commentId,
                                     @Valid @RequestBody CommentPostPutDto commentPostPutDto) {
        Comment comment = commentMapper.commentPostPutDtoToComment(commentPostPutDto);
        comment.setCommentId(commentId);
        commentService.updateComment(comment);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/comments/{comment-id}")
    public ResponseEntity<Void> deleteComment(@Positive @PathVariable("comment-id") long commentId) {
        commentService.deleteComment(commentId);

        return ResponseEntity.ok().build();
    }
}
