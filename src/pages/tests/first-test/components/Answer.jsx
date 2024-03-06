import { useGetFirstTestContext } from "../../../../context/FirstTestContext";

const Answer = () => {
  const { details, allAnswerUser } = useGetFirstTestContext();

  const arraysEqual = (massiv1, massiv2) => {
    if (massiv1.length !== massiv2.length) {
      return false;
    }

    for (let i = 0; i < massiv1.length; i++) {
      if (massiv1[i] !== massiv2[i]) {
        return false;
      }
    }

    return true;
  };

  return (
    <div>
      <header>
        <p className="font-semibold text-2xl mb-4">Natijangiz</p>
      </header>
      <section>
        <div>
          {details && allAnswerUser
            ? details.map((item, index) => (
                <div className="flex gap-4" key={index}>
                  <div className="p-2 border border-black grid grid-cols-4 gap-3 mb-4 bg-white">
                    {item.map((item, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 sm:w-4 sm:h-4 border border-black rounded-full ${
                          item === 1 ? "bg-black" : ""
                        }`}
                      ></div>
                    ))}
                  </div>
                  <div className="p-2 border border-black grid grid-cols-4 gap-3 mb-4 bg-white">
                    {allAnswerUser[index].map((item, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 sm:w-4 sm:h-4 border border-black rounded-full ${
                          item === 1 ? "bg-black" : ""
                        }`}
                      ></div>
                    ))}
                  </div>
                  <div>
                    {arraysEqual(item, allAnswerUser[index])
                      ? "To'gri"
                      : "Noto'g'ri"}
                  </div>
                </div>
              ))
            : ""}
        </div>
      </section>
    </div>
  );
};

export default Answer;
