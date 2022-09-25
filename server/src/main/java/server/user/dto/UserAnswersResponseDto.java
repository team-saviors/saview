package server.user.dto;

import lombok.Getter;
import lombok.Setter;
import server.answer.dto.AnswerUserResponseDto;
import server.response.MultiResponseDto;

@Setter
@Getter
public class UserAnswersResponseDto {
    private MultiResponseDto<AnswerUserResponseDto> answers;
}
