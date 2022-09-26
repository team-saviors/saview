package server.exception;

import lombok.Getter;

public enum ExceptionCode {
    ACCESS_TOKEN_EXPIRED(401, "ACCESS TOKEN EXPIRED"),
    REFRESH_TOKEN_EXPIRED(401, "REFRESH TOKEN EXPIRED"),
    INVALID_REFRESH_TOKEN(400, "INVALID REFRESH TOKEN"),
    REFRESH_TOKEN_MISSING(400, "REFRESH TOKEN IS MISSING"),
    USER_NOT_FOUND(404, "USER NOT FOUND"),
    QUIT_USER(404, "QUIT USER"),
    DUPLICATE_EMAIL(400, "DUPLICATE EMAIL"),
    DUPLICATE_NICKNAME(400, "DUPLICATE NICKNAME"),
    QUESTION_NOT_FOUND(404, "QUESTION NOT FOUND"),
    ANSWER_NOT_FOUND(404,"ANSWER NOT FOUND"),
    COMMENT_NOT_FOUND(404,"COMMENT NOT FOUND");
    @Getter
    private final int status;

    @Getter
    private final String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
