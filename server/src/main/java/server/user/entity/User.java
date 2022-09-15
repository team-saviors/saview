package server.user.entity;

import lombok.Data;
import server.audit.Auditable;

import javax.persistence.*;

@Entity
@Data
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
}
