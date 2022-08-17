
import { useState } from 'react'
import textDataBase from './Main'
import searchText from './Main'
//import searchByTitle from './Main'


//import searchByTitle from './Main'

const initialCheckboxes = [
	{ name: "lesbica", check: false },
	{ name: "gay", check: false },
	{ name: "bissexualidade", check: true },
	{ name: "travestis", check: false },
	{ name: "transexuais", check: false },
	{ name: "pessoas trans", check: true },
	{ name: "pansexualidade", check: false },
	{ name: "artigos", check: false },
	{ name: "dissertacoes", check: false },
	{ name: "escritos por trans", check: true },
	{ name: "escrito por LGBT", check: false },
	{ name: "assexualidade", check: false },
	{ name: "gênero", check: false },
	{ name: "lgbtfobia", check: false },
];


function Filter() {
	// fazer o filtro filtrar os textos



	const [listChecks, setListChecks] = useState(initialCheckboxes);

	const [list, setList] = useState(textDataBase);
	var dataInput;
	// FUNÇÃO QUE IMPRIME O checkbox clicado NO CONSOLE QUANDO ele é true
	function funcao() {
		if (dataInput) {
			console.log(dataInput);
			//se tá marcado como true ele vai pesquisar, se não não pesquisa
			searchText(dataInput);
		}
	}
	//funcao()

	function handleClick(event) {
		const temp = listChecks.slice();
		//const [filter, setFilter] = useState(textDataBase)

		for (let i = 0; i < temp.length; i++) {
			if (event.target.name === temp[i].name) {
				if (temp[i].check === false) {
					temp[i].check = true;
					dataInput = temp[i].name;

					console.log(
						"nome: " + temp[i].name + ", cheked True: " + temp[i].check
					);
				} else if (temp[i].check === true) {
					temp[i].check = false;
					console.log(
						"nome: " + temp[i].name + ", cheked false: " + temp[i].check
					);
				}
			}
		}

		setListChecks(temp);
		funcao();
	}

	//console.log(listChecks);

	return (
		<>
			<div className="filter__ret--purple content ">
				<div className="ion-icon">
					<ion-icon name="chevron-forward-outline"></ion-icon>
				</div>
				<div name="filtro" className="filter__form">
					<h3 className="h3">Filtro:</h3>
					<div>
						{listChecks.map(checkbox => (
							// sempre que dá um map nas listas é importante colocar a key pra o React saber qual é o elemento que vai mudar
							<div key={checkbox.name}>
								<input
									className="checkbox"
									type="checkbox"
									name={checkbox.name}
									id={checkbox.name}
									onChange={handleClick}
									checked={checkbox.check}
									//defaultChecked
								/>
								<label htmlFor={checkbox.name}>{checkbox.name}</label>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Filter;