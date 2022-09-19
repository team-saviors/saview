package server.user.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class TokenResponseDto {
    private String accessToken;
    private String refreshToken;
}
