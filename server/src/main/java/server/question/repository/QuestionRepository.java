package server.question.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import server.question.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    @Modifying
    @Query("update Question q set q.views = :views where q.questionId = :questionId")
    int updateViews(@Param("views") int views, @Param("questionId") long questionId);
    Page<Question> findAllByMainCategory(String mainCategory, Pageable pageable);
    Page<Question> findAllByMainCategoryAndSubCategory(String mainCategory, String subCategory, Pageable pageable);

    Page<Question> findByContentContaining(String keyword, Pageable pageable);
}
