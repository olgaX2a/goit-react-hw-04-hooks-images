import style from "./Searchbar.module.css";

function Searchbar({ query, onSetQuery, onFormSubmit }) {
  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={onFormSubmit}>
        <button type="submit" className={style.SearchFormButton}>
          <span className={style.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          onInput={onSetQuery}
          className={style.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
        />
      </form>
    </header>
  );
}

export default Searchbar;
