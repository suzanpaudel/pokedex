import { ProgressBar } from "react-bootstrap";

const CustomStatBar = ({ value = 50, max = 100 }) => {
	const percent = (parseInt(value) / parseInt(max)) * 100;
	const colorClass = percent > 50 ? "success" : "danger";
	return (
		<ProgressBar
			now={value}
			variant={colorClass}
			label={value}
		/>
	);
};

export default CustomStatBar;
