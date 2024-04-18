/*homework 9.11*/
/*suma liczb tablicy*/

const numbers = [12, 23, 5, 65, 787, -54, 14];
const sum = (numbers) => {
    let total = 0;
    for (partNumber of numbers){
        total = total + partNumber;
    }
    return total;
}
console.log(sum(numbers));