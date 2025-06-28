import styles from './HeaderContainer.module.scss';
import Logo from '../Logo/Logo';

const HeaderContainer = () => {
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className="left">
					<Logo />
				</div>
				<div className="right">
					
				</div>
			</div>
		</header>
	);
};

export default HeaderContainer;
