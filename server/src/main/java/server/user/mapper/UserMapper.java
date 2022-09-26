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
    UserResponseDto userToUserResponseDto(User user);

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
        userAnswersResponseDto.setAnswers(answerService.userInfoAnswers(user, page, size));
        return userAnswersResponseDto;
    }

    default UserCommentsResponseDto userToUserCommentsResponseDto(User user,
                                                                int page,
                                                                int size,
                                                                CommentService commentService) {
        UserCommentsResponseDto userCommentsResponseDto = new UserCommentsResponseDto();
        userCommentsResponseDto.setComments(commentService.userInfoComments(user, page, size));
        return userCommentsResponseDto;
    }

}
