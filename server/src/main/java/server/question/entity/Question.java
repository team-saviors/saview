package server.question.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import server.audit.Auditable;
import server.user.entity.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Question extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false, length = 30)
    private String mainCategory;

    @Column(nullable = false, length = 30)
    private String subCategory;

    @Column(nullable = false)
    private String content;

//    @Column(nullable = false)
//    private int votes;

//    private User user;

//    private List<Answer> answers = new ArrayList<>();
}