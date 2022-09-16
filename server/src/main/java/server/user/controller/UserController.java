package server.user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.user.dto.UserPostDto;
import server.user.dto.UserPutDto;

import server.user.entity.User;
import server.user.mapper.UserMapper;
import server.user.service.UserService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

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
        User findUser = userService.findUser(userId);
        return new ResponseEntity<>(userMapper.userToUserResponseDto(findUser), HttpStatus.OK);
    }

    @PutMapping("/modify")
    public ResponseEntity putUser(@Valid @RequestBody UserPutDto userPutDto) throws Exception {
        User user = userMapper.userPutDtoToUser(userPutDto);
        // TODO: 토큰 userId 이용
        user.setUserId(1L);
        userService.updateUser(user);
        return new ResponseEntity("회원 정보 수정에 성공하였습니다.", HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity deleteUser() throws Exception {
        // TODO: 토큰 userId 이용
        long userId = 1L;
        userService.deleteUser(userId);
        return new ResponseEntity("회원 탈퇴에 성공하였습니다.", HttpStatus.OK);
    } 
}
