"use client";

import { useEffect } from "react";
import Talk from "talkjs";
import "@talkjs/react-components/default.css";

export default function GroupChat() {
  useEffect(() => {
    const initTalkJS = async () => {
      await Talk.ready;

      // Generate a random guest user
      const guestUserId = `guest_${Math.floor(Math.random() * 100000)}`;
      const guest = new Talk.User({
        id: guestUserId,
        name: `Guest`,
        email: `${guestUserId}@example.com`,
        photoUrl: "https://randomuser.me/api/portraits/lego/1.jpg",
      });

      // Create session
      const session = new Talk.Session({
        appId: "tS7Q6UBv",
        me: guest,
      });

      // Get or create a single group conversation for all guests
      const conversation = session.getOrCreateConversation("group-chat");
      conversation.setParticipant(guest); // every new visitor is a participant
      conversation.setAttributes({ subject: "Comments" });

      // Mount chatbox
      const chatbox = session.createChatbox();
      chatbox.select(conversation);
      chatbox.mount(document.getElementById("talkjs-container")!);

      // Hide header for simpler "comment section" look
      const chatboxEl = document.getElementById("talkjs-container")!;
      chatboxEl.querySelector(".chatbox-header")?.remove();
    };

    initTalkJS();
  }, []);

  return (
    <div
      id="talkjs-container"
      className="w-full h-[400px] md:h-[600px] rounded-lg shadow-md"
      style={{ width: "400px", height: "600px" }}
    />
  );
}
