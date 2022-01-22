import { useEffect, useState } from "react";
import api from "../../Api/Api";

const movieSelected = localStorage.getItem('movie-selected') &&  JSON.parse(localStorage.getItem('movie-selected'));

const useHooks = () => {
  const [data, setData] = useState();
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('Failed');
  const [selectedData, setSelectedData] = useState(movieSelected);

  const fetchDataBalot = async () => {
    await api.getBallotData().then((response) => {
      setData(response && response.items);
    });
  }

  const handleSelectedData = (e, valueSelected, idSelected) => {
    e.preventDefault();
    setSelectedData((prevState) => (
      {
        ...prevState,
        [idSelected]: valueSelected,
      }));
  }

  const closeModal = () => {
    setModal(false);
  }

  const handleSubmit = () => {
    setMessage('Congrats you have already submitted your choice');
    setModal(true);
    localStorage.setItem('movie-selected', JSON.stringify(selectedData));
  };

  useEffect(() => {
    fetchDataBalot();
  }, []);

  return {
    data,
    selectedData,
    modal,
    message,
    handleSelectedData,
    handleSubmit,
    closeModal,
  }
};

export default useHooks;