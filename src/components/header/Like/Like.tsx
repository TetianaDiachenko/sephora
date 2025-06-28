import styles from './Like.module.scss';
import Heart from './../../svg-components/Heart';

const Like = () => {
	return (
		<div className={styles.like}>
			<a href="/">
				<Heart />
			</a>
		</div>
	);
};

export default Like; 