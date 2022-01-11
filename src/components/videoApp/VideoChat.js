import { useState, useEffect } from "react";
import { channelName } from "../../lib/constants";
import {
  agoraConfig,
  useClient,
  useMicrophoneAndCameraTracks,
} from "../../lib/agora";

import { updateUsersCount } from "../../lib/firebase";

import { UserStream } from "./UserStream";
import { ParticipantsStreams } from "./ParticipantsStreams";

export function VideoChat() {
  const [users, setUsers] = useState([]);
  const [participantsStreamReady, setParticipantsStreamReady] = useState(false);
  const client = useClient();
  const { ready, tracks } = useMicrophoneAndCameraTracks();

  useEffect(() => {
    let init = async () => {
      client.on("user-published", async (user, mediaType) => {
        // subscribe client to the currently published 'stream'
        await client.subscribe(user, mediaType);
        if (mediaType === "video") {
          setUsers((prevUsers) => [...prevUsers, user]);
        }
        if (mediaType === "audio" && user.audioTrack) {
          user.audioTrack.play();
        }
      });

      client.on("user-unpublished", (user, mediaType) => {
        if (mediaType === "video") {
          setUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
        }
        if (mediaType === "audio" && user.audioTrack) {
          user.audioTrack.stop();
        }
      });

      client.on("user-left", (user) => {
        setUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
        updateUsersCount(-1);
      });

      try {
        await client.join(
          agoraConfig.appID,
          channelName,
          agoraConfig.appToken,
          null
        );
      } catch (e) {
        console.debug(e);
      }

      if (tracks) {
        await client.publish(tracks);
      }
      setParticipantsStreamReady(true);
    };
    if (ready && tracks) {
      try {
        init();
      } catch (err) {
        console.debug(err);
      }
    }
  }, [client, ready, tracks]);

  const renderUserStream = () => {
    if (ready && tracks) {
      return <UserStream tracks={tracks} />;
    }
    return null;
  };

  const renderParticipantsStreams = () => {
    if (participantsStreamReady && tracks) {
      return <ParticipantsStreams users={users} />;
    }
    return null;
  };

  const getUsersCount = () => {
    updateUsersCount(users.length);
  };

  useEffect(getUsersCount, [users]);

  return (
    <div style={{ padding: "0 8px", gridColumn: "auto / span 2" }}>
      <h3>Participants - {users.length}</h3>
      {renderUserStream()}
      {renderParticipantsStreams()}
    </div>
  );
}
