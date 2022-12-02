var test = ['cero', 'uno', 'dos', 'trets', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
var mecenas = [
    "Gorusuke",
    "DavidFabian",
    "ItziarZG",
    "edy WOLF",
    "MarcosGaPe",
    "Jose Jimenez",
    "Borja ",
    "Jhonathan Izquierdo Higuita",
    "MiLfeR322",
    "Sebastián Espínola",
    "Matias Luna",
    "Imanol Decima",
    "MarcoCasula",
    "MaríaBohórquez",
    "Renan",
    "IvanL'olivier",
    "Shonero",
    "Luichidev",
    "Faviola Narvaez",
    "Christopher Fuentes",
    "Kuro",
    "Juan Pablo Addeo",
    "Sergio Martínez",
    "Fran Enriquez González",
    "Diana",
    "tictools",
    "ConchaAsensio",
    "Emilio_Arreaza",
    "novamix",
    "Tomas Duclos",
    "Elaya",
    "Ignacio Palominos",
    "David C.",
    "Gerardo Felipe Conrado",
    "ElXuri",
    "David Borja Martinez",
    "JaviFelices",
    "CarlesSànchez",
    "Gorusuke",
    "DavidFabian",
    "ItziarZG",
    "edy WOLF",
    "MarcosGaPe",
    "Jose Jimenez",
    "Borja ",
    "Jhonathan Izquierdo Higuita",
    "MiLfeR322",
    "Sebastián Espínola",
    "Matias Luna",
    "Imanol Decima",
    "MarcoCasula",
    "MaríaBohórquez",
    "Renan",
    "IvanL'olivier",
    "Shonero",
    "Luichidev",
    "Faviola Narvaez",
    "Christopher Fuentes",
    "Kuro",
    "Juan Pablo Addeo",
    "Sergio Martínez",
    "Fran Enriquez González",
    "Diana",
    "tictools",
    "ConchaAsensio",
    "Emilio_Arreaza",
    "novamix",
    "Tomas Duclos",
    "Elaya",
    "Ignacio Palominos",
    "David C.",
    "Gerardo Felipe Conrado",
    "ElXuri",
    "David Borja Martinez",
    "JaviFelices",
    "CarlesSànchez",
    "Gorusuke",
    "DavidFabian",
    "ItziarZG",
    "edy WOLF",
    "MarcosGaPe",
    "Jose Jimenez",
    "Borja ",
    "Jhonathan Izquierdo Higuita",
    "MiLfeR322",
    "Sebastián Espínola",
    "Matias Luna",
    "Imanol Decima",
    "MarcoCasula",
    "MaríaBohórquez",
    "Renan",
    "IvanL'olivier",
    "Shonero",
    "Luichidev",
    "Faviola Narvaez",
    "Christopher Fuentes",
    "Kuro",
    "Juan Pablo Addeo",
    "Sergio Martínez",
    "Fran Enriquez González",
    "Diana",
    "tictools",
    "ConchaAsensio",
    "Emilio_Arreaza",
    "novamix",
    "Tomas Duclos",
    "Elaya",
    "Ignacio Palominos",
    "David C.",
    "Gerardo Felipe Conrado",
    "ElXuri",
    "David Borja Martinez",
    "JaviFelices",
    "CarlesSànchez"
];
// const run = function (input: string[]): string {
//     let copy = [...input];
//     console.log(input.length)
//     while (copy.length > 1) {
//         let a: string[] = []
//         for (let i = 0; i < copy.length; i++) {
//             if (i == 0 && copy.length % 2 != 0) continue;
//             if (i % 2 == 0) a.push(copy[i])
//         }
//         console.log(a)
//         copy = [...a]
//     }
//     return `${copy[0]}-${input.findIndex(e => e == copy[0])}`
// }
// const result = run(mecenas);
// console.log(result);
var hungerGames = function (players) {
    var playersl = players.length;
    var pos = "0";
    while (playersl > 2) {
        var half = playersl % 2 === 0 ? 0 : 1;
        pos += half;
        playersl = half === 0 ? Math.ceil(playersl / 2) : Math.floor(playersl / 2);
    }
    var indexWinner = parseInt(pos.split("").reverse().join(""), 2);
    return [players[indexWinner], indexWinner];
};
var result = hungerGames(mecenas);
console.log(result);
