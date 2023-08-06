import { Container, Row } from "react-bootstrap";
import Heading from "../../components/Heading";
import NavBtn from "../../components/NavBtn";
import { useContext } from "react";
import { MyTeamContext } from "../../context/MyTeamProvider";
import PokemonItem from "../../components/PokemonItem";

const MyTeam = () => {
	const { myTeam } = useContext(MyTeamContext);
	return (
		<>
			<NavBtn
				text="Go Home"
				link="gen-i"
			/>
			<Heading title="My Team" />
			<Container>
				<Row>
					{myTeam.map(pokemon => (
						<PokemonItem
							key={pokemon.id}
							pokemon={pokemon}
						/>
					))}
				</Row>
			</Container>
		</>
	);
};

export default MyTeam;
