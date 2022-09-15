package server.user.mapper;

import org.mapstruct.Mapper;
import server.user.dto.UserPostDto;
import server.user.dto.UserPutDto;
import server.user.dto.UserResponseDto;
import server.user.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userPostDtoToUser(UserPostDto userPostDto);

    User userPutDtoToUser(UserPutDto userPutDto);
    UserResponseDto userToUserResponseDto(User user);
}
