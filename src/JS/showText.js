
export function showText(array) {
	
	if (document.querySelector(".block").querySelector("div")) {
		while (document.querySelector(".block").querySelector("div")) {
			document
				.querySelector(".block")
				.removeChild(document.querySelector(".block").querySelector("div"));
		}
	}

	for (let index = 0; index < array.length; index++) {
		let text = array[index];

		const html = `
			<h3><a class="title" href={Text}>${text.titulo}</a> <p class="icon">4.5</p></h3>
			<p class="description">${text.descricao}</p> <br> <br>
		`;

		const aside = document.querySelector("aside.block");

		const textDiv = document.createElement("div");

		textDiv.innerHTML = html;

		aside.appendChild(textDiv);
	}
}
