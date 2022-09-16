package server.answer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import server.answer.entity.Answer;
import server.answer.repository.AnswerRepository;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class AnswerService {

    private final AnswerRepository answerRepository;

    public void createdAnswer(Answer answer) throws Exception {
        answerRepository.save(answer);
    }

    public void updateAnswer(Answer answer) throws Exception {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        findAnswer.setContent(answer.getContent());
        answerRepository.save(findAnswer);
    }

    public void updateVotes(long answerId, int votes) throws Exception {
        Answer findAnswer = findVerifiedAnswer(answerId);
        findAnswer.setVotes(votes);
        answerRepository.save(findAnswer);
    }

    public void deleteAnswer(long answerId) throws Exception {
        Answer findAnswer = findVerifiedAnswer(answerId);
        answerRepository.delete(findAnswer);
    }

    public Answer findVerifiedAnswer(long answerId) throws Exception {
        Optional<Answer> answer = answerRepository.findById(answerId);
        return answer.orElseThrow(Exception::new);
    }
}
