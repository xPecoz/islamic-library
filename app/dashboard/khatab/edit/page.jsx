"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function Page() {
  const [names, setNames] = useState([]);
  const [khatabs, setKhatabs] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost/isamic-dasboard/apis/khatab/khatab.php")
      .then((res) => {
        setNames(res.data);
        res.data.forEach((ele) => {
          const newObj = Object.assign(
            khatabs,
            JSON.parse(`{"${ele.nameEn}":${JSON.stringify(ele.khatabsId)}}`)
          );

          setKhatabs(newObj);
        });
      });
  }, []);

  return (
    <div className="flex flex-col mr-10 gap-2.5  w-full">
      {names.map((el) => {
        return (
          <div
            key={el.id}
            className="bg-white shadow-box rounded-lg p-2 py-1.5 pb-3"
          >
            <button
              className="text-2xl font-medium text-center w-full"
              onClick={() => {
                document.querySelectorAll(".allId").forEach((ele) => {
                  ele.classList.add("hidden");
                });
                document.getElementById(`n${el.id}`).classList.remove("hidden");
              }}
            >
              {el.name}
            </button>
            <div className="allId hidden" id={`n${el.id}`}>
              <table className="w-full">
                <thead>
                  <tr>
                    <td className="text-center">م</td>
                    <td className="text-center">رمز الفيديو</td>
                    <td className="text-center">تعديل </td>
                    <td className="text-center">حذف</td>
                  </tr>
                </thead>
                <tbody>
                  {JSON.parse(khatabs[`${el.nameEn}`]).map((e, i) => {
                    return (
                      <tr key={i}>
                        <td className="text-center">{i + 1}</td>
                        <td className="text-center">{e}</td>
                        <td>
                          <div className="flex justify-center">
                            <input
                              defaultValue={e}
                              className="bg-body py-2 px-2.5 rounded-md ml-2 font-medium text-lg focus:outline-none"
                              id="newId"
                            />
                            <button
                              className="bg-btn text-white px-3 rounded-e-md text-lg font-medium"
                              onClick={() => {
                                const newId = document.getElementById("newId");
                                axios
                                  .post(
                                    "http://localhost/isamic-dasboard/dashboard/khatab/editKhatab.php",
                                    {
                                      nameEn: el.nameEn,
                                      oldId: e,
                                      newId: newId.value,
                                    },
                                    {
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                    }
                                  )
                                  .then((res) => {
                                    setNames(res.data);
                                    res.data.forEach((ele) => {
                                      const newObj = Object.assign(
                                        khatabs,
                                        JSON.parse(
                                          `{"${ele.nameEn}":${JSON.stringify(
                                            ele.khatabsId
                                          )}}`
                                        )
                                      );

                                      setKhatabs(newObj);
                                    });
                                    console.log(res.data);
                                  });
                              }}
                            >
                              حفظ
                            </button>
                          </div>
                        </td>
                        <td className="text-center">
                          <button
                            className="bg-btn text-white py-1 px-4 rounded-md text-lg font-medium"
                            onClick={() => {
                              const newId = document.getElementById("newId");
                              axios
                                .post(
                                  "http://localhost/isamic-dasboard/dashboard/khatab/deleteKhatab.php",
                                  {
                                    nameEn: el.nameEn,
                                    id: e,
                                  },
                                  {
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                  }
                                )
                                .then((res) => {
                                  setNames(res.data);
                                  res.data.forEach((ele) => {
                                    const newObj = Object.assign(
                                      khatabs,
                                      JSON.parse(
                                        `{"${ele.nameEn}":${JSON.stringify(
                                          ele.khatabsId
                                        )}}`
                                      )
                                    );

                                    setKhatabs(newObj);
                                  });
                                });
                            }}
                          >
                            حذف
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="h-[2px] w-3/4 bg-main m-auto mt-5 mb-3"></div>
              <div className="m-auto w-fit flex">
                <input
                  className="bg-body py-2 px-2.5 rounded-md ml-2 font-medium text-lg focus:outline-none"
                  id={`newVedio${el.id}`}
                  placeholder="ال id الخاص بالخطبة"
                />
                <button
                  className="bg-btn text-white px-3 rounded-e-md text-lg font-medium"
                  onClick={() => {
                    const newVedioId = document.getElementById(
                      `newVedio${el.id}`
                    );

                    if (newVedioId) {
                      axios
                        .post(
                          "http://localhost/isamic-dasboard/dashboard/khatab/addKhatab.php",
                          {
                            nameEn: el.nameEn,
                            addId: newVedioId.value,
                          },
                          {
                            headers: {
                              "Content-Type": "application/json",
                            },
                          }
                        )
                        .then((res) => {
                          setNames(res.data);
                          res.data.forEach((ele) => {
                            const newObj = Object.assign(
                              khatabs,
                              JSON.parse(
                                `{"${ele.nameEn}":${JSON.stringify(
                                  ele.khatabsId
                                )}}`
                              )
                            );

                            setKhatabs(newObj);
                            newVedioId.value = "";
                          });
                        });
                    }
                  }}
                >
                  خطبة جديدة
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Page;
