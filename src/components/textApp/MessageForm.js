import { useContext, useState } from "react";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { messagesCollection } from "../../lib/firebase";

import { UsernameContext } from "../../App";

export function MessageForm() {
  const username = useContext(UsernameContext);
  const [message, setMessage] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    setMessage("");
    await addDoc(messagesCollection, {
      message: message,
      createdAt: serverTimestamp(),
      username: username,
    });
  };

  return (
    <form onSubmit={sendMessage}>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button type="submit" onClick={sendMessage} disabled={!message}>
        Send
      </button>
    </form>
  );
}
