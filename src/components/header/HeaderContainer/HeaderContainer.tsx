import styles from './HeaderContainer.module.scss';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';

const HeaderContainer = () => {
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<Logo />
					<Search />
				</div>
				<div className="right">
					
				</div>
			</div>
		</header>
	);
};

export default HeaderContainer;
