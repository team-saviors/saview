package server.user.mapper;

import org.mapstruct.Mapper;
import server.answer.service.AnswerService;
import server.comment.service.CommentService;
import server.user.dto.*;
import server.user.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userPostDtoToUser(UserPostDto userPostDto);
    User userPutDtoToUser(UserPutDto userPutDto);
    default UserResponseDto userToUserResponseDto(User user) {

        UserResponseDto userResponseDto = new UserResponseDto();

        userResponseDto.setEmail(user.getEmail());
        userResponseDto.setNickname(user.getNickname());
        userResponseDto.setProfile(user.getProfile());
        userResponseDto.setStatus(user.getUserStatus().getStatus());

        return userResponseDto;
    }

    default UserProfileResponseDto userToUserProfileResponseDto(User user) {
        UserProfileResponseDto userProfileResponseDto = new UserProfileResponseDto();
        userProfileResponseDto.setUserId(user.getUserId());
        userProfileResponseDto.setProfile(user.getProfile());
        userProfileResponseDto.setNickname(user.getNickname());
        userProfileResponseDto.setStatus(user.getUserStatus().getStatus());
        return userProfileResponseDto;
    }

    default UserAnswersResponseDto userToUserAnswersResponseDto(User user,
                                                                int page,
                                                                int size,
                                                                AnswerService answerService) {
        UserAnswersResponseDto userAnswersResponseDto = new UserAnswersResponseDto();
        userAnswersResponseDto.setMyPosts(answerService.userInfoAnswers(user, page, size));
        return userAnswersResponseDto;
    }

    default UserCommentsResponseDto userToUserCommentsResponseDto(User user,
                                                                int page,
                                                                int size,
                                                                CommentService commentService) {
        UserCommentsResponseDto userCommentsResponseDto = new UserCommentsResponseDto();
        userCommentsResponseDto.setMyPosts(commentService.userInfoComments(user, page, size));
        return userCommentsResponseDto;
    }

}
