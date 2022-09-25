package server.comment.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class CommentUserResponseDto {
    private long questionId;
    private String questionContent;
    private String subCategory;
    private LocalDateTime commentCreatedAt;
}
