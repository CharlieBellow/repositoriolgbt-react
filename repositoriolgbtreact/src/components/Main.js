import { useState } from "react";
import Filter from "./Filter.js";


import {Autor}  from "../JS/Autor.js";
import { Texto } from "../JS/Texto.js";


import FormBusca from './FormBusca.js'

import filterByCheckbox from "../JS/filterByCheckbox.js";
/* Index ------------------------------------------------------------------------------------------------ */

const scote = new Autor("Fausto", "Scote", "Ciências Sociais");
const ceccarelli = new Autor("Paulo", "Ceccarelli", "Psicanalista");
const moira = new Autor("Amara", "Moira", "filosofa");
//const jesus = new Autor("Jaqueline", "Jesus", "filosofa");
const vergueiro = new Autor("Viviane", "Vergueiro", "filosofa");
const vieira = new Autor("Helena", "Vieira", "filosofa");

const butler = new Autor("Judith", "Butler", "pós-estruturalista");

const textoTransformandoAUniversidade = new Texto(
	"Trans-formando a universidade: um estudo sobre o acesso e a permanência de pessoas Trans no Ensino Superior",
	scote,
	2020,
	"artigo",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"esse é um texto que fala sobre as pessoas trans na universidade. esse é um texto que fala sobre as pessoas trans na universidade.esse é um texto que fala sobre as pessoas trans na universidade "
);

const textoSeraQueTemosDireito = new Texto(
	"SERÁ QUE TEMOS MESMO O DIREITO A UNIVERSIDADE ? O DESAFIO DO ACESSO E PERMANÊNCIA DE PESSOAS TRANSEXUAIS NO ENSINO SUPERIOR",
	scote,
	2012,
	"artigo",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"esse texto fala sobre o acesso e a permanência de pessoas trans na universidade.esse texto fala sobre o acesso e a permanência de pessoas trans na universidadeesse texto fala sobre o acesso e a permanência de pessoas trans na universidade"
);

const textoUmEstudoEtnografico = new Texto(
	"Um estudo Etnográfico da Prostituição Masculina e locais fechados",
	scote,
	2021,
	"dissertação",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"esse texto fala da Prostituição masculina e seus desafios. esse texto fala da Prostituição masculina e seus desafios"
);

const textoAInvencaoDaHomossexualidade = new Texto(
	"A invenção da Homossexualidade",
	ceccarelli,
	2015,
	"artigo",
	"homossexuais",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"nesse texto Ceccarelli discorre sobre a história da homossexualidade. nesse texto Ceccarelli discorre sobre a história da homossexualidade.nesse texto Ceccarelli discorre sobre a história da homossexualidade."
);

const textoUmProblemaDeGenero = new Texto(
	"Um problema de gênero",
	butler,
	2021,
	"livro",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"um texto clássico de judith Butler. um texto clássico de judith Butler.um texto clássico de judith Butler.um texto clássico de judith Butler.um texto clássico de judith Butler.um texto clássico de judith Butler."
);

const textoAExperienciaDaCidade = new Texto(
	"A experiencia da cidade para pessoas LGBTQIA",
	moira,
	2000,
	"materia",
	"LGBTQIA+",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"esse texto fala sobre a experiência da cidade para pessoas trans. esse texto fala sobre a experiência da cidade para pessoas trans"
);

const textoAProstituicaoComo = new Texto(
	"A prostituição como trincheira trans",
	moira,
	2001,
	"materia",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"discorrendo sobre as dificuldades enfrentadas pelas pessoas trans, a autora destaca a prostituição como alternativa..."
);

const textoAutobiografiasTrans = new Texto(
	"Autobiografias trans",
	moira,
	2001,
	"materia",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"esse texto trans várias referências sobre pessoas trans, a exemplo de João Nery"
);

const textoTransSexualidade = new Texto(
	"Trans Sexualidade",
	vergueiro,
	2015,
	"artigo",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"tudo que você precisa saber sobre transexualidade. tudo que você precisa saber sobre transexualidade. tudo que você precisa saber sobre transexualidade"
);

const textoTransfeminismo = new Texto(
	"Transfeminismo",
	vieira,
	2014,
	"artigo",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"transfeminismo, um tema necessário dentro dos estudos de gênero. transfeminismo, um tema necessário dentro dos estudos de gênero. transfeminismo, um tema necessário dentro dos estudos de gênero"
);



const textDataBase = [];

textDataBase.push(
	textoTransformandoAUniversidade,
	textoSeraQueTemosDireito,
	textoUmEstudoEtnografico,
	textoAInvencaoDaHomossexualidade,
	textoUmProblemaDeGenero,
	textoAExperienciaDaCidade,
	textoAProstituicaoComo,
	textoAutobiografiasTrans,
	textoTransSexualidade,
	textoTransfeminismo
);


function searchByTitle(a, searchTerm) {
	let newArray = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].titulo.toLowerCase().includes(searchTerm.toLowerCase())) {
			newArray.push(a[i]);
		}
	}
	return newArray;
}

// vai no main definir outra funcão onCheckboxClick(recebe lista de checkbox) vai rodar quando clicar na checkbox. vai usar a filterByCheckbox() recebe lista de box e retorna lista atualizada e chama o setstate()
	// filtra as checkbox e set o estado



	
	function Main() {
		const [list, setList] = useState(textDataBase);
		const searchText = searchTerm => {
			const query = searchByTitle(textDataBase, searchTerm);
			setList(query);
		};
		
		
		const onCheckboxClick = (initialCheckbox) => {
			const callFunction = filterByCheckbox(textDataBase, initialCheckbox);
			setList(callFunction);
		}

	


	const url = "../Text";

	return (
		<>
			<main>
				<Filter
					searchText={searchText}
					textDataBase={textDataBase}
					searchByTitle={searchByTitle}
					onCheckboxClick={onCheckboxClick}
				/>
				<section className="search content filter__flex">
					<div className="search__text">
						{/* as tag de componentes também são funções disfarçadas de tag, por isso, conseguimos passar parâmetros. esses parametros são recebidos nos elementos filhos para serem usados lá */}
						<FormBusca searchText={searchText} />
					</div>
					<aside className="block content .filter__flex">
						<button onClick={() => searchText("gênero")}>Limpar</button>
						<div>
							{list.map(text => (
								<div key={text.titulo}>
									<h3>
										<a href={url} className="title">
											{text.titulo}
										</a>
										<p className="icon">4.5</p>
									</h3>
									<p className="description">{text.descricao}</p> <br></br>
								</div>
							))}
						</div>
					</aside>

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

