'use strict';
document.addEventListener('DOMContentLoaded', function() {
	var fragen = 0,
		btnQ1,
		btnQ2,
		btnQ3,
		btnQ4,
		btnQ5,
		btnQ6;

	btnQ1 = document.querySelector('#btnQ1');
	btnQ2 = document.querySelector('#btnQ2');
	btnQ3 = document.querySelector('#btnQ3');
	btnQ4 = document.querySelector('#btnQ4');
	btnQ5 = document.querySelector('#btnQ5');
	btnQ6 = document.querySelector('#btnQ6');
	
	btnQ1.addEventListener('click', antwort(btnQ1));
	btnQ2.addEventListener('click', antwort(btnQ2));
	btnQ3.addEventListener('click', antwort(btnQ3));
	btnQ4.addEventListener('click', antwort(btnQ4));
	btnQ5.addEventListener('click', antwort(btnQ5));
	btnQ6.addEventListener('click', antwort(btnQ6));
	
	// Berechnung der Progressbar
	function progress() {
		fragen = fragen + 1;
		document.querySelector('#progress').value = (fragen / 6 * 100);
		document.querySelector('#fragenCounter').value = fragen;
	};
	
	// Antwort bearbeiten
	function antwort(nr) {
		progress();
		console.log(`Button "${nr.getAttribute('id')}" gedrückt.`);
		console.log(`Fragen: ${fragen}; in Prozent: ${(fragen / 6 * 100)}`);
		nr.setAttribute('aria-hidden', true);
		nr.className = 'btnQ durchsichtig';
		
		if (nr == btnQ1) {
			if (document.querySelector('#jahrestag').value == 1) {
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
			if (1 == 1) {
				document.querySelector('#ans4richtig').setAttribute('aria-hidden', false);
				document.querySelector('#ans4richtig').className = 'antwort richtig';
			} else {
				document.querySelector('#ans4falsch').setAttribute('aria-hidden', false);
				document.querySelector('#ans4falsch').className = 'antwort falsch';
			};
		} else if (nr == btnQ5) {
			if (1 == 1) {
				document.querySelector('#ans5richtig').setAttribute('aria-hidden', false);
				document.querySelector('#ans5richtig').className = 'antwort richtig';
			} else {
				document.querySelector('#ans5falsch').setAttribute('aria-hidden', false);
				document.querySelector('#ans5falsch').className = 'antwort falsch';
			};
		} else if (nr == btnQ6) {
			if (1 == 1) {
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