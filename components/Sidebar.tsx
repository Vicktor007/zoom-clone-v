'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { Button } from './ui/button';
import add from "../public/icons/join-meeting.svg";
import login from "../public/icons/arrow-right.svg";


const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      
      <div className="flex flex-1 flex-col gap-6">
      <SignedIn>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-4 items-center p-4 rounded-lg justify-start',
                {
                  'bg-blue-1': isActive,
                }
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
        </SignedIn>
        <SignedOut>
            <Button asChild className={cn(
                'flex gap-4 items-center p-4 rounded-lg justify-start'
              )}>
              <Link href="/sign-in">
              <Image
                src={login}
                alt="login"
                width={24}
                height={24}
              />
              <p className=" text-sm font-semibold max-lg:hidden">
                Login
              </p>
              </Link>
            </Button>
            <Button asChild className={cn(
                'flex gap-4 items-center p-4 rounded-lg justify-start'
              )}>
             
              <Link href="/sign-up">
              <Image
                src={add}
                alt="create an account"
                width={24}
                height={24}
              />
              <p className="text-sm font-semibold max-lg:hidden">
                Create an Account
              </p>
              </Link>
            </Button>
          </SignedOut>
      </div>
      

    </section>
  );
};

export default Sidebar;
