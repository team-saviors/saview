//package server.crawling;
//
//import org.assertj.core.api.Assertions;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.DisplayName;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import server.crawling.dto.RecruitDto;
//import server.crawling.repository.RecruitRepository;
//import server.crawling.service.RecruitService;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@SpringBootTest
//public class RecruitServiceTest {
//
//    @Autowired
//    private RecruitService recruitService;
//    @Autowired
//    private RecruitRepository recruitRepository;
//
//    @BeforeEach
//    public void clear() {
//        recruitRepository.deleteAll();
//    }
//    @Test
//    @DisplayName("대용량 StreamAll 시간 측정")
//    void testSteamAll() {
//        List<RecruitDto.Create> creates = new ArrayList<>();
//
//        for (int i = 0; i < 100000; i++) {
//            creates.add(RecruitDto.Create.builder().name(String.valueOf(i)).title(String.valueOf(i)).link(String.valueOf(i)).build());
//        }
//
//        recruitService.save(creates);
//
//        List<RecruitDto.Response> response = recruitService.streamAll();
//        Assertions.assertThat(response.size()).isEqualTo(100000);
//    }
//    @Test
//    @DisplayName("대용량 findAll 시간 측정")
//    void testFindAll() {
//        List<RecruitDto.Create> creates2 = new ArrayList<>();
//
//        for (int i = 0; i < 100000; i++) {
//            creates2.add(RecruitDto.Create.builder().name(String.valueOf(i)).title(String.valueOf(i)).link(String.valueOf(i)).build());
//        }
//
//        recruitService.save(creates2);
//
//        List<RecruitDto.Response> response2 = recruitService.findAll();
//        Assertions.assertThat(response2.size()).isEqualTo(100000);
//    }
//}
