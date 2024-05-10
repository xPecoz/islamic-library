"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

function Page() {
  const [azkars, setAzkars] = useState([]);

  useEffect(() => {
    document.getElementById("father").className =
      "content w-full py-4 px-5 pt-24 h-screen flex gap-5";

    axios
      .get("http://localhost/isamic-dasboard/apis/azkar/azkar.php")
      .then((res) => {
        const data = res.data;

        setAzkars(data);

        setContent(data[0].content);
        seAzkarTitle(data[0].title);
      });
  }, []);

  let [content, setContent] = useState([]);
  let [azkarTitle, seAzkarTitle] = useState([]);
  return (
    <div className="h-full overflow-scroll relative w-full bg-white p-6 rounded-xl">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper flex mb-6"
      >
        {azkars.map((e, i) => {
          return (
            <SwiperSlide
              key={e.id}
              className="main-btn2 max-w-[285px] overflow-hidden relative justify-center gap-2 flex-col cursor-pointer text-white rounded-xl p-3 font-bold"
              style={{
                height: "110px",
                display: "flex",
              }}
              onClick={() => {
                setContent(azkars[i].content);
                seAzkarTitle(azkars[i].title);
              }}
            >
              <Image
                src={e.img}
                alt=""
                className="absolute -left-10 top-1/2 -translate-y-1/2 w-auto"
                style={{ height: "calc(100% + 20px)" }}
                width={1000}
                height={1000}
              />
              <p className="text-3xl">{e.title}</p>
              <p className="text-2xl">{e.content.length} أذكار</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <hr className="border-[#e7e7e7]" />
      <div>
        <h2 className="text-[40px] leading-snug text-main text-center font-bold mt-5">
          {azkarTitle}
        </h2>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper flex mb-6"
        >
          {content.map((e) => {
            return (
              <SwiperSlide
                key={e.id}
                className="py-1 rounded-lg leading-loose lg:leading-loose text-3xl text-center"
              >
                <p
                  className="font-bold"
                  style={{ maxWidth: "calc(100vw - 80px)" }}
                >
                  {e.id} / {content.length}
                </p>
                <p
                  className="sura leading-loose text-4xl md:text-[42px]"
                  style={{ maxWidth: "calc(100vw - 80px)" }}
                >
                  {e.text}
                </p>
                <p
                  className="font-bold text-[#bbbabb]"
                  style={{ maxWidth: "calc(100vw - 80px)" }}
                >
                  {e.num}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Page;
