package server.user.dto;

import lombok.Getter;
import lombok.Setter;
import server.user.entity.User;

@Getter
@Setter
public class UserProfileResponseDto {
    private long userId;
    private String nickname;
    private String profile;
}
