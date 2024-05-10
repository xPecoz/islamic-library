"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

function Header() {
  const location = usePathname();

  useEffect(() => {
    if (location.hash) window.open(`${window.location.href}`, "_parent");
  }, []);
  return (
    <>
      <header className="flex items-center justify-between py-3 sm:py-4 px-2 md:px-5 fixed w-full top-0 z-40 bg-white">
        <div className="flex">
          <i className="uil uil-search text-2xl font-bold text-white bg-btn w-10 sm:w-12 h-12 flex items-center justify-center cursor-pointer rounded-l"></i>
          <input
            type="text"
            className="border-0 h-12 w-36 sm:w-60 text-lg p-3 rounded-md bg-body focus:outline-none"
            placeholder="البحث"
            dir="rtl"
          />
        </div>
        <Link
          href="/"
          className="text-2xl max-[400px]:text-xl sm:text-3xl font-bold ml-2 text-main text-center"
        >
          مكتبة الاسلام
        </Link>
      </header>
    </>
  );
}

export default Header;
