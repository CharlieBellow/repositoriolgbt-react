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


export default filterByCheckbox;