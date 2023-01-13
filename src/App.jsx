import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import "./App.css";

function App() {
  const [person, setPerson] = useState({
    name: "Жак-Ив Кусто",
    job: "Исследователь океана",
  });

  const [popupShow, setPopupShow] = useState(false);

  const handleClosePopup = () => {
    setPopupShow(false);
  };

  const handleOpenPopup = () => {
    setPopupShow(true);
  };

  const [data, setData] = useState([]);

  const img = "travel";
  const accessKey = "h7Ktk6V5UaW68C3aOg4uU4M5hHgRahR88u1B_41gy5A";
  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${accessKey}`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setData(result);
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <div className='app'>
      <Header />
      <Main person={person} handleOpenPopup={handleOpenPopup} data={data} />
      <Footer />
      <Popup
        person={person}
        setPerson={setPerson}
        popupShow={popupShow}
        handleClosePopup={handleClosePopup}
        setPopupShow={setPopupShow}
      />
    </div>
  );
}

export default App;
