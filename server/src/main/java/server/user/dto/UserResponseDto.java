package server.user.dto;

import lombok.Getter;
import lombok.Setter;
import server.answer.dto.AnswerResponseDto;
import server.comment.dto.CommentResponseDto;
import server.question.dto.QuestionResponseDto;
import server.response.MultiResponseDto;

import java.util.List;

@Getter
@Setter
public class UserResponseDto {

<<<<<<< HEAD
    private String loginId;
=======
>>>>>>> fa00bc812c85f523e7cae055eab3c99b2270fa9f
    private String email;
    private String nickname;
    private String profile;
//    private List<QuestionResponseDto> questions;
//    private List<AnswerResponseDto> answers;
//    private List<CommentResponseDto> comments;
}
