var pass1 = 55678; // es correcto lo cumple todo
var pass2 = 12555; // es correcto, lo cumple todo
var pass3 = 55555; // es correcto, lo cumple todo
var pass4 = 12345; // es incorrecto, no tiene el 5 repetido.
var pass5 = 57775; // es incorrecto, los números no van de forma creciente
var passwords = [];
var testPassword = function (password) {
    if (isValid(password)) {
        passwords.push(password);
    }
};
var isValid = function (password) {
    var numbers = numberToCharArray(password);
    if (numbers.filter(function (n) { return n == '5'; }).length < 2)
        return false;
    for (var i = 0; i < numbers.length - 1; i++) {
        var left = Number(numbers[i]);
        var right = Number(numbers[i + 1]);
        if (right < left) {
            // console.log(password)
            return false;
        }
    }
    return true;
};
var numberToCharArray = function (value) {
    var aux = String(value);
    var numbers = [];
    for (var i = 0; i < aux.length; i++) {
        numbers.push(aux[i]);
    }
    return numbers;
};
var run = function () {
    for (var i = 11098; i <= 98123; i++) {
        testPassword(i);
    }
    return "".concat(passwords.length, "-").concat(passwords[55]);
};
console.log(run());
