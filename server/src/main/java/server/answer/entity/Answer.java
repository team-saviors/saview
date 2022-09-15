package server.answer.entity;

import lombok.Getter;
import lombok.Setter;
import server.audit.Auditable;
import server.question.entity.Question;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Answer extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private int votes;

    @Column(nullable = false)
    private int views;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;
    //    private User user;

//    private List<Comment> comments = new ArrayList<>();
}
