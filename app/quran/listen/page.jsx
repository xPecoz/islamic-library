"use client";
import MainBtn from "@/components/MainBtn";
import Image from "next/image";
import { createContext, useContext, useEffect } from "react";

const src = "https://peco-2.github.io/islamic/listen-quran/";

let fullArr = [];
for (let i = 1; i <= 114; i++) fullArr.push(i);

let hazza = [
  1, 13, 14, 15, 18, 19, 25, 29, 30, 31, 36, 37, 38, 39, 40, 24, 44, 47, 49, 50,
];
for (let i = 50; i <= 57; i++) hazza.push(i);
for (let i = 67; i <= 114; i++) hazza.push(i);

let ghamdi = [
  1, 6, 9, 14, 21, 25, 30, 42, 50, 52, 53, 54, 58, 59, 60, 61, 65, 47, 49, 50,
  77, 85, 86, 88, 91, 93,
];
for (let i = 65; i <= 71; i++) ghamdi.push(i);

let tlb = [1, 25, 34, 38, 39, 44, 45, 46, 47, 70];
for (let i = 55; i <= 61; i++) tlb.push(i);
for (let i = 72; i <= 86; i++) tlb.push(i);

let salman = [1, 2, 36, 46, 56, 58, 59];
for (let i = 61; i <= 114; i++) salman.push(i);

export const lisetnArr = createContext([
  {
    name: "حاتم فريد",
    img: `${src}hatem.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "hatem",
    audios: [fullArr, 11],
  },
  {
    name: "ياسر الدوسري",
    img: `${src}yasser.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "yasser",
    audios: [fullArr, 11],
  },
  {
    name: "أحمد بن علي العجمي",
    img: `${src}ajm.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "ajm",
    audios: [fullArr, 10],
  },
  {
    name: "فارس عباد",
    img: `${src}frs_a.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "frs_a",
    audios: [fullArr, 8],
  },
  {
    name: "ماهر المعيقلي",
    img: `${src}maher.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "maher",
    audios: [fullArr, 12],
  },
  {
    name: "ناصر القطامي",
    img: `${src}qtm.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "qtm",
    audios: [fullArr, 6],
  },
  {
    name: "عبد الباسط عبد الصمد",
    img: `${src}basit_mjwd.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "basit_mjwd",
    audios: [fullArr, 13],
  },
  {
    name: "علي جابر",
    img: `${src}a_jbr.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "a_jbr",
    audios: [fullArr, 11],
  },
  {
    name: "خالد الجليل",
    img: `${src}jleel.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "jleel",
    audios: [fullArr, 10],
  },
  {
    name: "عبدالرحمن السديس",
    img: `${src}sds.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "sds",
    audios: [fullArr, 8],
  },
  {
    name: "إدريس أبكر",
    img: `${src}abkr.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "abkr",
    audios: [fullArr, 6],
  },
  {
    name: "محمد اللحيدان",
    img: `${src}lhdan.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "lhdan",
    audios: [fullArr, 8],
  },
  {
    name: "محمد صديق المنشاوي",
    img: `${src}minsh.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "minsh",
    audios: [fullArr, 6],
  },
  {
    name: "مشاري راشد العفاسي",
    img: `${src}afs.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "afs",
    audios: [fullArr, 8],
  },
  {
    name: "عبدالرحمن العوسي",
    img: `${src}aloosi.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "aloosi",
    audios: [fullArr, 6],
  },
  {
    name: "مصطفى إسماعيل",
    img: `${src}mustafa.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "mustafa",
    audios: [fullArr, 8],
  },
  {
    name: "علي الحذيفي",
    img: `${src}hthfi.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "hthfi",
    audios: [fullArr, 9],
  },
  {
    name: "سعود ابراهيم شريم",
    img: `${src}shur.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "shur",
    audios: [fullArr, 7],
  },
  {
    name: "بندر بليله",
    img: `${src}balilah.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "balilah",
    audios: [fullArr, 6],
  },
  {
    name: "عبدالله خياط",
    img: `${src}kyat.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "kyat",
    audios: [fullArr, 12],
  },
  {
    name: "عبدالله عواد الجهني",
    img: `${src}jhn.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "jhn",
    audios: [fullArr, 13],
  },
  {
    name: "محمد أيوب",
    img: `${src}ayyub.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "ayyub",
    audios: [fullArr, 8],
  },
  {
    name: "منصور السالمي",
    img: `${src}mansor.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "mansor",
    audios: [fullArr, 14],
  },
  {
    name: "أحمد النفيس",
    img: `${src}nufais.jpg`,
    type: "حفص عن عاصم",
    length: 114,
    nameEnglish: "nufais",
    audios: [fullArr, 16],
  },
  {
    name: "هزاع البلوشي",
    img: `${src}hazza.jpg`,
    type: "حفص عن عاصم",
    length: 76,
    nameEnglish: "hazza",
    audios: [hazza, 11],
  },
  {
    name: "سلمان العتيبي",
    img: `${src}salman.jpg`,
    type: "حفص عن عاصم",
    length: 61,
    nameEnglish: "salman",
    audios: [salman, 11],
  },
  {
    name: "خالد الغامدي",
    img: `${src}ghamdi.jpg`,
    type: "حفص عن عاصم",
    length: 33,
    nameEnglish: "ghamdi",
    audios: [ghamdi, 6],
  },
  {
    name: "صالح آل طالب",
    img: `${src}tlb.jpg`,
    type: "حفص عن عاصم",
    length: 32,
    nameEnglish: "tlb",
    audios: [tlb, 9],
  },
]);

function Page() {
  let arr = useContext(lisetnArr);
  useEffect(() => {
    document.getElementById("father").className =
      "content w-full py-4 px-5 pt-24 h-screen flex gap-5";
  }, []);
  return (
    <div className="overflow-scroll w-full h-full p-1">
      <table className="quran-table bg-white rounded-lg p-2 w-full">
        <thead>
          <tr className="border-2 border-transparent border-b-border">
            <td className="text-2xl text-main text-center font-bold p-3">
              إسم القارئ
            </td>
            <td className="text-2xl text-main text-center font-bold p-3">
              عدد السور المتوفرة
            </td>
            <td className="text-2xl text-main text-center font-bold p-3">
              نوع الرواية
            </td>
            <td className="text-2xl text-main text-center font-bold p-3">
              الإستماع
            </td>
          </tr>
        </thead>
        <tbody>
          {arr.map(function (e, i) {
            return (
              <tr key={i} className="h-20 duration-300">
                <td className="text-2xl text-center font-semibold w-96">
                  <div className="relative pr-7">
                    {e.name}
                    <Image
                      src={e.img}
                      className="w-16 h-16 object-cover rounded-full absolute top-1/2 right-2 -translate-y-1/2"
                      alt={e.name}
                      width={1000}
                      height={1000}
                    />
                  </div>
                </td>
                <td className="text-2xl text-center font-semibold p-3">
                  {e.length}
                </td>
                <td className="text-2xl text-center font-semibold p-3">
                  {e.type}
                </td>
                <td className="text-2xl text-center font-semibold p-3">
                  <MainBtn
                    href={"/quran/listen/" + e.nameEnglish}
                    text="الإستماع"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Page;
