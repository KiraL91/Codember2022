const midu: string = "109105100117";
const codember: string = "9911110010110998101114";
const codember_midu: string = "9911110010110998101114 109105100117";

const test: string = "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101"

const mail: string = "83101 113117105101110 101114101115 84101 9911111011112299111 84117 110111 109101 9911111011199101115 97 109105 84101 101115116111121 1119811510111411897110100111 84101 101115116111121 115105103117105101110100111 81117105101114101115 10611710397114 7411710110397 99111110109105103111 8697108101 8697109111115 97 10611710397114 691061019911711697 101115116101 9911110997110100111 101110 10897 11610111410910511097108 11511798109105116 116561181061045651505752561029911097108"


const asciiToWord = function (input: string) {
    let word: string = '';
    let aux: string = ''

    for (let i = 0; i < input.length; i++) {
        if (Number.parseInt(aux) > 32) {
            word += String.fromCharCode(
                Number.parseInt(aux)
            );
            aux = '';
        }
        aux += input.charAt(i);
        if (i >= input.length - 1) {
            word += String.fromCharCode(
                Number.parseInt(aux)
            );
        }
    }
    return word;
}

const run = function (input: string): string[] {
    return input.split(' ').map(asciiToWord)
}

const result = run(test);
console.log(result);