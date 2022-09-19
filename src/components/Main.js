import React from 'react'
import { Link } from "react-router-dom";
//import Text from "../Pages/Text";


import { useState } from "react";
import Filter from "./Filter.js";

import {Autor}  from "../JS/Autor.js";
import { Texto } from "../JS/Texto.js";

import FormBusca from './FormBusca.js'

import filterByCheckbox from "../JS/filterByCheckbox.js";


const scote = new Autor("Fausto", "Scote", "Ciências Sociais");
const ceccarelli = new Autor("Paulo", "Ceccarelli", "Psicanalista");
const moira = new Autor("Amara", "Moira", "filosofa");
const vergueiro = new Autor("Viviane", "Vergueiro", "filosofa");
const vieira = new Autor("Helena", "Vieira", "filosofa");
const butler = new Autor("Judith", "Butler", "pós-estruturalista");

const textoTransformandoAUniversidade = new Texto(
	"trans-formando a universidade: um estudo sobre o acesso e a permanência de pessoas trans no Ensino Superior",
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
	"será que temos mesmo o direito a universidade ? o desafio do acesso e permanência de pessoas transexuais no ensino superior",
	scote,
	2012,
	"artigo",
	"travesti",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"esse texto fala sobre o acesso e a permanência de pessoas trans na universidade.esse texto fala sobre o acesso e a permanência de pessoas trans na universidadeesse texto fala sobre o acesso e a permanência de pessoas trans na universidade"
);

const textoUmEstudoEtnografico = new Texto(
	"um estudo etnográfico da prostituição masculina e locais fechados",
	scote,
	2021,
	"dissertação",
	"gay",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"esse texto fala da prostituição masculina e seus desafios. esse texto fala da prostituição masculina e seus desafios"
);

const textoAInvencaoDaHomossexualidade = new Texto(
	"a invenção da homossexualidade",
	ceccarelli,
	2015,
	"escrito por LGBT",
	"gay",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"nesse texto Ceccarelli discorre sobre a história da homossexualidade. nesse texto ceccarelli discorre sobre a história da homossexualidade.nesse texto ceccarelli discorre sobre a história da homossexualidade."
);

const textoUmProblemaDeGenero = new Texto(
	"Um problema de gênero",
	butler,
	2021,
	"livro",
	"genero",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"um texto clássico de judith Butler. um texto clássico de judith Butler.um texto clássico de judith Butler.um texto clássico de judith Butler.um texto clássico de judith Butler.um texto clássico de judith Butler."
);

const textoAExperienciaDaCidade = new Texto(
	"A experiencia da cidade para pessoas lgbtqia",
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
	"escritos por trans",
	"artigo",
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
	"trans Sexualidade",
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
	"transfeminismo",
	vieira,
	2014,
	"artigo",
	"lesbicas",
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

	
function Main() {
	const [list, setList] = useState(textDataBase);
	const searchText = searchTerm => {
		const query = searchByTitle(textDataBase, searchTerm);
		setList(query);
};


function onCheckboxClick(checkboxArray) {

	var filteredList = filterByCheckbox(textDataBase, checkboxArray);
	setList(filteredList);

}


		

	//}


	return (
		<>
			<main>
				<Filter onCheckboxClick={onCheckboxClick} />
				<section className="search content filter__flex">
					<div className="search__text">
						<FormBusca searchText={searchText} />
					</div>
					<aside className="block content .filter__flex">
						<div>
							{list.map(text => (
								<div key={text.titulo}>
									<h3>
										<Link to='/Texto' className="title">
											{text.titulo}
										</Link>
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

