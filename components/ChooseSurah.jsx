"use client";
import { use, useContext, useEffect } from "react";
import Choose from "./Choose";
import { quranSuras } from "@/app/quran/page";

function ChooseSurah() {
  const surah = useContext(quranSuras);

  useEffect(() => {
    const btn = document.querySelector(".left-listen button");

    let content = document.querySelectorAll(".center-listen, header");
    let centerListen = document.querySelector(".center-listen");
    let leftListen = document.querySelector(".left-listen");

    content.forEach((ele) => {
      ele.onclick = function () {
        leftListen.classList.add("-translate-x-full");
        centerListen.classList.remove("md:opacity-50");

        btn.classList.add("-right-10");

        btn.children[0].classList.remove("uil-times");
        btn.children[0].classList.add("uil-bars");
      };
    });
  }, []);

  return surah.map(function (e) {
    return (
      <Choose
        key={e.number}
        id={e.number}
        name={e.name}
        des={`${e.revelationType === "Meccan" ? "مكية" : "مدينية"} آياتها ${
          e.numberOfAyahs
        }`}
        href={`#${e.number}`}
      />
    );
  });
}

export default ChooseSurah;
