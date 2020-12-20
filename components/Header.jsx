import React from "react";

import styles from "./styles/Header.module.css";
import Button from "./Button";

const Header = () => {
  return (
    <header className={`${styles.Header} --scrollUp`}>
      <div className={styles.Header__lay}>
        <div className='row'>
          <div className={`col-4 ${styles.Header__left}`}>
            <div className={styles.Header__hamburger}>
              <span className={styles.Header__hamburger_bar}></span>
              <span className={styles.Header__hamburger_bar}></span>
              <span className={styles.Header__hamburger_bar}></span>
            </div>

            <form className='com-search'>
              <input
                type='text'
                className='com-search__input'
                placeholder='Buscar'
              />
              <i className='icon-search'></i>

              <input
                type='submit'
                value='Buscar'
                className='--btn --primary com-search__submit'
              />
            </form>
          </div>

          <div className={`col-4 ${styles.Header__middle}`}>
            <a href='/' className={styles.Header__middle_logo}>
              <img
                className={styles.Header__middle_logo_image}
                src='/images/logo.png'
                alt='Logo La Nación'
                height='30px'
                width='300px'
              />
            </a>
          </div>

          <div className={`col-4 ${styles.Header__right}`}>
            <Button styleName='hlp-marginRight-35' highlight>
              Suscribite
            </Button>
            <Button secondary>Ingresar</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
