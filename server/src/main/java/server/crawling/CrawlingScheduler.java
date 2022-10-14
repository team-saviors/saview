package server.crawling;

import lombok.RequiredArgsConstructor;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import server.crawling.entity.Recruit;
import server.crawling.repository.RecruitRepository;

import java.io.IOException;
import java.util.List;

@Component
@RequiredArgsConstructor
public class CrawlingScheduler {
    private final List<String> categoryList = List.of("프론트엔드", "백엔드", "JavaScript", "React", "TypeScript", "Vue", "NodeJS", "Java", "Spring", "Express", "MySQL", "Python", "JPA");

    private final RecruitRepository recruitRepository;

    //    @Scheduled(fixedDelay = 1000 * 10)
    @Scheduled(cron = "0 0 0 * * *", zone = "Asia/Seoul")   // 매일 자정
    public void process() throws InterruptedException {
//        System.out.println("기존 구직 데이터 자동 갱신 준비중입니다..");
//        System.out.println("Preparing to automatically renew existing job search data..\n");
//        Thread.sleep(2000);
//        System.out.println("데이터베이스 정리중...");
//        System.out.println("Cleaning up database...\n");
//        Thread.sleep(3000);
        recruitRepository.deleteAll();
//        System.out.println("연결 성공!");
//        System.out.println("Successful connection!");
//        System.out.println("카테고리 관련 구직 데이터 검색을 시작합니다..\n");
//        System.out.println("Start searching for category-related job search data");
//        Thread.sleep(2000);
        for (String cate : categoryList) {
//            System.out.println("'" + cate + "'" + " 관련 검색중...");
//            System.out.println("'" + cate + "'" + " Searching for related...\n");
//            Thread.sleep(1000);
            String url = "https://www.jobkorea.co.kr/Search/?stext=";
            Connection conn = Jsoup.connect(url + cate);

            Document document;
            try {
                document = conn.get();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            saveDataList(document, cate);
//            System.out.println("\n검색 및 저장이 완료되었습니다.\n");
        }
        System.out.println("모든 카테고리 관련 구직 데이터 자동 검색이 완료되었습니다!");
    }

    private void saveDataList(Document document, String cate) {
        Elements nameElements = document.getElementsByClass("name dev_view");
        Elements titleElements = document.getElementsByClass("title dev_view");
        Elements experienceElements = document.select("p.option > span.exp");
        Elements educationElements = document.select("p.option > span.edu");
        Elements locationElements = document.getElementsByClass("loc long");
        Elements dateElements = document.select("p.option > span.date");


        for (int i = 0; i < titleElements.size(); i++) {
            Recruit recruit = Recruit.builder()
                    .category(cate)
                    .name(nameElements.get(i).text())
                    .title(titleElements.get(i).text())
                    .experience(experienceElements.get(i).text())
                    .education(educationElements.get(i).text())
                    .location(locationElements.get(i).text())
                    .date(dateElements.get(i).text())
                    .link("https://www.jobkorea.co.kr" + titleElements.get(i).attr("href"))
                    .build();
            recruitRepository.save(recruit);
        }
    }
}
