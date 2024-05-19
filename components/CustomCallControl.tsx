import { useCallStateHooks } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';



export const CustomCancelCallButton = () => {
    const router = useRouter();
  return (
    <button type='button' onClick={() => router.push(`/`)}>
      <span>
        end call
        </span>
    </button>
  );
};



export const CustomToggleAudioPublishingButton = () => {
  const { useMicrophoneState } = useCallStateHooks();
  const { microphone, isMute } = useMicrophoneState();
  return (
    <button onClick={() => microphone.toggle()}>
      {isMute ? (
        <span>Mic off</span>
      ) : (
        <span>Mic on</span>
      )}
    </button>
  );
};



export const CustomToggleVideoPublishingButton = () => {
  const { useCameraState } = useCallStateHooks();
  const { camera, isMute } = useCameraState();
  return (
    <button onClick={() => camera.toggle()}>
      {isMute ? (
        <span>Camera off</span>
      ) : (
        <span>Camera on</span>
      )}
    </button>
  );
};



export const CustomScreenShareButton = () => {
  const { useScreenShareState, useHasOngoingScreenShare } = useCallStateHooks();
  const { screenShare, isMute: isScreenSharing } = useScreenShareState();

  // determine, whether somebody else is sharing their screen
  const isSomeoneScreenSharing = useHasOngoingScreenShare();
  return (
    <button
      // disable the button in case I'm not the one sharing the screen
      disabled={!isScreenSharing && isSomeoneScreenSharing}
      onClick={() => screenShare.toggle()}
    >
      {isScreenSharing ? (
        <span>screen off</span>
      ) : (
        <span>screen on</span>
      )}
    </button>
  );
};

