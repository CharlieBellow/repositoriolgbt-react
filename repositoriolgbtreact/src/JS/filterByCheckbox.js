

// respeitar estado?
// funcao recebe lista de textos e checkbox retorna a lista de texto filtrada depedendo da checkbox criada filterByCheckbox (arquivo separado) retorna lista de texto


function filterByCheckbox(list, checkbox) {
	var haveSomethingToFilter = [];
	for (let i = 0; i < checkbox.length; i++) {
		if (checkbox[i].check === false) {
			haveSomethingToFilter.push(false);
		}
		if (checkbox[i].check === true) {
			haveSomethingToFilter.push(true);
		}
	}
	var checkFilt = [...new Set(haveSomethingToFilter)];
	if (checkFilt.length === 1) {
		return list;
	}
	if (checkFilt.length >= 2) {
		var filteredList = [];
		for (let arrayList = 0; arrayList < list.length; arrayList++) {
			for (let arrayCheckBoxes = 0;arrayCheckBoxes < checkbox.length; arrayCheckBoxes++) {
				if (checkbox[arrayCheckBoxes].check === true &&
					(list[arrayList].titulo.toLowerCase().includes(checkbox[arrayCheckBoxes].name.toLowerCase()) ||
						list[arrayList].descricao.toLowerCase().includes(checkbox[arrayCheckBoxes].name.toLowerCase()) ||
						list[arrayList].categoria.toLowerCase().includes(checkbox[arrayCheckBoxes].name.toLowerCase()) ||
						list[arrayList].tipo.toLowerCase().includes(checkbox[arrayCheckBoxes].name.toLowerCase()))
				) {
					filteredList.push(list[arrayList]);
				}
			}
		}

		if (filteredList.length === 0) {
			
			return filteredList;
		}
			var myArray = [...new Set(filteredList)];
		
			return myArray;
		
	}
}


//function filterByCheckbox(list, checkbox) {
//	let filteredList = [];
//	console.log("entrou na filterByCheckbox");
//	console.log('filteredlist  '+ typeof filteredList);
//	for (let l = 0; l < list.length; l++) {
//		for (let c = 0; c < checkbox.length; c++) {
//			if (
//				list[l].titulo.toLowerCase().includes(checkbox[c].name.toLowerCase())
//				) {
//					if (!filteredList.includes(list[l].titulo)) {
//						filteredList.push(list[l]);
//					}
//			}
//
//			if (
//				list[l].descricao.toLowerCase().includes(checkbox[c].name.toLowerCase())
//			) {
//				if (!filteredList.includes(list[l].titulo)) {
//					filteredList.push(list[l]);
//				}
//			}
//
//			if (
//				list[l].categoria.toLowerCase().includes(checkbox[c].name.toLowerCase())
//			) {
//				if (!filteredList.includes(list[l].titulo)) {
//					filteredList.push(list[l]);
//				}
//			}
//		}
//	}
//	return filteredList;
//}

export default filterByCheckbox;

// respeitar estado?
// funcao recebe lista de textos e checkbox retorna a lista de texto filtrada depedendo da checkbox criada filterByCheckbox (arquivo separado) retorna lista de texto
//let arr = [
//	{ titulo: "Texto sobre lesbicas", descricao: "trans", categoria: 'lgbtfobia' },
//	{ titulo: "titulo sobre gay", descricao: "descricao", categoria: 'gay' },
//	{ titulo: "titulo do pansexualidade", descricao: "descricao", categoria: 'trans' },
//	{ titulo: "titulo do gênero", descricao: "descricao" , categoria: 'assexualidade'},
//	{ titulo: "titulo do artigos", descricao: "descricao" , categoria: 'escrito por lgbt'},
//];
//
//
//let initial = [
//  { name: "lesbica", check: false },
//	{ name: "gay", check: false },
//	{ name: "bissexualidade", check: true },
//	{ name: "travestis", check: false },
//	{ name: "transexuais", check: false },
//	{ name: "pessoas trans", check: true },
//	{ name: "pansexualidade", check: false },
//	{ name: "artigos", check: false },
//	{ name: "dissertacoes", check: false },
//	{ name: "escritos por trans", check: true },
//	{ name: "escrito por LGBT", check: false },
//	{ name: "assexualidade", check: false },
//	{ name: "gênero", check: false },
//	{ name: "lgbtfobia", check: false },
//];
//
//
//
//
//let filteredList = [];
//function filterByCheckbox(list, checkbox) {
//
//  for (let l = 0; l < list.length; l++) {
//    for (let c = 0; c < checkbox.length; c++) {
//        if (list[l].titulo.toLowerCase().includes(checkbox[c].name.toLowerCase())) {
//          if (!(filteredList.includes(list[l].titulo))) {
//            filteredList.push(list[l].titulo)
//
//          }
//        }
//
//        if (list[l].descricao.toLowerCase().includes(checkbox[c].name.toLowerCase())) {
//          if (!filteredList.includes(list[l].titulo)) {
//					  filteredList.push(list[l].titulo);
//			  	}
//        }
//
//        if (list[l].categoria.toLowerCase().includes(checkbox[c].name.toLowerCase())) {
//          if (!filteredList.includes(list[l].titulo)) {
//            filteredList.push(list[l].titulo);
//					}
//        }
//		}
//	}
//
//	return filteredList;
//}
//
//
//// vai no main definir outra funcão onCheckboxClick(recebe lista de checkbox) vai rodar quando clicar na checkbox. vai usar a filterByCheckbox() recebe lista de box e retorna lista atualizada e chama o setstate()
//// filtra as checkbox e set o estado
//function onCheckboxClick(initialCheckbox) {
//	//if (initial.check === true) {
//		//filterByCheckbox(textDataBase, initialCheckbox)
//    //setList(filterByCheckbox(textDataBase, initialCheckbox));
//	  const callFunction = filterByCheckbox(textDataBase, initialCheckbox);
//    setList(callFunction);
//	//}
//}
//onCheckboxClick(initialCheckbox);
//console.log(filteredList);
//
//
//// ----------------------------------------------
//function searchByTitle(a, searchTerm) {
//	let newArray = [];
//	for (let i = 0; i < a.length; i++) {
//		if (a[i].titulo.toLowerCase().includes(searchTerm.toLowerCase())) {
//			newArray.push(a[i]);
//		}
//	}
//	return newArray;
//}
//
//function searchByDescription(a, searchTerm) {
//	let newArray = [];
//	for (let i = 0; i < a.length; i++) {
//		if (a[i].descricao.toLowerCase().includes(searchTerm.toLowerCase())) {
//			newArray.push(a[i]);
//		}
//	}
//	return newArray;
//}
//
//function searchByCategory(a, searchTerm) {
//	let newArray = [];
//	for (let i = 0; i < a.length; i++) {
//		if (a[i].categoria.toLowerCase().includes(searchTerm.toLowerCase())) {
//			newArray.push(a[i]);
//		}
//	}
//	return newArray;
//}
//
//// ainda não tá pronta
//function searchByCheckbox(a, checkbox) {
//	let newArray = [];
//	for (let i = 0; i < a.length; i++) {
//		if (a[i].categoria.toLowerCase().includes(checkbox.toLowerCase())) {
//			newArray.push(a[i]);
//		}
//	}
//	return newArray;
//}
