import { Container, Row } from "react-bootstrap";
import PokemonItem from "../PokemonItem";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { PokemonsContext } from "../../context/PokemonsProvider";
import { fetchPokemonData, fetchPokemons } from "../../api";

import generations from "../../data/generation";

const PokemonsView = ({ genId }) => {
	const [isLoading, setIsLoading] = useState(false);
	const pokemonsContext = useContext(PokemonsContext);
	const { pokemons, setPokemons } = pokemonsContext;

	const generation = useMemo(() => {
		return generations.find(gen => gen.id === genId);
	}, [genId]);

	const fetchData = useCallback(async () => {
		setIsLoading(true);
		setPokemons([]);
		const pokemonsData = await fetchPokemons(generation.limit, generation.offset);

		const data = [];

		await Promise.all(
			pokemonsData.map(async ({ name }) => {
				const pokemon = await fetchPokemonData(name);

				data[pokemon.id] = pokemon;
			})
		);

		setPokemons(data);
		setIsLoading(false);
	}, [generation.limit, generation.offset]);

	useEffect(() => {
		if (genId) {
			fetchData();
		}
	}, [genId, fetchData]);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<Container>
			<Row>
				{pokemons.map(pokemon => (
					<PokemonItem
						key={pokemon.id}
						pokemon={pokemon}
					/>
				))}
			</Row>
		</Container>
	);
};

export default PokemonsView;
