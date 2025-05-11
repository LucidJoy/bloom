import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <main className='sign-in'>
      <aside className='testimonial'>
        <Link href='/'>
          <Image
            src={"/assets/icons/logo.svg"}
            width={32}
            height={32}
            alt='logo'
          />
          <h1>Bloom</h1>
        </Link>

        <div className='description'>
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src='/assets/icons/star.svg'
                  key={index}
                  alt='star'
                  width={20}
                  height={20}
                />
              ))}
            </figure>
            <p>
              Bloom makes screen recording easy. From quick walkthroughs to full
              presentations, it's fast, smooth, and shareable in seconds
            </p>

            <article>
              <Image
                src={"/assets/images/jason.png"}
                alt='jason'
                width={64}
                height={64}
                className='rounded-full'
              />

              <div>
                <h2>Jason Rivera</h2>
                <p>Product Designer @ Zinnia</p>
              </div>
            </article>
          </section>
        </div>

        <div className='flex flex-row justify-center'>
          <p>© Bloom {new Date().getFullYear()}</p>
        </div>
      </aside>

      <aside className='google-sign-in'>
        <section>
          <Link href='/'>
            <Image
              src={"/assets/icons/logo.svg"}
              width={40}
              height={40}
              alt='logo'
            />
            <h1>Bloom</h1>
          </Link>
          <p>
            Create and share your very first <span>Bloom video</span> in no
            time!
          </p>
          <button>
            <Image
              src={"/assets/icons/google.svg"}
              alt='google'
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>

      <div className='overlay' />
    </main>
  );
};

export default Page;
