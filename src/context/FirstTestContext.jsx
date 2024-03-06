import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export const FirstTestContext = createContext();

export function useGetFirstTestContext() {
    return useContext(FirstTestContext);
}

const FirstTestContextProvider = ({ children }) => {
    const [start, setStart] = useState(false);
    const [detailCount, setDetailCount] = useState(8);
    const [details, setDetails] = useState(null);
    const [showTime, setShowTime] = useState(4);
    const [answerTime, setAnswerTime] = useState(3);
    const [passDetail, usePassDetail] = useState(null);

    const generateRandomNumber = (max) => Math.floor(Math.random() * max);

    console.log(details, 'details');

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
    const [pause, setPause] = useState(false);

    const items = useMemo(() => {
        if (details !== null) {
            return details[counter];
        } else {
            return [];
        }
    }, [details, counter]);

    console.log(counter, 'counter');

    useEffect(() => {
        let intervalId;
        if (details !== null && counter < detailCount - 1 || !pause) {
            intervalId = setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
                setPause(true);
            }, 1000 * 3);
        }

        return () => clearInterval(intervalId);
    }, [details, counter, pause]);

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
            }}
        >
            {children}
        </FirstTestContext.Provider>
    );
};

export default FirstTestContextProvider;
