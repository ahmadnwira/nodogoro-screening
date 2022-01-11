import { AgoraVideoPlayer } from "agora-rtc-react";

export function ParticipantsStreams({ users }) {
  const renderParticipants = () => {
    if (users.length < 0) {
      return null;
    }
    return users.map((user) => {
      if (user.videoTrack) {
        return <AgoraVideoPlayer videoTrack={user.videoTrack} key={user.uid} />;
      }
    });
  };

  return (
    <div
      style={{
        display: "grid",
        gridAutoRows: "220px",
        gridTemplateColumns: "repeat(auto-fill, 220px)",
        gap: "8px",
      }}
    >
      {renderParticipants()}
    </div>
  );
}
