
import { SignedIn } from '@clerk/nextjs';
import {
  CancelCallButton,
  SpeakingWhileMutedNotification,
  ToggleAudioPublishingButton,
  ToggleVideoPublishingButton,
  ScreenShareButton,
  ReactionsButton,
  RecordCallButton
} from '@stream-io/video-react-sdk';

import type { CallControlsProps } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';

export const CustomCallControls = ({ onLeave }: CallControlsProps) => {
  const router = useRouter();
  return(
  <div className='flex flex-wrap justify-center gap-5'>
    <SignedIn>
    <RecordCallButton/>
    </SignedIn>
    <ReactionsButton/>
    <SpeakingWhileMutedNotification>
      <ToggleAudioPublishingButton />
    </SpeakingWhileMutedNotification>
    <ToggleVideoPublishingButton />
    <ScreenShareButton/>
    <CancelCallButton onLeave={() => router.push(`/`)} />
  </div>
)};

