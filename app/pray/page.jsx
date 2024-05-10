"use client";
import { useEffect } from "react";
import MainTitle from "@/components/MainTitle";
import PrayBoxs from "@/components/PrayBoxs";
import ChoosePray from "@/components/ChoosePray";

function Page() {
  useEffect(() => {
    document.getElementById("father").className =
      "content w-full py-4 px-5 pt-24 h-auto sm:h-screen overflow-auto flex flex-col-reverse md:flex-row gap-5";
  }, []);
  return (
    <>
      <div className="center-listen md:opacity-50 bg-white rounded-md p-5 overflow-y-scroll w-full scroll-smooth">
        <PrayBoxs />
      </div>
      <div className="left-listen opacity-100 bg-white rounded-md p-5 w-full max-w-full md:max-w-lg min-h-full md:max-h-full md:fixed left-4 md:shadow-2xl flex flex-col gap-2 duration-300">
        <button
          className="bg-sidebar h-14 w-14 text-3xl text-white rounded-full absolute left-4 top-3 z-10 border-8 border-body duration-300 hidden md:grid place-content-center"
          onClick={function (e) {
            const btn = e.currentTarget;
            let container = document.querySelector(".left-listen");
            let show = document.querySelector(".center-listen");

            container.classList.toggle("-translate-x-full");
            show.classList.toggle("md:opacity-50");
            btn.classList.toggle("-right-10");

            btn.children[0].classList.toggle("uil-bars");
            btn.children[0].classList.toggle("uil-times");
          }}
        >
          <i className="uil uil-times"></i>
        </button>
        <MainTitle text="اختر نوع الدعاء" />
        <div className="max-h-full overflow-scroll">
          <ChoosePray />
        </div>
      </div>
    </>
  );
}

export default Page;
