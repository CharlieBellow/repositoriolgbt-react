import {useState} from 'react'

function Filter() {
	// filtro:

	//criar uma div e colocar os check dentro. e criar um estado
	// lista de objeto, valor e booleano
	// fazer as check respeitar o estado e alterar o estado.
	// ao clicar precisa mudar o valor.

	const checkboxes = [
		{ name: "lesbica", check: false },
		{ name: "gay", check: false },
		{ name: "bissexualidade", check: false },
		{ name: "travestis", check: false },
		{ name: "transexuais", check: false },
		{ name: "pessoas trans", check: false },
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

	function handleClick(event) {
		event.preventDefault()

	
		
		for (let i = 0; i < checkboxes.length; i++) {
			if (event.target.name === checkboxes[i].name) {
				if (checkboxes[i].check === false) {
					checkboxes[i].check = true;
					// adicionar o atributo checked para o componente
				
					//event.target.setAttribute('checked', 'checked')
					
				

					console.log(
						"nome: " +
							checkboxes[i].name +
							", cheked True: " +
							checkboxes[i].check
					);
				} else if (checkboxes[i].check === true) {
					checkboxes[i].check = false;
					console.log(
						"nome: " + checkboxes[i].name + ", cheked false: " + checkboxes[i].check
					);
				}
				}
				
		}
		setListChecks(checkboxes)

		
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
							<div>
								<input
									className="checkbox"
									type="checkbox"
									name={checks.name}
									id={checks.name}
									onClick={handleClick}
									//checked={this.isTrue}
									//defaultChecked
								/>
								<label htmlFor={checks.name}>{checks.name}</label>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Filter;