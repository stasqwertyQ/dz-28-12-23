// task1

let namb = [1, 2, 3, 4, 5,];

namb[1] = 10;

console.log(namb);



// task2


let strings = ["рядок 1", "рядок 2", "рядок 3"];

strings.push("рядок 4");

console.log(strings);



// task 3


let numbs = [7, 8, 2, 8, 3];


function sumArray(arr) {

let sum = arr.reduce(function (total, current) {
    return total + current;
}, 0);

return sum;
}

let result = sumArray(numbs);
console.log("Сума чисел в масиві:", result);



//task 4


let Namb4 = [1, 3, 5, 7, 9];


for (let i = 0; i < Namb4.length; i++) {
console.log(Namb4[i]);
}



//task 5

let stringsss = ["Рядок 1", "Довгий рядок", "Середній", "Знову рядок", "Рядок 5"];


for (let i = 0; i < stringsss.length; i++) {
if (stringsss[i].length > 5) {
    console.log(stringsss[i]);
}
}





//task 6



var numbersMas = [5, 12, 88, 30, 201, 7, 15, 10, 275, 318];


var maxNumber = numbersMas[0]; 

for (var i = 1; i < numbersMas.length; i++) {
    if (numbersMas[i] > maxNumber) {
        maxNumber = numbersMas[i]; 
    }
}


console.log("Максимальне значення в масиві: " + maxNumber);