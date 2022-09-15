package server.user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.user.dto.UserPostDto;
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


}
