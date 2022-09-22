package server.comment.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
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

@Validated
@RequiredArgsConstructor
@RestController
public class CommentController {

    private final CommentService commentService;
    private final CommentMapper commentMapper;
    private final AnswerService answerService;
    private final UserService userService;


    @PostMapping("/answers/{answer-id}/comments")
    public ResponseEntity postComment(@Positive @PathVariable("answer-id") long answerId,
                                      @Valid @RequestBody CommentPostPutDto commentPostPutDto,
                                      Authentication authentication) throws Exception {

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String email = userDetails.getUsername();

        Comment comment = commentMapper.commentPostPutDtoToComment(commentPostPutDto);
        comment.setAnswer(answerService.findVerifiedAnswer(answerId));
        comment.setUser(userService.findUser(email));

        commentService.createdComment(comment);
        return new ResponseEntity("댓글 작성을 완료하였습니다.", HttpStatus.CREATED);
    }

    @PutMapping("/comments/{comment-id}")
    public ResponseEntity putComment(@Positive @PathVariable("comment-id") long commentId,
                                     @Valid @RequestBody CommentPostPutDto commentPostPutDto) throws Exception {
        Comment comment = commentMapper.commentPostPutDtoToComment(commentPostPutDto);
        comment.setCommentId(commentId);
        commentService.updateComment(comment);
        return new ResponseEntity("댓글 수정을 완료하였습니다.", HttpStatus.OK);
    }

    @DeleteMapping("/comments/{comment-id}")
    public ResponseEntity deleteComment(@Positive @PathVariable("comment-id") long commentId) throws Exception {
        commentService.deleteComment(commentId);
        return new ResponseEntity("댓글 삭제를 완료하였습니다.", HttpStatus.OK);
    }
}
