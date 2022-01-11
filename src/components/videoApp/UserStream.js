import { AgoraVideoPlayer } from "agora-rtc-react";
import { StreamControls } from "./StreamControls";

export function UserStream({ tracks }) {
  const renderUserStream = () => {
    if (!tracks || tracks.length < 0) {
      return null;
    }

    return (
      <div style={{ position: "relative" }}>
        <p
          style={{
            bottom: "42px",
            position: "absolute",
            zIndex: "99",
            right: "32px",
            background: "rgba(0, 0, 0, .1)",
            padding: "8px",
            borderRadius: "8px",
          }}
        >
          MY Stream
        </p>
        <AgoraVideoPlayer
          videoTrack={tracks[1]}
          style={{ height: "320px", width: "100%" }}
        />
        <StreamControls tracks={tracks} />
      </div>
    );
  };
  return <>{renderUserStream()}</>;
}
