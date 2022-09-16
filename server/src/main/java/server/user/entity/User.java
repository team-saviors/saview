package server.user.entity;

import lombok.Getter;
import lombok.Setter;
import server.audit.Auditable;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "USER_TABLE")
public class User extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, unique = true, length = 20)
    private String loginId;

    @Column(nullable = false, length = 20)
    private String password;

    @Column(nullable = false, unique = true, length = 50)
    private String email;

    @Column(nullable = false, length = 10)
    private String nickname;

    private String profile;

    private String role;

    //    private List<Question> questions = new ArrayList<>();
    //    private List<Answer> answers = new ArrayList<>();
    //    private List<Comment> comments = new ArrayList<>();

}
