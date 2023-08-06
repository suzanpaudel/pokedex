import Heading from "../../components/Heading";

import styles from "./styles.module.css";

const PageNotFound = () => {
	return (
		<div className={styles.errorSection}>
			<Heading title="404" />
			<p>Oops! Page Not Found</p>
		</div>
	);
};

export default PageNotFound;
