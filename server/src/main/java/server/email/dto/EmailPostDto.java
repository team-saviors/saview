package server.email.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class EmailPostDto {
    private String email;
}
