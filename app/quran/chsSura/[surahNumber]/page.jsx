"use client";

import React from "react";
import ReadSurah from "@/components/ReadSurah";
import Error from "@/app/not-found";
function Page({ params }) {
  const surah = params.surahNumber;

  if (surah >= 1 && surah <= 114) {
    window.onload = () => {
      document.getElementById("father").className =
        "content w-full py-4 px-5 pt-24 h-screen flex gap-5";
    };

    return (
      <div
        className="center-listen bg-white rounded-md p-5 overflow-y-scroll w-full scroll-smooth"
        onScroll={(e) => {
          localStorage.setItem(`scroll${surah}`, e.target.scrollTop);

          for (let prop in localStorage)
            if (localStorage.getItem(prop))
              +localStorage.getItem(prop) === 0 &&
                localStorage.removeItem(prop);
        }}
      >
        <ReadSurah num={surah} />
      </div>
    );
  } else return <Error />;
}

export default Page;
