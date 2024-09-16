"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function HilightComponent() {
  return (
    <div className="">
      <div className='flex items-center justify-between px-4'>
        <h1 className='text-4xl font-semibold ml-5 mb-5'>HIGH LIGHT</h1>
        <div className="flex flex-row-reverse gap-x-5  my-4">
            <div className="blog-date">태그 종류</div>
            <div className="blog-date">2024.02.03</div>
        </div>
      </div>
       <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="relative bg-center bg-cover rounded-3xl bg-[url('https://cdn.pixabay.com/photo/2023/11/04/09/23/bananas-8364511_1280.jpg')]">
              <div className="hover-info  hover:bg-slate-900/60 text-white w-full h-[475px] rounded-3xl">
                    <div className="absolute right-0 p-5 opacity-0">화살표</div>
                    <div className="absolute bottom-0 p-5 opacity-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, enim?</div>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="relative bg-center bg-cover rounded-3xl bg-[url('https://cdn.pixabay.com/photo/2023/11/04/09/23/bananas-8364511_1280.jpg')]">
              <div className= "hover-info hover:bg-slate-900/60 text-white w-full h-[475px] rounded-3xl">
                    <div className="absolute right-0 p-5 opacity-0">화살표</div>
                    <div className="absolute bottom-0 p-5 opacity-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, enim?</div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative bg-center bg-cover rounded-3xl bg-[url('https://cdn.pixabay.com/photo/2023/11/04/09/23/bananas-8364511_1280.jpg')]">
              <div className= "hover-info hover:bg-slate-900/60 text-white w-full h-[475px] rounded-3xl">
                    <div className="absolute right-0 p-5 opacity-0">화살표</div>
                    <div className="absolute bottom-0 p-5 opacity-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, enim?</div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative bg-center bg-cover rounded-3xl bg-[url('https://cdn.pixabay.com/photo/2023/11/04/09/23/bananas-8364511_1280.jpg')]">
              <div className= "hover-info hover:bg-slate-900/60 text-white w-full h-[475px] rounded-3xl">
                    <div className="absolute right-0 p-5 opacity-0">화살표</div>
                    <div className="absolute bottom-0 p-5 opacity-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, enim?</div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative bg-center bg-cover rounded-3xl bg-[url('https://cdn.pixabay.com/photo/2023/11/04/09/23/bananas-8364511_1280.jpg')]">
              <div className= "hover-info hover:bg-slate-900/60 text-white w-full h-[475px] rounded-3xl">
                    <div className="absolute right-0 p-5 opacity-0">화살표</div>
                    <div className="absolute bottom-0 p-5 opacity-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, enim?</div>
              </div>
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
  );
}