package server.answer.dto;

import lombok.Getter;
import lombok.Setter;
import server.comment.dto.CommentResponseDto;
import server.user.dto.UserProfileResponseDto;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class AnswerResponseDto {
    private long answerId;
    private String content;
    private int votes;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private UserProfileResponseDto user;
    private List<CommentResponseDto> comments;
}
