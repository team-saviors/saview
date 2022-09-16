package server.question.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.question.dto.QuestionPostPutDto;
import server.question.entity.Question;
import server.question.mapper.QuestionMapper;
import server.question.service.QuestionService;
import server.response.MultiResponseDto;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/questions")
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper questionMapper;

    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostPutDto questionPostPutDto) {
        questionService.createdQuestion(questionMapper.questionPostPutDtoToQuestion(questionPostPutDto));
        return new ResponseEntity("질문이 성공적으로 등록되었습니다.", HttpStatus.CREATED);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@Positive @PathVariable("question-id") long questionId) throws Exception {
        Question question = questionService.findQuestion(questionId);
        return new ResponseEntity(questionMapper.questionToQuestionResponseDto(question),
                HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<MultiResponseDto> getQuestions(@Positive @RequestParam int page,
                                                         @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findQuestions(page - 1, size);
        List<Question> questions = pageQuestions.getContent();
        return new ResponseEntity(new MultiResponseDto<>(questionMapper.questionsToQuestionsResponseDtos(questions), pageQuestions), HttpStatus.OK);
    }

    @PutMapping("/{question-id}")
    public ResponseEntity putQuestion(@Positive @PathVariable("question-id") long questionId,
                                          @Valid @RequestBody QuestionPostPutDto questionPostPutDto) throws Exception {
        Question question = questionMapper.questionPostPutDtoToQuestion(questionPostPutDto);
        question.setQuestionId(questionId);
        questionService.updateQuestion(question);
        return new ResponseEntity("질문 수정이 완료되었습니다.", HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@Positive @PathVariable("question-id") long questionId) throws Exception {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity("질문 삭제가 완료되었습니다.", HttpStatus.OK);
    }
}
