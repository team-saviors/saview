package server.user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.user.dto.PasswordDto;
import server.user.dto.UserPostDto;
import server.user.dto.UserPutDto;
import server.user.entity.User;
import server.user.mapper.UserMapper;
import server.user.service.UserService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
@Validated
@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    @PostMapping
    public ResponseEntity join(@Valid @RequestBody UserPostDto userPostDto) throws Exception {
        userService.createUser(userMapper.userPostDtoToUser(userPostDto));
        return new ResponseEntity<>("회원가입에 성공하였습니다.", HttpStatus.CREATED);
    }

    @GetMapping("/{user-id}")
    public ResponseEntity getUser(@Positive @PathVariable("user-id") long userId) throws Exception {
        User findUser = userService.findUserById(userId);
        return new ResponseEntity<>(userMapper.userToUserResponseDto(findUser), HttpStatus.OK);
    }

    @PutMapping("/modify")
    public ResponseEntity putUser(@Valid @RequestBody UserPutDto userPutDto,
                                  Authentication authentication) throws Exception {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String email = userDetails.getUsername();

        User user = userMapper.userPutDtoToUser(userPutDto);
        userService.updateUser(email, user);
        return new ResponseEntity("회원 정보 수정에 성공하였습니다.", HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity deleteUser(Authentication authentication) throws Exception {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String email = userDetails.getUsername();

        userService.deleteUser(email);

        return new ResponseEntity("회원 탈퇴에 성공하였습니다.", HttpStatus.OK);
    }

    @PutMapping("/password")
    public ResponseEntity putPassword(@Valid @RequestBody PasswordDto passwordDto, Authentication authentication) throws Exception {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String email = userDetails.getUsername();

        userService.updatePassword(email, passwordDto.getNewPassword());

        return new ResponseEntity("비밀번호 변경이 완료되었습니다.", HttpStatus.OK);
    }
}
