import { useGetFirstTestContext } from "../../../context/FirstTestContext";
import FinishBtn from "./components/FinishBtn";
import PaintDetail from "./components/PaintDetail";
import ShowDetail from "./components/ShowDetail";

const FirstTest = () => {
  const { createDetail, setStart, start, setCounter } =
    useGetFirstTestContext();

  const startBtn = () => {
    if (!start) {
      createDetail();
    }
    setStart(true);
  };

//   const finishBtn = () => {
//     setCounter(0);
//     setStart(false);
//   };

  return (
    <div className="w-5/6 mx-auto pt-10">
      <header className="flex gap-5">
        <button
          className={`border border-borderColor px-4 py-2 text-black font-semibold hover:shadow-sm  ${
            !start ? "bg-blue text-white" : ""
          }`}
          onClick={() => startBtn()}
          disabled={start}
        >
          Boshlash
        </button>
        <FinishBtn/>
        {/* <button
          className={`border border-borderColor px-4 py-2 text-black font-semibold hover:shadow-sm  ${
            start ? "bg-red text-white" : ""
          }`}
          onClick={() => {
            finishBtn();
          }}
          disabled={!start}
        >
          Yakunlash
        </button> */}
      </header>
      <div className="min-h-96 mt-10 border-2 border-borderColor flex justify-between">
        <div className="p-10 w-1/2 ">
          <ShowDetail />
        </div>
        <div className="p-10 w-1/2 border-l-2 border-borderColor">
          <PaintDetail />
        </div>
      </div>
    </div>
  );
};

export default FirstTest;
