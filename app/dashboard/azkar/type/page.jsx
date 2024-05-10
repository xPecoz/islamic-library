"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

function Page() {
  const [azkarTypes, setAzkarTypes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/isamic-dasboard/apis/azkar/types.php")
      .then((res) => setAzkarTypes(res.data));
  }, []);
  return (
    <div className="flex flex-col gap-3">
      <table>
        <thead>
          <tr>
            <td>م</td>
            <td>العنوان</td>
            <td>الصورة</td>
            <td>الأمر</td>
          </tr>
        </thead>
        <tbody>
          {azkarTypes.map((e) => {
            return (
              <tr key={e.id}>
                <td className="border">{e.id}</td>
                <td className="border">
                  <input
                    defaultValue={e.title}
                    id={`type${e.id}`}
                    type="text"
                  />
                </td>
                <td className="border">
                  <div>
                    <Image width={100} height={100} src={e.img} alt={e.title} />
                    <input defaultValue={e.img} id={`img${e.id}`} type="url" />
                  </div>
                </td>
                <td className="border">
                  <button
                    onClick={() => {
                      const newType = document.getElementById(`type${e.id}`),
                        img = document.getElementById(`img${e.id}`);
                      axios
                        .post(
                          "http://localhost/isamic-dasboard/dashboard/azkar/editAzkarType.php",
                          {
                            id: e.id,
                            oldTitle: e.title,
                            newTitle: newType.value,
                            newImg: img.value,
                          },
                          {
                            headers: {
                              "Content-Type": "application/json",
                            },
                          }
                        )
                        .then((res) => setAzkarTypes(res.data));
                    }}
                  >
                    الحفظ
                  </button>
                  <button
                    onClick={() => {
                      axios
                        .post(
                          "http://localhost/isamic-dasboard/dashboard/azkar/deleteAzkarType.php",
                          {
                            id: e.id,
                          },
                          {
                            headers: {
                              "Content-Type": "application/json",
                            },
                          }
                        )
                        .then((res) => setAzkarTypes(res.data));
                    }}
                  >
                    الحذف
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="border flex gap-3 p-2">
        <input type="text" id="newTitle" placeholder="العنوان" />
        <input type="url" id="newImg" placeholder="الصورة" />
        <button
          className="border border-main"
          onClick={() => {
            const newTitle = document.getElementById("newTitle").value,
              newImg = document.getElementById("newImg").value;

            axios
              .post(
                "http://localhost/isamic-dasboard/dashboard/azkar/addAzkarType.php",
                {
                  newTitle: newTitle,
                  newImg: newImg,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((res) => {
                setAzkarTypes(res.data);
                console.log(res.data);
              });
          }}
        >
          إضافة
        </button>
      </div>
    </div>
  );
}

export default Page;
