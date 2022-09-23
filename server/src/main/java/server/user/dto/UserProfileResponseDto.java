package server.user.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserProfileResponseDto {
    private long userId;
    private String nickname;
    private String profile;
    private String status;
}
