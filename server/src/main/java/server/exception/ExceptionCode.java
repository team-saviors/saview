package server.exception;

import lombok.Getter;

public enum ExceptionCode {
    ACCESS_TOKEN_EXPIRED(401, "ACCESS TOKEN EXPIRED"),
    REFRESH_TOKEN_EXPIRED(401, "REFRESH TOKEN EXPIRED"),
    INVALID_REFRESH_TOKEN(400, "INVALID REFRESH TOKEN"),
    REFRESH_TOKEN_MISSING(400, "REFRESH TOKEN IS MISSING"),
    USER_NOT_FOUND(404, "없는 유저입니다."),
    QUIT_USER(404, "탈퇴한 유저입니다."),
    DUPLICATE_EMAIL(400, "중복된 이메일입니다."),
    DUPLICATE_NICKNAME(400, "중복된 닉네임입니다."),
    QUESTION_NOT_FOUND(404, "QUESTION NOT FOUND"),
    ANSWER_NOT_FOUND(404, "ANSWER NOT FOUND"),
    COMMENT_NOT_FOUND(404, "COMMENT NOT FOUND"),
    INVALID_SORT_PARAMETER(400, "INVALID SORT PARAMETER"),
    DUPLICATE_VOTE(400, "DUPLICATE VOTE"),
    UNAUTHORIZED_USER(401, "유효하지 않은 유저정보입니다.");


    @Getter
    private final int status;

    @Getter
    private final String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
