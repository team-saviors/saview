package server.question.dto;

import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
public class ViewsDto {
    @NotNull
    @Positive
    private int views;
}
