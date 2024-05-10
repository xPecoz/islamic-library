"use client";
import { quranSuras } from "@/app/quran/page";
import { useContext, useEffect } from "react";
import { lisetnArr } from "../../page";
import Error from "@/app/not-found";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function Page({ params }) {
  const location = usePathname();
  const numSurah = params.num;

  const currentName = location
    .replace("/quran/listen/", "")
    .replace(/\/\d+/, "");

  const surah = useContext(quranSuras);
  const surahNames = surah.map((e) => e.name);
  const readersNames = useContext(lisetnArr).filter((e) => {
    return (
      e.nameEnglish == currentName && {
        name: e.name,
        nameEnglish: e.nameEnglish,
        surah: e.audios[0],
        server: e.audios[1],
      }
    );
  })[0];

  const readerName = {
    name: readersNames.name,
    nameEnglish: readersNames.nameEnglish,
    surah: readersNames.audios[0],
    server: readersNames.audios[1],
  };

  useEffect(() => {
    document.getElementById("father").className =
      "content w-full py-4 px-5 pt-24 h-screen flex gap-5";
  }, []);

  if (readerName.surah.indexOf(+numSurah) >= 0) {
    return (
      <div className="center mainBoxs flex flex-col gap-6 overflow-scroll w-full h-full duration-300">
        <div className="relative before:absolute before:bottom-0 before:right-0 before:w-full before:h-full before:opacity-60 before:bg-gradient-to-t before:from-main before:rounded-3xl">
          <Image
            src={`https://peco-2.github.io/islamic/audio-page/${readerName.nameEnglish}.png`}
            alt={readerName.nameEnglish}
            className="object-cover top-0 left-0 h-[720px] max-h-[65vh] w-full rounded-3xl"
            width={1000}
            height={1000000}
          />

          <p className="absolute bottom-6 right-4 text-2xl md:text-4xl text-white font-bold">
            {surahNames[numSurah - 1]} بصوت القارئ {readerName.name}
          </p>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-2">
            <button
              className="w-12 h-12 bg-opacity-80 bg-white rounded-full text-xl font-medium"
              onClick={() =>
                (document.getElementById("audio").currentTime += 10)
              }
            >
              +10
            </button>
            <button
              className="w-20 h-20 bg-opacity-80 bg-white rounded-full flex justify-center items-center"
              onClick={function () {
                let icon = document.getElementById("playIcon");
                let audio = document.getElementById("audio");

                icon.classList.contains("fa-play")
                  ? audio.play()
                  : audio.pause();

                icon.classList.toggle("fa-pause");
                icon.classList.toggle("fa-play");
              }}
            >
              <i
                id="playIcon"
                className="fa-solid fa-play text-main text-4xl"
              ></i>
            </button>
            <button
              className="w-12 h-12 bg-opacity-80 bg-white rounded-full text-xl font-medium"
              onClick={function () {
                document.getElementById("audio").currentTime -= 10;
              }}
            >
              -10
            </button>
          </div>
          <div className="icons flex items-end gap-4 absolute left-4 bottom-4">
            <i
              className="fa-solid fa-repeat relative text-white text-2xl cursor-pointer after:w-8 after:h-1 after:rounded-lg after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:bg-white"
              onClick={function (e) {
                let audio = document.getElementById("audio");

                if (audio.getAttribute("loop") !== null) {
                  e.currentTarget.classList.add(
                    "after:w-8",
                    "after:h-1",
                    "after:rounded-lg",
                    "after:absolute",
                    "after:top-1/2",
                    "after:-translate-y-1/2",
                    "after:left-1/2",
                    "after:-translate-x-1/2",
                    "after:rotate-45",
                    "after:bg-white"
                  );
                  audio.removeAttribute("loop");
                } else {
                  e.currentTarget.classList.remove(
                    "after:w-8",
                    "after:h-1",
                    "after:rounded-lg",
                    "after:absolute",
                    "after:top-1/2",
                    "after:-translate-y-1/2",
                    "after:left-1/2",
                    "after:-translate-x-1/2",
                    "after:rotate-45",
                    "after:bg-white"
                  );
                  audio.setAttribute("loop", true);
                }
              }}
            ></i>
            <div className="volume flex justify-center items-center flex-col-reverse gap-3 rounded-lg">
              <i className="fa-solid fa-volume-high text-white text-2xl"></i>
              <input
                type="range"
                min="0"
                max="100"
                className="accent-main bg-white duration-300"
                onInput={(e) => {
                  document.getElementById("audio").volume =
                    +e.target.value / 100;
                }}
              />
            </div>
          </div>
          <audio
            id="audio"
            src={`https://server${readerName.server}.mp3quran.net/${
              readerName.nameEnglish
            }/${
              numSurah < 10
                ? `00${numSurah}`
                : numSurah < 100
                ? `0${numSurah}`
                : numSurah
            }.mp3`}
            className="hidden"
          ></audio>
        </div>
        <div className="p-2.5 bg-white rounded-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-extrabold text-2xl">باقي القراءات</h2>
            <div className="flex items-center gap-4">
              {+numSurah !== 1 && (
                <Link href={`${+numSurah - 1}`} className="text-main">
                  <i
                    className="fa-solid fa-circle-play text-main cursor-pointer w-10 h-10 justify-center items-center"
                    style={{ display: "flex", fontSize: "40px" }}
                  ></i>
                </Link>
              )}
              {+numSurah !== 114 && (
                <Link href={`${+numSurah + 1}`} className="text-main">
                  <i
                    className="fa-solid fa-circle-play fa-rotate-180 text-main cursor-pointer w-10 h-10 justify-center items-center"
                    style={{ display: "flex", fontSize: "40px" }}
                  ></i>
                </Link>
              )}
            </div>
          </div>
          <ul className="space-y-8">
            {readerName.surah.map((e, i) => {
              return (
                <li
                  key={i}
                  className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 relative before:w-3/4 before:h-[1.5px] before:bg-zinc-200 before:rounded-lg before:absolute before:-bottom-4 before:left-1/2 before:-translate-x-1/2"
                >
                  <div className="flex gap-3 items-center font-medium text-2xl">
                    {e < 10 ? `00${e}` : e < 100 ? `0${e}` : e}
                    <Image
                      src={`https://peco-2.github.io/islamic/listen-quran/${readerName.nameEnglish}.jpg`}
                      alt={readerName.nameEnglish}
                      className="w-14 h-14 object-cover rounded-full"
                      width={1000}
                      height={1000}
                    />
                    {surahNames[e - 1]}
                  </div>
                  <div className="flex gap-9 md:gap-3 w-full md:w-auto justify-center">
                    <Link href={`${e}`}>
                      <i
                        className="fa-solid fa-circle-play fa-rotate-180 text-main w-10 h-10 justify-center items-center text-4xl cursor-pointer"
                        style={{ display: "flex", fontSize: "40px" }}
                      ></i>
                    </Link>
                    <button
                      className="text-white bg-main rounded-full w-10 h-10 justify-center items-center text-2xl cursor-pointer flex"
                      onClick={(el) => {
                        const element = el.currentTarget;

                        navigator.clipboard
                          .writeText(
                            `${window.location.host}/quran/listen/${readerName.nameEnglish}/${e}`
                          )
                          .then(() => (element.textContent = "تم!ّ"))
                          .catch(() => (element.textContent = "فشل!ّ"));
                        setTimeout(() => {
                          element.innerHTML = `<i class='fa-solid fa-share-nodes'></i>`;
                        }, 1500);
                        navigator.clipboard.writeText(
                          `${window.location.host}/quran/listen/${readerName.nameEnglish}/${e}`
                        );
                      }}
                    >
                      <i className="fa-solid fa-share-nodes"></i>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  } else
    return (
      <div className="m-auto">
        <Error />
      </div>
    );
}

export default Page;
