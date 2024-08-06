import { useState, useEffect } from "react";
import { TMDB_API_OPTIONS } from "../constants";
import { clearSlice } from "../redux/moviesSlice";

const useTmdbResponse = (endpointUrl) => {
  const [endPointResult, setEndPointResult] = useState([]);

  const getData = async () => {
    const data = await fetch(endpointUrl, TMDB_API_OPTIONS);
    const json = await data.json();
    setEndPointResult(json.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return endPointResult && endPointResult;
};

export default useTmdbResponse;
