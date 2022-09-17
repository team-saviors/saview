package server.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class AnswerPostPutDto {

    @NotBlank(message = "내용을 입력해주세요.")
    private String content;
}
