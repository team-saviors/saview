package server.user.dto;

import lombok.Getter;
import lombok.Setter;
import server.response.AnswerCommentUserResponseDto;
import server.response.MultiResponseDto;

@Setter
@Getter
public class UserAnswersResponseDto {

    private MultiResponseDto<AnswerCommentUserResponseDto> myPosts;
}
