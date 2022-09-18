import React from "react";

import Header from "../../components/Header";
import Filter from "../../components/Filter";
import Footer from "../../components/Footer";
//import Main from "../../components/Main";

function Sobre() {
	return (
		<>
			<Header />
			<Filter />
			{/*<Main />*/}

			<h2>Sobre</h2>
			<p>
				Esse site tem o objetivo de reunir textos acadêmicos escritos por
				pessoas LGBT e textos com temáticas LGBT.
			</p>

			<p>
				A ideia partiu de uma dificuldade que encontrei durante meu mestrado,
				onde não achava textos interessantes para minha escrita. A maioria dos
				textos que encontrava eram texto atrasados, que reproduziam a lógica
				cisheternormativa, e reproduziam muitos preconceitos. Por isso resolvi
				reunir aqui textos que realmente sejam interessantes.
			</p>

			<p>
				Além o texto você encontra um resumo do que se trata o texto, não aquele
				resumo de artigo que a gente lê, acha que o texto vai ser ótimo, e
				depois de lido, a cara de decepção fica estampada na nossa cara! rsrsrs
				Então aqui não tem enrolação, fizemos com todo carinho um mini
				fichamento dos textos pra você/! para
			</p>

			<p>
				Nossos textos estão separados por categoria, então você pode buscar o
				seu texto por assunto ou por tipo. Para achar o seu texto, é só
				pesquisar nessa barra de busca, como se fosse o Google, só que de texto
				LGBT. Você também pode usar o filtro e selecionar os assuntos que você
				quer que tenha no texto. Ex: homens trans, mulheres trans,
				pansexualidade, artigos, dissertações, etc...
			</p>

			<p>
				tem algum texto que gostaria de incluir aqui? entre em contato comigo
				nesse
				<a href="mailto:charliebftm@gmail.com">Email</a>
			</p>
			<Footer />
		</>
	);
}
export default Sobre;
