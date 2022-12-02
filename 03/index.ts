const input1: string[] = ['red', 'blue', 'red', 'blue', 'green']; // -> 4, blue
const input2: string[] = ['green', 'red', 'blue', 'gray']; // -> 2, gray
const input3: string[] = ['blue', 'blue', 'blue', 'blue']; // -> 1, blue
const input4: string[] = ['red', 'green', 'red', 'green', 'red', 'green']; // -> 6, green
const input5: string[] = ['blue', 'red', 'blue', 'red', 'gray']; // -> 4, red
const input6: string[] = ['red', 'red', 'blue', 'red', 'red', 'red', 'green']; // -> 3, red
const input7: string[] = ['red', 'blue', 'red', 'green', 'red', 'green', 'red', 'green']; // -> 6, green
const input8: string[] = ['red', 'blue', 'red', 'blue', 'green', 'yellow', 'green', 'red', 'green']; // -> 6, green

let maxLength = 0;
let finalColor = ''

const foo = function (input: string[]): string {

    let length: number = 2;
    let color = input[0]

    for (let i = 0; i < input.length - 2; i++) {

        if(input[i] == input[i+2] && input[i] != input[i+1]){
            length++
            color = input[i+2]
        }
        else {
            save(length, color); 
            color = input[i+1]
            length = 2
        }

        if(i >= input.length - 3) {
            save(length, color)
        }
    }

    return `${maxLength}@${finalColor}`;
}

const save = function (length: number, color: string) {
    if (length > maxLength) {
        maxLength = length;
        finalColor = color;
    }
}


const result = foo(input8)
console.log(result);
