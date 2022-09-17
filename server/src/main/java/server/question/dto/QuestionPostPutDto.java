package server.question.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class QuestionPostPutDto {

    @NotBlank(message = "내용을 작성해주세요.")
    private String content;

    @NotBlank(message = "대분류를 선택해주세요.")
    private String mainCategory;

    @NotBlank(message = "소분류를 선택해주세요.")
    private String subCategory;
}
