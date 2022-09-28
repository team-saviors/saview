package server.question.mapper;

import org.mapstruct.Mapper;
import server.answer.service.AnswerService;
import server.comment.service.CommentService;
import server.question.dto.QuestionPostPutDto;
import server.question.dto.QuestionResponseDto;
import server.question.dto.QuestionsResponseDto;
import server.question.entity.Question;
import server.user.mapper.UserMapper;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostPutDtoToQuestion(QuestionPostPutDto questionPostPutDto);


    default QuestionsResponseDto questionToQuestionsResponseDto(Question question,
                                                                  UserMapper userMapper) {
        if ( question == null ) {
            return null;
        }
        QuestionsResponseDto questionsResponseDto = new QuestionsResponseDto();

        questionsResponseDto.setQuestionId(question.getQuestionId());
        questionsResponseDto.setContent(question.getContent());
        questionsResponseDto.setMainCategory(question.getMainCategory());
        questionsResponseDto.setSubCategory(question.getSubCategory());
        questionsResponseDto.setViews(question.getViews());
        questionsResponseDto.setAnswerNum(question.getAnswers().size());
        questionsResponseDto.setUser(userMapper.userToUserProfileResponseDto(question.getUser()));
        questionsResponseDto.setCreatedAt(question.getCreatedAt());
        questionsResponseDto.setModifiedAt(question.getModifiedAt());

        return questionsResponseDto;
    }

    default List<QuestionsResponseDto> questionsToQuestionsResponseDtos(List<Question> questions,
                                                                        UserMapper userMapper) {
        if (questions == null) {
            return null;
        } else {
            List<QuestionsResponseDto> list = new ArrayList(questions.size());
            Iterator var3 = questions.iterator();

            while(var3.hasNext()) {
                Question question = (Question)var3.next();
                list.add(this.questionToQuestionsResponseDto(question, userMapper));
            }

            return list;
        }
    }

    // 1개의 Question 반환을 위한 mapper
    default QuestionResponseDto questionToQuestionResponseDto(Question question,
                                                              UserMapper userMapper,
                                                              AnswerService answerService,
                                                              CommentService commentService,
                                                              int page, int size, String sort) {
        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setContent(question.getContent());
        questionResponseDto.setViews(question.getViews());
        questionResponseDto.setMainCategory(question.getMainCategory());
        questionResponseDto.setSubCategory(question.getSubCategory());
        questionResponseDto.setUser(userMapper.userToUserProfileResponseDto(question.getUser()));
        questionResponseDto.setAnswers(answerService.findAnswers(question, userMapper, commentService, page, size, sort));

        return questionResponseDto;
    }
}
