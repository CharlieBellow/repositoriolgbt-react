import searchByTitle from './Main' 
import textDataBase from './Main.js'
import BarraDeBusca from "./BarraDeBusca.js"

import { useEffect } from "react";

const Botao = () => {
	
	const handleClick = () => {
    searchByTitle(textDataBase, BarraDeBusca.state.value);
    console.log("clicou");
  };
  
    useEffect(() => {
			console.log("testando");
		});

	return (
		<>
			<input
				type="submit"
				className="search__button"
				value="Pesquisar"
				onClick={handleClick}
			/>
		</>
	);
};

export default Botao;