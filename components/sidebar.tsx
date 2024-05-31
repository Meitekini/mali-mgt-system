"use client"

import { useAuth, useClerk, useUser } from "@clerk/nextjs";


import React from "react";
import Link from 'next/link';
import MaliLogo from "./logo";
import NavLinks from "./nav-links";
import { PowerIcon } from "lucide-react";

const Sidebar = () => {
    const {isLoaded, isSignedIn,user} = useUser()
    const {signOut} = useClerk()

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
    <Link href="/"
      className="mb-2 flex h-10 items-end justify-start rounded-md bg-white p-4 md:h-20"
      
    >
      <div className="w-32 text-gray-500 md:w-40">
        <MaliLogo />
      </div>
    </Link>
  
    <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
      <NavLinks />
      <hr className="my-5"></hr>
      <form
        action={async () => {          
          await signOut();
        }}
      >
        <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm text-gray-500 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form>
    </div>
  </div>
  );
};

export default Sidebar;
