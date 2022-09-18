import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<img
				src="./assets/repositorio lgbt/coluna.png"
				alt="favicon"
				className="footer__logo"
			></img>
			<ul className="footer__social">
				<li>
					<a href="mailto:charliebftm@gmail.com" className="footer__midia">
						charliebftm@gmail.com
					</a>
				</li>
			</ul>

			<nav>
				<ul className="footer__nav">
					<li className="footer__links">Home</li>
					<li className="footer__links">Contato</li>
					<li className="footer__links">
						<a href="./sobre/sobre.html">Sobre</a>
					</li>
					<li className="footer__links">Contribua</li>
					<li className="footer__links">Ajuda</li>
				</ul>
			</nav>
		</footer>
	);
}
export default Footer;
