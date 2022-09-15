package server.user.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDto {

    private String loginId;
    private String email;
    private String nickname;
    private String profile;
}
