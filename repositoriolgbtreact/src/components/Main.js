//import { useState, useEffect } from "react";


//import { textDataBase } from "../JS/textDataBase";
//import { searchByTitle } from "../JS/searchByTitle.js";
//import { showText } from "../JS/showText.js";
//
function Main() {
//
//  const [mostraTextos, useMostraTextos] = useState(showText(textDataBase));
//
//  const searchButton = (e) => {
//    e.preventDefault();
//
//    const resultOfSearch = searchByTitle(textDataBase);
//    
//    
//  }
//	
//  
//  useEffect(() => {
//    showText(searchButton);
//
//  })

	return (
		<>
			<main>
				<section className="search content filter__flex">
					<div className="search__text">
						<form
							name="form"
							className="search__toLookFor"
							method="post"
							action="#"
						>
							<input
								type="search"
								name="busca"
								list="pesquisa"
								placeholder="faça sua busca aqui"
								rows="500px"
								size="60"
								aria-label="Digite seu campo de busca"
								className="search__searchBar"
							/>
							<input
								type="submit"
								className="search__button"
								value="Pesquisar"
							/>
							<br></br>
							<br></br>
						</form>
					</div>
					<aside
						className="block content .filter__flex"
						
					></aside>

					<p>
						tem algum texto que gostaria de incluir aqui? entre em contato
						comigo nesse <a href="mailto:charliebftm@gmail.com">Email</a>
					</p>

					<div id="like_button_container"></div>
				</section>
			</main>
		</>
	);
}
export default Main;
