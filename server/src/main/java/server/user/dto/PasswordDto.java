package server.user.dto;

import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
public class PasswordDto {

    @NotNull
    @Positive
    private String newPassword;
}
