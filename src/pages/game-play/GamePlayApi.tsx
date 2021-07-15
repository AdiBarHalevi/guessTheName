import Gameplay from "../GamePlay";
import axios from "axios";
import { useEffect, useState } from "react";

const apiRoute: string = process.env.REACT_APP_API_ROUTE as string;

const processToNames = (data: { name: string }[]) =>
  data.map((item: { name: string }) => item.name);
const processToHints = (data: { overview: string }[]) =>
  data.map((item: { overview: string }) => item.overview);

const SESSION_STORAGE_KEY = "APIdata";

const GamePlayApi = () => {
  const [apiData, setApiData] = useState([{ name: "", overview: "" }]);
  const staticsticsString = window.sessionStorage.getItem("Statistics");
  const statistics = staticsticsString ? JSON.parse(staticsticsString) : null;

  const fecthData = async () => {
    try {
      const localData = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (!localData) {
        const res = await axios.get(apiRoute);
        setApiData(res.data.results);
        window.sessionStorage.setItem(
          SESSION_STORAGE_KEY,
          JSON.stringify(res.data.results)
        );
      } else {
        const localData = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
        localData && setApiData(JSON.parse(localData));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fecthData();
  }, []);

  if (apiData.length > 1)
    return (
      <Gameplay
        shows={processToNames(apiData)}
        hints={processToHints(apiData)}
        statistics={statistics}
      />
    );
  return <div>loading</div>;
};

export default GamePlayApi;
