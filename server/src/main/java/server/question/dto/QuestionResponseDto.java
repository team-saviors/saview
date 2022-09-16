package server.question.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionResponseDto {
    private Long questionId;
    private String content;
    private String mainCategory;
    private String subCategory;
}
