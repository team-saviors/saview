package server.response;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerCommentUserResponseDto {
    private long questionId;
    private String questionContent;
    private String subCategory;
    private LocalDateTime CreatedAt;
    private String content;
}
