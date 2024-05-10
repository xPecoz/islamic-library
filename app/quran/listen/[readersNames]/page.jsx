"use client";

import { useContext, useEffect } from "react";
import { audioArr, lisetnArr } from "../page";
import Error from "@/app/not-found";
import { quranSuras } from "../../page";
import axios from "axios";

function Page({ params }) {
  const readersNames = useContext(lisetnArr);
  let names = readersNames.map((e) => e.nameEnglish);
  let currentName = params.readersNames;

  const surah = useContext(quranSuras);
  const surahOfReader = readersNames.filter(
    (e) => e.nameEnglish == currentName
  )[0];

  useEffect(() => {
    document.getElementById("father").className =
      "content w-full py-4 px-5 pt-24 h-screen flex gap-5";

    document.getElementById("none") !== null &&
      document.getElementById("none").remove();
  }, []);

  if (names.indexOf(currentName) >= 0) {
    return (
      <div className="overflow-scroll w-full h-full p-1">
        <p
          id="none"
          className="after:content-['1%'] after:content-['2%'] after:content-['3%'] after:content-['4%'] after:content-['5%'] after:content-['6%'] after:content-['7%'] after:content-['8%'] after:content-['9%'] after:content-['10%'] after:content-['11%'] after:content-['12%'] after:content-['13%'] after:content-['14%'] after:content-['15%'] after:content-['16%'] after:content-['17%'] after:content-['18%'] after:content-['19%'] after:content-['20%'] after:content-['21%'] after:content-['22%'] after:content-['23%'] after:content-['24%'] after:content-['25%'] after:content-['26%'] after:content-['27%'] after:content-['28%'] after:content-['29%'] after:content-['30%'] after:content-['31%'] after:content-['32%'] after:content-['33%'] after:content-['34%'] after:content-['35%'] after:content-['36%'] after:content-['37%'] after:content-['38%'] after:content-['39%'] after:content-['40%'] after:content-['41%'] after:content-['42%'] after:content-['43%'] after:content-['44%'] after:content-['45%'] after:content-['46%'] after:content-['47%'] after:content-['48%'] after:content-['49%'] after:content-['50%'] after:content-['51%'] after:content-['52%'] after:content-['53%'] after:content-['54%'] after:content-['55%'] after:content-['56%'] after:content-['57%'] after:content-['58%'] after:content-['59%'] after:content-['60%'] after:content-['61%'] after:content-['62%'] after:content-['63%'] after:content-['64%'] after:content-['65%'] after:content-['66%'] after:content-['67%'] after:content-['68%'] after:content-['69%'] after:content-['70%'] after:content-['71%'] after:content-['72%'] after:content-['73%'] after:content-['74%'] after:content-['75%'] after:content-['76%'] after:content-['77%'] after:content-['78%'] after:content-['79%'] after:content-['80%'] after:content-['81%'] after:content-['82%'] after:content-['83%'] after:content-['84%'] after:content-['85%'] after:content-['86%'] after:content-['87%'] after:content-['88%'] after:content-['89%'] after:content-['90%'] after:content-['91%'] after:content-['92%'] after:content-['93%'] after:content-['94%'] after:content-['95%'] after:content-['96%'] after:content-['97%'] after:content-['98%'] after:content-['99%'] after:content-['100%']"
        ></p>
        {surah.length !== 0 && (
          <>
            <table className="quran-table lis bg-white rounded-lg p-2 w-full">
              <thead>
                <tr className="border-2 border-transparent border-b-border">
                  <td className="text-2xl text-main text-center font-bold p-3">
                    رقم السورة
                  </td>
                  <td className="text-2xl text-main text-center font-bold p-3">
                    إسم السورة
                  </td>
                  <td className="text-2xl text-main text-center font-bold p-3">
                    نوع السورة
                  </td>
                  <td className="text-2xl text-main text-center font-bold p-3">
                    عدد الآيات
                  </td>
                  <td className="text-2xl text-main text-center font-bold p-3">
                    الإستماع
                  </td>
                </tr>
              </thead>
              <tbody>
                {surah.map(function (e) {
                  let num =
                    e.number < 10
                      ? `00${e.number}`
                      : e.number < 100
                      ? `0${e.number}`
                      : e.number;

                  return (
                    surahOfReader.audios[0].indexOf(e.number) > -1 && (
                      <tr key={e.number} className="h-20 duration-300">
                        <td className="text-2xl text-center font-semibold p-3">
                          {e.number}
                        </td>
                        <td className="text-2xl text-center font-semibold p-3">
                          {e.name}
                        </td>
                        <td className="text-2xl text-center font-semibold p-3">
                          {e.revelationType === "Meccan" ? "مكية" : "مدنية"}
                        </td>
                        <td className="text-2xl text-center font-semibold p-3">
                          {e.numberOfAyahs}
                        </td>
                        <td>
                          <div className="flex items-center justify-center gap-4 px-3">
                            <a
                              className="bg-sidebar block text-white rounded-lg py-2 px-3 font-bold transition-all duration-500 text-center text-2xl w-12 h-12 hover:scale-110 active:scale-90"
                              href={`/quran/listen/${currentName}/${e.number}`}
                            >
                              <i className="uil uil-headphones-alt"></i>
                            </a>
                            <button
                              className="uil uil-folder-download relative bg-sidebar block text-white rounded-lg py-2 px-3 font-bold transition-all duration-500 text-center text-2xl w-12 h-12 hover:scale-110 active:scale-90 after:w-14 after:px-1 after:rounded-lg after:h-fit after:absolute after:-left-full after:top-1/2 after:-translate-y-1/2 after:text-white after:bg-zinc-600 content"
                              onClick={async function (el) {
                                const btn = el.currentTarget;
                                const response = await axios.get(
                                  `https://server${surahOfReader.audios[1]}.mp3quran.net/${currentName}/${num}.mp3`,
                                  {
                                    responseType: "blob",
                                    onDownloadProgress: (e) => {
                                      const classes = btn.classList;
                                      let num = Math.round(
                                        (e.loaded * 100) / e.total
                                      );

                                      classes.remove(
                                        classes[classes.length - 1]
                                      );
                                      classes.add(`after:content-['${num}%']`);
                                      num === 100 &&
                                        classes.remove(
                                          `after:content-['100%']`
                                        );
                                    },
                                  }
                                );

                                const url = window.URL.createObjectURL(
                                  new Blob([response.data])
                                );

                                const link = document.createElement("a");
                                link.href = url;
                                link.setAttribute("download", `${num}.mp3`);
                                document.body.appendChild(link);
                                link.click();

                                window.URL.revokeObjectURL(url);
                              }}
                            ></button>
                          </div>
                        </td>
                      </tr>
                    )
                  );
                })}
              </tbody>
            </table>
          </>
        )}
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
