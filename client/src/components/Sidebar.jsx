import React from "react";

export const Sidebar = (props) => {
  return (
    <div className="z-10">
      <div className="h-screen overflow-y-scroll w-60 bg-zinc-800 absolute ">
        <div className="flex flex-col gap-4 pt-7">
          <div className="text-2xl text-center font-semibold">Menu</div>
          <div className=" flex flex-col pl-8 pt-5 gap-4">
            <p>Home</p>
            <hr className="text-gray-600" />
            <p>Trending</p>
            <hr />
            <p>TV series</p>
            <hr />
            <p>Movies</p>
            <hr />
            <p>OVAs</p>
            <hr />
            <p>ONAs</p>
            <hr />
            <p>Specials</p>
            <hr />
            <p>Genre</p>
            <hr />
          </div>
          <div className="flex pl-8">
            <div className="flex flex-col flex-1 gap-2">
              <span>Action</span>
              <span>Action</span>
              <span>Action</span>
              <span>Action</span>
              <span>Action</span>
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <span>Action</span>
              <span>Action</span>
              <span>Action</span>
              <span>Action</span>
              <span>Action</span>
            </div>
          </div>
          <div className="pl-8">More</div>
        </div>
      </div>
    </div>
  );
};
