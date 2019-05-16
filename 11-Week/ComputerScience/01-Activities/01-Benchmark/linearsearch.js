// var stuff =[10, 34, 56, 67, 93, 120, 137,168, 259, 280, 311, 342, 413, 514]

// var random_value = stuff[Math.floor(Math.random() * 14)];

// for (let i = stuff.length; i > 0; i--){
//   if(random_value === stuff[i]){
//     console.log(stuff[i] + ' this number matches at position ' + i);
//   }
// }

// let i=7
// while (i>=0 && i<stuff.length) { 
//     if (stuff[i] === random_value) {
//         console.log("found",stuff[i], i);
//         break;
//     } else if (stuff[i] < random_value) {
//         i++;
//     } else {
//         i--;
//     }
// }







var stuff = [10, 11, 101 , 12, 22, 345, 654, 587, 333];

var random_value = stuff[Math.floor(Math.random() * 10)];

function checkForNum() {
   for (let i = 0; i < stuff.length; i++) {
       if (stuff[i] == random_value) {
           console.log(i,  random_value);
       };

   };

}

checkForNum();






















