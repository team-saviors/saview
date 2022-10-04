package server.crawling.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Recruit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long recruitId;

    @Column
    private String category;

    @Column
    private String name;

    @Column
    private String title;

    @Column
    private String experience;

    @Column
    private String education;

    @Column
    private String location;

    @Column
    private String date;

    @Column
    private String link;

    @Builder
    public Recruit(String category, String name, String title, String experience, String education, String location, String date, String link) {
        this.category = category;
        this.name = name;
        this.title = title;
        this.experience = experience;
        this.education = education;
        this.location = location;
        this.date = date;
        this.link = link;
    }
}
