
import {
  CancelCallButton,
  SpeakingWhileMutedNotification,
  ToggleAudioPublishingButton,
  ToggleVideoPublishingButton,
  ScreenShareButton,
  ReactionsButton
} from '@stream-io/video-react-sdk';

import type { CallControlsProps } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';

export const CustomCallControls = ({ onLeave }: CallControlsProps) => {
  const router = useRouter();
  return(
  <div className='flex gap-5'>
    <ReactionsButton/>
    <SpeakingWhileMutedNotification>
      <ToggleAudioPublishingButton />
    </SpeakingWhileMutedNotification>
    <ToggleVideoPublishingButton />
    <ScreenShareButton/>
    <CancelCallButton onLeave={() => router.push(`/`)} />
  </div>
)};

