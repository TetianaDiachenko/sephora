import styles from './HeaderContainer.module.scss';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import MenuContainer from '../Menu/MenuContainer/MenuContainer';
import Like from '../Like/Like';
import Basket from '../Basket/Basket';

const HeaderContainer = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Logo />
          <Search />
          <MenuContainer />
        </div>
        <div className={styles.right}>
          <Like />
          <Basket />
        </div>
      </div>
    </header>
  );
};

export default HeaderContainer;
