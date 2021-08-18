import style from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";

function ImageGallery({ images, showModal }) {
  return (
    <ul className={style.ImageGallery} id="Gallery">
      {images.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          alt={tags}
          src={webformatURL}
          showModal={showModal}
          modalUrl={largeImageURL}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
