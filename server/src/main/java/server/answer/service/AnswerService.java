package server.answer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import server.answer.dto.AnswerResponseDto;
import server.answer.dto.AnswerUserResponseDto;
import server.answer.entity.Answer;
import server.answer.mapper.AnswerMapper;
import server.answer.repository.AnswerRepository;
import server.comment.service.CommentService;
import server.exception.BusinessLogicException;
import server.exception.ExceptionCode;
import server.question.entity.Question;
import server.response.MultiResponseDto;
import server.user.entity.User;
import server.user.mapper.UserMapper;

import java.util.List;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final AnswerMapper answerMapper;

    public Long createdAnswer(Answer answer) {
        return answerRepository.save(answer).getAnswerId();
    }

    public void updateAnswer(Answer answer)  {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        findAnswer.setContent(answer.getContent());
        answerRepository.save(findAnswer);
    }

    public void updateVotes(long answerId, int votes) {
        answerRepository.updateVotes(votes, answerId);
    }

    public void deleteAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        answerRepository.delete(findAnswer);
    }

    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> answer = answerRepository.findById(answerId);
        return answer.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
    }

    public MultiResponseDto<AnswerResponseDto> findAnswers(Question question,
                                                           UserMapper userMapper,
                                                           CommentService commentService,
                                                           int page, int size) {
        Page<Answer> pageAnswers = answerRepository.findAllByQuestion(question, PageRequest.of(page - 1, size));
        List<Answer> answers = pageAnswers.getContent();
        return new MultiResponseDto<>(answerMapper.AnswersToAnswersResponseDtos(answers, userMapper, commentService), pageAnswers);

    }

    public MultiResponseDto<AnswerUserResponseDto> userInfoAnswers(User user,
                                                                   int page, int size) {
        Page<Answer> pageAnswers = answerRepository.findAllByUser(user, PageRequest.of(page - 1, size));
        List<Answer> answers = pageAnswers.getContent();
        return new MultiResponseDto<>(answerMapper.answersToAnswerUserResponseDtos(answers), pageAnswers);
    }


}
