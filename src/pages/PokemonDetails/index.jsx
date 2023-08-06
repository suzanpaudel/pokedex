import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Heading from "../../components/Heading";
import { MyTeamContext } from "../../context/MyTeamProvider";
import { PokemonsContext } from "../../context/PokemonsProvider";
import { fetchPokemonData } from "../../api";
import NavBtn from "../../components/NavBtn";

const PokemonDetails = () => {
	const { pokemonId } = useParams();
	const pokemonsContext = useContext(PokemonsContext);
	const { pokemons } = pokemonsContext;
	const { addPokemonHandler, removePokemonHandler, isInTheTeam } = useContext(MyTeamContext);

	const [pokemonData, setPokemonData] = useState(null);

	useEffect(() => {
		const getPokemonData = async () => {
			let data;
			// const existingPokemon = pokemons.find(pokemon => pokemon.id === parseInt(pokemonId));
			const existingPokemon = null;

			if (existingPokemon) {
				data = existingPokemon;
			} else {
				data = await fetchPokemonData(pokemonId);
			}

			setPokemonData(data);
		};

		getPokemonData();
	}, [pokemonId, pokemons]);

	return (
		<div>
			<NavBtn
				text="My Team"
				link="my-team"
			/>
			<Heading title="Pokemon Details" />
			<button
				onClick={() => {
					if (isInTheTeam(pokemonId)) {
						removePokemonHandler(pokemonId);
					} else {
						addPokemonHandler(pokemonData);
					}
				}}
			>
				{isInTheTeam(pokemonId) ? "Remove from Team" : "Add to Team"}
			</button>
			{/* Render the rest of your Pokemon details here */}
		</div>
	);
};

export default PokemonDetails;
