package server.user.mapper;

import org.mapstruct.Mapper;
import server.user.dto.UserPostDto;
import server.user.dto.UserProfileResponseDto;
import server.user.dto.UserPutDto;
import server.user.dto.UserResponseDto;
import server.user.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userPostDtoToUser(UserPostDto userPostDto);
    User userPutDtoToUser(UserPutDto userPutDto);
    UserResponseDto userToUserResponseDto(User user);

    default UserProfileResponseDto userToUserProfileResponseDto(User user) {
        UserProfileResponseDto userProfileResponseDto = new UserProfileResponseDto();
        userProfileResponseDto.setUserId(user.getUserId());
        userProfileResponseDto.setProfile(user.getProfile());
        userProfileResponseDto.setNickname(user.getNickname());
        return userProfileResponseDto;
    }

}
