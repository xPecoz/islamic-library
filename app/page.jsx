"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Page() {
  useEffect(() => {
    document.getElementById("father").className =
      "relative w-full py-4 px-5 pt-24 min-h-screen flex items-center gap-5";
  }, []);
  return (
    <div className="w-full h-full flex flex-col-reverse pb-7 lg:flex-row justify-center items-center gap-10 md:gap-20">
      <div className="info flex flex-col items-center gap-5 basis-[55%]">
        <h1 className="bg-[#00b570] relative p-3.5 w-full sm:w-[550px] text-center text-3xl sm:text-5xl font-bold text-white before:content-[''] before:absolute before:left-0 before:w-0 before:h-0 before:border-[40px] before:border-transparent before:border-l-body before:top-1/2 before:-translate-y-1/2 after:content-[''] after:absolute after:right-0 after:w-0 after:h-0 after:border-[40px] after:border-transparent after:border-r-body after:top-1/2 after:-translate-y-1/2">
          مكتبة الإسلام
        </h1>
        <p>
          سنطلعكم من خلال صفحات موقعنا علي مزايا ومقتطفات عن الدين الاسلامي
          الحنيف عن طريق قراءة القران الكريم وقراءة تفسير الايات والاستماع الي
          القران بصوت العديد من الشيوخ كما يمكنك الاستماع الي خطب بعض الشيوخ
          وقراءة الاحاديث وتفسيرها ومصدرها كما يمكنك قراءة الاذكار والادعية
          وقراءة اسئلة دينية واجابتها
        </p>
        <div className="social-icons">
          <Link
            href="https://web.facebook.com/profile.php?id=61558535768500"
            target="_blank"
          >
            <i className="uil uil-facebook-f facebook-icon"></i>
          </Link>
          <Link
            href="https://web.facebook.com/profile.php?id=61558535768500"
            target="_blank"
          >
            <i className="uil uil-instagram instagram-icon"></i>
          </Link>
          <Link
            href="https://www.youtube.com/@Al_Quran_Al_Karim01"
            target="_blank"
          >
            <i className="uil uil-youtube youtube-icon"></i>
          </Link>
        </div>
      </div>
      <div className="image p-5">
        <Image
          src="https://peco-2.github.io/islamic/other/home.png"
          alt="Islamic Library"
          className="max-h-[650px]"
          width={1000}
          height={1000}
          style={{ width: "auto", maxHeight: "650px" }}
        />
      </div>
    </div>
  );
}

export default Page;
