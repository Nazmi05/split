const greeting="Привет, как дела?"

 const str=greeting.split(' ');

 console.log(str);

 const fruits ="яблоко,банан,груша,апельсин"

 const fruits2=fruits.split(',')

 console.log(fruits2);

const hello=["Привет", "мир", "!"]

const str1=hello.join('')

console.log(str1);

const phrase="hello"

const reverseit = phrase.split("").reverse().join("");

console.log(reverseit);


let text = "Каждое слово начинается с буквы";
let firstLetters = text.split(' ').map(word => word[0]);

console.log(firstLetters);

let text6="Привет как дела";

let withhyphen=text6.split(" ").join("-")

console.log(withhyphen);

let text7= "JavaScript - это весело";

let divide =text7.split(" ");

console.log(divide.length);


let text8="   Привет   как    дела   ";

let withoutspace=text8.split(/\s+/).join(' ').trim();

console.log(withoutspace);


let num9= [1, 2, 3, 4, 5]

let numstr=num9.join(",");

console.log(numstr);

let num10="1 2 3 4 5"

let num10arr= num10.split(" ");
 let numbers10=num10arr.map(Number);

 console.log(numbers10);






