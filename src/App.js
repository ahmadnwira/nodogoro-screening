import { useState, createContext, useEffect } from "react";
import { VideoChat } from "./components/videoApp/VideoChat";
import { TextChat } from "./components/textApp/TextChat";
import { getUsersCount } from "./lib/firebase";

export const UsernameContext = createContext();

function App() {
  const [inCall, setInCall] = useState(false);
  const [name, setName] = useState("");
  const [channelIsFull, setChannelIsFull] = useState(false);
  const [checkingCapacity, setCheckingCapacity] = useState(true);

  useEffect(() => {
    getUsersCount()
      .then((count) => {
        setChannelIsFull(count >= 3);
        setCheckingCapacity(false);
      })
      .catch((err) => console.debug(err));
  }, []);

  const renderApp = () => {
    if (checkingCapacity) {
      return <p>Checking capacity...</p>;
    }
    if (channelIsFull) {
      return <p>Channel is full</p>;
    }

    if (inCall) {
      return (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
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
