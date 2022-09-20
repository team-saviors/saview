package server.user.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@Setter
public class UserPutDto {

<<<<<<< HEAD
<<<<<<< HEAD
    @NotBlank(message = "아이디는 반드시 입력해야합니다.")
    @Pattern(regexp = "(^[a-zA-Z]+(\\s[a-zA-Z]+)*$)",
            message = "아이디는 20자 이하의 영문으로 작성해야하며, 연속된 공백을 사용할 수 없습니다.")
    private String loginId;

=======
>>>>>>> fa00bc812c85f523e7cae055eab3c99b2270fa9f
=======

>>>>>>> d2c55ae6cc67c23b854400ced21b2bf095ef0113
    @NotBlank(message = "이메일은 반드시 입력해야합니다.")
    @Email(message = "이메일 형식에 맞지 않습니다.")
    private String email;

    @NotBlank(message = "닉네임은 반드시 입력해야합니다.")
<<<<<<< HEAD
<<<<<<< HEAD
    @Pattern(regexp = "(^[a-zA-Z]+(\\s[a-zA-Z]+)*$)",
=======
    @Pattern(regexp = "(^[a-zA-Z0-9가-힣]+(\\s[a-zA-Z0-9가-힣]+)*$)",
>>>>>>> fa00bc812c85f523e7cae055eab3c99b2270fa9f
            message = "닉네임은 10자 이하의 영문으로 작성해야하며, 연속된 공백을 사용할 수 없습니다.")
=======

    @Pattern(regexp = "(^[a-zA-Z0-9가-힣]+(\\s[a-zA-Z0-9가-힣]+)*$)",
            message = "닉네임은 10자 이하의 영문자, 숫자, 한글을 사용하여 작성해야하며, 연속된 공백을 사용할 수 없습니다.")
>>>>>>> d2c55ae6cc67c23b854400ced21b2bf095ef0113
    private String nickname;

    private String profile;
}
