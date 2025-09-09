'use client'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import {SignInButton,SignUpButton} from '@clerk/nextjs';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 sm:p-4 lg:p-6 gap-2 sm:gap-4 h-14 sm:h-16 lg:h-20 w-full mt-4">
      <div className="flex justify-center space-x-2">
        <Link href="/">
          <span className="text-lg sm:text-xl font-semibold text-white "> cloudinary showcase</span>
        </Link>
      </div>

      <div className="flex gap-2 sm:gap-3 lg:gap-4 justify-center items-center flex-shrink-0">
        <SignedOut>
          <SignInButton>
            <button className="bg-white hover:bg-red-500 hover:text-white text-black border-2 border-black rounded-full font-medium text-xs sm:text-sm md:text-base h-8 sm:h-10 lg:h-12 px-3 sm:px-4 lg:px-6 cursor-pointer transition-all duration-200 whitespace-nowrap">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-yellow-700 hover:bg-yellow-500 text-white border-2 border-white rounded-full font-medium text-xs sm:text-sm md:text-base h-8 sm:h-10 lg:h-12 px-3 sm:px-4 lg:px-6 cursor-pointer transition-all duration-200 whitespace-nowrap">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <div className="scale-75 sm:scale-100">
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </header>
  );
}
