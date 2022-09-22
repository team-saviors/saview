package server.answer.dto;

import lombok.Getter;

import javax.validation.constraints.PositiveOrZero;

@Getter
public class VotesDto {

    @PositiveOrZero
    private int votes;
}
