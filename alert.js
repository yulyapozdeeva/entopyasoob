
let string = prompt("Введите строку", "мама мыла раму.")

function getKol(string) {
	return 'Длина строки = ' + string.length;//15 
}

function printAmountSymbols(freq) {
	for (const key in freq) {
		console.log(key + ': ' + freq[key])
	}
}

function getAmountSymbols(string) {
	let freq = {};

	for (let i = 0; i < string.length; i++) {
		let character = string[i];

		if (freq[character]) {
			freq[character]++;
		} else {
			freq[character] = 1;
		}
	}
	

	return freq;
}

function getSimbol(stringLength) {
	return stringLength * 3;
}

function getEntropya(freq, stringLenght = 0) {
	let entropya = 0;

	for (const key in freq) {
		entropya += freq[key] / stringLenght * Math.log2(freq[key] / stringLenght)
	}

	return -entropya;
}

console.log(getKol(string));
console.log(getSimbol(string.length));
let freq = getAmountSymbols(string)
printAmountSymbols(freq)
console.log(getEntropya(freq, string.length))
alert((getEntropya(freq, string.length)))