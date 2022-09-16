package server.answer.mapper;

import lombok.RequiredArgsConstructor;
import org.mapstruct.Mapper;
import server.answer.dto.AnswerPostPutDto;
import server.answer.dto.AnswerResponseDto;
import server.answer.entity.Answer;
import server.comment.service.CommentService;
import server.user.mapper.UserMapper;


@Mapper(componentModel = "spring")
public interface AnswerMapper {

    Answer answerPostPutDtoToAnswer(AnswerPostPutDto answerPostPutDto);

    default AnswerResponseDto answerToAnswerResponseDto(Answer answer,
                                                        UserMapper userMapper,
                                                        CommentService commentService) {
        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        answerResponseDto.setAnswerId(answer.getAnswerId());
        answerResponseDto.setCreatedAt(answer.getCreatedAt());
        answerResponseDto.setModifiedAt(answer.getModifiedAt());
        answerResponseDto.setContent(answer.getContent());
        answerResponseDto.setVotes(answer.getVotes());

        answerResponseDto.setUser(userMapper.userToUserProfileResponseDto(answer.getUser()));

        answerResponseDto.setComments(commentService.findComments(answer, userMapper));

        return answerResponseDto;
    }
}
