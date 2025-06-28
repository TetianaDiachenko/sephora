import React, { SVGProps } from 'react';
import styles from './MenuItem.module.scss';

type MenuItemProps = {
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  text: string;
  subtext?: string;
  onClick?: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ Icon, text, subtext, onClick }) => {
  return (
    <li onClick={onClick} className={styles.menuItem}>
      <Icon className={styles.icon} />
      <span className={styles.text}>
			{text}
			{subtext && (
				<>
					<br />
					<span className={styles.subtext}>{subtext}</span>
				</>
			)}
		</span>		
    </li>
  );
};

export default MenuItem;
