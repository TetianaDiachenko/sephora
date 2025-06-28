import styles from './MenuContainer.module.scss';
import MenuItem from './../MenuItem/MenuItem';
import Shop from './../../../svg-components/Shop';
import Community from './../../../svg-components/Community';
import Girl from './../../../svg-components/Girl';

const MenuContainer = () => {
  return (
    <nav >
      <ul className={styles.menu}>
        <MenuItem Icon={Shop} text="Shops and Services" subtext="Choose your store."/>
        <MenuItem Icon={Community} text="Community" />
        <MenuItem Icon={Girl} text="Log in" subtext="for FREE delivery 🚚"/>
      </ul>
    </nav>
  );
};

export default MenuContainer;
