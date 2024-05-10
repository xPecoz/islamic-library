"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/ar-dz";
import SalahTime from "@/components/SalahTime";
import TimeBox from "@/components/TimeBox";
import Image from "next/image";
import TimesBox from "@/components/TimesBox";
import Link from "next/link";

moment.locale("ar");

function Page() {
  useEffect(() => {
    document.getElementById("father").className =
      "w-full py-4 px-5 pt-24 flex flex-col gap-3";
  }, []);

  let citys = [
    {
      country: "مصر",
      english: "egypt",
      cityes: [
        {
          displayName: "القاهرة",
          apiName: "cairo",
        },
        {
          displayName: "الإسكندرية",
          apiName: "alexandria",
        },
        {
          displayName: "الإسماعيلية",
          apiName: "ismailia",
        },
        {
          displayName: "أسوان",
          apiName: "aswan",
        },
        {
          displayName: "أسيوط",
          apiName: "asyut",
        },
        {
          displayName: "الأقصر",
          apiName: "luxor",
        },
        {
          displayName: "البحر الأحمر",
          apiName: "hurghada",
        },
        {
          displayName: "البحيرة",
          apiName: "beheira",
        },
        {
          displayName: "بني سويف",
          apiName: "beni suef",
        },
        {
          displayName: "بورسعيد",
          apiName: "port said",
        },
        {
          displayName: "جنوب سيناء",
          apiName: "south sinai",
        },
        {
          displayName: "الجيزة",
          apiName: "giza",
        },
        {
          displayName: "الدقهلية",
          apiName: "dakahlia",
        },
        {
          displayName: "دمياط",
          apiName: "damietta",
        },
        {
          displayName: "سوهاج",
          apiName: "sohag",
        },
        {
          displayName: "السويس",
          apiName: "suez",
        },
        {
          displayName: "الشرقية",
          apiName: "sharqia",
        },
        {
          displayName: "شمال سيناء",
          apiName: "north sinai governorate",
        },
        {
          displayName: "الغربية",
          apiName: "gharbia",
        },
        {
          displayName: "الفيوم",
          apiName: "fayoum",
        },
        {
          displayName: "القليوبية",
          apiName: "qalyubia",
        },
        {
          displayName: "قنا",
          apiName: "qena",
        },
        {
          displayName: "كفر الشيخ",
          apiName: "kafr alshaykh",
        },
        {
          displayName: "مطروح",
          apiName: "matrouh",
        },
        {
          displayName: "المنوفية",
          apiName: "monufia",
        },
        {
          displayName: "المنيا",
          apiName: "Minya",
        },
        {
          displayName: "الوادي الجديد",
          apiName: "kharga",
        },
      ],
    },
  ];

  const [timings, setTimings] = useState({
    Fajr: "00:00",
    Sunrise: "00:00",
    Dhuhr: "00:00",
    Asr: "00:00",
    Maghrib: "00:00",
    Isha: "00:00",
  });
  const [selectedCity, setSelectedCity] = useState({
    displayName: "القاهرة",
    apiName: "cairo",
  });
  const [data, setData] = useState({
    data: "00-00-0000",
    day: "......",
    month: "......",
  });
  const [today, setToday] = useState(moment().format("YYYY-MM-DD | hh:mm"));
  const [remainingTime, setRemainingTime] = useState("");
  const [nextPrayerIndex, setNextPrayerIndex] = useState(0);
  const prayersArray = [
    { key: "Fajr", displayName: "أذان الفجر" },
    { key: "Sunrise", displayName: "الشروق" },
    { key: "Dhuhr", displayName: "أذان الظهر" },
    { key: "Asr", displayName: "أذان العصر" },
    { key: "Sunset", displayName: "أذان المغرب" },
    { key: "Isha", displayName: "أذان العشاء" },
  ];

  useEffect(() => {
    axios
      .get(
        `https://api.aladhan.com/v1/timingsByCity?country=egypt&city=${selectedCity.apiName}`
      )
      .then((res) => {
        let data = res.data.data.date.hijri;
        setTimings(res.data.data.timings);
        setData({
          data: data.date,
          day: data.weekday.ar,
          month: data.month.ar,
        });
      });
  }, [selectedCity]);

  useEffect(() => {
    setInterval(() => setToday(moment().format("YYYY-MM-DD | hh:mm")), 1000);

    let interval = setInterval(() => {
      setupCountdownTimer();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timings]);

  function setupCountdownTimer() {
    const momentNow = moment();
    let prayerIndex = 0;

    if (
      momentNow.isAfter(moment(timings.Fajr, "hh:mm")) &&
      momentNow.isBefore(moment(timings.Sunrise, "hh:mm"))
    ) {
      prayerIndex = 1;
    } else if (
      momentNow.isAfter(moment(timings.Sunrise, "hh:mm")) &&
      momentNow.isBefore(moment(timings.Dhuhr, "hh:mm"))
    ) {
      prayerIndex = 2;
    } else if (
      momentNow.isAfter(moment(timings.Dhuhr, "hh:mm")) &&
      momentNow.isBefore(moment(timings.Asr, "hh:mm"))
    ) {
      prayerIndex = 3;
    } else if (
      momentNow.isAfter(moment(timings.Asr, "hh:mm")) &&
      momentNow.isBefore(moment(timings.Maghrib, "hh:mm"))
    ) {
      prayerIndex = 4;
    } else if (
      momentNow.isAfter(moment(timings.Maghrib, "hh:mm")) &&
      momentNow.isBefore(moment(timings.Isha, "hh:mm"))
    ) {
      prayerIndex = 5;
    } else {
      prayerIndex = 0;
    }

    setNextPrayerIndex(prayerIndex);

    const nextPrayerObject = prayersArray[prayerIndex];
    const nextPrayerTime = timings[nextPrayerObject.key];
    const nextPrayerTimeMoment = moment(nextPrayerTime, "hh:mm");

    let remainingTime = moment(nextPrayerTime, "hh:mm").diff(momentNow);

    if (remainingTime < 0) {
      const midnightDiff = moment("23:59:59", "hh:mm:ss").diff(momentNow);
      const fajrToMidnightDiff = nextPrayerTimeMoment.diff(
        moment("00:00", "hh:mm")
      );
      remainingTime = midnightDiff + fajrToMidnightDiff;
    }

    const durationTime = moment.duration(remainingTime);
    setRemainingTime(
      `${
        durationTime.hours() < 10
          ? "0" + durationTime.hours()
          : durationTime.hours()
      }:${
        durationTime.minutes() < 10
          ? "0" + durationTime.minutes()
          : durationTime.minutes()
      }:${
        durationTime.seconds() < 10
          ? "0" + durationTime.seconds()
          : durationTime.seconds()
      }`
    );
  }

  const obj = {
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  };

  const [ramadan, setRamadan] = useState(obj);
  const [alfitr, setAlfitr] = useState(obj);
  const [aladihii, setAladihii] = useState(obj);
  const [hijri, setHijri] = useState(obj);

  useEffect(() => {
    let interval = setInterval(() => {
      const momentNow = moment();

      const ramadanTime = moment(
        `2024-03-11 ${timings.Sunrise}`,
        "YYYY-MM-DD hh:mm"
      );
      const ramadanDurationTime = moment.duration(ramadanTime.diff(momentNow));
      setRamadan({
        days: Math.floor(ramadanDurationTime.asDays()),
        hours: ramadanDurationTime.hours(),
        minutes: ramadanDurationTime.minutes(),
        seconds: ramadanDurationTime.seconds(),
      });

      const alfitrTime = moment(
        `2024-04-10 ${timings.Sunrise}`,
        "YYYY-MM-DD hh:mm"
      );
      const alfitrDurationTime = moment.duration(alfitrTime.diff(momentNow));
      setAlfitr({
        days: Math.floor(alfitrDurationTime.asDays()),
        hours: alfitrDurationTime.hours(),
        minutes: alfitrDurationTime.minutes(),
        seconds: alfitrDurationTime.seconds(),
      });

      const aladihiiTime = moment(
        `2024-06-16 ${timings.Sunrise}`,
        "YYYY-MM-DD hh:mm"
      );
      const aladihiiDurationTime = moment.duration(
        aladihiiTime.diff(momentNow)
      );
      setAladihii({
        days: Math.floor(aladihiiDurationTime.asDays()),
        hours: aladihiiDurationTime.hours(),
        minutes: aladihiiDurationTime.minutes(),
        seconds: aladihiiDurationTime.seconds(),
      });

      const hijriTime = moment(
        `2024-07-07 ${timings.Sunrise}`,
        "YYYY-MM-DD hh:mm"
      );
      const hijriDurationTime = moment.duration(hijriTime.diff(momentNow));
      setHijri({
        days: Math.floor(hijriDurationTime.asDays()),
        hours: hijriDurationTime.hours(),
        minutes: hijriDurationTime.minutes(),
        seconds: hijriDurationTime.seconds(),
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timings]);
  return (
    <>
      <div className="flex flex-col gap-5 bg-white w-full p-4 rounded-xl">
        <div className="flex justify-between flex-col sm:flex-row text-[28px] leading-[2.5rem] font-bold tracking-widest">
          <p className="text-center">{today}</p>
          <p className="text-center">{data.data}</p>
        </div>
        <div className="flex justify-between text-3xl sm:text-4xl font-bold text-[#049e51]">
          <p>{moment().format("dddd")}</p>
          <p>{data.month}</p>
        </div>
        <div className="main-btn2 py-2.5 px-6 rounded-xl text-white font-bold text-[28px] sm:text-[34px] leading-10 flex flex-col gap-3">
          <div className="flex justify-between gap-7">
            <p className="text-right">الأذان القادم :</p>
            <p className="text-left">
              {prayersArray[nextPrayerIndex].displayName}
            </p>
          </div>
          <div className="flex justify-between gap-7">
            <p className="text-right">المتبقى :</p>
            <p className="text-left">{remainingTime}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-white w-full p-4 rounded-xl">
        <Link
          className="mr-auto cursor-pointer"
          href="/islamicTimes/monthlyPrayers"
        >
          <i className="fa-solid fa-table-cells-large main-btn2 text-white p-2.5 rounded-lg text-2xl"></i>
        </Link>
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          }}
        >
          <SalahTime name="أذان الفجر" time={timings.Fajr} />
          <SalahTime name="وقت الشروق" time={timings.Sunrise} />
          <SalahTime name="أذان الظهر" time={timings.Dhuhr} />
          <SalahTime name="أذان العصر" time={timings.Asr} />
          <SalahTime name="أذان المغرب" time={timings.Maghrib} />
          <SalahTime name="أذان العشاء" time={timings.Isha} />
        </div>
        <div className="flex flex-wrap justify-center sm:justify-between gap-7 items-center">
          <div className="flex items-center gap">
            <Image
              src="https://peco-2.github.io/islamic/other/gps.png"
              className="w-20 h-auto hidden sm:block"
              alt=""
              width={1000}
              height={1000}
            />
            <p className="text-[#049e51] text-3xl font-bold">
              {selectedCity.displayName}
            </p>
          </div>
          <select
            className="main-btn2 py-1.5 font-bold text-white text-2xl rounded-lg focus:outline-none"
            onChange={function (e) {
              citys.forEach((el) => {
                const cityObject = el.cityes.find(
                  (city) => city.apiName === e.target.value
                );
                setSelectedCity(cityObject);
              });
            }}
          >
            {citys.map((e, i) => {
              return (
                <optgroup
                  key={i}
                  label={e.country}
                  data-country={e.english}
                  className="bg-white text-black"
                >
                  {e.cityes.map((el, ind) => (
                    <option
                      className="font-medium"
                      key={ind}
                      value={el.apiName}
                    >
                      {el.displayName}
                    </option>
                  ))}
                </optgroup>
              );
            })}
          </select>
        </div>
      </div>
      <div
        className="islamicBoxs grid gap-5"
        style={{
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <TimesBox name="رمضان" obj={ramadan} />
        <TimesBox name="عيد الفطر" obj={alfitr} />
        <TimesBox name="عيد الأضحي" obj={aladihii} />
        <TimesBox name="العام الهجري الجديد" obj={hijri} />
      </div>
    </>
  );
}

export default Page;
