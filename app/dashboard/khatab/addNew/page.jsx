"use client";

import axios from "axios";

function Page() {
  function addNew(e) {
    e.preventDefault();

    const name = document.getElementById("name").value,
      nameEn = document.getElementById("nameEn").value,
      img = document.getElementById("img").value,
      videoId = document.getElementById("videoId").value;

    axios.post(
      "http://localhost/isamic-dasboard/dashboard/khatab/khatab.php",
      {
        name: name,
        nameEn: nameEn,
        img: img,
        videoId: JSON.stringify([videoId]),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  return (
    <form className="flex flex-col gap-3 items-center w-full" onSubmit={addNew}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="إسم الخاطب"
        className="border border-black"
        required
      />
      <input
        type="text"
        name="nameEn"
        id="nameEn"
        placeholder="إسم الخاطب بالغة الإنجليزية"
        className="border border-black"
        required
      />
      <input
        type="url"
        name="img"
        id="img"
        placeholder="الصورة"
        className="border border-black"
        required
      />
      <input
        type="text"
        name="videoId"
        id="videoId"
        placeholder="ال id الخاص بالخطبة من اليوتيوب"
        className="border border-black"
        required
      />
      <button
        type="submit"
        name="submit"
        className="border border-black block border-solid"
      >
        إضافة
      </button>
    </form>
  );
}

export default Page;
