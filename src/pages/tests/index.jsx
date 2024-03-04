import FirstTest from "./first-test/FirstTest";
import { Icon } from "@iconify/react";
import FirstTestContextProvider from "../../context/FirstTestContext";

const Tests = () => {
  return (
    <FirstTestContextProvider>
      <div>
        {/* <Icon icon="ph:circles-four-light" /> */}
        <FirstTest />
      </div>
    </FirstTestContextProvider>
  );
};

export default Tests;
