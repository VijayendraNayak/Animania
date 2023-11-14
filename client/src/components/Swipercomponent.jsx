import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

SwiperCore.use([Autoplay]);
export const Swipercomponent = () => {
  return (
    <div className="z-custom">
      <Swiper
        loop={true}
        autoplay={{ delay: 2000 }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        <SwiperSlide>
          <div className="relative group">
            <div className=" h-[400px] bg-gradient-to-r from-zinc-900 from-20% via-zinc-500 via-80% to-zinc-900 to-100% ...relative">
              <img
                className=" h-full object-cover w-full"
                src="https://images5.alphacoders.com/133/thumbbig-1335188.webp"
                alt="Image 1"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 opacity-40"></div>
            </div>
            <div className="absolute flex flex-col bottom-24 left-24 text-white p-4 gap-2">
              <h2 className="text-5xl font-bold">Classroom of the Elites</h2>
              <p>Some additional text here</p>
              <button className="p-2 rounded-full w-40 bg-purple-500 "><PlayCircleOutlineIcon/> Watch now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <div className=" h-[400px] bg-gradient-to-r from-zinc-900 from-20% via-zinc-500 via-80% to-zinc-900 to-100% ...relative">
              <img
                className=" h-full object-cover w-full"
                src="https://images5.alphacoders.com/606/thumbbig-606284.webp"
                alt="Image 1"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 opacity-40"></div>
            </div>
            <div className="absolute flex flex-col bottom-24 left-24 text-white p-4 gap-2">
              <h2 className="text-5xl font-bold">One Piece</h2>
              <p>Some additional text here</p>
              <button className="p-2 rounded-full w-40 bg-purple-500 "><PlayCircleOutlineIcon/> Watch now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <div className=" h-[400px] bg-gradient-to-r from-zinc-900 from-20% via-zinc-500 via-80% to-zinc-900 to-100% ...relative">
              <img
                className=" h-full object-cover w-full"
                src="https://images7.alphacoders.com/129/thumbbig-1299888.webp"
                alt="Image 1"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 opacity-40"></div>
            </div>
            <div className="absolute flex flex-col bottom-24 left-24 text-white p-4 gap-2">
              <h2 className="text-5xl font-bold">Naruto</h2>
              <p>Some additional text here</p>
              <button className="p-2 rounded-full w-40 bg-purple-500 "><PlayCircleOutlineIcon/> Watch now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <div className=" h-[400px] bg-gradient-to-r from-zinc-900 from-20% via-zinc-500 via-80% to-zinc-900 to-100% ...relative">
              <img
                className=" h-full object-cover w-full"
                src="https://images6.alphacoders.com/659/thumbbig-659627.webp"
                alt="Image 1"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 opacity-40"></div>
            </div>
            <div className="absolute flex flex-col bottom-24 left-24 text-white p-4 gap-2">
              <h2 className="text-5xl font-bold">Dragon Ball Super</h2>
              <p>Some additional text here</p>
              <button className="p-2 rounded-full w-40 bg-purple-500 "><PlayCircleOutlineIcon/> Watch now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <div className=" h-[400px] bg-gradient-to-r from-zinc-900 from-20% via-zinc-500 via-80% to-zinc-900 to-100% ...relative">
              <img
                className=" h-full object-cover w-full"
                src="https://images4.alphacoders.com/131/thumbbig-1319312.webp"
                alt="Image 1"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 opacity-40"></div>
            </div>
            <div className="absolute flex flex-col bottom-24 left-24 text-white p-4 gap-2">
              <h2 className="text-5xl font-bold">Black Clover</h2>
              <p>Some additional text here</p>
              <button className="p-2 rounded-full w-40 bg-purple-500 "><PlayCircleOutlineIcon/> Watch now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <div className=" h-[400px] bg-gradient-to-r from-zinc-900 from-20% via-zinc-500 via-80% to-zinc-900 to-100% ...relative">
              <img
                className=" h-full object-cover w-full"
                src="https://images7.alphacoders.com/418/thumbbig-418724.webp"
                alt="Image 1"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 opacity-40"></div>
            </div>
            <div className="absolute flex flex-col bottom-24 left-24 text-white p-4 gap-2">
              <h2 className="text-5xl font-bold">Attack On Titan</h2>
              <p>Some additional text here</p>
              <button className="p-2 rounded-full w-40 bg-purple-500 "><PlayCircleOutlineIcon/> Watch now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <div className=" h-[400px] bg-gradient-to-r from-zinc-900 from-20% via-zinc-500 via-80% to-zinc-900 to-100% ...relative">
              <img
                className=" h-full object-cover w-full"
                src="https://images.alphacoders.com/153/thumbbig-153243.webp"
                alt="Image 1"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 opacity-40"></div>
            </div>
            <div className="absolute flex flex-col bottom-24 left-24 text-white p-4 gap-2">
              <h2 className="text-5xl font-bold">Deathnote</h2>
              <p>Some additional text here</p>
              <button className="p-2 rounded-full w-40 bg-purple-500 "><PlayCircleOutlineIcon/> Watch now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <div className=" h-[400px] bg-gradient-to-r from-zinc-900 from-20% via-zinc-500 via-80% to-zinc-900 to-100% ...relative">
              <img
                className=" h-full object-cover w-full"
                src="https://images3.alphacoders.com/228/thumbbig-228205.webp"
                alt="Image 1"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 opacity-40"></div>
            </div>
            <div className="absolute flex flex-col bottom-24 left-24 text-white p-4 gap-2">
              <h2 className="text-5xl font-bold">My Hero Academia</h2>
              <p>Some additional text here</p>
              <button className="p-2 rounded-full w-40 bg-purple-500 "><PlayCircleOutlineIcon/> Watch now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className=" flex flex-col gap-2">
        <div className="swiper-button-next cursor-pointer text-white font-bold text-xl bg-purple-500 p-8 rounded-lg ">
        </div>
        <div className="swiper-button-prev cursor-pointer text-white font-bold text-xl bg-purple-500 p-8 rounded-lg  ">
        </div>
      </div>
    </div>
  );
};
