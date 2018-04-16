function getLocal () {
	var notes = localStorage.getItem("noteList")

	console.log(notes);
	if(notes !=null) {
		return JSON.parse(notes);
	}

	else {
		console.log('it is on else');
		return [];
	}
}


function setLocal(inputText, inputDate, inputImportant, inputIcon) {
	var origNotes = getLocal ();
	var newNote = {
		text: 			inputText,
		date: 			inputDate,
		important: 		inputImportant,
		icon: 			inputIcon
	};

	origNotes.push(newNote);

	console.log(origNotes);

	var newNotes = JSON.stringify(origNotes);

	localStorage.setItem("noteList", newNotes);
}

window.onload = function() {
	console.log('window onload');
	var notes = getLocal();
	console.log(notes);

	var ulElm = document.querySelector('ul');

	for(var i = 0; i < notes.length; i++) {
		var liElm = document.createElement('li');
		var pElm = document.createElement('p');

		pElm.innerHTML = notes [i].text;

		liElm.appendChild(pElm);
		ulElm.appendChild(liElm);
	}
}