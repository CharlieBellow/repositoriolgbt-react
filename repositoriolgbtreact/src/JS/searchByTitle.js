

	// respeitar estado?
	// funcao recebe lista de textos e checkbox retorna a lista de texto filtrada depedendo da checkbox criada filterByCheckbox (arquivo separado) retorna lista de texto

function filterByCheckbox(list, checkbox) {
	let filteredList = []

	for (let l = 0; l < list.length; l++) {
		for (let c = 0; c < checkbox.length; c++) {
			if (list[l].titulo.toLowerCase().includes(checkbox[c].name.toLowerCase())) {
				filteredList.push(list[l].titulo)
			}
		}
	}


	return filteredList
}

	// vai no main definir outra funcão onCheckboxClick(recebe lista de checkbox) vai rodar quando clicar na checkbox. vai usar a filterByCheckbox() recebe lista de box e retorna lista atualizada e chama o setstate()
	// filtra as checkbox e set o estado
function onCheckboxClick(initialCheckbox) {
	if (checkbox.check === true) {
		//filterByCheckbox(textDataBase, initialCheckbox)
		setList(filterByCheckbox(textDataBase, initialCheckbox))
	}
}


export function searchByTitle(a, searchTerm) {
	let newArray = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].titulo.toLowerCase().includes(searchTerm.toLowerCase())) {
			newArray.push(a[i]);
		}
	}
	return newArray;
}

export function searchByDescription(a, searchTerm) {
	let newArray = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].descricao.toLowerCase().includes(searchTerm.toLowerCase())) {
			newArray.push(a[i]);
		}
	}
	return newArray;
}

export function searchByCategory(a, searchTerm) {
	let newArray = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].categoria.toLowerCase().includes(searchTerm.toLowerCase())) {
			newArray.push(a[i]);
		}
	}
	return newArray;
}

// ainda não tá pronta
export function searchByCheckbox(a, checkbox) {
	let newArray = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].categoria.toLowerCase().includes(checkbox.toLowerCase())) {
			newArray.push(a[i]);
		}
	}
	return newArray;
}