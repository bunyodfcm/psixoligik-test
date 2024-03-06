import { useGetFirstTestContext } from "../../../../context/FirstTestContext";

const ShowDetail = () => {
  const { createDetail, details, items, counter } = useGetFirstTestContext();
  console.log(items.length, "aaa");
  return (
    <div className="w-full h-full">
      <header className="text-red">{counter+1}</header>
      <div className="w-full h-full flex justify-center items-center">
        {items.length !== 0 ? (
          <div className="p-2 border border-black grid grid-cols-3 gap-3">
            {items.map((item, index) => (
              <div
                key={index}
                className={`w-8 h-8 border border-black rounded-full ${
                  item === 1 ? "bg-black" : ""
                }`}
              >
              </div>
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
