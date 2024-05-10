"use client";
import MainTitle from "@/components/MainTitle";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

function Page() {
  const [times, setTimes] = useState([]);
  const [arr, setArr] = useState([]);

  const src = "https://api.aladhan.com/v1/timingsByCity/";

  const [date, setDate] = useState(moment());

  function salahData(res) {
    const data = res.data.data;
    const hijri = data.date.hijri;
    const gregorian = data.date.gregorian;

    let arr = times;
    arr.push({
      date: {
        hijri: `${hijri.day} من ${hijri.month.ar} ${hijri.year} هـ`,
        gregorian: `${gregorian.date} م`,
      },
      Fajr: data.timings.Fajr,
      Sunrise: data.timings.Sunrise,
      Dhuhr: data.timings.Dhuhr,
      Asr: data.timings.Asr,
      Maghrib: data.timings.Maghrib,
      Isha: data.timings.Isha,
    });
    setTimes([arr.flat()]);
  }
  function getSalah(url) {
    axios.get(url).then((res) => salahData(res));
    setDate(date.add(1, "days"));
  }

  useEffect(() => {
    document.getElementById("father").className =
      "content w-full py-4 px-5 pt-24 h-screen flex gap-5 flex-col-reverse";

    for (let i = 0; i < 5; i++)
      getSalah(`${src}${date.format("DD-MM-YYYY")}?country=egypt&city=cairo`);
  }, []);

  useEffect(() => {
    const test = times[0]?.map(JSON.stringify);
    const newTest = new Set(test);
    const arr = Array.from(newTest).map(JSON.parse);

    setArr(arr);
  }, [times]);

  return (
    <>
      <div className="overflow-scroll w-full h-full p-1">
        <table className="quran-table bg-white rounded-lg p-2 w-full">
          <thead>
            <tr className="border-2 border-transparent border-b-border">
              <td className="text-2xl text-center font-bold p-3">التاريخ</td>
              <td className="text-2xl text-center font-bold p-3">الفجر</td>
              <td className="text-2xl text-center font-bold p-3">الشروق</td>
              <td className="text-2xl text-center font-bold p-3">الظهر</td>
              <td className="text-2xl text-center font-bold p-3">العصر</td>
              <td className="text-2xl text-center font-bold p-3">المغرب</td>
              <td className="text-2xl text-center font-bold p-3">العشاء</td>
            </tr>
          </thead>
          <tbody>
            {arr?.map((time, i) => {
              return (
                <tr key={i} className="h-20 duration-300">
                  <td className="text-2xl text-center font-semibold p-3">
                    {time.date?.hijri} <br /> {time.date?.gregorian}
                  </td>
                  <td className="text-2xl text-center font-semibold p-3">
                    {time.Fajr}
                  </td>
                  <td className="text-2xl text-center font-semibold p-3">
                    {time.Sunrise}
                  </td>
                  <td className="text-2xl text-center font-semibold p-3">
                    {time.Dhuhr}
                  </td>
                  <td className="text-2xl text-center font-semibold p-3">
                    {time.Asr}
                  </td>
                  <td className="text-2xl text-center font-semibold p-3">
                    {time.Maghrib}
                  </td>
                  <td className="text-2xl text-center font-semibold p-3">
                    {time.Isha}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          className="main-btn2 block text-white rounded-md py-2 px-3 font-bold transition-all duration-500 text-center text-xl active:scale-90 m-auto mt-3"
          onClick={() => {
            axios
              .get(
                `${src}${date.format("DD-MM-YYYY")}?country=egypt&city=cairo`
              )
              .then((res) => {
                salahData(res);
                setDate(date.add(1, "days"));

                axios
                  .get(
                    `${src}${date.format(
                      "DD-MM-YYYY"
                    )}?country=egypt&city=cairo`
                  )
                  .then((res) => {
                    salahData(res);
                    setDate(date.add(1, "days"));

                    axios
                      .get(
                        `${src}${date.format(
                          "DD-MM-YYYY"
                        )}?country=egypt&city=cairo`
                      )
                      .then((res) => {
                        salahData(res);
                        setDate(date.add(1, "days"));

                        axios
                          .get(
                            `${src}${date.format(
                              "DD-MM-YYYY"
                            )}?country=egypt&city=cairo`
                          )
                          .then((res) => {
                            salahData(res);
                            setDate(date.add(1, "days"));

                            axios
                              .get(
                                `${src}${date.format(
                                  "DD-MM-YYYY"
                                )}?country=egypt&city=cairo`
                              )
                              .then((res) => {
                                salahData(res);
                                setDate(date.add(1, "days"));
                              });
                          });
                      });
                  });
              });
          }}
        >
          عرض المزيد
        </button>
      </div>
      <MainTitle text="مواقيت الصلاة لل 30 يوم القادمين" />
    </>
  );
}

export default Page;
