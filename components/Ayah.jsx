function Ayah(props) {
  return (
    <>
      <span
        className="duration-300 py-1 rounded-lg cursor-pointer hover:bg-slate-100 leading-loose lg:leading-loose text-3xl md:text-[40px]"
        onClick={props.onClick}
      >
        {props.text
          .replace(/بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ /, "")
          .replaceAll("ا۟", "اْ")
          .replaceAll("و۟", "وْ")
          .replaceAll("ي۟", "يْ")
          .replaceAll("ى۟", "ىْ")
          .replaceAll("ر۪", "رِ")
          .replaceAll("مَ۪۫", "مَِ")
          .replaceAll("نَّبِيِّۦ", "نَّبِيِّ")}
      </span>
      <div>{props.numberInSurah}</div>
    </>
  );
}

export default Ayah;
