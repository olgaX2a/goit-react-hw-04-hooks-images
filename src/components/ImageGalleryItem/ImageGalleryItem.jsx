import style from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ alt, src, modalUrl, showModal }) {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        src={src}
        alt={alt}
        className="ImageGalleryItem-image"
        onClick={() => showModal(modalUrl)}
      />
    </li>
  );
}

export default ImageGalleryItem;
