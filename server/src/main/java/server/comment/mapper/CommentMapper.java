package server.comment.mapper;

import org.mapstruct.Mapper;
import server.comment.dto.CommentPostPutDto;
import server.comment.dto.CommentResponseDto;
import server.comment.entity.Comment;
import server.user.mapper.UserMapper;

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
}
