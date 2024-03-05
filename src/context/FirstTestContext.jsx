import { createContext, useContext, useEffect, useState } from "react";

export const FirstTestContext = createContext();

export function useGetFirstTestContext() {
  return useContext(FirstTestContext);
}

const FirstTestContextProvider = ({ children }) => {
  const [start, setStart] = useState(false);
  const [detailCount, setDetailCount] = useState(4);
  const [details, setDetails] = useState(null);
  const [showTime, setShowTime] = useState(4);
  const [answerTime, setAnswerTime] = useState(3);
  const [passDetail, usePassDetail] = useState(null);

  const generateRandomNumber = (max) => Math.floor(Math.random() * max);

  const createDetail = () => {
    setDetails([]);
    for (let i = 0; i < detailCount; i++) {
      const innerArray = Array(9).fill(0);
      const randomIndex1 = generateRandomNumber(9);
      let randomIndex2 = generateRandomNumber(9);

      while (randomIndex2 === randomIndex1) {
        randomIndex2 = generateRandomNumber(9);
      }
      innerArray[randomIndex1] = 1;
      innerArray[randomIndex2] = 1;

      setDetails((prev) => [...prev, innerArray]);
    }
  };
  console.log(details);

  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Har bir harakatdan so'ng counter ni 1 ga oshirish
      setCounter((prevCounter) => prevCounter + 1);
    }, 4000);

    console.log(counter);
    // Effect tugaganida intervalni to'xtatish
    return () => clearInterval(intervalId);

    // for (let i = 0; i < detailCount; i++) {
    // }
  }, [details]);

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
      }}
    >
      {children}
    </FirstTestContext.Provider>
  );
};

export default FirstTestContextProvider;
