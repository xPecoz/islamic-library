"use client";

import { useEffect, useState } from "react";
import Error from "@/app/not-found";
import axios from "axios";
import Image from "next/image";
import MainBtn from "@/components/MainBtn";

function KhatabNames({ paramsTest }) {
  const [khatabArr, setKhatabArr] = useState([]);
  const [videosId, setVideosId] = useState([]);

  // console.log(paramsTest);
  const currentName = paramsTest.name;

  useEffect(() => {
    axios
      .get("http://localhost/isamic-dasboard/apis/khatab/khatab.php")
      .then((res) => {
        const data = res.data;
        const arr = data.filter((e) => e.nameEn == currentName);

        setKhatabArr(arr);
        setVideosId(JSON.parse(arr[0].khatabsId));
      });
  }, []);

  const [videos, setVideos] = useState([]);
  let str = "";

  useEffect(() => {
    if (videosId.length > 0) {
      videosId.forEach((e) => (str += `&id=${e}`));
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCaPIf4nGtiJOQ2pBDo7Jjy9kR2e1DsTaU&part=snippet${str}`
        )
        .then((res) => {
          let arr = [];
          res.data.items.forEach((ele) => {
            arr.push({
              id: ele.id,
              title: ele.snippet.title,
              img: ele.snippet.thumbnails.maxres
                ? ele.snippet.thumbnails.maxres.url
                : ele.snippet.thumbnails.standard.url,
            });
          });
          setVideos(arr);
        });
    }
  }, [videosId]);

  if (khatabArr.length > 0) {
    window.onload = () => {
      document.getElementById("father").className =
        "content w-full py-4 px-5 pt-24 flex gap-5";
    };

    return (
      <div className="w-full rounded-lg center-khatab-boxs grid gap-6">
        {videos.length !== 0 &&
          videos.map(function (e, i) {
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-4 flex flex-col gap-5 justify-between"
              >
                <Image
                  src={e.img}
                  alt=""
                  className="rounded-xl h-auto"
                  width={1000}
                  height={1000}
                />
                <p className="text-xl font-medium text-center">{e.title}</p>
                <div className="flex gap-2 justify-between flex-wrap">
                  <MainBtn href={`${location}/${e.id}`} text="المشاهدة" />
                  <MainBtn
                    href={`https://www.youtube.com/watch?v=${e.id}`}
                    text="المشاهدة علي اليوتيوب"
                    target="_blank"
                  />
                </div>
              </div>
            );
          })}
      </div>
    );
  } else return <Error />;
}

export default KhatabNames;
