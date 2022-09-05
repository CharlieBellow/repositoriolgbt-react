
import React from 'react'

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


  handleSubmit(event) {
		this.props.searchText(this.state.value)
		
	}



	render() {
		return (
			<div name="form" className="search__toLookFor">
				<input
					type="text"
					placeholder="faça sua busca aqui"
					rows="500px"
					size="60"
					aria-label="Digite seu campo de busca"
					className="search__searchBar"
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<button
					className="search__button"
					onClick={this.handleSubmit}
				>
					Pesquisar
				</button>
			</div>
		);
	}
}

export default FormBusca;


