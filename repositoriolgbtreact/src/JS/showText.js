export function showText(array) {
	// tentativa de verificar se existe div dentro do aside, se tiver ele apaga enquanto existir. se não tiver ele executa o código da função que mostra o texto

	// atualizar a tela quando pesquisar e chamar a função que adiciona os títulos filtrados.
	if (document.querySelector(".block").querySelector("div")) {
		while (document.querySelector(".block").querySelector("div")) {
			document
				.querySelector(".block")
				.removeChild(
					document.querySelector(".block").querySelector("div")
				);
		}
	}

	for (let index = 0; index < array.length; index++) {
		let text = array[index];

		const html = `
			<h3><a class="title" href="./texto.html">${text.titulo}</a> <p class="icon">4.5</p></h3>
			<p class="description">${text.descricao}</p> <br> <br>
		`;

		const aside = document.querySelector("aside.block");

		const textDiv = document.createElement("div");

		textDiv.innerHTML = html;

		aside.appendChild(textDiv);
	}
}