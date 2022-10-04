package server.user.dto;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UserResponseDto {

    private String email;
    private String nickname;
    private String profile;
    private String status;
    private int score;
    private int level;
    private String badgeImg;
}
