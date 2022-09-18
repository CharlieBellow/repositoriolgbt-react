import React from "react";

import Header from "../../components/Header";
import Filter from "../../components/Filter";
import Footer from "../../components/Footer";

function Text() {
	return (
		<>
			<Header />
			<Filter />
			{/* 
			
			* colocar o conteúdo do texto aqui (criar componente texto)
			refazer o deploy:
			- tentar refazer o que foi feito e testar
			 - colocar o projeto na raiz onde tá o git e fazer o commit disso e depois testar
			 - subir o projeto pela master na pasta/docs e colocar o build dentro da pasta /docs 
			 - criar um repositório separado para fazer o deploy
			 * ajeitar o css do filtro e do site todo (ver a questão do icone)
			 */}
			<Footer />
		</>
	);
}
export default Text;
