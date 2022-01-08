import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
import { agoraAppID, agoraAppToken } from "./constants";

export const agoraConfig = {
  mode: "rtc",
  codec: "vp8",
  appID: agoraAppID,
  appToken: agoraAppToken,
};

export const useClient = createClient(agoraConfig);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
