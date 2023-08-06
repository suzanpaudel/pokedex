import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavBtn from "../../components/NavBtn";
import Heading from "../../components/Heading";
import PokemonItem from "../../components/PokemonItem";
import { MyTeamContext } from "../../context/MyTeamProvider";

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
