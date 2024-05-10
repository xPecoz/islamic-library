"use client";

import Image from "next/image";
import Link from "next/link";
import { createContext, useEffect } from "react";
import quran from "@/public/quran.png";

export const quranSuras = createContext([
  {
    revelationType: "Meccan",
    numberOfAyahs: 7,
    name: "سُورَةُ ٱلْفَاتِحَةِ",
    number: 1,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 286,
    name: "سُورَةُ البَقَرَةِ",
    number: 2,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 200,
    name: "سُورَةُ آلِ عِمۡرَانَ",
    number: 3,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 176,
    name: "سُورَةُ النِّسَاءِ",
    number: 4,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 120,
    name: "سُورَةُ المَائـِدَةِ",
    number: 5,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 165,
    name: "سُورَةُ الأَنۡعَامِ",
    number: 6,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 206,
    name: "سُورَةُ الأَعۡرَافِ",
    number: 7,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 75,
    name: "سُورَةُ الأَنفَالِ",
    number: 8,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 129,
    name: "سُورَةُ التَّوۡبَةِ",
    number: 9,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 109,
    name: "سُورَةُ يُونُسَ",
    number: 10,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 123,
    name: "سُورَةُ هُودٍ",
    number: 11,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 111,
    name: "سُورَةُ يُوسُفَ",
    number: 12,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 43,
    name: "سُورَةُ الرَّعۡدِ",
    number: 13,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 52,
    name: "سُورَةُ إِبۡرَاهِيمَ",
    number: 14,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 99,
    name: "سُورَةُ الحِجۡرِ",
    number: 15,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 128,
    name: "سُورَةُ النَّحۡلِ",
    number: 16,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 111,
    name: "سُورَةُ الإِسۡرَاءِ",
    number: 17,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 110,
    name: "سُورَةُ الكَهۡفِ",
    number: 18,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 98,
    name: "سُورَةُ مَرۡيَمَ",
    number: 19,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 135,
    name: "سُورَةُ طه",
    number: 20,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 112,
    name: "سُورَةُ الأَنبِيَاءِ",
    number: 21,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 78,
    name: "سُورَةُ الحَجِّ",
    number: 22,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 118,
    name: "سُورَةُ المُؤۡمِنُونَ",
    number: 23,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 64,
    name: "سُورَةُ النُّورِ",
    number: 24,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 77,
    name: "سُورَةُ الفُرۡقَانِ",
    number: 25,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 227,
    name: "سُورَةُ الشُّعَرَاءِ",
    number: 26,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 93,
    name: "سُورَةُ النَّمۡلِ",
    number: 27,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 88,
    name: "سُورَةُ القَصَصِ",
    number: 28,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 69,
    name: "سُورَةُ العَنكَبُوتِ",
    number: 29,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 60,
    name: "سُورَةُ الرُّومِ",
    number: 30,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 34,
    name: "سُورَةُ لُقۡمَانَ",
    number: 31,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 30,
    name: "سُورَةُ السَّجۡدَةِ",
    number: 32,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 73,
    name: "سُورَةُ الأَحۡزَابِ",
    number: 33,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 54,
    name: "سُورَةُ سَبَإٍ",
    number: 34,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 45,
    name: "سُورَةُ فَاطِرٍ",
    number: 35,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 83,
    name: "سُورَةُ يسٓ",
    number: 36,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 182,
    name: "سُورَةُ الصَّافَّاتِ",
    number: 37,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 88,
    name: "سُورَةُ صٓ",
    number: 38,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 75,
    name: "سُورَةُ الزُّمَرِ",
    number: 39,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 85,
    name: "سُورَةُ غَافِرٍ",
    number: 40,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 54,
    name: "سُورَةُ فُصِّلَتۡ",
    number: 41,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 53,
    name: "سُورَةُ الشُّورَىٰ",
    number: 42,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 89,
    name: "سُورَةُ الزُّخۡرُفِ",
    number: 43,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 59,
    name: "سُورَةُ الدُّخَانِ",
    number: 44,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 37,
    name: "سُورَةُ الجَاثِيَةِ",
    number: 45,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 35,
    name: "سُورَةُ الأَحۡقَافِ",
    number: 46,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 38,
    name: "سُورَةُ مُحَمَّدٍ",
    number: 47,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 29,
    name: "سُورَةُ الفَتۡحِ",
    number: 48,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 18,
    name: "سُورَةُ الحُجُرَاتِ",
    number: 49,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 45,
    name: "سُورَةُ قٓ",
    number: 50,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 60,
    name: "سُورَةُ الذَّارِيَاتِ",
    number: 51,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 49,
    name: "سُورَةُ الطُّورِ",
    number: 52,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 62,
    name: "سُورَةُ النَّجۡمِ",
    number: 53,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 55,
    name: "سُورَةُ القَمَرِ",
    number: 54,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 78,
    name: "سُورَةُ الرَّحۡمَٰن",
    number: 55,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 96,
    name: "سُورَةُ الوَاقِعَةِ",
    number: 56,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 29,
    name: "سُورَةُ الحَدِيدِ",
    number: 57,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 22,
    name: "سُورَةُ المُجَادلَةِ",
    number: 58,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 24,
    name: "سُورَةُ الحَشۡرِ",
    number: 59,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 13,
    name: "سُورَةُ المُمۡتَحنَةِ",
    number: 60,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 14,
    name: "سُورَةُ الصَّفِّ",
    number: 61,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 11,
    name: "سُورَةُ الجُمُعَةِ",
    number: 62,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 11,
    name: "سُورَةُ المُنَافِقُونَ",
    number: 63,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 18,
    name: "سُورَةُ التَّغَابُنِ",
    number: 64,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 12,
    name: "سُورَةُ الطَّلَاقِ",
    number: 65,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 12,
    name: "سُورَةُ التَّحۡرِيمِ",
    number: 66,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 30,
    name: "سُورَةُ المُلۡكِ",
    number: 67,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 52,
    name: "سُورَةُ القَلَمِ",
    number: 68,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 52,
    name: "سُورَةُ الحَاقَّةِ",
    number: 69,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 44,
    name: "سُورَةُ المَعَارِجِ",
    number: 70,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 28,
    name: "سُورَةُ نُوحٍ",
    number: 71,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 28,
    name: "سُورَةُ الجِنِّ",
    number: 72,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 20,
    name: "سُورَةُ المُزَّمِّلِ",
    number: 73,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 56,
    name: "سُورَةُ المُدَّثِّرِ",
    number: 74,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 40,
    name: "سُورَةُ القِيَامَةِ",
    number: 75,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 31,
    name: "سُورَةُ الإِنسَانِ",
    number: 76,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 50,
    name: "سُورَةُ المُرۡسَلَاتِ",
    number: 77,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 40,
    name: "سُورَةُ النَّبَإِ",
    number: 78,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 46,
    name: "سُورَةُ النَّازِعَاتِ",
    number: 79,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 42,
    name: "سُورَةُ عَبَسَ",
    number: 80,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 29,
    name: "سُورَةُ التَّكۡوِيرِ",
    number: 81,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 19,
    name: "سُورَةُ الانفِطَارِ",
    number: 82,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 36,
    name: "سُورَةُ المُطَفِّفِينَ",
    number: 83,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 25,
    name: "سُورَةُ الانشِقَاقِ",
    number: 84,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 22,
    name: "سُورَةُ البُرُوجِ",
    number: 85,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 17,
    name: "سُورَةُ الطَّارِقِ",
    number: 86,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 19,
    name: "سُورَةُ الأَعۡلَىٰ",
    number: 87,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 26,
    name: "سُورَةُ الغَاشِيَةِ",
    number: 88,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 30,
    name: "سُورَةُ الفَجۡرِ",
    number: 89,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 20,
    name: "سُورَةُ البَلَدِ",
    number: 90,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 15,
    name: "سُورَةُ الشَّمۡسِ",
    number: 91,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 21,
    name: "سُورَةُ اللَّيۡلِ",
    number: 92,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 11,
    name: "سُورَةُ الضُّحَىٰ",
    number: 93,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 8,
    name: "سُورَةُ الشَّرۡحِ",
    number: 94,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 8,
    name: "سُورَةُ التِّينِ",
    number: 95,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 19,
    name: "سُورَةُ العَلَقِ",
    number: 96,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 5,
    name: "سُورَةُ القَدۡرِ",
    number: 97,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 8,
    name: "سُورَةُ البَيِّنَةِ",
    number: 98,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 8,
    name: "سُورَةُ الزَّلۡزَلَةِ",
    number: 99,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 11,
    name: "سُورَةُ العَادِيَاتِ",
    number: 100,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 11,
    name: "سُورَةُ القَارِعَةِ",
    number: 101,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 8,
    name: "سُورَةُ التَّكَاثُرِ",
    number: 102,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 3,
    name: "سُورَةُ العَصۡرِ",
    number: 103,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 9,
    name: "سُورَةُ الهُمَزَةِ",
    number: 104,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 5,
    name: "سُورَةُ الفِيلِ",
    number: 105,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 4,
    name: "سُورَةُ قُرَيۡشٍ",
    number: 106,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 7,
    name: "سُورَةُ المَاعُونِ",
    number: 107,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 3,
    name: "سُورَةُ الكَوۡثَرِ",
    number: 108,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 6,
    name: "سُورَةُ الكَافِرُونَ",
    number: 109,
  },
  {
    revelationType: "Medinan",
    numberOfAyahs: 3,
    name: "سُورَةُ النَّصۡرِ",
    number: 110,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 5,
    name: "سُورَةُ المَسَدِ",
    number: 111,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 4,
    name: "سُورَةُ الإِخۡلَاصِ",
    number: 112,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 5,
    name: "سُورَةُ الفَلَقِ",
    number: 113,
  },
  {
    revelationType: "Meccan",
    numberOfAyahs: 6,
    name: "سُورَةُ النَّاسِ",
    number: 114,
  },
]);

function Quran() {
  useEffect(() => {
    document.getElementById("father").className =
      "relative w-full py-4 px-5 pt-24 min-h-screen flex items-center gap-5";
  }, []);

  return (
    <div className="w-full flex items-center justify-center gap-10 flex-wrap">
      <div className="bg-white rounded-lg p-5 flex flex-col gap-7 max-w-[520px] shadow-box">
        <div className="relative overflow-hidden rounded-lg before:absolute before:bottom-0 before:right-0 before:w-full before:h-full before:opacity-60 before:bg-gradient-to-t before:from-main">
          <Image
            src="https://peco-2.github.io/islamic/quran/quran.jpg"
            alt=""
            width={1000}
            height={1000}
            className="object-cover w-auto h-auto"
          />
        </div>
        <p className="text-xl font-medium text-center">
          (&quot;من استمع إلى آية من كتاب الله كتب له حسنة مضاعفة، ومن تلاها
          كانت لهنوراً يوم القيامة&quot;)
        </p>
        <Link
          href="/quran/listen"
          className="flex items-center justify-center gap-3 bg-sidebar rounded-xl p-2 text-white text-xl md:text-2xl font-semibold"
        >
          الإستماع إلي القرآن
          <i className="fa-solid fa-headphones clear-left text-3xl"></i>
        </Link>
      </div>
      <div className="bg-white rounded-lg p-5 flex flex-col gap-7 max-w-[520px] shadow-box">
        <div className="relative overflow-hidden rounded-lg before:absolute before:bottom-0 before:right-0 before:w-full before:h-full before:opacity-60 before:bg-gradient-to-t before:from-main">
          <Image
            src="https://peco-2.github.io/islamic/quran/quran-2.jpg"
            alt=""
            height={349}
            width={1000}
            className="object-cover h-[349px] w-auto"
          />
        </div>
        <p className="text-xl font-medium text-center">
          (&quot;عليك بذكر الله وتلاوة القرآن فانه روحك في السماء وذكرك في
          الأرض&quot;)
        </p>
        <Link
          href="/quran/chsSura"
          className="flex items-center justify-center gap-3 bg-sidebar rounded-xl p-2 text-white text-xl md:text-2xl font-semibold"
        >
          قراءة القرآن
          <Image className="w-8 h-8 brightness-[40]" src={quran} alt="" />
        </Link>
      </div>
    </div>
  );
}
const generateMetadata = () => {
  return {
    title: "مكتبة الإسلام | القرآن الكريم",
    description:
      "هل ترغب بالإستماع إلي القرآن الكريم بكل الشيوخ أم تريد قرآن القرآن بتوافير العديد من الخدمات ؟",
  };
};
export default Quran;
// export { generateMetadata };
