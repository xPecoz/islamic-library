"use client";
import { useEffect, useState } from "react";
import Choose from "./Choose";
import axios from "axios";

// let chooseArr = [
//   {
//     id: 1,
//     name: "أدعية القران",
//     href: "/pray#quran",
//   },
//   {
//     id: 2,
//     name: "أدعية للصلاة",
//     href: "/pray#prayer",
//   },
//   {
//     id: 3,
//     name: "العشرة الأوائل و الحج",
//     href: "/pray#haj",
//   },
//   {
//     id: 4,
//     name: "أدعية الصوم و رمضان",
//     href: "/pray#ramadan",
//   },
//   {
//     id: 5,
//     name: "أدعية العلم",
//     href: "/pray#elm",
//   },
//   {
//     id: 6,
//     name: "أدعية السفر",
//     href: "/pray#travel",
//   },
//   {
//     id: 7,
//     name: "أدعية منوعة",
//     href: "/pray#different",
//   },
// ];

function ChoosePray() {
  const [choose, setChoose] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/isamic-dasboard/apis/pray/prayTypes.php")
      .then((res) => setChoose(res.data));
  }, []);

  return choose.map((e, i) => (
    <Choose key={i} id={i + 1} name={e.type} href={`/pray#${e.typeEn}`} />
  ));
}

export default ChoosePray;
