package server.comment.entity;

import lombok.Getter;
import lombok.Setter;
import server.answer.entity.Answer;
import server.audit.Auditable;
import server.user.entity.User;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Comment extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @Column(nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
     private Answer answer;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;
}
