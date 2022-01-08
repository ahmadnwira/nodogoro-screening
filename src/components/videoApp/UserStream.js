import { AgoraVideoPlayer } from "agora-rtc-react";
import { StreamControls } from "./StreamControls";

export function UserStream({ tracks }) {
  const renderUserStream = () => {
    if (!tracks || tracks.length < 0) {
      return null;
    }

    return (
      <div>
        <h2>MY Stream</h2>
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
