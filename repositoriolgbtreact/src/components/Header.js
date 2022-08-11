



function Header() {

  return (
		<>
			<header className="header">
				<img
					src="../assets/repositorio lgbt/coluna.png"
					alt="favicon"
					className="header__logo"
				/>
				<nav className="header__nav">
					<ul>
						<li className="header__links">Home</li>
						<li className="header__links">Contato</li>
						<li className="header__links">
							<a href="/#">Sobre</a>
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