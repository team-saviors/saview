package server.crawling.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecruitResponseDto {

    private Long recruitId;

    private String category;

    private String name;

    private String title;

    private String experience;

    private String education;

    private String location;

    private String date;

    private String link;
}
