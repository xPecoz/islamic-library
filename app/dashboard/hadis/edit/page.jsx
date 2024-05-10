"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function Page() {
  const [hadis, setHadis] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/isamic-dasboard/apis/hadis/hadis.php")
      .then((res) => {
        const data = res.data;
        setHadis(data);
      });
  }, []);

  return (
    <table className="w-full">
      <thead>
        <tr>
          <td>م</td>
          <td>الحديث</td>
          <td>النوع</td>
          <td>النوع بالانجليزي</td>
          <td>الشرح</td>
          <td>المصدر</td>
          <td>الأوامر</td>
        </tr>
      </thead>
      <tbody>
        {hadis.map((e) => {
          return e.content.map((ele) => {
            return (
              <tr key={ele.id}>
                <td className="border">{ele.id}</td>
                <td className="border">
                  <textarea
                    className="border min-w-60 h-44"
                    defaultValue={ele.text}
                    id={`text${ele.id}`}
                  ></textarea>
                </td>
                <td className="border">
                  <input
                    defaultValue={e.title}
                    id={`type${ele.id}`}
                    type="text"
                  />
                </td>
                <td className="border">
                  <input
                    defaultValue={e.id}
                    id={`typeEn${ele.id}`}
                    type="text"
                  />
                </td>
                <td className="border">
                  <textarea
                    className="border min-w-60 h-44"
                    defaultValue={ele.explan}
                    id={`explan${ele.id}`}
                  ></textarea>
                </td>
                <td className="border">
                  <textarea
                    className="border min-w-60 h-44"
                    defaultValue={ele.sourse}
                    id={`sourse${ele.id}`}
                  ></textarea>
                </td>
                <td className="border">
                  <div className="flex justify-center gap-3">
                    <button
                      className="border"
                      onClick={() => {
                        const text = document.getElementById(
                            `text${ele.id}`
                          ).value,
                          type = document.getElementById(`type${ele.id}`).value,
                          typeEn = document.getElementById(
                            `typeEn${ele.id}`
                          ).value,
                          explan = document.getElementById(
                            `explan${ele.id}`
                          ).value,
                          sourse = document.getElementById(
                            `sourse${ele.id}`
                          ).value;

                        axios
                          .post(
                            "http://localhost/isamic-dasboard/dashboard/hadis/edithadis.php",
                            {
                              id: ele.id,
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
                          )
                          .then((res) => {
                            const data = res.data;
                            setHadis(data);
                            console.log(data);
                          });
                      }}
                    >
                      الحفظ
                    </button>
                    <button
                      className="border"
                      onClick={() => {
                        axios
                          .post(
                            "http://localhost/isamic-dasboard/dashboard/hadis/deletehadis.php",
                            {
                              id: ele.id,
                            },
                            {
                              headers: {
                                "Content-Type": "application/json",
                              },
                            }
                          )
                          .then((res) => {
                            const data = res.data;
                            setHadis(data);
                            console.log(data);
                          });
                      }}
                    >
                      الحذف
                    </button>
                  </div>
                </td>
              </tr>
            );
          });
        })}
      </tbody>
    </table>
  );
}

export default Page;
