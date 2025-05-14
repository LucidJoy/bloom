"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const user = {};

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

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
            <button onClick={() => router.push(`/profile/${user?.id}`)}>
              <Image
                src={user?.image || ""}
                alt='user'
                className='rounded-full aspect-square'
                height={36}
                width={36}
              />
            </button>
            <button
              onClick={async () => {
                return await authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      redirect("/sign-in");
                    },
                  },
                });
              }}
            >
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
