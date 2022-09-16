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

    @Column(nullable = false)   // 암호화로인한 길이 변경으로 저장 제한 해제(사전에 유효성 검사 동작)
    private String password;

    @Column(nullable = false, unique = true, length = 50)
    private String email;

    @Column(nullable = false, length = 10)
    private String nickname;

    private String profile;

    private String role;
}
