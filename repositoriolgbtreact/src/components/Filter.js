import {useState} from 'react'

function Filter() {
	// filtro:

	//criar uma div e colocar os check dentro. e criar um estado
	// lista de objeto, valor e booleano
	// fazer as check respeitar o estado e alterar o estado.
	// ao clicar precisa mudar o valor.

	const checkboxes = [
		{ name: "lesbica", check: false },
		{ name: "gay", check: true },
		{ name: "bissexualidade", check: false },
		{ name: "travestis", check: false },
		{ name: "transexuais", check: false },
		{ name: "pessoas trans", check: true },
		{ name: "pansexualidade", check: false },
		{ name: "artigos", check: false },
		{ name: "dissertacoes", check: false },
		{ name: "escritos por trans", check: false },
		{ name: "escrito por LGBT", check: false },
		{ name: "assexualidade", check: false },
		{ name: "gênero", check: false },
		{ name: "lgbtfobia", check: false },
	];

	const [listChecks, setListChecks] = useState(checkboxes)

	function handleChange(event) {
		event.preventDefault()
		//setState({ check: true })
		console.log("clicou " + event.target.checked);
		
	}



	return (
		<>
			<div className="filter__ret--purple content ">
				<div className="ion-icon">
					<ion-icon name="chevron-forward-outline"></ion-icon>
				</div>
				<div name="filtro" className="filter__form">
					<h3 className="h3">Filtro:</h3>
					<div>
						{listChecks.map(checks => (
							<>
								<input
									className="checkbox"
									type="checkbox"
									name={checks.name}
									//value={this.state.name}
									id={checks.name}
									//defaultChecked={true}
									//ref={this.input}
									//onClick={checkCheckBoxes}
									onChange={handleChange}
								/>
								<label htmlFor={checks.name}>{checks.name}</label>
								<br></br>
								{/* depois trocar essa quebra de linha para display flex no css */}
							</>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Filter;