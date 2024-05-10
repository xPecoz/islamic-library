"use client";
import React, { useEffect, useState } from "react";
import MainTitle from "@/components/MainTitle";
import HadisCatogory from "@/components/HadisCatogory";
import MainQuranTitle from "@/components/MainQuranTitle";
import Popup from "@/components/Popup";
import Choose from "@/components/Choose";
import axios from "axios";

function Page() {
  const [hadis, setHadis] = useState([]);
  const [choose, setChoose] = useState([]);

  useEffect(() => {
    document.getElementById("father").className =
      "content w-full py-4 px-5 pt-24 h-auto sm:h-screen overflow-auto flex flex-col-reverse md:flex-row gap-5";

    axios
      .get("http://localhost/isamic-dasboard/apis/hadis/hadis.php")
      .then((res) => {
        const data = res.data;
        setHadis(data);

        let arr = [];
        data.forEach((e) => {
          arr.push({ href: `/hadis#${e.id}`, name: e.title });
        });
        setChoose(arr);
      });
  }, []);

  let [type, setType] = useState("");
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  useEffect(() => {
    document
      .getElementById("closePopup")
      .addEventListener("click", function () {
        setTimeout(() => {
          setType("");
          setTitle("");
          setContent("");
        }, 300);
      });
  }, []);
  return (
    <>
      <div className="center-listen md:opacity-50 bg-white rounded-md p-5 overflow-y-scroll w-full scroll-smooth">
        {hadis.map(function (e, i) {
          return (
            <div key={i} id={e.id}>
              <MainQuranTitle title={e.title} id={i + 1} />
              <div className="mid-hadis">
                <HadisCatogory title={e.title} />
                {e.content.map(function (ele, ind) {
                  return (
                    <React.Fragment key={ind}>
                      <div className="hadis my-3 text-lg">
                        <p
                          className="text-2xl font-medium leading-loose text-center"
                          dangerouslySetInnerHTML={{ __html: ele.text }}
                        ></p>
                        <div className="flex justify-center gap-5 mt-4">
                          <button
                            className="main-btn block text-white rounded-md py-2 px-3 font-bold transition-all duration-500 text-center text-lg active:scale-90 w-40"
                            onClick={function () {
                              let popup = document.getElementById("popup");
                              popup.classList.remove("translate-x-full");

                              setType("شرح حديث");
                              setTitle(ele.text);
                              setContent(ele.explan);
                            }}
                          >
                            <p>الشرح</p>
                          </button>
                          <button
                            className="main-btn block text-white rounded-md py-2 px-3 font-bold transition-all duration-500 text-center text-lg active:scale-90 w-40"
                            onClick={function () {
                              let popup = document.getElementById("popup");
                              popup.classList.remove("translate-x-full");

                              setType("مصدر حديث");
                              setTitle(ele.text);
                              setContent(ele.sourse);
                            }}
                          >
                            <p>المصدر</p>
                          </button>
                          <button
                            className="copy-btn h-fit p-2 w-12 border-0 text-white rounded-md text-xl font-bold cursor-pointer duration-300 active:scale-90"
                            onClick={(e) => {
                              const element = e.currentTarget;

                              navigator.clipboard
                                .writeText(ele.text)
                                .then(() => (element.textContent = "تم!ّ"))
                                .catch(() => (element.textContent = "فشل!ّ"));
                              setTimeout(() => {
                                element.innerHTML = `<i class="uil uil-copy"></i>`;
                              }, 1500);
                            }}
                          >
                            <i className="uil uil-copy"></i>
                          </button>
                        </div>
                      </div>
                      {ind + 1 !== e.content.length && <hr />}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          );
        })}
        <Popup type={type} title={title} content={content} />
      </div>
      <div className="left-listen opacity-100 bg-white rounded-md p-5 w-full max-w-full md:max-w-lg min-h-full md:max-h-full md:fixed left-4 md:shadow-2xl flex flex-col gap-2 duration-300">
        <button
          className="bg-sidebar h-14 w-14 text-3xl text-white rounded-full absolute left-4 top-3 z-10 border-8 border-body duration-300 hidden md:grid place-content-center"
          onClick={function (e) {
            const btn = e.currentTarget;
            let container = document.querySelector(".left-listen");
            let show = document.querySelector(".center-listen");

            container.classList.toggle("-translate-x-full");
            show.classList.toggle("md:opacity-50");
            btn.classList.toggle("-right-10");

            btn.children[0].classList.toggle("uil-bars");
            btn.children[0].classList.toggle("uil-times");
          }}
        >
          <i className="uil uil-times"></i>
        </button>

        <MainTitle text="اختر نوع الحديث" />
        <div className="max-h-full overflow-scroll">
          {choose.map((e, i) => (
            <Choose key={i} id={i + 1} name={e.name} href={e.href} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;
