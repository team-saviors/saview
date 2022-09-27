package server.comment.mapper;

import org.mapstruct.Mapper;
import server.comment.dto.CommentPostPutDto;
import server.comment.dto.CommentResponseDto;
import server.comment.entity.Comment;
import server.response.AnswerCommentUserResponseDto;
import server.user.mapper.UserMapper;

import java.util.ArrayList;
import java.util.List;


@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment commentPostPutDtoToComment(CommentPostPutDto commentPostPutDto);

    default CommentResponseDto commentToCommentResponseDto(Comment comment,
                                                           UserMapper userMapper) {
        CommentResponseDto commentResponseDto = new CommentResponseDto();

        commentResponseDto.setCommentId(comment.getCommentId());
        commentResponseDto.setContent(comment.getContent());
        commentResponseDto.setCreatedAt(comment.getCreatedAt());
        commentResponseDto.setModifiedAt(comment.getModifiedAt());
        commentResponseDto.setUser(userMapper.userToUserProfileResponseDto(comment.getUser()));

        return commentResponseDto;
    }

    default AnswerCommentUserResponseDto commentToAnswerCommentUserResponseDto(Comment comment) {
        AnswerCommentUserResponseDto answerCommentUserResponseDto = new AnswerCommentUserResponseDto();

        answerCommentUserResponseDto.setQuestionId(comment.getAnswer().getQuestion().getQuestionId());
        answerCommentUserResponseDto.setQuestionContent(comment.getAnswer().getQuestion().getContent());
        answerCommentUserResponseDto.setSubCategory(comment.getAnswer().getQuestion().getSubCategory());
        answerCommentUserResponseDto.setCreatedAt(comment.getCreatedAt());
        answerCommentUserResponseDto.setContent(comment.getContent());

        return answerCommentUserResponseDto;
    }

    default List<AnswerCommentUserResponseDto> commentsToAnswerCommentUserResponseDtos(List<Comment> comments) {
        if ( comments == null ) {
            return null;
        }

        List<AnswerCommentUserResponseDto> list = new ArrayList<>(comments.size());
        for ( Comment comment : comments ) {
            list.add( commentToAnswerCommentUserResponseDto( comment) );
        }

        return list;
    }
}
