"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function Page() {
  const [azkar, setAzkar] = useState([]);
  const [azkarTypes, setAzkarTypes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/isamic-dasboard/apis/azkar/azkar.php")
      .then((res) => {
        const data = res.data;
        setAzkar(data);

        let arr = azkarTypes;

        data.forEach((ele) => {
          arr.push({
            id: ele.id,
            title: ele.title,
          });
        });

        const test = arr.map(JSON.stringify);
        const newTest = new Set(test);
        const arr2 = Array.from(newTest).map(JSON.parse);

        setAzkarTypes(arr2);
      });
  }, []);

  return (
    <table className="w-full">
      <thead>
        <tr>
          <td>م</td>
          <td>الذكر</td>
          <td>النوع</td>
          <td>التكرار</td>
          <td>الأوامر</td>
        </tr>
      </thead>
      <tbody>
        {azkar.map((e) => {
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
                  <textarea
                    className="border min-w-60 h-44"
                    defaultValue={ele.num}
                    id={`num${ele.id}`}
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
                          num = document.getElementById(`num${ele.id}`).value;
                        axios
                          .post(
                            "http://localhost/isamic-dasboard/dashboard/azkar/editAzkar.php",
                            {
                              id: ele.id,
                              text: text,
                              type: type,
                              num: num,
                            },
                            {
                              headers: {
                                "Content-Type": "application/json",
                              },
                            }
                          )
                          .then((res) => {
                            const data = res.data;
                            setAzkar(data);
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
                            "http://localhost/isamic-dasboard/dashboard/azkar/deleteAzkar.php",
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
                            setAzkar(data);
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
