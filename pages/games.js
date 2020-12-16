'use strict';
document.addEventListener('DOMContentLoaded', function() {
	var bereich = 0,
		zufallszahl = 0,
		eingabe = 0,
		i = 0,
		vorbereitung,
		spielen,
		resetButton,
		output;

	vorbereitung = document.querySelector('#vorbereitung');
	spielen = document.querySelector('#spielen');
	resetButton = document.querySelector('#reset');
	output = document.querySelector('output');

	document.querySelector('#start').addEventListener('click', spielstart);
	document.querySelector('#check').addEventListener('click', runde);
	resetButton.addEventListener('click', resetten);

	// Legt beim Drücken des Start-Buttons die zufällige Zahl fest und blendet die entsprechendne Felder aus bzw. ein.
	function spielstart() {
		bereich = parseInt(document.querySelector('#bereich').value);
			output.innerHTML = `Der Bereich liegt zwischen 1 und ${bereich}!`;
			console.log(`Der Bereich liegt zwischen 1 und ${bereich}.`);
			
		zufallszahl = Math.floor(Math.random() * Math.floor(bereich)) + 1;
			console.log(`Die Zufallszahl lautet ${zufallszahl}!`);
		
		vorbereitung.setAttribute('aria-hidden', true);
		vorbereitung.className = 'unsichtbar';
		spielen.setAttribute('aria-hidden', false);
		spielen.className = 'sichtbar';
	};

	// Gibt bei Eingabe einer Zahl an ob die gesuchte darüber oder darunter liegt. Wenn die Zahl stimmt wird der Reset-Button eingeblendet.
	function runde() {
		eingabe = parseInt(document.querySelector('#eingabe').value);
		i = i + 1;
		output.innerHTML += `<br><br>${i}. Eingabe: ${eingabe}`;
		console.log(`${i}. Eingabe: ${eingabe}`);
		
		if (i >= 3) {
			output.innerHTML = output.innerHTML.substr(output.innerHTML.indexOf('<br><br>')+8);
		}
		
		if (eingabe == zufallszahl) {
			console.log(`Korrekt beim ${i}. Versuch! Die gesuchte Zahl war ${eingabe}.`);
			output.innerHTML += `<br>Korrekt beim ${i}. Versuch! Die gesuchte Zahl war ${eingabe}.`;
			spielen.setAttribute('aria-hidden', true);
			spielen.className = 'unsichtbar';
			resetButton.setAttribute('aria-hidden', false);
			resetButton.className = 'sichtbar';
		} else if (eingabe > zufallszahl) {
			output.innerHTML += '<br>Die gesuchte Zahl ist kleiner!';
		} else if (eingabe < zufallszahl) {
			output.innerHTML += '<br>Die gesuchte Zahl ist größer!';
		} else {
			alert('Irgendwas ist schiefgelaufen! Schließen sie bitte das Fenster!');
		};
	};

	// Setzt das Spiel auf den Initialzustand zurück.
	function resetten() {
		vorbereitung.setAttribute('aria-hidden', false);
		vorbereitung.className = 'sichtbar';
		spielen.setAttribute('aria-hidden', true);
		spielen.className = 'unsichtbar';
		resetButton.setAttribute('aria-hidden', true);
		resetButton.className = 'unsichtbar';
		console.log('*** NEUSTART ***');
		output.innerHTML = '*** NEUSTART ***';
		bereich = 0;
		zufallszahl = 0;
		eingabe = 0;
		i = 0;
	};

	// Funktionen damit das Script nach der Zahleneingabe auch beim Drücken von Enter ausgeführt wird und nicht nur beim Drücken der Buttons.
	document.querySelector('#bereich').addEventListener('keyup', function(event) {
		if (event.keyCode === 13) {
			document.querySelector('#start').click();
		}
	}); 

	document.querySelector('#spielen').addEventListener('keyup', function(event) {
		if (event.keyCode === 13) {
			document.querySelector('#check').click();
		}
	});
	
	
	// Spielbeschreibungen ein-/ausblenden
	document.querySelector('#zahlenButton').addEventListener('click', function(event) {
		var beschreibungZahlen = document.querySelector('#beschreibungZahlen');
		if (beschreibungZahlen.getAttribute('aria-hidden') == 'false') {
			beschreibungZahlen.setAttribute('aria-hidden', true);
			beschreibungZahlen.className = 'unsichtbar';
		} else if (beschreibungZahlen.getAttribute('aria-hidden') == 'true') {
			beschreibungZahlen.setAttribute('aria-hidden', false);
			beschreibungZahlen.className = 'sichtbar';
		}
	});
});