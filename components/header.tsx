"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import Search from "./search";
import { BellIcon } from "lucide-react";
import LowerHeader from "./lower-header";

const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex h-8 pt-8 items-center justify-end">
          <div className="md:flex md:items-center md:gap-12">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Search />
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Button variant="outline" size='icon'>
                  <BellIcon className="h-4 w-4 text-blue-300" />
                </Button>

                <div className="hidden sm:flex">
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <LowerHeader/>
        </div>
      </div>
    </header>
  );
};

export default Header;
