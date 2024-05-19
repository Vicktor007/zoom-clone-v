// 'use client';

// import { ReactNode, useEffect, useState } from 'react';
// import { StreamVideoClient, StreamVideo } from '@stream-io/video-react-sdk';
// import { useUser } from '@clerk/nextjs';

// import { tokenProvider } from '@/actions/stream.actions';
// import Loader from '@/components/Loader';

// const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;

// const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
//   const [videoClient, setVideoClient] = useState<StreamVideoClient>();
//   const { user, isLoaded } = useUser();

//   useEffect(() => {
//     if (!isLoaded || !user) return;
//     if (!API_KEY) throw new Error('Stream API key is missing');

//     const client = new StreamVideoClient({
//       apiKey: API_KEY,
//       user: {
//         id: user?.id,
//         name: user?.username || user?.id,
//         image: user?.imageUrl,
//       },
//       tokenProvider,
//     });

//     setVideoClient(client);
//   }, [user, isLoaded]);

//   if (!videoClient) return <Loader />;

//   return <StreamVideo client={videoClient}>{children}</StreamVideo>;
// };

// export default StreamVideoProvider;

'use client';

import { ReactNode, useEffect, useState } from 'react';
import { StreamVideoClient, StreamVideo } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';

import { tokenProvider } from '@/actions/stream.actions';
import Loader from '@/components/Loader';

const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!API_KEY) throw new Error('Stream API key is missing');

    const client = new StreamVideoClient({
      apiKey: API_KEY,
      user: {
        id: user?.id || 'guest',
        name: user?.username || 'Guest User',
        image: user?.imageUrl || "https://th.bing.com/th/id/R.7123e3ecbbc960764e9f3748c85a24da?rik=Bug7jHIMuASTwA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_568657.png&ehk=vR2Oy8lOQ6lK5CZWu%2fxQLe1STk4J4gttUCfuOHGGbzA%3d&risl=&pid=ImgRaw&r=0",
      },
      tokenProvider,
    });

    setVideoClient(client);
  }, [user, isLoaded]);

  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
