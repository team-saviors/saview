package server.answer.mapper;

import org.mapstruct.Mapper;
import server.answer.dto.AnswerPostPutDto;
import server.answer.dto.AnswerResponseDto;
import server.answer.entity.Answer;
import server.comment.service.CommentService;
import server.question.dto.QuestionsResponseDto;
import server.question.entity.Question;
import server.user.mapper.UserMapper;

import java.util.ArrayList;
import java.util.List;


@Mapper(componentModel = "spring")
public interface AnswerMapper {

    Answer answerPostPutDtoToAnswer(AnswerPostPutDto answerPostPutDto);
    default List<AnswerResponseDto> AnswersToAnswersResponseDtos(List<Answer> answers,
                                                                 UserMapper userMapper,
                                                                 CommentService commentService) {
        if ( answers == null ) {
            return null;
        }

        List<AnswerResponseDto> list = new ArrayList<>(answers.size());
        for ( Answer answer : answers ) {
            list.add( answerToAnswerResponseDto( answer, userMapper, commentService ) );
        }

        return list;
    }


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
