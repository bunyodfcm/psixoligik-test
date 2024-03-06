import { useGetFirstTestContext } from "../../../../context/FirstTestContext";

const FinishBtn = () => {
  const { setStart, start, setCounter, setShowAnswer } =
    useGetFirstTestContext();
  const finishButton = () => {
    setCounter(0);
    setShowAnswer(true);
    setStart(false);
  };
  return (
    <button
      className={`border border-borderColor px-4 py-2 text-black font-semibold hover:shadow-sm  ${
        start ? "bg-red text-white" : ""
      }`}
      onClick={() => {
        finishButton();
      }}
      disabled={!start}
    >
      Yakunlash va natijani ko'rish
    </button>
  );
};

export default FinishBtn;
