// Card.js
import React from "react";
import { Spoiler } from "@mantine/core";
import "./Card.css"; // Ensure you have a CSS file for styling the card

function Card({ title, description, showSpoiler }) {
	return (
		<div>
			<div className="card">
				<Spoiler
					Height={40}
					showLabel="عرض المزيد"
					hideLabel="أقل"
					style={{ width: "100%" }}
				>
					{/* <img src={image} alt={title} className='card-image' /> */}
					<h2 className="card-title">{title}</h2>

					<p className="card-description">{description}</p>
				</Spoiler>
			</div>
		</div>
	);
}

export default Card;
