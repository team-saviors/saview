package server.question.mapper;

import org.mapstruct.Mapper;
import server.answer.service.AnswerService;
import server.comment.service.CommentService;
import server.question.dto.QuestionPostPutDto;
import server.question.dto.QuestionResponseDto;
import server.question.dto.QuestionsResponseDto;
import server.question.entity.Question;
import server.user.mapper.UserMapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostPutDtoToQuestion(QuestionPostPutDto questionPostPutDto);

    List<QuestionsResponseDto> questionsToQuestionsResponseDtos(List<Question> questions);

    default QuestionResponseDto questionToQuestionResponseDto(Question question,
                                                              UserMapper userMapper,
                                                              AnswerService answerService,
                                                              CommentService commentService) {
        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setContent(question.getContent());
        questionResponseDto.setViews(question.getViews());
        questionResponseDto.setMainCategory(question.getMainCategory());
        questionResponseDto.setSubCategory(question.getSubCategory());
        questionResponseDto.setUser(userMapper.userToUserProfileResponseDto(question.getUser()));
        questionResponseDto.setAnswers(answerService.findAnswers(question, userMapper, commentService));

        return questionResponseDto;
    }
}
