import { useState } from "react";

export function StreamControls({ tracks }) {
  const [trackState, setTrackState] = useState({ video: true, audio: true });
  const toggleTrackState = async (mediaType) => {
    if (mediaType === "audio") {
      await tracks[0].setEnabled(!trackState[mediaType]);
    }
    if (mediaType === "video") {
      await tracks[1].setEnabled(!trackState[mediaType]);
    }
    setTrackState((prevState) => ({
      ...prevState,
      [mediaType]: !prevState[mediaType],
    }));
  };

  return (
    <div style={{ display: "flex", padding: "8px", justifyContent: "center" }}>
      <button
        style={{ margin: "0 8px" }}
        onClick={() => toggleTrackState("audio")}
      >
        {trackState.audio ? "Mute" : "Unmute"}
      </button>
      <button onClick={() => toggleTrackState("video")}>
        {trackState.video ? "Disable" : "Enable"}
      </button>
    </div>
  );
}
