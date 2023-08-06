import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import styles from "./styles.module.css";
import getImageUrl from "../../utils/getImageUrl";

const PokemonItem = ({ pokemon }) => {
	if (!pokemon) {
		return null;
	}

	const { name, id, types } = pokemon;

	const paddedId = "#" + id.toString().padStart(3, "000");
	const customClass = types.map(({ type }) => "card-" + type.name).join(" ");
	const imageUrl = getImageUrl(id);

	return (
		<Col
			lg={4}
			md={6}
			sm={12}
		>
			<Link to={`/pokemon/${name}`}>
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
								src={imageUrl}
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
