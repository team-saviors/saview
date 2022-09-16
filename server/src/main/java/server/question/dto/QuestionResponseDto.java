package server.question.dto;

import lombok.Getter;
import lombok.Setter;
import server.answer.dto.AnswerResponseDto;
import server.response.MultiResponseDto;
import server.user.dto.UserProfileResponseDto;

import java.util.List;

@Getter
@Setter
public class QuestionResponseDto {
    private Long questionId;
    private String content;
    private String mainCategory;
    private String subCategory;
    private int views;
    private UserProfileResponseDto user;
    private List<AnswerResponseDto> answers;
}
