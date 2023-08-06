const About = ({ pokemonData }) => {
	const types = pokemonData.types.map(({ type }) => type.name).join(", ");

	const abilities = pokemonData.abilities.map(({ ability }) => ability.name.replace("-", " ")).join(", ");

	const height = pokemonData.height * 10;
	const weight = pokemonData.weight / 10;
	return (
		<ul>
			<li>
				<span>Species</span> <span>{types}</span>
			</li>
			<li>
				<span>Height</span> <span>{height}cm</span>
			</li>

			<li>
				<span>Weight</span> <span>{weight}kg</span>
			</li>
			<li>
				<span>Abilities</span> <span>{abilities}</span>
			</li>
		</ul>
	);
};

export default About;
