import style from "./Loader.module.css";
import Loader from "react-loader-spinner";

function Spinner() {
  return (
    <Loader
      className={style.Loader}
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={30000}
    />
  );
}

export default Spinner;
