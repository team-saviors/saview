package server.user.controller;

import com.google.gson.Gson;
import com.jayway.jsonpath.JsonPath;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;
import server.answer.service.AnswerService;
import server.comment.service.CommentService;
import server.response.AnswerCommentUserResponseDto;
import server.response.MultiResponseDto;
import server.user.dto.*;
import server.user.entity.Badge;
import server.user.entity.User;
import server.user.mapper.UserMapper;
import server.user.service.UserService;

import java.net.URI;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private Gson gson;
    @MockBean
    private UserService userService;
    @MockBean
    private UserMapper userMapper;
    @MockBean
    private AnswerService answerService;
    @MockBean
    private CommentService commentService;

    @Test
    void join() throws Exception {
        UserPostDto userPostDto = UserPostDto.builder()
                .email("test@gmail.com")
                .nickname("testing")
                .password("test1234!").build();
        given(userMapper.userPostDtoToUser(Mockito.any(UserPostDto.class))).willReturn(new User());
        given(userService.createUser(Mockito.any(User.class))).willReturn(new User());
        given(userService.createBadge(Mockito.any(User.class))).willReturn(Badge.builder().build());

        String content = gson.toJson(userPostDto);

        ResultActions actions =
                mockMvc.perform(
                        MockMvcRequestBuilders
                                .post("/users")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                );

        actions
                .andExpect(status().isCreated());

    }

    @Test
    void getUser() throws Exception {
        long userId = 1L;
        User user = new User();
        Badge badge = Badge.builder().score(0).level(1).badgeImg("level1 img").build();
        user.setUserId(userId);
        user.setEmail("test@gamail.com");
        user.setNickname("testing");
        user.setProfile("default img");
        user.setUserStatus(User.UserStatus.USER_ACTIVE);
        user.setBadge(badge);

        UserResponseDto userResponseDto = new UserResponseDto();
        userResponseDto.setEmail("test@gamail.com");
        userResponseDto.setNickname("testing");
        userResponseDto.setProfile("default img");
        userResponseDto.setStatus(user.getUserStatus().getStatus());
        userResponseDto.setScore(user.getBadge().getScore());
        userResponseDto.setLevel(user.getBadge().getLevel());
        userResponseDto.setBadgeImg(user.getBadge().getBadgeImg());

        given(userService.findUserById(Mockito.anyLong())).willReturn(new User());
        given(userMapper.userToUserResponseDto(Mockito.any(User.class))).willReturn(userResponseDto);

        URI uri = UriComponentsBuilder.newInstance().path("/users/{userId}").buildAndExpand(userId).toUri();

        ResultActions actions = mockMvc.perform(
                MockMvcRequestBuilders
                        .get(uri)
                        .accept(MediaType.APPLICATION_JSON));

        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value(user.getEmail()))
                .andExpect(jsonPath("$.nickname").value(user.getNickname()))
                .andExpect(jsonPath("$.profile").value(user.getProfile()));
    }

    @Test
    @WithMockUser
    void putUser() throws Exception {
        UserPutDto userPutDto = new UserPutDto();
        userPutDto.setNickname("수정닉");
        userPutDto.setProfile("modified profile");


        given(userMapper.userPutDtoToUser(Mockito.any(UserPutDto.class))).willReturn(new User());

        String content = gson.toJson(userPutDto);

        URI uri = UriComponentsBuilder.newInstance().path("/users/modify").build().toUri();

        ResultActions actions =
                mockMvc.perform(
                        MockMvcRequestBuilders
                                .put(uri)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                );

        actions.andExpect(status().isOk());

    }

    @Test
    @WithMockUser
    void deleteUser() throws Exception {
        URI uri = UriComponentsBuilder.newInstance().path("/users/delete").build().toUri();

        ResultActions actions =
                mockMvc.perform(
                        MockMvcRequestBuilders
                                .delete(uri)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                );

        actions.andExpect(status().isNoContent());
    }

    @Test
    @WithMockUser
    void putPassword() throws Exception {
        PasswordDto passwordDto = PasswordDto.builder().curPassword("test1234!").newPassword("test12345!").build();

        String content = gson.toJson(passwordDto);

        URI uri = UriComponentsBuilder.newInstance().path("/users/password").build().toUri();


        ResultActions actions =
                mockMvc.perform(
                        MockMvcRequestBuilders
                                .put(uri)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                );

        actions.andExpect(status().isOk());
    }

    @Test
    void userInfoAnswers() throws Exception {
        long userId1 = 1L;
        User user1 = new User();
        Badge badge = Badge.builder().score(0).level(1).badgeImg("level1 img").build();
        user1.setUserId(userId1);
        user1.setEmail("test1@gamail.com");
        user1.setNickname("testing1");
        user1.setProfile("default img");
        user1.setUserStatus(User.UserStatus.USER_ACTIVE);
        user1.setBadge(badge);

        UserAnswersResponseDto userAnswersResponseDto = new UserAnswersResponseDto();
        AnswerCommentUserResponseDto answerCommentUserResponseDto1 = new AnswerCommentUserResponseDto();
        AnswerCommentUserResponseDto answerCommentUserResponseDto2 = new AnswerCommentUserResponseDto();

        Page<AnswerCommentUserResponseDto> answerCommentUserResponsesDto =
                new PageImpl<>(List.of(answerCommentUserResponseDto1, answerCommentUserResponseDto2),
                        PageRequest.of(0, 10, Sort.by("userId").descending()),2);

        userAnswersResponseDto.setMyPosts(new MultiResponseDto<>(List.of(answerCommentUserResponseDto1, answerCommentUserResponseDto2), answerCommentUserResponsesDto));

        given(userService.findUserById(Mockito.anyLong())).willReturn(user1);
        given(userMapper.userToUserAnswersResponseDto(Mockito.any(User.class), Mockito.anyInt(), Mockito.anyInt(), Mockito.any(answerService.getClass()))).willReturn(userAnswersResponseDto);

        String page = "1";
        String size = "10";
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("page", page);
        queryParams.add("size", size);

        URI uri = UriComponentsBuilder.newInstance().path("/users/{user-id}/user-answers").buildAndExpand(userId1).toUri();

        ResultActions actions = mockMvc.perform(
                MockMvcRequestBuilders
                        .get(uri)
                        .params(queryParams)
                        .accept(MediaType.APPLICATION_JSON));

        MvcResult result = actions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.myPosts.data").isArray())
                .andReturn();

        List<AnswerCommentUserResponseDto> list = JsonPath.parse(result.getResponse().getContentAsString()).read("$.myPosts.data");

        assertThat(list.size(), is(2));
    }

    @Test
    void userInfoComments() throws Exception {
        long userId1 = 1L;
        User user1 = new User();
        Badge badge = Badge.builder().score(0).level(1).badgeImg("level1 img").build();
        user1.setUserId(userId1);
        user1.setEmail("test1@gamail.com");
        user1.setNickname("testing1");
        user1.setProfile("default img");
        user1.setUserStatus(User.UserStatus.USER_ACTIVE);
        user1.setBadge(badge);

        UserCommentsResponseDto userCommentsResponseDto = new UserCommentsResponseDto();
        AnswerCommentUserResponseDto answerCommentUserResponseDto1 = new AnswerCommentUserResponseDto();
        AnswerCommentUserResponseDto answerCommentUserResponseDto2 = new AnswerCommentUserResponseDto();

        Page<AnswerCommentUserResponseDto> answerCommentUserResponsesDto =
                new PageImpl<>(List.of(answerCommentUserResponseDto1, answerCommentUserResponseDto2),
                        PageRequest.of(0, 10, Sort.by("userId").descending()),2);

        userCommentsResponseDto.setMyPosts(new MultiResponseDto<>(List.of(answerCommentUserResponseDto1, answerCommentUserResponseDto2), answerCommentUserResponsesDto));

        given(userService.findUserById(Mockito.anyLong())).willReturn(user1);
        given(userMapper.userToUserCommentsResponseDto(Mockito.any(User.class), Mockito.anyInt(), Mockito.anyInt(), Mockito.any(commentService.getClass()))).willReturn(userCommentsResponseDto);

        String page = "1";
        String size = "10";
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("page", page);
        queryParams.add("size", size);

        URI uri = UriComponentsBuilder.newInstance().path("/users/{user-id}/user-comments").buildAndExpand(userId1).toUri();

        ResultActions actions = mockMvc.perform(
                MockMvcRequestBuilders
                        .get(uri)
                        .params(queryParams)
                        .accept(MediaType.APPLICATION_JSON));

        MvcResult result = actions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.myPosts.data").isArray())
                .andReturn();

        List<AnswerCommentUserResponseDto> list = JsonPath.parse(result.getResponse().getContentAsString()).read("$.myPosts.data");

        assertThat(list.size(), is(2));
    }
}