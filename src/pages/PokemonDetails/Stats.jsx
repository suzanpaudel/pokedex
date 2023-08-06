import CustomStatBar from "../../components/CustomStatBar";

const labels = ["HP", "Attack", "Defense", "Special Attack", "Special Defense", "Speed"];

const Stats = ({ stats }) => {
	return (
		<ul>
			{labels.map((label, index) => (
				<li key={label}>
					<span>{label}</span> <CustomStatBar value={stats[index].base_stat} />
				</li>
			))}
		</ul>
	);
};

export default Stats;
