var popup = document.getElementById('newpostpopup');

var newpostbutton = document.getElementById("newpostbutton");

var closebutton = document.getElementsByClassName("closebutton")[0];

newpostbutton.onclick = function() {
    popup.style.display = "block";
}

closebutton.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

<<<<<<< HEAD
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
=======
var like = function() {
  document.getElementById("currentlike").value = parseInt(document.getElementById("currentlike").value,10) + 1;
};
>>>>>>> 65ce7038b1a181ab9a1670bd3c10e7a3fc683df5
