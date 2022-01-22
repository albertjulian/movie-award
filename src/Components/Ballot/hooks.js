import { useEffect, useState } from "react";
import api from "../../Api/Api";

const useHooks = () => {
  const [data, setData] = useState();
  const [selectedData, setSelectedData] = useState();

  const fetchDataBalot = async () => {
    await api.getBallotData().then((response) => {
      setData(response && response.items);
    });
  }

  const handleSelectedData = (e, idSelected) => {
    const value = e.target.id;
    setSelectedData((prevState) => (
      {
        ...prevState,
        [idSelected]: value,
      }));
  }

  useEffect(() => {
    fetchDataBalot();
  }, []);

  return {
    data,
    selectedData,
    handleSelectedData,
  }
};

export default useHooks;