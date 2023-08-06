import { Container } from "react-bootstrap";

import Heading from "../../components/Heading";
import Navigation from "../../components/Navigation";
import PokemonsView from "../../components/PokemonsView";
import NavBtn from "../../components/NavBtn";

const PokemonsList = ({ genId }) => {
	return (
		<>
			<NavBtn
				text="My Team"
				link="my-team"
			/>
			<Heading title="Pokédex" />
			<Navigation />
			<Container>
				<PokemonsView genId={genId} />
			</Container>
		</>
	);
};

export default PokemonsList;
