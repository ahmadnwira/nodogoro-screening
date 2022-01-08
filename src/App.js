import { useState, createContext } from "react";
import { VideoChat } from "./components/videoApp/VideoChat";
import { TextChat } from "./components/textApp/TextChat";

export const UsernameContext = createContext();

function App() {
  const [inCall, setInCall] = useState(false);
  const [name, setName] = useState("");

  const renderApp = () => {
    if (inCall) {
      return (
        <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
          <VideoChat /> <TextChat />
        </div>
      );
    }

    return (
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button onClick={() => setInCall(true)} disabled={!name}>
          JOIN CALL
        </button>
      </form>
    );
  };

  return (
    <UsernameContext.Provider value={name}>
      <div style={{ margin: "0 auto", maxWidth: "800px" }}>
        <h1>Group Chat App</h1>
        {renderApp()}
      </div>
    </UsernameContext.Provider>
  );
}

export default App;
