import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import styles from "./styles.module.css";

const PokemonItem = ({ pokemon }) => {
	if (!pokemon) {
		return null;
	}

	const { name, id, types } = pokemon;

	console.log(types);

	const paddedId = "#" + id.toString().padStart(3, "000");
	const customClass = types.map(({ type }) => "card-" + type.name).join(" ");

	return (
		<Col
			md={4}
			sm={6}
			xs={12}
		>
			<Link to={`/pokemon/${id}`}>
				<Card className={`${styles.card} ${customClass}`}>
					<Card.Body className={styles.cardBody}>
						<div className={styles.cardInfo}>
							<p>{paddedId}</p>
							<h3>{name}</h3>
							{types.map(({ type }) => (
								<span key={type.name}>{type.name}</span>
							))}
						</div>
						<div className={styles.cardImg}>
							<img
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
								alt={name}
							/>
						</div>
					</Card.Body>
				</Card>
			</Link>
		</Col>
	);
};

export default PokemonItem;
