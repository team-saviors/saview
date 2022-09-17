package server.question.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class QuestionsResponseDto {
    private Long questionId;
    private String content;
    private String mainCategory;
    private String subCategory;
//    private int votes;
//    private int answersNum;

    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

//    private Long userId;
//    private String userName;
}
