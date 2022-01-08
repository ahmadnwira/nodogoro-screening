import { useState, useEffect } from "react";
import { onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { messagesPerPage } from "../../lib/constants";
import { messagesCollection } from "../../lib/firebase";

import { Message } from "./Message";

export function MessagesList() {
  const [messages, setMessages] = useState([]);
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

  if (messages.length <= 0) {
    return null;
  }
  return (
    <div style={{ maxHeight: "320px", overflowY: "scroll" }}>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}
