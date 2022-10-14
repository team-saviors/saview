package server.crawling.mapper;

import org.mapstruct.Mapper;
import server.crawling.dto.RecruitResponseDto;
import server.crawling.entity.Recruit;

import java.util.List;

@Mapper(componentModel = "spring")
public interface RecruitMapper {
    List<RecruitResponseDto> recruitsToRecruitResponsesDto(List<Recruit> recruits);
}
