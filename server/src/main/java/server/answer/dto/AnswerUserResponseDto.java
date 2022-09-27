package server.answer.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerUserResponseDto {
    private long questionId;
    private String questionContent;
    private String subCategory;
    private LocalDateTime answerCreatedAt;
}
