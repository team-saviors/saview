package server.question.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.answer.service.AnswerService;
import server.comment.service.CommentService;
import server.question.dto.QuestionPostPutDto;
import server.question.dto.QuestionResponseDto;
import server.question.dto.QuestionsResponseDto;
import server.question.dto.ViewsDto;
import server.question.entity.Question;
import server.question.mapper.QuestionMapper;
import server.question.service.QuestionService;
import server.response.MultiResponseDto;
import server.user.mapper.UserMapper;
import server.user.service.UserService;


import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@Validated
@RequiredArgsConstructor
@RestController
@RequestMapping("/questions")
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper questionMapper;
    private final UserService userService;
    private final AnswerService answerService;
    private final UserMapper userMapper;
    private final CommentService commentService;

    @PostMapping
    public ResponseEntity<Void> postQuestion(@Valid @RequestBody QuestionPostPutDto questionPostPutDto,
                                             Authentication authentication) {

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String email = userDetails.getUsername();

        Question question = questionMapper.questionPostPutDtoToQuestion(questionPostPutDto);
        question.setUser(userService.findUser(email));

        final Long questionId = questionService.createdQuestion(question);

        return ResponseEntity.created(URI.create("/questions/" + questionId)).build();
    }

    @GetMapping("/{question-id}")
    public ResponseEntity<QuestionResponseDto> getQuestion(@Positive @RequestParam int page,
                                                           @Positive @RequestParam int size,
                                                           @RequestParam String sort,
                                                           @Positive @PathVariable("question-id") long questionId) {
        Question question = questionService.findQuestion(questionId);
        return ResponseEntity.ok(questionMapper.questionToQuestionResponseDto(question, userMapper, answerService, commentService, page, size, sort));
    }

    @GetMapping
    @Transactional(readOnly = true)
    public ResponseEntity<MultiResponseDto<QuestionsResponseDto>> getQuestions(@Positive @RequestParam int page,
                                                                               @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findQuestions(page - 1, size);
        List<Question> questions = pageQuestions.getContent();

        return ResponseEntity.ok(new MultiResponseDto<>(questionMapper.questionsToQuestionsResponseDtos(questions, userMapper), pageQuestions));
    }

    @PutMapping("/{question-id}")
    public ResponseEntity<Void> putQuestion(@Positive @PathVariable("question-id") long questionId,
                                            @Valid @RequestBody QuestionPostPutDto questionPostPutDto) {
        Question question = questionMapper.questionPostPutDtoToQuestion(questionPostPutDto);
        question.setQuestionId(questionId);
        questionService.updateQuestion(question);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity<Void> deleteQuestion(@Positive @PathVariable("question-id") long questionId) {
        questionService.deleteQuestion(questionId);

        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{question-id}/views")
    public ResponseEntity<Void> putViews(@Positive @PathVariable("question-id") long questionId,
                                         @Valid @RequestBody ViewsDto viewsDto) {
        questionService.updateViews(questionId, viewsDto.getViews());

        return ResponseEntity.ok().build();
    }

    @GetMapping("/tags")
    @Transactional(readOnly = true)
    public ResponseEntity<MultiResponseDto<QuestionsResponseDto>> getQuestionsByCategory(@RequestParam String mainCategory,
                                                                                         @RequestParam String subCategory,
                                                                                         @Positive @RequestParam int page,
                                                                                         @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findQuestionsByCategory(mainCategory, subCategory, page - 1, size);
        List<Question> questions = pageQuestions.getContent();

        return ResponseEntity.ok(new MultiResponseDto<>(questionMapper.questionsToQuestionsResponseDtos(questions, userMapper), pageQuestions));
    }

    @GetMapping("/search")
    public ResponseEntity<MultiResponseDto<QuestionsResponseDto>> searchQuestion(@RequestParam(value = "keyword") String keyword,
                                                                                 @Positive @RequestParam int page,
                                                                                 @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.search(keyword, page - 1, size);
        List<Question> questions = pageQuestions.getContent();
        return ResponseEntity.ok(new MultiResponseDto<>(questionMapper.questionsToQuestionsResponseDtos(questions, userMapper), pageQuestions));
    }
}
