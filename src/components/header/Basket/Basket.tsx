import styles from './Basket.module.scss';
import Bin from '../../svg-components/Bin';

const Basket = () => {
  return (
    <div className={styles.basket}>
      <a href="#">
        <Bin />
      </a>
    </div>
  );
};

export default Basket;
