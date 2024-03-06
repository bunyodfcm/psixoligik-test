import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const FirstTestContext = createContext();

export function useGetFirstTestContext() {
  return useContext(FirstTestContext);
}

const FirstTestContextProvider = ({ children }) => {
  const [start, setStart] = useState(false);
  const [detailCount, setDetailCount] = useState(8);
  const [details, setDetails] = useState(null);
  // const [openQuestion, setOpenQuestion] = useState(false)

  const [detailCounts, setDetailCounts] = useState([2, 3, 4, 5, 6, 7, 8, 9]);
  const generateRandomNumber = (max) => Math.floor(Math.random() * max);

  const createDetail = () => {
    setDetails([]);
    detailCounts.forEach((count) => {
      const innerArray = Array(16).fill(0);
      for (let i = 0; i < count; i++) {
        let randomIndex = generateRandomNumber(16);
        while (innerArray[randomIndex] === 1) {
          randomIndex = generateRandomNumber(16);
        }
        innerArray[randomIndex] = 1;
      }
      setDetails((prev) => [...prev, innerArray]);
    });
  };

  const [counter, setCounter] = useState(0);
  const [pause, setPause] = useState(false);

  const items = useMemo(() => {
    if (details !== null && counter < 8) {
      return details[counter];
    } else {
      return [];
    }
  }, [details, counter]);

  useEffect(() => {
    console.log(details, "aaaa");
    let intervalId;
    if (details !== null && counter < detailCount && !pause) {
      intervalId = setInterval(() => {
        console.log("aa");

        setPause(true);
      }, 1000 * 3);
    }

    return () => clearInterval(intervalId);
  }, [details, counter, pause]);

  const getAnswerUser = (forPaint) => {
    setCounter((prev) => prev + 1);
    setPause(false);

    console.log(forPaint, "a");
  };

  return (
    <FirstTestContext.Provider
      value={{
        start,
        setStart,
        details,
        setDetails,
        detailCount,
        setDetailCount,
        createDetail,
        items,
        counter,
        setCounter,
        getAnswerUser,
        pause,
      }}
    >
      {children}
    </FirstTestContext.Provider>
  );
};

export default FirstTestContextProvider;
