package server.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import server.question.entity.Question;
import server.user.dto.UserProfileResponseDto;

import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionsResponseDto {
    private Long questionId;
    private String content;
    private String mainCategory;
    private String subCategory;
    private int views;
    private int answerNum;
    private UserProfileResponseDto user;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

}
