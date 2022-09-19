package server.exception;

import lombok.Getter;

public enum ExceptionCode {
    JWT_TOKEN_EXPIRED(401,"JWT Token EXPIRED"),
    INVALID_JWT_TOKEN(400,"INVALID JWT TOKEN"),
    REFRESH_TOKEN_MISSING(400, "Refresh token is missing"),
    USER_NOT_FOUND(404, "USER NOT FOUND");
//    REFRESH_TOKEN_EXPIRED(401, "REFRESH TOKEN EXPIRED");
    @Getter
    private final int status;

    @Getter
    private final String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
