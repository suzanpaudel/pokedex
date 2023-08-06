import { Container, Row } from "react-bootstrap";
import Heading from "../../components/Heading";
import NavBtn from "../../components/NavBtn";
import { useContext } from "react";
import { MyTeamContext } from "../../context/MyTeamProvider";
import PokemonItem from "../../components/PokemonItem";

const MyTeam = () => {
	const { myTeam } = useContext(MyTeamContext);

	const getMyTeamData = () => {
		if (myTeam.length === 0) {
			return <p className="text-center">No pokemons added to your team!</p>;
		} else {
			return myTeam.map(pokemon => (
				<PokemonItem
					key={pokemon.id}
					pokemon={pokemon}
				/>
			));
		}
	};

	return (
		<>
			<NavBtn
				text="Go Home"
				link="gen-i"
			/>
			<Heading title="My Team" />
			<Container>
				<Row>{getMyTeamData()}</Row>
			</Container>
		</>
	);
};

export default MyTeam;
