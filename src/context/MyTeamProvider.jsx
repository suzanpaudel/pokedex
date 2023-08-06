import { createContext, useEffect, useState } from "react";

export const MyTeamContext = createContext();

const MyTeamProvider = ({ children }) => {
	const [myTeam, setMyTeam] = useState(() => {
		const storedMyTeam = localStorage.getItem("my-team");
		return storedMyTeam ? JSON.parse(storedMyTeam) : [];
	});

	useEffect(() => {
		localStorage.setItem("my-team", JSON.stringify(myTeam));
	}, [myTeam]);

	const addPokemonHandler = pokemon => {
		if (myTeam.length >= 6) {
			alert("Maximum number of pokemon in the team reached");
			return;
		}

		setMyTeam(prevMyTeam => [...prevMyTeam, pokemon]);
	};

	const removePokemonHandler = pokemonName => {
		setMyTeam(prevMyTeam => prevMyTeam.filter(pokemon => pokemon.name !== pokemonName));
	};

	const isInTheTeam = pokemonName => {
		return myTeam.some(pokemon => pokemon.name === pokemonName);
	};

	const pokemonContextValue = {
		myTeam,
		addPokemonHandler,
		removePokemonHandler,
		isInTheTeam,
	};

	return <MyTeamContext.Provider value={pokemonContextValue}>{children}</MyTeamContext.Provider>;
};

export default MyTeamProvider;
