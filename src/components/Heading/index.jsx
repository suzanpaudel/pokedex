import styles from "./style.module.css";

const Heading = ({ title }) => {
	return (
		<header className={styles.header}>
			<h1 className={styles.pageHeading}>{title}</h1>
		</header>
	);
};

export default Heading;
