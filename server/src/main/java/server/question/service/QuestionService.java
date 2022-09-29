package server.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import server.exception.BusinessLogicException;
import server.exception.ExceptionCode;
import server.question.entity.Question;
import server.question.repository.QuestionRepository;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class QuestionService {

    private final QuestionRepository questionRepository;

    public Long createdQuestion(Question question) {
        return questionRepository.save(question).getQuestionId();
    }

    public Question findQuestion(long questionId) {
        return findVerifiedQuestion(questionId);
    }

    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
    }

    public void updateQuestion(Question question) {
        Question updateQuestion = findVerifiedQuestion(question.getQuestionId());
        updateQuestion.setContent(question.getContent());
        updateQuestion.setMainCategory(question.getMainCategory());
        updateQuestion.setSubCategory(question.getSubCategory());
        questionRepository.save(updateQuestion);
    }

    public void deleteQuestion(long questionId) {
        Question question = findVerifiedQuestion(questionId);
        questionRepository.delete(question);
    }

    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> question = questionRepository.findById(questionId);
        return question.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
    }

    public void updateViews(long questionId, int views) {
        questionRepository.updateViews(views, questionId);
    }

    public Page<Question> findQuestionsByCategory(String mainCategory, String subCategory, int page, int size) {

        Sort sort = Sort.by("questionId").descending();
        PageRequest pageRequest = PageRequest.of(page, size, sort);

        if (mainCategory.equals("all")) {
            return questionRepository.findAll(pageRequest);
        } else if (subCategory == null) {
            return questionRepository.findAllByMainCategory(mainCategory, pageRequest);
        } else {
            return questionRepository.findAllByMainCategoryAndSubCategory(mainCategory, subCategory, pageRequest);
        }
    }

    public Page<Question> search(String keyword, int page, int size) {

        Page<Question> questionList = questionRepository.findByContentContaining(keyword,
                PageRequest.of(page, size, Sort.by("createdAt").descending()));

        return questionList;
    }
}
