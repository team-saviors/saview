package server.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import server.user.dto.UserProfileResponseDto;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class QuestionsResponseDto {
    private Long questionId;
    private String content;
    private String mainCategory;
    private String subCategory;
    private int views;
    private UserProfileResponseDto user;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
