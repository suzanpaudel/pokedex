import { useState } from "react";
import { createContext } from "react";

export const PokemonsContext = createContext();

const PokemonsProvider = ({ children }) => {
	const [pokemons, setPokemons] = useState([]);

	return <PokemonsContext.Provider value={{ pokemons, setPokemons }}>{children}</PokemonsContext.Provider>;
};

export default PokemonsProvider;
