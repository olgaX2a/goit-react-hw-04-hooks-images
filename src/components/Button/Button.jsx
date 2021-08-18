import style from "./Button.module.css";

function Button({ onLoadMore }) {
  return (
    <button type="button" className={style.Button} onClick={onLoadMore}>
      Load more
    </button>
  );
}

export default Button;
