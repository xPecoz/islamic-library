"use client";

import axios from "axios";

function Page() {
  function addNew(e) {
    e.preventDefault();

    const text = document.getElementById("text").value,
      type = document.getElementById("type").value,
      typeEn = document.getElementById("typeEn").value,
      explan = document.getElementById("explan").value,
      sourse = document.getElementById("sourse").value;

    axios.post(
      "http://localhost/isamic-dasboard/dashboard/hadis/addHadis.php",
      {
        text: text,
        type: type,
        typeEn: typeEn,
        explan: explan,
        sourse: sourse,
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
      <textarea
        id="text"
        placeholder="الحديث"
        className="border border-black"
        name="text"
        required
      ></textarea>
      <input
        type="text"
        id="type"
        placeholder="نوع الحديث بالعربي"
        className="border border-black"
        name="type"
        required
      />
      <input
        type="text"
        id="typeEn"
        placeholder="نوع الحديث بالانجليزي"
        className="border border-black"
        name="typeEn"
        required
      />
      <textarea
        id="explan"
        placeholder="الشرح"
        className="border border-black"
        name="explan"
        required
      ></textarea>
      <textarea
        id="sourse"
        placeholder="المصدر"
        className="border border-black"
        name="sourse"
        required
      />
      <button
        type="submit"
        className="border border-black block border-solid"
        name="submit"
      >
        إضافة
      </button>
    </form>
  );
}

export default Page;
