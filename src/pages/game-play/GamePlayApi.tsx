import Gameplay from "../GamePlay";
import axios from "axios";
import { useEffect, useState } from "react";

const GamePlayApi = () => {
  const [apiData, setApiData] = useState([{ name: "", overview: "" }]);

  const processToNames = (data: { name: string }[]) =>
    data.map((item: { name: string }) => item.name);
  const processToHints = (data: { overview: string }[]) =>
    data.map((item: { overview: string }) => item.overview);

  const fecthData = async () => {
    try {
      const localData = window.sessionStorage.getItem("APIdata");
      if (!localData) {
        const res = await axios.get(
          "https://api.themoviedb.org/3/tv/top_rated?api_key=61ad98babbd91d19f02d3fa65fd4f728&language=en-US&page=1"
        );
        setApiData(res.data.results);
        window.sessionStorage.setItem(
          "APIdata",
          JSON.stringify(res.data.results)
        );
      } else {
        const localData = window.sessionStorage.getItem("APIdata");
        // @ts-ignore
        setApiData(JSON.parse(localData));
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
      />
    );
  return <div>loading</div>;
};

export default GamePlayApi;
