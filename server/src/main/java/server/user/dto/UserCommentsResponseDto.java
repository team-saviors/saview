package server.user.dto;

import lombok.Getter;
import lombok.Setter;
import server.comment.dto.CommentUserResponseDto;
import server.response.MultiResponseDto;

@Setter
@Getter
public class UserCommentsResponseDto {
    private MultiResponseDto<CommentUserResponseDto> comments;
}
