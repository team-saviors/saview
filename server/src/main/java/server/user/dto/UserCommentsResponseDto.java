package server.user.dto;

import lombok.Getter;
import lombok.Setter;
import server.response.AnswerCommentUserResponseDto;
import server.response.MultiResponseDto;

@Setter
@Getter
public class UserCommentsResponseDto {
    private MultiResponseDto<AnswerCommentUserResponseDto> myPosts;
}
