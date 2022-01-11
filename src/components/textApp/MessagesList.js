import { useState, useEffect, useRef } from "react";
import { onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { messagesPerPage } from "../../lib/constants";
import { messagesCollection } from "../../lib/firebase";

import { Message } from "./Message";

export function MessagesList() {
  const [messages, setMessages] = useState([]);
  const chatBoxRef = useRef(null);
  const q = query(
    messagesCollection,
    orderBy("createdAt"),
    limit(messagesPerPage)
  );

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs);
    });
  }, []);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  if (messages.length <= 0) {
    return null;
  }
  return (
    <div style={{ maxHeight: "320px", overflowY: "scroll" }} ref={chatBoxRef}>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}
