package server.crawling.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.crawling.dto.RecruitDto;
import server.crawling.entity.Recruit;
import server.crawling.repository.RecruitRepository;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class RecruitService {
    private final RecruitRepository recruitRepository;

    @Transactional(readOnly = true)
    public List<RecruitDto.Response> streamAll() {
        return recruitRepository.streamAll()
                .map(RecruitDto.Response::new)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<RecruitDto.Response> findAll() {
        List<Recruit> recruitList = recruitRepository.findAll();
        List<RecruitDto.Response> responses = new ArrayList<>();
        for (Recruit r :
                recruitList) {
            responses.add(new RecruitDto.Response(r));
        }
        return responses;
    }

    @Transactional
    public void save(Collection<RecruitDto.Create> recruits) {
        Set<Recruit> newRecruits = recruits.stream()
                .map(dto -> Recruit.builder().name(dto.getName()).title(dto.getTitle()).link(dto.getLink()).build())
                .collect(Collectors.toSet());

        recruitRepository.saveAll(newRecruits);
    }
}
