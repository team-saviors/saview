package server.chat.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.RestController;
import server.chat.model.ChatMessage;

@RestController
@RequiredArgsConstructor
public class MessageController {

    private final SimpMessageSendingOperations sendingOperations;
    // 실질적 경로: /app/chat/message
    @MessageMapping("/chat/message")
    public void enter(ChatMessage message) {
        if (ChatMessage.MessageType.ENTER.equals(message.getType())) {
            message.setMessage(message.getSender()+"님이 입장하였습니다.");
        }
        // /topic/chat/room/roomId 를 구독하는 클라이언트에게 메세지 전송
        sendingOperations.convertAndSend("/topic/chat/room/"+message.getRoomId(), message);
    }
}
