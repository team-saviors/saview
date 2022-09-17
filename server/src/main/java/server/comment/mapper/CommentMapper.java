package server.comment.mapper;

import org.mapstruct.Mapper;
import server.comment.dto.CommentPostPutDto;
import server.comment.entity.Comment;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment commentPostPutDtoToComment(CommentPostPutDto commentPostPutDto);
}
