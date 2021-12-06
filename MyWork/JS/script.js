const obj = {
    name: 'John',
    age: 25,
    isMarried: false
};

console.log(obj.name);

let arr = [
    'plum.png', 'orange.jpg', 'apple.bmp'
];

console.log(arr[2]);



alert('Hello');
confirm("Are you here");
prompt("if you 18", "");



const answers = [];

answers[0] = prompt("wat is you name?", "");
answers[1] = prompt("wat is you sure name?", "");
answers[2] = prompt("how old is you?", "");

document.write(answers);
typeof(answers);



let user = "Ivan";
alert(`Hello, ${user}`);



let num = 50 ;
// if (num< 49) {
//     console.log("Error");
// } else if (num> 100){
//     console.log ("Too mutch");
// } else {
//     console.log("Ok");
// }

// (num == 50) ? console.log("Ok") : console.log("Error");

// switch(num) {
//     case 49:console.log('no');
//     break;
//     case 100:console.log('no');
//     break;
//     case 50:console.log('Yes');
//     break;
//     default:console.log('No so good');
//     break;
// }

// while ( num < 55 ) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;  
// }
// while(num <= 55);

for (let i = 1; i<10; i++) {
    if (i == 6) {
       // break
       continue;   
    }
    console.log(i);
}