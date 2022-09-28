package server.answer.mapper;

import org.mapstruct.Mapper;
import server.answer.dto.AnswerPostPutDto;
import server.answer.dto.AnswerResponseDto;
import server.answer.entity.Answer;
import server.comment.service.CommentService;
import server.response.AnswerCommentUserResponseDto;
import server.user.mapper.UserMapper;

import java.util.ArrayList;
import java.util.List;


@Mapper(componentModel = "spring")
public interface AnswerMapper {

    Answer answerPostPutDtoToAnswer(AnswerPostPutDto answerPostPutDto);
    default List<AnswerResponseDto> answersToAnswersResponseDtos(List<Answer> answers,
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

    default AnswerCommentUserResponseDto answerToAnswerCommentUserResponseDto(Answer answer) {
        AnswerCommentUserResponseDto answerCommentUserResponseDto = new AnswerCommentUserResponseDto();

        answerCommentUserResponseDto.setQuestionId(answer.getQuestion().getQuestionId());
        answerCommentUserResponseDto.setQuestionContent(answer.getQuestion().getContent());
        answerCommentUserResponseDto.setSubCategory(answer.getQuestion().getSubCategory());

        answerCommentUserResponseDto.setCreatedAt(answer.getCreatedAt());
        answerCommentUserResponseDto.setContent(answer.getContent());

        return answerCommentUserResponseDto;
    }

    default List<AnswerCommentUserResponseDto> answersToAnswerCommentUserResponseDtos(List<Answer> answers) {
        if ( answers == null ) {
            return null;
        }

        List<AnswerCommentUserResponseDto> list = new ArrayList<>(answers.size());
        for ( Answer answer : answers ) {
            list.add( answerToAnswerCommentUserResponseDto( answer) );
        }

        return list;
    }
}
