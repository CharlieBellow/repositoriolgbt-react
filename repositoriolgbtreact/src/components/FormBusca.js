//import BarraDeBusca from "./BarraDeBusca.js";
//import Botao from "./Botao";
import React from 'react'
import TextDataBase from '../components/TextDataBase'

class FormBusca extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	searchByTitle(a, searchTerm) {
	let newArray = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].titulo.toLowerCase().includes(searchTerm.toLowerCase())) {
			newArray.push(a[i]);
		}
	}
	return newArray;
}

  handleSubmit(event) {
    //colocar a função de pesquisar pelo título aqui
		let newArray = [];
		for (let i = 0; i < TextDataBase.length; i++) {
			if (
				TextDataBase[i].titulo
					.toLowerCase()
					.includes(this.state.value.toLowerCase())
			) {
				newArray.push(TextDataBase[i]);
			}
		}
		return newArray;

//		searchByTitle(TextDataBase, this.state.value);
//		alert("Um nome foi enviado: " + this.state.value);
//		event.preventDefault();

		
	}



	render() {
		return (
			<form
				name="form"
				className="search__toLookFor"
				method="post"
				action="#"
				onSubmit={this.handleSubmit}
			>
					<input
						type="text"
						name="busca"
						list="pesquisa"
						placeholder="faça sua busca aqui"
						rows="500px"
						size="60"
						aria-label="Digite seu campo de busca"
						className="search__searchBar"
						value={this.state.value}
						onChange={this.handleChange}
					/>
				<input type="submit" className="search__button" value="Pesquisar" />
			</form>
		);
	}
}

export default FormBusca;
