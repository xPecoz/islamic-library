"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function Page() {
  const [pray, setPray] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/isamic-dasboard/apis/pray/pray.php")
      .then((res) => {
        const data = res.data;
        console.log(data);
        setPray(data);
      });
  }, []);

  return (
    <table className="w-full">
      <thead>
        <tr>
          <td>م</td>
          <td>الدعاء</td>
          <td>النوع</td>
          <td>النوع بالانجليزي</td>
          <td>المصدر</td>
          <td>الأوامر</td>
        </tr>
      </thead>
      <tbody>
        {pray.map((e) => {
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
                          sourse = document.getElementById(
                            `sourse${ele.id}`
                          ).value;

                        axios
                          .post(
                            "http://localhost/isamic-dasboard/dashboard/pray/editPray.php",
                            {
                              id: ele.id,
                              text: text,
                              type: type,
                              typeEn: typeEn,
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
                            setPray(data);
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
                            "http://localhost/isamic-dasboard/dashboard/pray/deletePray.php",
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
                            setPray(data);
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
