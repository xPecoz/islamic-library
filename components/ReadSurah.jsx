import axios from "axios";
import React, { useEffect, useState } from "react";
import MainQuranTitle from "./MainQuranTitle";
import Select from "react-select";
import Ayah from "./Ayah";

function ReadSurah(props) {
  const [surahContent, setSurahContent] = useState([]);

  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let [num, setNum] = useState("");

  const tafsirTypes = [
    {
      value: "ar.muyassar",
      label: "تفسير المیسر",
      englishName: "King Fahad Quran Complex",
    },
    {
      value: "ar.jalalayn",
      label: "تفسير الجلالين",
      englishName: "Jalal ad-Din al-Mahalli and Jalal ad-Din as-Suyuti",
    },
    {
      value: "ar.qurtubi",
      label: "تفسير القرطبي",
      englishName: "Tafseer Al Qurtubi",
    },
    {
      value: "ar.miqbas",
      label: "تنوير المقباس من تفسير بن عباس",
      englishName: "Tafseer Tanwir al-Miqbas",
    },
    {
      value: "ar.waseet",
      label: "الـتـفـسـيـر الـوسـيـط",
      englishName: "Tafseer Al-Waseet",
    },
    {
      value: "ar.baghawi",
      label: "تفسير البغوي",
      englishName: "Tafseer Al-Baghawi",
    },
  ];
  let [selectedTafsir, setSelectedTafsir] = useState(tafsirTypes[0]);

  useEffect(() => {
    localStorage.getItem("tafsir") &&
      setSelectedTafsir(JSON.parse(localStorage.getItem("tafsir")));
  }, []);

  const handleCityChange = (val) => {
    setSelectedTafsir(val);

    axios
      .get(`https://api.alquran.cloud/v1/ayah/${num}/${val.value}`)
      .then((res) => setContent(res.data.data.text));

    localStorage.setItem("tafsir", JSON.stringify(val));
  };

  useEffect(() => {
    axios
      .get(`https://api.alquran.cloud/v1/surah/${props.num}/quran-uthmani`)
      .then((res) => setSurahContent(res.data.data));
  }, []);

  useEffect(() => {
    document.getElementById("closePopup") !== null &&
      document
        .getElementById("closePopup")
        .addEventListener("click", function () {
          setTimeout(() => {
            setTitle("");
            setContent("");
          }, 300);
        });
  }, [document.getElementById("closePopup")]);

  if (surahContent.length !== 0 && localStorage.getItem(`scroll${props.num}`))
    document
      .querySelector(".center-listen")
      .scrollTo({ top: localStorage.getItem(`scroll${props.num}`) });

  return (
    surahContent.length !== 0 && (
      <>
        <MainQuranTitle
          title={`${surahContent.name} - صفحة ${surahContent.ayahs[0].page}`}
          id={surahContent.number}
        />
        <div className="sura leading-loose lg:leading-loose text-center my-2 whitespace-normal">
          {props.num !== "9" && props.num !== "1" && (
            <p className="font-medium my-5 text-3xl md:text-[45px]">
              بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </p>
          )}
          {surahContent.ayahs.map(function (e, index) {
            return (
              <React.Fragment key={e.numberInSurah}>
                <Ayah
                  number={e.number}
                  tafsir={selectedTafsir.value}
                  text={e.text}
                  numberInSurah={e.numberInSurah}
                  onClick={() => {
                    setNum(e.number);

                    axios
                      .get(
                        `https://api.alquran.cloud/v1/ayah/${e.number}/${selectedTafsir.value}`
                      )
                      .then((res) => {
                        let popup = document.getElementById("popup");
                        popup.classList.remove("translate-x-full");

                        setTitle(
                          e.text
                            .replace(
                              /بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ /,
                              ""
                            )
                            .replaceAll("ا۟", "اْ")
                            .replaceAll("و۟", "وْ")
                            .replaceAll("ي۟", "يْ")
                            .replaceAll("ى۟", "ىْ")
                            .replaceAll("ر۪", "رِ")
                            .replaceAll("مَ۪۫", "مَِ")
                            .replaceAll("نَّبِيِّۦ", "نَّبِيِّ")
                        );
                        setContent(res.data.data.text);
                      });
                  }}
                />
                {surahContent.ayahs[index + 1] &&
                  e.page !== surahContent.ayahs[index + 1].page && (
                    <>
                      <p className="text-3xl my-3">{e.page}</p>
                      <hr />
                    </>
                  )}
              </React.Fragment>
            );
          })}
        </div>
        <div
          id="popup"
          className="fixed w-screen h-screen overflow-scroll py-4 px-10 md:px-16 pt-24 flex items-center justify-center top-0 right-0 translate-x-full duration-300 backdrop-blur-lg z-10"
        >
          <div
            className="w-full h-full absolute top-0"
            onClick={() =>
              document.getElementById("popup").classList.add("translate-x-full")
            }
          ></div>
          <div className="bg-white border-2 border-main rounded-lg pt-5 p-4 flex flex-col items-center gap-5 relative font-medium overflow-scroll max-h-full">
            <button
              className="uil uil-times absolute top-2 right-2 bg-main rounded-full w-10 h-10 text-3xl text-white"
              id="closePopup"
              onClick={() =>
                document
                  .getElementById("popup")
                  .classList.add("translate-x-full")
              }
            ></button>
            <h2 className="text-xl md:text-2xl">
              <Select
                classNames={{
                  control: (state) =>
                    state.isFocused ? "border-red-600" : "border-grey-300",
                }}
                placeholder="تفسير ميسر"
                value={selectedTafsir}
                onChange={handleCityChange}
                options={tafsirTypes}
              />
            </h2>
            <h2
              className="bg-body rounded-lg px-2 leading-loose lg:leading-loose text-3xl lg:text-4xl"
              style={{ fontFamily: "conv_original-hafs" }}
            >
              {title}
            </h2>
            <hr className="w-full" />
            <p className="text-xl md:text-2xl max-h-72">{content}</p>
          </div>
        </div>
      </>
    )
  );
}

export default ReadSurah;
