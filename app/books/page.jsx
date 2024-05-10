"use client";

import { useEffect } from "react";
import BooksTypes from "@/components/BooksTypes";
import BookBoxs from "@/components/BookBoxs";

function Page() {
  useEffect(() => {
    document.getElementById("father").className =
      "content w-full py-4 px-5 pt-24 h-screen flex gap-5";
  }, []);
  return (
    <div className="w-full flex items-center flex-col gap-3">
      <BooksTypes />
      <div className="center-books grid gap-6 overflow-scroll relative w-full">
        <BookBoxs />
      </div>
    </div>
  );
}

export default Page;
