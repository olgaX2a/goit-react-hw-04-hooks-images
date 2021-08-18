import { useState, useEffect } from "react";

import getPictures from "./api/fetch";

import style from "./App.module.css";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState("");
  const [loader, setLoader] = useState(false);

  const closeModalByEsc = (event) => {
    console.log(`event.key`, event.key);
    if (event.key === "Escape") {
      return setModal("");
    }
  };

  useEffect(() => {
    if (modal) {
      window.addEventListener("keydown", closeModalByEsc);
    } else {
      window.removeEventListener("keydown", closeModalByEsc);
    }
  }, [modal]);

  const handleSetQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleGetPictures = async (event) => {
    event.preventDefault();
    setLoader(true);
    setPage(1);
    const {
      data: { hits },
    } = await getPictures(query, 1);
    setLoader(false);
    setImages(hits);
    setPage((prevState) => prevState + 1);
  };

  const handleLoadMore = async () => {
    setLoader(true);
    const {
      data: { hits },
    } = await getPictures(query, page);
    setImages((prevState) => [...prevState, ...hits]);
    setPage((prevState) => prevState + 1);
    setLoader(false);
    window.scrollTo({
      top: document.querySelector("ul").scrollHeight,
      behavior: "smooth",
    });
  };

  const handleShowModal = (url) => {
    setModal(url);
  };

  const handleCloseModal = (event) => {
    if (event.currentTarget === event.target) {
      setModal("");
    }
    return;
  };

  return (
    <div className={style.App}>
      <Searchbar
        query={query}
        onSetQuery={handleSetQuery}
        onFormSubmit={handleGetPictures}
      />
      <ImageGallery images={images} showModal={handleShowModal} />
      {loader && <Loader />}
      {!!images.length && <Button onLoadMore={handleLoadMore} />}
      {modal && <Modal modalImg={modal} closeModal={handleCloseModal} />}
    </div>
  );
}

export default App;
