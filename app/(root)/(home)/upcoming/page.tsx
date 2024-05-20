import CallList from '@/components/CallList';
import { SignedIn } from '@clerk/nextjs';

const UpcomingPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Upcoming Meeting</h1>
<SignedIn>
      <CallList type="upcoming" />
</SignedIn>
    </section>
  );
};

export default UpcomingPage;
