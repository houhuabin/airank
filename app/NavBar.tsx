"use client";
//import { useSession } from 'next-auth/react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";
const NavBar = () => {
  //const { status, data: session } = useSession();

  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <nav className="flex h-14 items-center bg-slate-200 px-5 space-x-6 border border-red-200 mb-5">
      <Link href="/" className="">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {
        //status === 'loading' && <div>Loading...</div>
      }

      {/*
      status === 'authenticated' &&
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className='ml-3'>Sign Out</Link>
        </div>}
    {status === 'unauthenticated' && <Link href="/api/auth/signin">Login</Link>*/}
    </nav>
  );
};

export default NavBar;
