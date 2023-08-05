import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";

const NavItem = ({ text, link }) => {
	return (
		<li className={styles.navItem}>
			<NavLink
				to={`/${link}`}
				className={({ isActive }) => (isActive ? `${styles.active} ${styles.navLink}` : `${styles.navLink}`)}
			>
				{text}
			</NavLink>
		</li>
	);
};

export default NavItem;
