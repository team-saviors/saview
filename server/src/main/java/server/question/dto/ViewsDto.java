package server.question.dto;

import lombok.Getter;

import javax.validation.constraints.PositiveOrZero;

@Getter
public class ViewsDto {

    @PositiveOrZero
    private int views;
}
