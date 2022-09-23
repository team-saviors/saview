package server.user.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class UserResponseDto {

    private String email;
    private String nickname;
    private String profile;
    private String status;
//    private List<QuestionResponseDto> questions;
//    private List<AnswerResponseDto> answers;
//    private List<CommentResponseDto> comments;
}
