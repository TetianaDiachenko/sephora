import styles from './Logo.module.scss';
import logo from './../../../assets/images/logo/logo_sephora.png';

const Logo = () => {
	return (
		<a href="/" className={styles.logo}>
			<img src={logo} alt="Sephora logo" />
		</a>
	);
};

export default Logo; 