import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Heading from "../../components/Heading";
import { MyTeamContext } from "../../context/MyTeamProvider";
import { fetchPokemonData } from "../../api";
import NavBtn from "../../components/NavBtn";
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import getImageUrl from "../../utils/getImageUrl";
import styles from "./styles.module.css";
import About from "./About";
import Stats from "./Stats";

const PokemonDetails = () => {
	const { pokemonName } = useParams();
	const navigate = useNavigate();
	const { addPokemonHandler, removePokemonHandler, isInTheTeam } = useContext(MyTeamContext);

	const [pokemonData, setPokemonData] = useState(null);

	useEffect(() => {
		const getPokemonData = async () => {
			const data = await fetchPokemonData(pokemonName);

			setPokemonData(data);
		};

		try {
			getPokemonData();
		} catch (err) {
			console.log(err);
		}
	}, [pokemonName]);

	if (!pokemonData) {
		return null;
	}

	const imageUrl = getImageUrl(pokemonData.id);
	const customClass = pokemonData.types.map(({ type }) => "card-" + type.name).join(" ");
	const paddedId = "#" + pokemonData.id.toString().padStart(3, "000");

	return (
		<div>
			<NavBtn
				text="My Team"
				link="my-team"
			/>
			<Heading title="Pokemon Details" />
			<Container>
				<Row className="justify-content-center">
					<Col
						md={8}
						sm={12}
						xs={12}
					>
						<Card className={`${styles.card} ${customClass}`}>
							<div
								className={styles.goBack}
								onClick={() => navigate(-1)}
							>
								<i className="fa-solid fa-arrow-left"></i>
							</div>
							<div className={styles.basicInfo}>
								<p className={styles.pokemonId}>{paddedId}</p>
								<h1>{pokemonData.name}</h1>
								<div className={styles.types}>
									{pokemonData.types.map(({ type }) => (
										<span key={type.name}>{type.name}</span>
									))}
								</div>
								<img
									src={imageUrl}
									alt={pokemonData.name}
								/>
								{/* <div className={styles.actionBtn}> */}

								{/* </div> */}
							</div>
							<div className={styles.extraInfo}>
								<Tabs defaultActiveKey="about">
									<Tab
										eventKey="about"
										title="About"
										className={styles.customTab}
									>
										<About pokemonData={pokemonData} />
									</Tab>
									<Tab
										eventKey="baseStat"
										title="Base Stat"
										className={styles.customTab}
									>
										<Stats stats={pokemonData.stats} />
									</Tab>
								</Tabs>
								<div className={styles.btnContainer}>
									<button
										className={`${styles.btn} ${
											isInTheTeam(pokemonName) ? styles.removeBtn : styles.addBtn
										}`}
										onClick={() => {
											if (isInTheTeam(pokemonName)) {
												removePokemonHandler(pokemonName);
											} else {
												addPokemonHandler(pokemonData);
											}
										}}
									>
										{isInTheTeam(pokemonName) ? "Remove from Team" : "Add to Team"}
									</button>
								</div>
							</div>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default PokemonDetails;
