/* eslint-disable @next/next/no-page-custom-font */
import { Tajawal } from "next/font/google";
import "./style.css";
import "./all.min.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import logo from "@/public/Logo.png";

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
});
export const metadata = {
  title: "مكتبة الإسلام",
  description:
    "منصة إلكترونية تحتوي علي خدمات للدين الإسلامي مثل القرآن و مواقيت الصلاة و المناسبات الدينية و خطب و الأحاديث و الأذكار و الأدعية وعمل قريب سوف يتم توفير دروس دينية و فتاوي إسلامية صحيحة",
  icons: {
    icon: logo.src,
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={" min-h-screen bg-body"}>
        <Header />
        <div
          className="relative w-full py-4 px-5 pt-24 min-h-screen flex items-center gap-5"
          id="father"
          dir="rtl"
        >
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
