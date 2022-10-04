package server.email.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import server.email.dto.EmailPostDto;
import server.email.entity.EmailMessage;
import server.email.service.EmailService;

@RestController
@RequiredArgsConstructor
public class EmailController {

    private final EmailService emailService;

    @PostMapping("/find-password")
    public ResponseEntity sendMail(@RequestBody EmailPostDto emailPostDto) {

        EmailMessage emailMessage = EmailMessage.builder()
                .to(emailPostDto.getEmail())
                .subject("[Saview] 임시 비밀번호 발급드립니다.")
                .message("비밀번호 분실로 인한 임시 비밀번호 발급드립니다.")
                .build();
        emailService.sendMail(emailMessage);

        return ResponseEntity.ok().build();
    }
}
