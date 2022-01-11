export function Message({ message }) {
  return (
    <div
      style={{
        margin: "0 0px 16px",
        maxWidth: "88%",
        padding: "8px",
        background: "#0c1524",
        borderRadius: "8px",
      }}
    >
      <p>message {message.data().message}</p>
      <span style={{color: 'dimgray'}}>From {message.data().username}</span>
    </div>
  );
}
