import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main className='wrapper page'>
      <Header title='All Videos' subHeader='Public Library' />

      <h1 className='text-2xl font-karla'>Welcome to Bloom</h1>

      <section className='video-grid'>
        {dummyCards.map((card) => (
          <VideoCard {...card} key={card.id} />
        ))}
      </section>
    </main>
  );
};

export default Page;
