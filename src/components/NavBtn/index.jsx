import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const NavBtn = ({ text, link }) => {
	return (
		<Link
			to={`/${link}`}
			className={styles.navBtn}
		>
			{text}
		</Link>
	);
};

export default NavBtn;
