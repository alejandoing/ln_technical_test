import React from "react";

import styles from "./styles/Search.module.css";

const Search = () => {
  return (
    <form className={styles.Search}>
      <input
        type='text'
        className={styles.Search__input}
        placeholder='Buscar'
      />
      <i className={styles.Search__icon}></i>

      <input
        type='submit'
        value='Buscar'
        className={`--btn --primary ${styles.Search__submit}`}
      />
    </form>
  );
};

export default Search;
