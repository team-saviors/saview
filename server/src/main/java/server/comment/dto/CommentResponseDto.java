package server.comment.dto;


import lombok.Getter;
import lombok.Setter;
import server.user.dto.UserProfileResponseDto;

import java.time.LocalDateTime;

@Getter
@Setter
public class CommentResponseDto {
    private long commentId;
    private UserProfileResponseDto user;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private String content;
}
