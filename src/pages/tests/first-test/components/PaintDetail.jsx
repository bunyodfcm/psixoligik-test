import { useState } from "react";
import { useGetFirstTestContext } from "../../../../context/FirstTestContext";
import FinishBtn from "./FinishBtn";

const PaintDetail = () => {
  const { getAnswerUser, start, pause, counter } = useGetFirstTestContext();
  const [forPaint, setForPaint] = useState(Array(16).fill(0));

  const answerUserItem = (index) => {
    setForPaint((prev) => {
      return prev.map((item, i) => (i === index ? (item === 1 ? 0 : 1) : item));
    });
  };
  const toNextBtn = () => {
    getAnswerUser(forPaint);
    setForPaint(Array(16).fill(0));
  };

  return (
    <div className="w-full h-full">
      <header className="flex justify-between">
        <div>
          <span>
            {!start
              ? "Boshlash kutilmoqda ..."
              : counter === 8
              ? "Barcah javoblar yuborildi"
              : `${counter + 1} - topshiriq`}
          </span>
        </div>
        {counter < 8 ? (
          <button
            className={`border border-borderColor px-4 py-2 text-black font-semibold hover:shadow-sm opacity-80  ${
              start ? "bg-primary-900 text-white" : ""
            }`}
            onClick={() => {
              toNextBtn();
            }}
            disabled={!start}
          >
            Yuburish
          </button>
        ) : (
          <FinishBtn />
        )}
      </header>
      <div className="w-full h-full flex justify-center items-center">
        {pause && start ? (
          <div className="p-2 border border-black grid grid-cols-4 gap-3 bg-white">
            {forPaint.map((item, index) => (
              <button
                key={index}
                className={`w-8 h-8 border border-black rounded-full ${
                  item === 1 ? "bg-black" : ""
                }`}
                onClick={() => {
                  answerUserItem(index);
                }}
              ></button>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PaintDetail;
