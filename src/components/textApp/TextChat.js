import { MessageForm } from "./MessageForm";
import { MessagesList } from "./MessagesList";

export function TextChat() {
  const renderMessages = () => {
    return <MessagesList />;
  };

  const renderMessageForm = () => {
    return <MessageForm />;
  };

  return (
    <div style={{ padding: "0 8px" }}>
      <h1>Chat</h1>
      {renderMessages()} {renderMessageForm()}
    </div>
  );
}
