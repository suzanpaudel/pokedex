import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import PokemonDetails from "./pages/PokemonDetails";
import MyTeam from "./pages/My Team";
import generations from "./data/generation";
import PageNotFound from "./pages/PageNotFound";

function App() {
	return (
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
						element={<PokemonList />}
					/>
				))}
				<Route
					path="pokemon/:id"
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
	);
}

export default App;
