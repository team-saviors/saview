package server.answer.dto;

import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
public class VotesDto {

    @NotNull
    @Positive
    private int votes;
}
