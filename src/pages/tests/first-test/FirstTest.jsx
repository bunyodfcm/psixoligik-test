import { useGetFirstTestContext } from "../../../context/FirstTestContext";
import Answer from "./components/Answer";
import FinishBtn from "./components/FinishBtn";
import PaintDetail from "./components/PaintDetail";
import ShowDetail from "./components/ShowDetail";

const FirstTest = () => {
  const {
    createDetail,
    setStart,
    start,
    setCounter,
    setAllAnswerUser,
    setShowAnswer,
    showAnswer,
    setPause
  } = useGetFirstTestContext();

  const startBtn = () => {
    if (!start) {
      setCounter(0);
      createDetail();
    }
    setPause(false)
    setShowAnswer(false);
    setAllAnswerUser(Array(8).fill(Array(16).fill(0)));
    setStart(true);
  };

  return (
    <div className="container pt-10">
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
        <FinishBtn />
      </header>
      <section>
        <div className="min-h-96 mt-10 border-2 border-borderColor flex justify-between sm:flex-col">
          <div className="p-10 w-1/2 sm:w-full sm:h-[310px]">
            <ShowDetail />
          </div>
          <div className="p-10 w-1/2 sm:w-full border-l-2 border-borderColor sm:border-l-0 sm:border-t-2 sm:h-[310px]">
            <PaintDetail />
          </div>
        </div>
        {showAnswer ? (
          <div className="mt-5">
            <Answer />
          </div>
        ) : (
          ""
        )}
      </section>
    </div>
  );
};

export default FirstTest;
