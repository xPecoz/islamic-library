"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MainBtn from "@/components/MainBtn";
import axios from "axios";
import Image from "next/image";

function KhatabNamesId({ paramsTest }) {
  useEffect(() => {
    document.getElementById("father").className =
      "content w-full py-4 px-5 pt-24 h-screen flex gap-5";
  }, []);

  const [khatabs, setKhatabs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/isamic-dasboard/apis/khatab/khatab.php")
      .then((res) => setKhatabs(res.data));
  }, []);

  const location = usePathname();
  const videoId = paramsTest.id;
  const currentName = location
    .replace("/khatab/", "")
    .replace(`/${videoId}`, "");

  const khatabArr = khatabs.filter((e) => e.nameEn == currentName)[0]?.khatabsId
    ? JSON.parse(
        khatabs.filter((e) => e.nameEn == currentName)[0]?.khatabsId
      ).filter((e) => e != videoId)
    : [];

  let [videos, setVideos] = useState([]);

  useEffect(() => {
    if (khatabs.length > 0) {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCaPIf4nGtiJOQ2pBDo7Jjy9kR2e1DsTaU&part=snippet${khatabArr
            .map((e) => "&id=" + e)
            .join("")}`
        )
        .then((res) => {
          let videoData = [];
          res.data.items.forEach((ele) => {
            videoData.push({
              id: ele.id,
              title: ele.snippet.title,
              img: ele.snippet.thumbnails.maxres
                ? ele.snippet.thumbnails.maxres.url
                : ele.snippet.thumbnails.standard.url,
            });
          });
          setVideos(videoData);
        });
    }
  }, [khatabs]);
  return (
    <div className="center mainBoxs flex flex-col gap-6 overflow-scroll w-full h-full duration-300">
      <div className="bg-white rounded-xl p-4">
        <iframe
          className="rounded-2xl m-auto"
          src={
            "https://www.youtube-nocookie.com/embed/" +
            videoId +
            "?si=u9hvYE1zOX1kiHsG&amp;autoplay=1"
          }
          title="YouTube video player"
          allow="autoplay *; fullscreen *"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-2.5 bg-white rounded-md w-full">
        <h2 className="font-extrabold text-2xl text-center mb-5">باقي الخطب</h2>
        <ul className="space-y-9">
          {videos.length !== 0 &&
            videos.map((e, i) => {
              return (
                <li
                  key={i}
                  className="flex justify-between items-center flex-col sm:flex-row gap-7 relative before:w-3/4 before:h-[2.5px] before:bg-zinc-200 before:rounded-lg before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2"
                >
                  <div className="flex gap-3 items-center font-medium text-2xl">
                    <p>
                      {i + 1 < 10
                        ? `00${i + 1}`
                        : i + 1 < 100
                        ? `0${i + 1}`
                        : i + 1}
                    </p>
                    <Image
                      src={e.img}
                      alt=""
                      className="w-14 h-14 object-cover rounded-full"
                      width={1000}
                      height={1000}
                    />
                    <p className="max-w-[235px] overflow-hidden whitespace-nowrap text-ellipsis">
                      {e.title}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <MainBtn
                      href={`/khatab/${currentName}/${e.id}`}
                      text="الاستماع"
                    />
                    <MainBtn
                      href={`https://youtube.com/watch?v=${e.id}`}
                      text="اليوتيوب"
                      target="_blank"
                    />
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
export default KhatabNamesId;
