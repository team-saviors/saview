package server.user.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Badge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long badgeId;

    @Column(nullable = false)
    private int score = 0;

    @Column(nullable = false)
    private int level = 1;

    @Column(nullable = false)
    private String badgeImg = "level img";

    @OneToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @Builder
    public Badge(int score, int level, String badgeImg,User user) {
        this.score = score;
        this.level = level;
        this.badgeImg = badgeImg;
        this.user = user;
    }
}
