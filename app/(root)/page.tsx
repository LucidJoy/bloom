import Empty from "@/components/Empty";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";
import { getAllVideos } from "@/lib/actions/video";
import React from "react";

const Page = async ({ searchParams }: SearchParams) => {
  const { query, filter, page } = await searchParams;

  const { videos, pagination } = await getAllVideos(
    query,
    filter,
    Number(page) || 1
  );

  return (
    <main className='wrapper page'>
      <Header title='All Videos' subHeader='Public Library' />

      <h1 className='text-2xl font-karla'>Welcome to Bloom</h1>

      {videos?.length > 0 ? (
        <section className='video-grid'>
          {videos.map(({ video, user }) => (
            <VideoCard
              key={video.id}
              {...video}
              userImg={user?.image || " "}
              username={user?.name || "Guest"}
              thumbnail={video.thumbnailUrl}
            />
          ))}
        </section>
      ) : (
        <Empty
          icon='/assets/icons/video.svg'
          title='No Videos Found'
          description='Try adjusting your search'
        />
      )}
    </main>
  );
};

export default Page;
