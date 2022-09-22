package server.user.dto;

import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;

@Getter
public class PasswordDto {

    @NotNull(message = "기존 비밀번호를 작성해야합니다.")
    private String curPassword;

    @NotNull(message = "변경할 비밀번호를 작성해야합니다.")
    @Pattern(regexp="(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\\W)(?=\\S+$).{8,20}",
            message = "영문자와 숫자, 특수기호를 적어도 1개 이상씩 포함한 8 ~ 20자의 비밀번호를 설정해주세요.")
    private String newPassword;
}
