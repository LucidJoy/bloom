import Header from "@/components/Header";
import React from "react";

const Page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;

  return (
    <div className='wrapper page'>
      <Header
        subHeader='joyduliajan@gmail.com'
        title='Joy'
        userImg='/assets/images/dummy.jpg'
      />

      <h1 className='text-2xl font-karla'>user</h1>
    </div>
  );
};

export default Page;
