//import searchByTitle from "../JS/searchByTitle.js";
//import textDataBase from "./Main.ja";

import { useState, useEffect } from "react"


const BarraDeBusca = () => {
	
  const [valorInput, setValorInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault()
    
    setValorInput(e.target.value);
    console.log(BarraDeBusca.value + valorInput + e.target.value);
  };
  


  useEffect(() => {
		console.log("testando");
	});
	return (
		<>
			<input
				type="text"
				name="busca"
				list="pesquisa"
				placeholder="faça sua busca aqui"
				rows="500px"
				size="60"
				aria-label="Digite seu campo de busca"
				className="search__searchBar"
				value={this.target.value}
				onChange={handleChange}
				
			/>
		</>
	);
};

export default BarraDeBusca;
