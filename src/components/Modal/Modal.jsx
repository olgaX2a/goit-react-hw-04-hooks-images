import style from "./Modal.module.css";

function Modal({ modalImg, closeModal }) {
  return (
    <div className={style.Overlay} onClick={closeModal}>
      <div className={style.Modal}>
        <img src={modalImg} alt="" />
      </div>
    </div>
  );
}
export default Modal;
