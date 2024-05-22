"use client"


import CallList from '@/components/CallList';
import MeetingTypeList from '@/components/MeetingTypeList';
import { SignedIn } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { useGetCalls } from '@/hooks/useGetCalls';

const Home = () => {
  const [now, setNow] = useState(new Date());
  const { upcomingCalls } = useGetCalls();

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const nextMeeting = upcomingCalls?.sort((a, b) => {
    const aTime = a?.state?.startsAt ? new Date(a.state.startsAt).getTime() : 0;
    const bTime = b?.state?.startsAt ? new Date(b.state.startsAt).getTime() : 0;
    return aTime - bTime;
  })[0];

  
  const nextMeetingTime = nextMeeting?.state?.startsAt?.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <SignedIn>
            {nextMeetingTime && (
              <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
                Upcoming Meeting at: {nextMeetingTime}
              </h2>
            )}
          </SignedIn>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
      <SignedIn>
        <CallList type='upcoming'/>
      </SignedIn>
    </section>
  );
};

export default Home;

