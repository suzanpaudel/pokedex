import { Container } from "react-bootstrap";

import Heading from "../../components/Heading";
import Navigation from "../../components/Navigation";
import PokemonsView from "../../components/PokemonsView";

const PokemonsList = ({ genId }) => {
	return (
		<>
			<Heading title="Pokédex" />
			<Navigation />
			<Container>
				<PokemonsView genId={genId} />
			</Container>
		</>
	);
};

export default PokemonsList;
