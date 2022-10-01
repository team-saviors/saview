package server.answer.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Vote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long voteId;

    @Column(nullable = false)
    private long answerId;

    @Column(nullable = false)
    private long userId;

    @Builder
    public Vote(long answerId, long userId) {
        this.answerId = answerId;
        this.userId = userId;
    }
}
