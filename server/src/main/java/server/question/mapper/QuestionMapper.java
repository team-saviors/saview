package server.question.mapper;

import org.mapstruct.Mapper;
import server.question.dto.QuestionPostPutDto;
import server.question.dto.QuestionResponseDto;
import server.question.dto.QuestionsResponseDto;
import server.question.entity.Question;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostPutDtoToQuestion(QuestionPostPutDto questionPostPutDto);
    QuestionResponseDto questionToQuestionResponseDto(Question question);

    List<QuestionsResponseDto> questionsToQuestionsResponseDtos(List<Question> questions);

}
