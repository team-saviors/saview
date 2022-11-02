package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.chat.model.ChatRoom;

public interface ChatRoomRepository extends JpaRepository<ChatRoom, Long> {
}
