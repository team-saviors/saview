package server.comment.mapper;

import org.mapstruct.Mapper;
import server.answer.dto.AnswerUserResponseDto;
import server.answer.entity.Answer;
import server.comment.dto.CommentPostPutDto;
import server.comment.dto.CommentResponseDto;
import server.comment.dto.CommentUserResponseDto;
import server.comment.entity.Comment;
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

    default CommentUserResponseDto commentToCommentUserResponseDto(Comment comment) {
        CommentUserResponseDto commentUserResponseDto = new CommentUserResponseDto();

        commentUserResponseDto.setQuestionId(comment.getAnswer().getQuestion().getQuestionId());
        commentUserResponseDto.setQuestionContent(comment.getAnswer().getQuestion().getContent());
        commentUserResponseDto.setSubCategory(comment.getAnswer().getQuestion().getSubCategory());
        commentUserResponseDto.setCommentCreatedAt(comment.getCreatedAt());

        return commentUserResponseDto;
    }

    default List<CommentUserResponseDto> commentsToCommentUserResponseDtos(List<Comment> comments) {
        if ( comments == null ) {
            return null;
        }

        List<CommentUserResponseDto> list = new ArrayList<>(comments.size());
        for ( Comment comment : comments ) {
            list.add( commentToCommentUserResponseDto( comment) );
        }

        return list;
    }
}
