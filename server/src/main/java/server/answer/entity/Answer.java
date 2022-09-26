package server.answer.entity;

import lombok.Getter;
import lombok.Setter;
import server.audit.Auditable;
import server.comment.entity.Comment;
import server.question.entity.Question;
import server.user.entity.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "answer",cascade = CascadeType.REMOVE)
    private List<Comment> comments = new ArrayList<>();
}
