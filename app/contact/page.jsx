"use client";
import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  useEffect(() => {
    document.getElementById("father").className =
      "content center-mobile w-full py-4 px-5 pt-24 h-screen flex gap-5";
  }, []);
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg").value;

    if (
      name &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
      msg
    ) {
      emailjs
        .sendForm(
          "service_hyqzcve",
          "template_ugtxsud",
          form.current,
          "S2B7hAYt3xESs5D5N"
        )
        .then(
          (result) => alert("تم الإرسال بنجاح"),
          (error) => console.log(error.text)
        );
    } else {
      alert("البيانات غير سليمة");
    }
  }
  return (
    <form
      className="contact w-full h-full flex justify-center items-center"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="flex flex-col gap-6 bg-white p-12 rounded-md w-full md:w-3/4 lg:w-1/2 xl:w-4/12">
        <input
          type="text"
          placeholder="الإسم (إجباري)"
          maxLength="35"
          className="bg-body p-4 rounded-md placeholder:text-black font-bold focus:outline-none"
          name="name"
          id="name"
          required
        />
        <input
          type="email"
          placeholder="الإيميل (إجباري)"
          maxLength="35"
          className="bg-body p-4 rounded-md placeholder:text-black font-bold focus:outline-none"
          name="email"
          id="email"
          required
        />
        <input
          type="number"
          placeholder="رقم الهاتف (إختياري)"
          maxLength="13"
          className="bg-body p-4 rounded-md placeholder:text-black font-bold focus:outline-none"
          name="number"
        />
        <textarea
          placeholder="الرسالة"
          maxLength="500"
          className="bg-body p-4 rounded-md placeholder:text-black font-bold focus:outline-none h-32 resize-none"
          name="msg"
          id="msg"
          required
        ></textarea>
        <button className="main-btn block text-white rounded-md py-2 px-3 font-bold transition-all duration-500 text-center text-lg active:scale-90">
          <p>إرسال</p>
        </button>
      </div>
    </form>
  );
}

export default Contact;
