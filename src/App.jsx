import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PokemonsProvider from "./context/PokemonsProvider";
import MyTeam from "./pages/My Team";
import PokemonsList from "./pages/PokemonsList";
import PokemonDetails from "./pages/PokemonDetails";
import PageNotFound from "./pages/PageNotFound";
import generations from "./data/generation";

function App() {
	return (
		<PokemonsProvider>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<Navigate
								to={generations[0].link}
								replace
							/>
						}
					/>
					{generations.map(generation => (
						<Route
							key={generation.id}
							path={generation.link}
							element={<PokemonsList genId={generation.id} />}
						/>
					))}
					<Route
						path="pokemon/:pokemonId"
						element={<PokemonDetails />}
					/>
					<Route
						path="my-team"
						element={<MyTeam />}
					/>
					<Route
						path="*"
						element={<PageNotFound />}
					/>
				</Routes>
			</BrowserRouter>
		</PokemonsProvider>
	);
}

export default App;
