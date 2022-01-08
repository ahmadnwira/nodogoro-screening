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
    <div>
      <h3>Participants - {users.length}</h3>
      <div
        style={{
          display: "grid",
          gridAutoRows: "220px",
          gridTemplateColumns: "repeat(3, .33fr)",
          gap: "8px",
        }}
      >
        {renderParticipants()}
      </div>
    </div>
  );
}
