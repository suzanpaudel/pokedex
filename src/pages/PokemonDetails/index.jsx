import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Heading from "../../components/Heading";
import { PokemonsContext } from "../../context/PokemonsProvider";
import { fetchPokemonData } from "../../api";

const PokemonDetails = () => {
	const { pokemonId } = useParams();
	const pokemonsContext = useContext(PokemonsContext);
	const { pokemons, setPokemons } = pokemonsContext;

	const [pokemonData, setPokemonData] = useState(null);

	useEffect(() => {
		const getPokemonData = async () => {
			let data;
			console.log(pokemons, "test");
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
			<Heading title="Pokemon Details" />
			<button>Add to the team</button>
			{/* Render the rest of your Pokemon details here */}
		</div>
	);
};

export default PokemonDetails;
