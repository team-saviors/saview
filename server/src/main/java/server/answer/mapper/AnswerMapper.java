package server.answer.mapper;

import org.mapstruct.Mapper;
import server.answer.dto.AnswerPostPutDto;
import server.answer.entity.Answer;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostPutDtoToAnswer(AnswerPostPutDto answerPostPutDto);
}
