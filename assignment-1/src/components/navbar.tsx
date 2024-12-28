import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

function Navbar() {
  return (
    <nav className="bg-blue-900 text-white py-4 px-6 fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="mr-4"
          />
        </div>

        {/* Center Heading */}
        <div className="text-center flex-1">
          <h1 className="font-extrabold text-blue-200 text-sm md:text-xl">
            Tuition Free Education Program on Latest Technologies
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 items-center">
          <li>
            <Link href="/" className="hover:underline hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/apply" className="hover:underline hover:text-blue-400">
              Apply
            </Link>
          </li>
          <li>
            <Link href="/jobs" className="hover:underline hover:text-blue-400">
              Jobs
            </Link>
          </li>
          <li>
            <Link href="/result" className="hover:underline hover:text-blue-400">
              Result
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <Link href="/courses" className="hover:underline hover:text-blue-400">
              Courses
            </Link>
            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
