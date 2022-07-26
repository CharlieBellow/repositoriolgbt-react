//import { useState, useEffect } from "react";



//import textDataBase from "../JS/textDataBase";
//import searchByTitle from "../JS/searchByTitle.js";
//import showText  from "../JS/showText.js";
import Text from "../Text.js"; // página de texto
//import searchByTitle from '../JS/searchByTitle.js'

import {Autor}  from "../JS/Autor.js";
import { Texto } from "../JS/Texto.js";

//import BarraDeBusca from './BarraDeBusca.js'
//import Botao from './Botao'
import FormBusca from './FormBusca.js'
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

//const textDataBase = [];
//// adicionando os textos criados dentro do array
//textDataBase.push(
//	textoTransformandoAUniversidade,
//	textoSeraQueTemosDireito,
//	textoUmEstudoEtnografico,
//	textoAInvencaoDaHomossexualidade,
//	textoUmProblemaDeGenero,
//	textoAExperienciaDaCidade,
//	textoAProstituicaoComo,
//	textoAutobiografiasTrans,
//	textoTransSexualidade,
//	textoTransfeminismo
//);
//
function Main() {
//
//  const [mostraTextos, useMostraTextos] = useState(showText(textDataBase));
//
//  const searchButton = (e) => {
//    e.preventDefault();
//
//    const resultOfSearch = searchByTitle(textDataBase);
//    
//    
//  }
//	
//  
//  useEffect(() => {
//    showText(searchButton);
//
//  })
	
	const textDataBase = [];
	// adicionando os textos criados dentro do array
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

	
	//function searchByTitle(a, searchTerm) {
	//	let newArray = [];
	//	for (let i = 0; i < a.length; i++) {
	//		if (a[i].titulo.toLowerCase().includes(searchTerm.toLowerCase())) {
	//			newArray.push(a[i]);
	//		} else if (a[i].descricao.toLowerCase().includes(searchTerm.toLowerCase())) {
	//			newArray.push(a[i]);
	//		} else if (a[i].categoria.toLowerCase().includes(searchTerm.toLowerCase())) {
	//			newArray.push(a[i]);
	//		}
	//	}
	//	return newArray;
	//}
	
	

	return (
		<>
			<main>
				<section className="search content filter__flex">
					<div className="search__text">
						<FormBusca/>
						{/*<form
							name="form"
							className="search__toLookFor"
							method="post"
							action="#"
						>*/}
							{/* esse botão tem que transformar em componente pra poder pegar o que foi digitado na tela? */}
							{/*<input
								type="search"
								name="busca"
								list="pesquisa"
								placeholder="faça sua busca aqui"
								rows="500px"
								size="60"
								aria-label="Digite seu campo de busca"
								className="search__searchBar"
								value=""
							/>*/}
							{/*<BarraDeBusca />*/}
							{/*<Botao />*/}
							{/*<input
								type="submit"
								className="search__button"
								value="Pesquisar"
								onSubmit={searchByTitle(textDataBase, input.value)}
							/>*/}
							{/*<br></br>
							<br></br>
						</form>*/}
					</div>
					<aside className="block content .filter__flex">
						{/* textos */}
						{/*<h3>
							<a class="title" href="#">
								{text.titulo}
							</a>{" "}
							<p class="icon">4.5</p>
						</h3>
						<p class="description">descricao</p> <br></br>*/}

						<div>
							{textDataBase.map(text => (
								// lembrar de colocar o key={item.id} pra ele identificar o elemento que ele tá trabalhando
								<>
									<h3>
										<a className="title" href={Text}>
											{text.titulo}
										</a>{" "}
										<p className="icon">4.5</p>
									</h3>
									<p className="description">{text.descricao}</p> <br></br>
								</>
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