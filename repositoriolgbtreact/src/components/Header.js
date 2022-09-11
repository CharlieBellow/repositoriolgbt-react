import React from "react";
import { Link } from "react-router-dom";



import favicon from "../assets/repositorio lgbt/coluna.png";

function Header() {
	return (
		<>
			<header className="header">
				<img src={favicon} alt="favicon" className="header__logo" />

				<nav className="header__nav">
					<ul>
						<li className="header__links">
							<Link to="/">Home</Link>
						</li>
						<li className="header__links">Contato</li>
						<li className="header__links">
							<Link to="/sobre">Sobre</Link>
						</li>
						<li className="header__links">Contribua</li>
						<li className="header__links">Ajuda</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header;
