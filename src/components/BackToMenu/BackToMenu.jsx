// Components
import React from "react";
import "./BackToMenu.css";
import BackIcon from "../svg/BackIcon";
import { Link } from "react-router-dom";

const BackToMenu = ({ place }) => {
	return (
		<div className="backToMenuContainer">
			<Link to={place}>
				<div className="backToMenuContainer__inner">
					<BackIcon
						fill={"white"}
						width="24px"
						style={{ height: 24, width: 24 }}
						className="backIcon"
					/>
					<p>Volver atras</p>
				</div>
			</Link>
		</div>
	);
};

export default BackToMenu;
