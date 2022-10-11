package server.user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.answer.service.AnswerService;
import server.comment.service.CommentService;
import server.user.dto.*;
import server.user.entity.User;
import server.user.mapper.UserMapper;
import server.user.service.UserService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@Validated
@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    private final AnswerService answerService;

    private final CommentService commentService;

    @PostMapping
    public ResponseEntity<Void> join(@Valid @RequestBody UserPostDto userPostDto) {
        final Long userId = userService.createUser(userMapper.userPostDtoToUser(userPostDto));
        return ResponseEntity.created(URI.create("/users/" + userId)).build();
    }

    @GetMapping("/{user-id}")
    public ResponseEntity<UserResponseDto> getUser(@Positive @PathVariable("user-id") long userId) {
        User findUser = userService.findUserById(userId);
        return ResponseEntity.ok(userMapper.userToUserResponseDto(findUser));
    }

    @PutMapping("/modify")
    public ResponseEntity<Void> putUser(@Valid @RequestBody UserPutDto userPutDto, Authentication authentication) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String email = userDetails.getUsername();

        User user = userMapper.userPutDtoToUser(userPutDto);
        userService.updateUser(email, user);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Void> deleteUser(Authentication authentication) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String email = userDetails.getUsername();

        userService.deleteUser(email);

        return ResponseEntity.noContent().build();
    }

    @PutMapping("/password")
    public ResponseEntity<Void> putPassword(@Valid @RequestBody PasswordDto passwordDto, Authentication authentication) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String email = userDetails.getUsername();
        userService.updatePassword(email, passwordDto.getCurPassword(), passwordDto.getNewPassword());
        return ResponseEntity.ok().build();
    }

    // UserInfo Page Answers
    @GetMapping("/{user-id}/user-answers")
    public ResponseEntity<UserAnswersResponseDto> UserInfoAnswers(@Positive @PathVariable("user-id") long userId, @Positive @RequestParam int page, @Positive @RequestParam int size) {
        User findUser = userService.findUserById(userId);
        return ResponseEntity.ok(userMapper.userToUserAnswersResponseDto(findUser, page, size, answerService));
    }


    // UserInfo Page Comments
    @GetMapping("/{user-id}/user-comments")
    public ResponseEntity<UserCommentsResponseDto> UserInfoComments(@Positive @PathVariable("user-id") long userId, @Positive @RequestParam int page, @Positive @RequestParam int size) {
        User findUser = userService.findUserById(userId);
        return ResponseEntity.ok(userMapper.userToUserCommentsResponseDto(findUser, page, size, commentService));
    }
}
