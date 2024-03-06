import { useGetFirstTestContext } from "../../../../context/FirstTestContext";

const ShowDetail = () => {
  const { items, counter, pause, start } = useGetFirstTestContext();
  return (
    <div className="w-full h-full">
      <header>
        <span>
          {!start
            ? "Boshlash kutilmoqda ..."
            : counter === 8
            ? "Barcah javoblar yuborildi"
            : `${counter + 1} - topshiriq`}
        </span>
      </header>

      <div className="w-full h-full flex justify-center items-center">
        {items.length && !pause && start ? (
          <div className="p-2 border border-black grid grid-cols-4 gap-3">
            {items.map((item, index) => (
              <div
                key={index}
                className={`w-8 h-8 border border-black rounded-full ${
                  item === 1 ? "bg-black" : ""
                }`}
              ></div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ShowDetail;
