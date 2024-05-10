import BookBox from "./BookBox";

function BookBoxs() {
  let typeArr = ["All", "Legitimacy", "History", "Eaqida", "Child"];

  let [All, Legitimacy, History, Eaqida, Child] = typeArr;

  const src = "https://peco-2.github.io/islamic/books/";

  const boxsArr = [
    {
      img: `${src}quran.webp`,
      title: "القرآن الكريم",
      author: "كلام الله",
      file: "books/العقيدة/القرآن الكريم.pdf",
      type: [All, Eaqida],
    },
    {
      img: `${src}elbokare.webp`,
      title: "صحيح البخاري",
      author: "محمد بن اسماعيل البخاري",
      file: "books/العلوم الشرعية/صحيح البخاري.pdf",
      type: [All, Legitimacy],
    },
    {
      img: `${src}muslim.jpg`,
      title: "صحيح مسلم",
      author: "مسلم بن الحجاج",
      file: "books/العلوم الشرعية/صحيح مسلم.pdf",
      type: [All, Legitimacy],
    },
    {
      img: `${src}سنن النسائي.jpg`,
      title: "سنن النسائي",
      author: "أحمد بن شعيب النسائي",
      file: "books/العلوم الشرعية/سنن النسائي.pdf",
      type: [All, Legitimacy],
    },
    {
      img: `${src}startAndEnd.png`,
      title: "البداية و النهاية",
      author: "ابن كثير الدمشقي",
      file: "books/التاريخ/البداية و النهاية إبن كثيير.pdf",
      type: [All, History],
    },
    {
      img: `${src}altawhid.webp`,
      title: "كتاب التوحيد",
      author: "محمد بن عبدالوهاب",
      file: "books/العقيدة/التوحيد.pdf",
      type: [All, Eaqida],
    },
    {
      img: `${src}alsiyrat-albasitah.png`,
      title: "السيرة النوبية للأطفال",
      author: "مسعد حسن محمد",
      file: "books/التاريخ/السيرة النوبية المبسطة.pdf",
      type: [All, History],
    },
    {
      img: `${src}qisas-alsahaba.png`,
      title: "قصص الصحابة للأطفال",
      author: "مسعد حسن محمد",
      file: "books/التاريخ/قصص الصحابة للأطفال.PDF",
      type: [All, History],
    },
    {
      img: `${src}altajwid.png`,
      title: "الملخص المفيد في التجويد",
      author: "محمد أحمد معبد",
      file: "books/العلوم الشرعية/تجويد.pdf",
      type: [All, Legitimacy],
    },
    {
      img: `${src}quranMsg.webp`,
      title: "رسائل من القرآن",
      author: "أدهم شرقاوي",
      file: "books/العقيدة/رسائل من القرآن.pdf",
      type: [All, Eaqida],
    },
    {
      img: `${src}platform.webp`,
      title: "منهاج المسلم ",
      author: "أبو بكر جابر الجزائري",
      file: "books/الطفل المسلم/منهاج المسلم.pdf",
      type: [All, Child],
    },
  ];
  return boxsArr.map(function (e, i) {
    return (
      <BookBox
        key={i}
        img={e.img}
        title={e.title}
        author={e.author}
        href={e.file}
        type={e.type.join(" ")}
      />
    );
  });
}

export default BookBoxs;
