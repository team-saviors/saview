package server.answer.controller;



import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.answer.dto.AnswerPostPutDto;
import server.answer.dto.AnswerResponseDto;
import server.answer.dto.VotesDto;
import server.answer.entity.Answer;
import server.answer.mapper.AnswerMapper;
import server.answer.service.AnswerService;
import server.comment.service.CommentService;
import server.question.service.QuestionService;
import server.user.mapper.UserMapper;
import server.user.service.UserService;


import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@Validated
@RequiredArgsConstructor
@RestController
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper answerMapper;
    private final QuestionService questionService;
    private final UserService userService;

    private final CommentService commentService;
    private final UserMapper userMapper;


    @PostMapping("/questions/{question-id}/answers")
    public ResponseEntity<Void> postAnswer(@Positive @PathVariable("question-id") long questionId,
                                           @Valid @RequestBody AnswerPostPutDto answerPostPutDto,
                                           Authentication authentication)  {

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String email = userDetails.getUsername();

        Answer answer = answerMapper.answerPostPutDtoToAnswer(answerPostPutDto);
        answer.setQuestion(questionService.findVerifiedQuestion(questionId));
        answer.setUser(userService.findUser(email));

        final Long answerId = answerService.createdAnswer(answer);

        return ResponseEntity.created(URI.create("/answers/" + answerId)).build();
    }

    @PutMapping("/answers/{answer-id}")
    public ResponseEntity<Void> putAnswer(@Positive @PathVariable("answer-id") long answerId,
                                    @Valid @RequestBody AnswerPostPutDto answerPostPutDto)  {
        Answer answer = answerMapper.answerPostPutDtoToAnswer(answerPostPutDto);
        answer.setAnswerId(answerId);
        answerService.updateAnswer(answer);

        return ResponseEntity.ok().build();
    }

    @PutMapping("/answers/{answer-id}/votes")
    public ResponseEntity<Void> putVotes(@Positive @PathVariable("answer-id") long answerId,
                                   @Valid @RequestBody VotesDto votesDto)  {
        answerService.updateVotes(answerId, votesDto.getVotes());

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/answers/{answer-id}")
    public ResponseEntity<Void> deleteAnswer(@Positive @PathVariable("answer-id") long answerId)  {
        answerService.deleteAnswer(answerId);

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/test/{answer-id}")
    public ResponseEntity<AnswerResponseDto> test(@PathVariable("answer-id") long answerId)  {
        Answer answer = answerService.findVerifiedAnswer(answerId);

        return ResponseEntity.ok(answerMapper.answerToAnswerResponseDto(answer, userMapper, commentService));
    }


}
