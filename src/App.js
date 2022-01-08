import { useState, createContext } from "react";
import { VideoChat } from "./components/videoApp/VideoChat";

function App() {
  const [inCall, setInCall] = useState(false);

  const renderApp = () => {
    if (inCall) {
      return (
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
          <VideoChat />
        </div>
      );
    }

    return (
      <>
        <button onClick={() => setInCall(true)}>JOIN CALL</button>
      </>
    );
  };
  return (
    <div style={{ margin: "0 auto", maxWidth: "800px" }}>
      <h1>Group Chat App</h1>
      {renderApp()}
    </div>
  );
}

export default App;
