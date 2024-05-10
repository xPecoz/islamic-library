"use client";
import { createContext, useContext, useEffect } from "react";

export const typesContext = createContext([
  {
    id: 1,
    type: "الكل",
    dateType: "All",
  },
  {
    id: 2,
    type: "العلوم الشرعية",
    dateType: "Legitimacy",
  },
  {
    id: 3,
    type: "التاريخ الإسلامي",
    dateType: "History",
  },
  {
    id: 4,
    type: "العقيدة",
    dateType: "Eaqida",
  },
  {
    id: 5,
    type: "الطفل المسلم",
    dateType: "Child",
  },
]);

function BooksTypes() {
  useEffect(function () {
    let p1 = document.getElementById("1");

    if (localStorage.getItem("showType")) {
      let showType = localStorage.getItem("showType");
      let p = document.getElementById(showType);

      if (p !== null) {
        document.querySelectorAll(".chsBook p").forEach((el) => {
          el.classList.remove("bg-sidebar", "text-white");
          p1.classList.add("bg-white");
        });
        p.classList.add("bg-sidebar", "text-white");
        p.classList.remove("bg-white");

        document.querySelectorAll(".center-books .box").forEach(function (ele) {
          if (ele.dataset.type.indexOf(p.dataset.type) >= 0) {
            ele.classList.add("flex");
            ele.classList.remove("hidden");
          } else {
            ele.classList.remove("flex");
            ele.classList.add("hidden");
          }
        });
      } else {
        p1.classList.add("bg-sidebar", "text-white");
        p1.classList.remove("bg-white");
      }
    } else {
      p1.classList.add("bg-sidebar", "text-white");
      p1.classList.remove("bg-white");
    }
  }, []);

  const types = useContext(typesContext);
  return (
    <div className="chsBook flex justify-center flex-wrap gap-6">
      {types.map(function (e) {
        return (
          <p
            key={e.id}
            id={e.id}
            data-type={e.dateType}
            className="bg-white text-lg font-bold py-2 px-4 rounded-md cursor-pointer duration-300"
            onClick={function (ev) {
              let btn = ev.currentTarget;

              document.querySelectorAll(".chsBook p").forEach((el) => {
                el.classList.remove("bg-sidebar", "text-white");
                el.classList.add("bg-white");
              });
              btn.classList.add("bg-sidebar", "text-white");
              btn.classList.remove("bg-white");
              localStorage.setItem("showType", btn.id);

              document
                .querySelectorAll(".center-books .box")
                .forEach(function (ele) {
                  if (ele.dataset.type.indexOf(btn.dataset.type) >= 0) {
                    ele.classList.add("flex");
                    ele.classList.remove("hidden");
                  } else {
                    ele.classList.remove("flex");
                    ele.classList.add("hidden");
                  }
                });
            }}
          >
            {e.type}
          </p>
        );
      })}
    </div>
  );
}

export default BooksTypes;
