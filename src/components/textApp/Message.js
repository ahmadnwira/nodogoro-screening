export function Message({ message }) {
  return (
    <div
      style={{
        border: "1px solid",
        margin: "0 auto 16px",
        maxWidth: "88%",
        padding: "8px",
      }}
    >
      <p>username {message.data().username}</p>
      <p>message {message.data().message}</p>
    </div>
  );
}
