"use strict";
const midu = "109105100117";
const codember = "9911110010110998101114";
const codember_midu = "9911110010110998101114 109105100117";
const test = "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101";

const asciiToWord = function (input) {
    let word = '';
    let aux = '';
    for (let i = 0; i < input.length; i++) {
        if (Number.parseInt(aux) > 40) {
            word += String.fromCharCode(Number.parseInt(aux));
            aux = '';
        }
        aux += input.charAt(i);
        if (i >= input.length - 1) {
            word += String.fromCharCode(Number.parseInt(aux));
        }
    }
    return word;
};

const run = function (input) {
    const result = input.split(' ').map(asciiToWord);
    console.log(result);
};

run(test);

run(mail)