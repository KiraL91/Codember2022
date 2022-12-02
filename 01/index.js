const foo = function (input) {

    let lines = parse(input);

    let count = 0;
    let lastUsername = '';

    lines.forEach(line => {
        let isCorrect = true;
        const keys = new Map([
            ['usr', undefined],
            ['eme', undefined],
            ['psw', undefined],
            ['age', undefined],
            ['loc', undefined],
            ['fll', undefined]
        ]);

        line.split(' ').forEach(pair => {
            if (pair) {
                const key = pair.split(':')[0];
                const value = pair.split(':')[1];

                keys.set(key, value)
            }
        });

        for (let [key, value] of keys.entries()) {
            if (value === undefined) {
                isCorrect = false;
            }
        }

        if (isCorrect) {
            count++;
            lastUsername = keys.get('usr');
        }
    });

    return `${count}${lastUsername}`
}

const parse = function(input) {
    let lines = [];
    let aux = '';

    input.split('\n')
        .map(i => i.trim())
        .forEach((line, idx, all) => {
            if (line) {
                aux = `${aux} ${line}`;
            }
            else {
                lines.push(aux);
                aux = '';
            }
            if (idx == all.length - 1) {
                lines.push(aux);
            }
        });
    return lines;
}

// Paste content of input.js
const input = ''

const result = foo(input)
console.log(result)
