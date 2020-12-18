'use strict';
document.addEventListener('DOMContentLoaded', function() {
	var fragen = 0,
		fragenGesamt = 7,
		fragenRichtig = 0,
		btnQ1 = document.querySelector('#btnQ1'),
		btnQ2 = document.querySelector('#btnQ2'),
		btnQ3 = document.querySelector('#btnQ3'),
		btnQ4 = document.querySelector('#btnQ4'),
		btnQ5 = document.querySelector('#btnQ5'),
		btnQ6 = document.querySelector('#btnQ6'),
		btnQ7 = document.querySelector('#btnQ7'),
		name1 = document.querySelector('#name1'),
		name2 = document.querySelector('#name2'),
		name3 = document.querySelector('#name3'),
		name4 = document.querySelector('#name4'),
		hobby1 = document.querySelector('#hobby1'),
		hobby2 = document.querySelector('#hobby2'),
		hobby3 = document.querySelector('#hobby3'),
		hobby4 = document.querySelector('#hobby4'),
		satz1 = document.querySelector('#satz1'),
		satz2 = document.querySelector('#satz2'),
		satz3 = document.querySelector('#satz3'),
		satz4 = document.querySelector('#satz4'),
		person1 = document.querySelector('#person1'),
		person2 = document.querySelector('#person2'),
		person3 = document.querySelector('#person3'),
		person4 = document.querySelector('#person4'),
		heute = new Date().toISOString().split("T")[0];
	
	document.querySelector('#jahrestag').setAttribute('max', heute);
	document.querySelector('#fragenCounter').innerText = `${fragen} von ${fragenGesamt} Fragen beantwortet.`
	
	btnQ1.addEventListener('click', function() {antwort(btnQ1);}, true);
	btnQ2.addEventListener('click', function() {antwort(btnQ2);}, true);
	btnQ3.addEventListener('click', function() {antwort(btnQ3);}, true);
	btnQ4.addEventListener('click', function() {antwort(btnQ4);}, true);
	btnQ5.addEventListener('click', function() {antwort(btnQ5);}, true);
	btnQ6.addEventListener('click', function() {antwort(btnQ6);}, true);
	btnQ7.addEventListener('click', function() {antwort(btnQ7);}, true);
	
	// Berechnung der Progressbar
	function progress() {
		fragen = fragen + 1;
		document.querySelector('#progress').value = (fragen / fragenGesamt * 100);
		document.querySelector('#fragenCounter').innerText = `${fragen} von ${fragenGesamt} Fragen beantwortet.`;
	};
	
	// Antwort kontrollieren und das entsprechende <div> einblenden
	function antwort(nr) {
		console.log(`Button "${nr.getAttribute('id')}" gedrückt.`);
		if (nr == btnQ1) {
			if (document.querySelector('#jahrestag').value == '2018-10-16') {
				document.querySelector('#ans1richtig').setAttribute('aria-hidden', false);
				document.querySelector('#ans1richtig').className = 'antwort richtig';
				fragenRichtig = fragenRichtig + 1;
			} else if (document.querySelector('#jahrestag').value == '') {
				console.log('Leereingabe');
				alert('Bitte geben sie vor der Überprüfung ein Datum ein.');
				throw('Kein Datum (Frage 1)');
			} else {
				document.querySelector('#ans1falsch').setAttribute('aria-hidden', false);
				document.querySelector('#ans1falsch').className = 'antwort falsch';
			};
		} else if (nr == btnQ2) {
			if (document.querySelector('#unterschied').value == 497) {
				document.querySelector('#ans2richtig').setAttribute('aria-hidden', false);
				document.querySelector('#ans2richtig').className = 'antwort richtig';
				fragenRichtig = fragenRichtig + 1;
			} else if (document.querySelector('#unterschied').value == '') {
				console.log('Leereingabe');
				alert('Bitte geben sie vor der Überprüfung eine Zahl ein.');
				throw('Keine Zahl (Frage 2)');
			} else {
				document.querySelector('#ans2falsch').setAttribute('aria-hidden', false);
				document.querySelector('#ans2falsch').className = 'antwort falsch';
			};
		} else if (nr == btnQ3) {
			if (document.querySelector('#liebesskala').value == 100) {
				document.querySelector('#ans3richtig').setAttribute('aria-hidden', false);
				document.querySelector('#ans3richtig').className = 'antwort richtig';
				fragenRichtig = fragenRichtig + 1;
			} else {
				document.querySelector('#ans3falsch').setAttribute('aria-hidden', false);
				document.querySelector('#ans3falsch').className = 'antwort falsch';
			};
		} else if (nr == btnQ4) {
			if (name1.checked && name2.checked && name3.checked && name4.checked) {
				document.querySelector('#ans4richtig').setAttribute('aria-hidden', false);
				document.querySelector('#ans4richtig').className = 'antwort richtig';
				fragenRichtig = fragenRichtig + 1;
			} else if (!name1.checked && !name2.checked && !name3.checked && !name4.checked) {
				console.log('Leereingabe');
				alert('Bitte Tätigen sie vor der Überprüfung eine Auswahl.');
				throw('Kein Auswahl (Frage 4)');
			} else {
				document.querySelector('#ans4falsch').setAttribute('aria-hidden', false);
				document.querySelector('#ans4falsch').className = 'antwort falsch';
			};
		} else if (nr == btnQ5) {
			if (hobby3.checked) {
				document.querySelector('#ans5richtig').setAttribute('aria-hidden', false);
				document.querySelector('#ans5richtig').className = 'antwort richtig';
				fragenRichtig = fragenRichtig + 1;
			} else if (!hobby1.checked && !hobby2.checked && !hobby3.checked && !hobby4.checked) {
				console.log('Leereingabe');
				alert('Bitte Tätigen sie vor der Überprüfung eine Auswahl.');
				throw('Kein Auswahl (Frage 5)');
			} else {
				document.querySelector('#ans5falsch').setAttribute('aria-hidden', false);
				document.querySelector('#ans5falsch').className = 'antwort falsch';
			};
		} else if (nr == btnQ6) {
			if (satz2.checked) {
				document.querySelector('#ans6richtig').setAttribute('aria-hidden', false);
				document.querySelector('#ans6richtig').className = 'antwort richtig';
				fragenRichtig = fragenRichtig + 1;
			} else if (!satz1.checked && !satz2.checked && !satz3.checked && !satz4.checked) {
				console.log('Leereingabe');
				alert('Bitte Tätigen sie vor der Überprüfung eine Auswahl.');
				throw('Kein Auswahl (Frage 6)');
			} else {
				document.querySelector('#ans6falsch').setAttribute('aria-hidden', false);
				document.querySelector('#ans6falsch').className = 'antwort falsch';
			};
		} else if (nr == btnQ7) {
			if (person4.checked) {
				document.querySelector('#ans7richtig').setAttribute('aria-hidden', false);
				document.querySelector('#ans7richtig').className = 'antwort richtig';
				fragenRichtig = fragenRichtig + 1;
			} else if (!person1.checked && !person2.checked && !person3.checked && !person4.checked) {
				console.log('Leereingabe');
				alert('Bitte Tätigen sie vor der Überprüfung eine Auswahl.');
				throw('Kein Auswahl (Frage 7)');
			} else {
				document.querySelector('#ans7falsch').setAttribute('aria-hidden', false);
				document.querySelector('#ans7falsch').className = 'antwort falsch';
			};
		} else {
			alert('Button konnte nicht festgestellt werden!');
		};
		
		progress();
		nr.setAttribute('aria-hidden', true);
		nr.className = 'btnQ durchsichtig';
		console.log(`beantwortete Fragen: ${fragen} | in Prozent: ${(fragen / fragenGesamt * 100)}`);
		
		if (fragen == fragenGesamt) {
			ergebnisauswertung();
		};
	};
	
	// Wenn alle Fragen eingegeben wurden soll ein Ergebnisfenster eingeblendet werden, dass die Leistung bewertet.
	function ergebnisauswertung() {
		document.querySelector('#ergebnis').className = '';
		console.log(`${fragenRichtig} von ${fragenGesamt} Fragen richtig! | in Prozent: ${(fragenRichtig / fragenGesamt * 100)}`);
		
		var ergebnisPunkte = document.createElement("p"),
			ergebnisText = document.createElement("p"),
			ergebnisBild = document.createElement("img");
			
		ergebnisPunkte.innerText = `Du hast ${fragenRichtig} von ${fragenGesamt} Fragen richtig!`;
		if (fragenRichtig < 3) {
			ergebnisText.innerText = 'Du bist eindeutig nicht Marina, sonst wüsstest du mehr!';
			ergebnisBild.setAttribute('src', '../icons/smiley-sad.svg');
		} else if (fragenRichtig > 5) {
			ergebnisText.innerHTML = 'Das ist gut wenn du so viel weißt!<br>Hab dich lieb!';
			ergebnisBild.setAttribute('src', '../icons/smiley-happy.svg');
		} else {
			ergebnisText.innerText = 'Nicht schlecht, aber das kann noch besser werden!';
			ergebnisBild.setAttribute('src', '../icons/smiley-neutral.svg');
		};
		document.querySelector('#punktestand').appendChild(ergebnisPunkte);
		document.querySelector('#punktestand').appendChild(ergebnisText);
		document.querySelector('#ergebnisemoji').appendChild(ergebnisBild);
	};
	
	// Funktionen damit das Script auch beim Drücken von Enter ausgeführt wird und nicht nur beim Drücken der Buttons.
	document.querySelector('#unterschied').addEventListener('keyup', function(event) {
		if (event.keyCode === 13) {
			document.querySelector('#btnQ2').click();
		}
	}); 
});