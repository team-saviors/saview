package server.user.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@Setter
public class UserPutDto {

    @NotBlank(message = "닉네임은 반드시 입력해야합니다.")
    @Pattern(regexp = "(?=^[a-zA-Z0-9가-힣]+(\\s[a-zA-Z0-9가-힣]+)*$).{1,10}",
            message = "닉네임은 10자 이하의 영문자, 숫자, 한글을 사용하여 작성해야하며, 연속된 공백을 사용할 수 없습니다.")
    private String nickname;

    @NotBlank(message = "프로필 이미지 경로는 반드시 포함되어야합니다.")
    private String profile;
}
