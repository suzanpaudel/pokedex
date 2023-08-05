const BASE_URL = "https://pokeapi.co/api/v2/";

export const fetchPokemons = async (limit, offset) => {
	const response = await fetch(BASE_URL + `pokemon?limit=${limit}&offset=${offset}`);
	const data = await response.json();
	return data.results;
};

export const fetchPokemonData = async name => {
	const response = await fetch(BASE_URL + `pokemon/${name}`);
	const data = await response.json();
	return data;
};
