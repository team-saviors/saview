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
<<<<<<< HEAD
    private String loginId;
=======
>>>>>>> fa00bc812c85f523e7cae055eab3c99b2270fa9f
=======


>>>>>>> d2c55ae6cc67c23b854400ced21b2bf095ef0113
    private String email;
    private String nickname;
    private String profile;
//    private List<QuestionResponseDto> questions;
//    private List<AnswerResponseDto> answers;
//    private List<CommentResponseDto> comments;
}
