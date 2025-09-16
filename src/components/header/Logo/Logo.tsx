import styles from './Logo.module.scss';
import logo from './../../../assets/images/logo/logo_sephora.png';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href="#">
        <img src={logo} alt="Sephora logo" />
      </a>
    </div>
  );
};

export default Logo;
