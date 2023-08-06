import NavItem from "./NavItem";
import generations from "../../data/generation";

import styles from "./styles.module.css";

const Navigation = () => {
	return (
		<div className={styles.navigationContainer}>
			<p className={styles.navHeading}>Select Generation:</p>
			<div className={styles.navbarContainer}>
				<ul className={styles.navbar}>
					{generations.map(item => (
						<NavItem
							key={item.id}
							link={item.link}
							text={item.text}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Navigation;
