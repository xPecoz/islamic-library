"use client";
import Image from "next/image";
import { useEffect } from "react";
import Icon from "@/components/Icon";
import Skill from "@/components/Skill";

function Home() {
  useEffect(() => {
    document.getElementById("father").className =
      "relative w-full py-4 px-5 pt-24 min-h-screen flex gap-5";
  }, []);
  return (
    <div className="w-full flex justify-around flex-col md:flex-row items-center gap-5">
      <div className="box-developer bg-[#fff] shadow-box z-0 relative px-[10px] pt-10 pb-[10px] overflow-hidden rounded-2xl max-w-[450px]">
        <div className="green-div w-full h-[165px] sm:h-[220px] bg-[#06b474] absolute -z-10 left-1/2 -translate-x-1/2 top-0"></div>
        <div className="overflow-hidden rounded-full w-fit m-auto border-10 border-[#f1f5f9]">
          <Image
            src={"https://peco-2.github.io/islamic/other/peco.png"}
            alt="Abdulrahman Mohammed"
            className="hover:scale-[1.2] duration-300 w-[175px] sm:w-[250px] object-cover"
            width={1000}
            height={1000}
          />
        </div>
        <h1 className="text-center font-bold text-[28px]">
          Abdulrahman Mohammed
        </h1>
        <h1 className="text-center font-bold text-[22px] text-[#686868]">
          Full Stack Developer
        </h1>
        <div className="flex justify-center gap-5 mt-[10px]">
          <Icon
            href="https://web.facebook.com/messages/t/100090977772478"
            icon="facebook-messenger-alt"
          />
          <Icon href="https://www.instagram.com/xpecoz/" icon="instagram" />
          <Icon href="https://web.facebook.com/xPecoz" icon="facebook-f" />
        </div>
        <div className="w-full  bg[#f5f5f5]">
          <h2 className="text-left text-lg font-bold m-2">Skills</h2>
          <div className="flex justify-center flex-row-reverse gap-x-[30px] gap-y-[10px] flex-wrap">
            <Skill name="HTML" color="e5532d" />
            <Skill name="CSS" color="254bdd" />
            <Skill name="JS" color="e3c843" />
            <Skill name="React" color="61dbfb" />
            <Skill name="NextJS" color="000" />
            <Skill name="PHP" color="556096" />
            <Skill name="SQL" color="e59208" />
            <Skill name="SCSS" color="bf4080" />
            <Skill name="Pug" color="56332b" />
            <Skill name="Tailwind" color="3fbff9" />
            <Skill name="Bootstrap" color="7109f5" />
          </div>
        </div>
      </div>
      <div className="box-developer bg-[#fff] shadow-box z-0 relative px-[10px] pt-10 pb-[10px] overflow-hidden rounded-2xl max-w-[450px]">
        <div className="green-div w-full h-[165px] sm:h-[220px] bg-[#06b474] absolute -z-10 left-1/2 -translate-x-1/2 top-0"></div>
        <div className="overflow-hidden rounded-full w-fit m-auto border-10 border-[#f1f5f9]">
          <Image
            src={"https://peco-2.github.io/islamic/other/ravox.png"}
            alt="Ahmed Mohammed"
            className="hover:scale-[1.2] duration-300 w-[175px] sm:w-[250px] object-cover"
            width={1000}
            height={1000}
          />
        </div>
        <h1 className="text-center font-bold text-[28px]">Ahmed Sallam</h1>
        <h1 className="text-center font-bold text-[22px] text-[#686868]">
          Full Stack & Graphic Designer
        </h1>
        <div className="flex justify-center gap-5 mt-[10px]">
          <Icon
            href="https://facebook.com/messages/t/100063838584499"
            icon="facebook-messenger-alt"
          />
          <Icon href="https://instagram.com/ahmedsallam404/" icon="instagram" />
          <Icon href="https://facebook.com/xravox" icon="facebook-f" />
        </div>
        <div className="w-full bg[#f5f5f5]">
          <h2 className="text-left text-lg font-bold m-2">Skills</h2>
          <div className="flex justify-center flex-row-reverse gap-x-[30px] gap-y-[10px] flex-wrap">
            <Skill name="HTML" color="e5532d" />
            <Skill name="CSS" color="254bdd" />
            <Skill name="JS" color="e3c843" />
            <Skill name="React" color="61dbfb" />
            <Skill name="Nodejs" color="87cf30" />
            <Skill name="MongoDB" color="199555" />
            <Skill name="Tailwind" color="3fbff9" />
            <Skill name="Bootstrap" color="7109f5" />
            <Skill name="PS" color="08253c" />
            <Skill name="AI" color="390808" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
