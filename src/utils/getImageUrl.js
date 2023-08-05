const getImageUrl = pokemonId => {
	const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other";

	if (parseInt(pokemonId) >= 650) {
		return `${baseUrl}/official-artwork/${pokemonId}.png`;
	}

	return `${baseUrl}/dream-world/${pokemonId}.svg`;
};

export default getImageUrl;
