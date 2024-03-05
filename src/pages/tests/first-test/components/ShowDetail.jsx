import { useGetFirstTestContext } from "../../../../context/FirstTestContext";

const ShowDetail = () => {
  const { createDetail, details } = useGetFirstTestContext();

  return <div className="w">{details ? details.map((item, index) => <p key={index}>{item}</p>) : ""}</div>;
};

export default ShowDetail;
