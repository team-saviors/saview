package server.crawling.dto;

import lombok.Builder;
import lombok.Getter;
import server.crawling.entity.Recruit;

public class RecruitDto {
    @Getter
    public static class Response {
        private final String name;
        private final String title;
        private final String link;
        public Response(Recruit entity) {
            this.name = entity.getName();
            this.title = entity.getTitle();
            this.link = entity.getLink();
        }
    }

    @Getter
    public static class Create {
        private final String name;
        private final String title;
        private final String link;

        @Builder
        public Create(String name, String title, String link) {
            this.name = name;
            this.title = title;
            this.link = link;
        }
    }

}
