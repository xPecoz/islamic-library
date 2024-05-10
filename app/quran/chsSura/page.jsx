"use client";
import { useContext, useEffect } from "react";
import Link from "next/link";
import BtnReadSurah from "@/components/BtnReadSurah";
import { quranSuras } from "../page";

function Page() {
  useEffect(() => {
    document.getElementById("father").className =
      "content w-full py-4 px-5 pt-24 flex flex-col max-[890px]:flex-col gap-5";

    window.scrollTo({ top: 0 });
  }, []);

  const surah = useContext(quranSuras);
  return (
    <>
      <Link
        href={`/quran/read`}
        className="w-60 max-[400px]:w-52 shadow-lg border-1 border-slate-300 rounded-lg p-3 grid place-content-center text-2xl font-medium m-auto duration-300 hover:border-main hover:border-1 hover:text-sidebar active:scale-90"
      >
        المصحف كامل
      </Link>
      <div className="flex flex-wrap justify-center gap-7 m-auto">
        {surah.map((ele) => {
          return (
            <BtnReadSurah
              key={ele.number}
              href={`/quran/chsSura/${ele.number}`}
              name={ele.name}
              revelationType={ele.revelationType}
              numberOfAyahs={ele.numberOfAyahs}
            />
          );
        })}
      </div>
    </>
  );
}

export default Page;
