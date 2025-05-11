"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const user = {};

const Navbar = () => {
  const router = useRouter();

  return (
    <header className='navbar'>
      <nav>
        <Link href='/'>
          <Image
            src='/assets/icons/logo.svg'
            alt='logo'
            height={32}
            width={32}
          />
          <h1>Bloom</h1>
        </Link>

        {user && (
          <figure>
            <button onClick={() => router.push("/profile/1234")}>
              <Image
                src={"/assets/images/dummy.jpg"}
                alt='user'
                className='rounded-full aspect-square'
                height={36}
                width={36}
              />
            </button>
            <button>
              <Image
                src={"/assets/icons/logout.svg"}
                alt='user'
                className='rotate-180'
                height={24}
                width={24}
              />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
