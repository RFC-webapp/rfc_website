"use client";

import { useEffect, useRef } from "react";
import Talk from "talkjs";

export default function GroupChat() {
  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let session: Talk.Session | null = null;
    let chatbox: Talk.Chatbox | null = null;

    const initChat = async () => {
      if (!chatRef.current) return;

      await Talk.ready;

      const guestId = `guest_${Math.floor(
        Math.random() * 1000000
      )}`;

      const currentUser = new Talk.User({
        id: guestId,
        name: `Guest ${guestId.slice(-4)}`,
        email: `${guestId}@gmail.com`,
        photoUrl: "https://talkjs.com/images/avatar-1.jpg",
        welcomeMessage:
          "Welcome to RFC livestream chat",
      });

      session = new Talk.Session({
        appId: "tS7Q6UBv",
        me: currentUser,
      });

      const admin = new Talk.User({
        id: "rfc-admin",
        name: "RFC Admin",
        email: "admin@rfc.com",
        photoUrl: "https://talkjs.com/images/avatar-2.jpg",
        welcomeMessage:
          "Welcome to RFC livestream service",
      });

      const conversation =
        session.getOrCreateConversation(
          "rfc-global-livestream-chat"
        );

      conversation.setParticipant(currentUser);
      conversation.setParticipant(admin);

      conversation.setAttributes({
        subject: "RFC Livestream Chat",
      });

      chatbox = session.createChatbox({
        showChatHeader: false,
      });

      chatbox.select(conversation);

      await chatbox.mount(chatRef.current);
    };

    initChat();

    return () => {
      chatbox?.destroy();
      session?.destroy();
    };
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full bg-white border border-[#E4E7EC] rounded-2xl shadow-sm overflow-hidden">
        <div className="bg-[#222357] px-5 py-4">
          <h2 className="text-white font-semibold text-base">
            RFC Live Chat
          </h2>

          <p className="text-white/70 text-sm mt-1">
            Chat with RFC Admin and others live
          </p>
        </div>

        <div
          ref={chatRef}
          className="w-full h-[500px]"
        />
      </div>
    </div>
  );
}