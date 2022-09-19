package server.user.entity;

import lombok.Getter;
import lombok.Setter;
import server.answer.entity.Answer;

import server.audit.Auditable;
import server.comment.entity.Comment;
import server.question.entity.Question;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "USER_TABLE")
public class User extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

<<<<<<< HEAD
    @Column(nullable = false, unique = true, length = 20)
    private String loginId;

    @Column(nullable = false, length = 20)
=======
    @Column(nullable = false)
>>>>>>> fa00bc812c85f523e7cae055eab3c99b2270fa9f
    private String password;

    @Column(nullable = false, unique = true, length = 50)
    private String email;

    @Column(nullable = false, length = 10)
    private String nickname;

    private String profile;

    private String role;

    @OneToMany(mappedBy = "user")
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Comment> comments = new ArrayList<>();

}
