"use client";
import MainBtn from "@/components/MainBtn";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

function Page() {
  const [khatabs, setKhatabs] = useState([]);

  useEffect(() => {
    document.getElementById("father").className =
      "content w-full py-4 px-5 pt-24 flex gap-5";

    axios
      .get("http://localhost/isamic-dasboard/apis/khatab/khatab.php")
      .then((res) => setKhatabs(res.data));
  }, []);

  return (
    <div className="w-full rounded-lg center-khatab grid gap-6">
      {khatabs.map((box, i) => {
        return (
          <div
            key={box.id}
            className="p-4 bg-white rounded-2xl flex flex-col gap-4 items-center shadow-box"
          >
            <div className="img">
              <Image
                src={box.img}
                className="w-1/2 m-auto duration-300 rounded-2xl hover:rounded-[50%]"
                alt={box.name}
                width={1000}
                height={1000}
              />
            </div>
            <p className="text-xl md:text-2xl font-medium">خطب {box.name}</p>
            <MainBtn href={`/khatab/${box.nameEn}`} text="الإستماع" />
          </div>
        );
      })}
    </div>
  );
}

export default Page;
