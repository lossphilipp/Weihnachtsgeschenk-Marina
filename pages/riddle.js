'use strict';
document.addEventListener('DOMContentLoaded', function() {
	var fragen = 0,
		fragenGesamt = 6,
		btnQ1,
		btnQ2,
		btnQ3,
		btnQ4,
		btnQ5,
		btnQ6,
		name1,
		name2,
		name3,
		name4,
		hobby3,
		satz2;

	btnQ1 = document.querySelector('#btnQ1');
	btnQ2 = document.querySelector('#btnQ2');
	btnQ3 = document.querySelector('#btnQ3');
	btnQ4 = document.querySelector('#btnQ4');
	btnQ5 = document.querySelector('#btnQ5');
	btnQ6 = document.querySelector('#btnQ6');
	name1 = document.querySelector('#name1');
	name2 = document.querySelector('#name2');
	name3 = document.querySelector('#name3');
	name4 = document.querySelector('#name4');
	hobby3 = document.querySelector('#hobby3');
	satz2 = document.querySelector('#satz2');
	
	btnQ1.addEventListener('click', function() {antwort(btnQ1);}, true);
	btnQ2.addEventListener('click', function() {antwort(btnQ2);}, true);
	btnQ3.addEventListener('click', function() {antwort(btnQ3);}, true);
	btnQ4.addEventListener('click', function() {antwort(btnQ4);}, true);
	btnQ5.addEventListener('click', function() {antwort(btnQ5);}, true);
	btnQ6.addEventListener('click', function() {antwort(btnQ6);}, true);
	
	// Berechnung der Progressbar
	function progress() {
		fragen = fragen + 1;
		document.querySelector('#progress').value = (fragen / fragenGesamt * 100);
		document.querySelector('#fragenCounter').innerText = `${fragen} von ${fragenGesamt} Fragen beantwortet.`;
	};
	
	// Antwort bearbeiten
	function antwort(nr) {
		progress();
		console.log(`Button "${nr.getAttribute('id')}" gedrückt.`);
		console.log(`Fragen: ${fragen}; in Prozent: ${(fragen / fragenGesamt * 100)}`);
		nr.setAttribute('aria-hidden', true);
		nr.className = 'btnQ durchsichtig';
		
		if (nr == btnQ1) {
			if (document.querySelector('#jahrestag').value == '2018-10-16') {
				document.querySelector('#ans1richtig').setAttribute('aria-hidden', false);
				document.querySelector('#ans1richtig').className = 'antwort richtig';
			} else {
				document.querySelector('#ans1falsch').setAttribute('aria-hidden', false);
				document.querySelector('#ans1falsch').className = 'antwort falsch';
			};
		} else if (nr == btnQ2) {
			if (document.querySelector('#unterschied').value == 497) {
				document.querySelector('#ans2richtig').setAttribute('aria-hidden', false);
				document.querySelector('#ans2richtig').className = 'antwort richtig';
			} else {
				document.querySelector('#ans2falsch').setAttribute('aria-hidden', false);
				document.querySelector('#ans2falsch').className = 'antwort falsch';
			};
		} else if (nr == btnQ3) {
			if (document.querySelector('#liebesskala').value == 100) {
				document.querySelector('#ans3richtig').setAttribute('aria-hidden', false);
				document.querySelector('#ans3richtig').className = 'antwort richtig';
			} else {
				document.querySelector('#ans3falsch').setAttribute('aria-hidden', false);
				document.querySelector('#ans3falsch').className = 'antwort falsch';
			};
		} else if (nr == btnQ4) {
			if (name1.checked && name2.checked && name3.checked && name4.checked) {
				document.querySelector('#ans4richtig').setAttribute('aria-hidden', false);
				document.querySelector('#ans4richtig').className = 'antwort richtig';
			} else {
				document.querySelector('#ans4falsch').setAttribute('aria-hidden', false);
				document.querySelector('#ans4falsch').className = 'antwort falsch';
			};
		} else if (nr == btnQ5) {
			if (hobby3.checked) {
				document.querySelector('#ans5richtig').setAttribute('aria-hidden', false);
				document.querySelector('#ans5richtig').className = 'antwort richtig';
			} else {
				document.querySelector('#ans5falsch').setAttribute('aria-hidden', false);
				document.querySelector('#ans5falsch').className = 'antwort falsch';
			};
		} else if (nr == btnQ6) {
			if (satz2.checked) {
				document.querySelector('#ans6richtig').setAttribute('aria-hidden', false);
				document.querySelector('#ans6richtig').className = 'antwort richtig';
			} else {
				document.querySelector('#ans6falsch').setAttribute('aria-hidden', false);
				document.querySelector('#ans6falsch').className = 'antwort falsch';
			};
		} else {
			alert('Button konnte nicht festgestellt werden!');
		};
	};
});