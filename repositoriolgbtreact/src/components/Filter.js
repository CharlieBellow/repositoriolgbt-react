
import { useState } from 'react'


const initialCheckboxes = [
	{ name: "lesbica", check: false },
	{ name: "gay", check: false },
	{ name: "bissexualidade", check: false },
	{ name: "travestis", check: false },
	{ name: "transexuais", check: false },
	{ name: "trans", check: false },
	{ name: "pansexualidade", check: false },
	{ name: "artigos", check: false },
	{ name: "dissertacoes", check: false },
	{ name: "escritos por trans", check: false },
	{ name: "escrito por LGBT", check: false },
	{ name: "assexualidade", check: false },
	{ name: "gênero", check: false },
	{ name: "lgbtfobia", check: false },
];


function Filter({onCheckboxClick}) {

	const [listChecks, setListChecks] = useState(initialCheckboxes);

// colocar no github pages
	// descobrir o que vou fazer da vida nos projetos
	function handleClick(event) {
		const temp = listChecks.slice(); //cópia da lista para atualizar

		//.map?
	  const updatedCheckboxes = listChecks.map((checkbox) => checkbox.name === event.target.name ? {...checkbox, check:  !checkbox.check} : {...checkbox} )
	

		for (let i = 0; i < temp.length; i++) {
			if (event.target.name === temp[i].name) {
				if (temp[i].check === false) {
					temp[i].check = true;
					
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
				onCheckboxClick(temp);
				
			}

	//onClick() {
	//	console.log('entrou na função onClickCheckbox');
	//	
	//	onCheckboxClick(listChecks);
	//	
	//	
	//	console.log("terminou na função");
	//
	//}


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