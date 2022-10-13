package server.crawling.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import server.crawling.dto.RecruitResponseDto;
import server.crawling.service.RecruitService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class RecruitController {
    private final RecruitService recruitService;

    @GetMapping("/recruits")
    public ResponseEntity<List<RecruitResponseDto>> getRecruitsByCategory(@RequestParam String category) {
        final List<RecruitResponseDto> response = recruitService.findAllByCategory(category);
        return ResponseEntity.ok(response);
    }

}
