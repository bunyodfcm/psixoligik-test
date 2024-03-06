import { useGetFirstTestContext } from "../../../../context/FirstTestContext";

const FinishBtn = () => {
  const { setStart, start, setCounter } = useGetFirstTestContext();
  const finishButton = () => {
    setCounter(0);
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
      Yakunlash
    </button>
  );
};

export default FinishBtn;
