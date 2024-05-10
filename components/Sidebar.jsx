"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

let li = [
  {
    href: "/",
    title: "الرئيسية",
  },
  {
    href: "/quran",
    title: "القرآن الكريم",
  },
  {
    href: "/islamicTimes",
    title: "مواقيت إسلامية",
  },
  {
    href: "/khatab",
    title: "خطب",
  },
  {
    href: "/hadis",
    title: "الاحاديث",
  },
  {
    href: "/books",
    title: "الكتب",
  },
  {
    href: "/azkar",
    title: "الاذكار",
  },
  {
    href: "/pray",
    title: "الادعية",
  },
  {
    href: "/ques",
    title: "سؤال وجواب",
  },
  {
    href: "/developers",
    title: "عن المطورين",
  },
  {
    href: "/contact",
    title: "اتصل بنا",
  },
];

function Sidebar() {
  const location = usePathname();
  useEffect(() => {
    let btnSidebar = document.getElementById("btnSidebar");
    let sidebar = document.querySelector("aside");
    let content = document.querySelectorAll("body > *:not(aside)");

    content.forEach((ele) => {
      ele.onclick = function () {
        sidebar.classList.add("aside-show");
        btnSidebar.classList.add("uil-bars", "-left-10");
        btnSidebar.classList.remove("uil-times", "-left-7");
      };
    });
  }, [location]);
  return (
    <>
      <aside className="aside-show bg-white shadow-2xl rounded-xl fixed z-30 duration-300 top-24 focus:outline-none">
        <button
          className="uil uil-bars bg-sidebar h-14 w-14 text-3xl text-white rounded-full absolute -left-10 top-1/2 -translate-y-1/2 z-10 border-8 border-body duration-300"
          id="btnSidebar"
          onClick={function (e) {
            let btn = e.currentTarget;
            let sidebar = document.querySelector("aside");

            btn.classList.toggle("uil-bars");
            btn.classList.toggle("uil-times");
            btn.classList.toggle("-left-7");
            btn.classList.toggle("-left-10");

            sidebar.classList.toggle("aside-show");
          }}
        ></button>
        <ul className="links-menu flex flex-col gap-6 text-lg font-bold py-3 px-4 max-h-full overflow-y-auto">
          {li.map(function (e, i) {
            return (
              <li key={i} className="flex items-center">
                <Link
                  href={e.href}
                  className={`text-black rounded-lg relative block py-1 px-2 w-full transition-all duration-300 hover:text-white hover:bg-sidebar before:content-[""] before:absolute before:-right-2 before:top-0 before:h-full before:bg-sidebar before:rounded-[5px]`}
                  onClick={(e) => {
                    let links = document.querySelectorAll(".links-menu li a");
                    let currentLink = e.currentTarget;

                    links.forEach((link) => link.classList.remove("active"));
                    currentLink.classList.add("active");
                  }}
                >
                  {e.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
