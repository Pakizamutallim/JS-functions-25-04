// alert();

// var person1 = {
//     ad: 'Eli', 
//     soyad : 'Necefli',
//     ata : 'Sahil'
// }
// function sayHello(value) {
//     console.log(`Salam ${person1.ad}`);
//     if (confirm(person1.soyad)) {
//         console.log(`Salam ${person1.soyad} ${person1.ad}`); 
//     }
//     if (confirm(person1.ata)) {
//         var firstA = person1.ad[1];
//         var firstS = person1.soyad[1];
//         console.log (Salam `firstA` `.` `firstS` `.` `${person1.ata}`);
//     }
// }
// sayHello(person1); 










// Toplama, cixma, vurma, bolmeye uygun funksiya yarat... 


// function operators(value) {
    // var a = Number(prompt("eded daxil edin"));
    // var b = Number(prompt("ikinci eded")); 
    // var c = prompt("emeliyyati daxil edin");
    // // var toplama = Number(a) +  Number(b); 
    
//     if (c == '+') {
//         var toplama = Number(a) +  Number(b); 
//         console.log(toplama);
//     }

//     if (c == '-') {
//         var cixma = Number(a) - Number(b); 
//         console.log (cixma);
//     }
//     if (c == '*'){
//         var vurma = Number (a) * Number(b);
//         console.log (vurma)
//     }
//     if (c == '/'){
//         var bolme = Number(a)/ Number(b);
//         console.log (bolme); 
//     }
    
// }

// operators();




// function operator(value) {
//     var a = Number(prompt("eded daxil edin"));
//     var b = Number(prompt("ikinci eded")); 
//     var c = prompt("emeliyyati daxil edin");

//     // var toplama = Number(a) +  Number(b); 
//     var cixma = Number(a) - Number(b); 
//     switch (findOperator) {
//         case 1:
//             var toplama = Number(a) +  Number(b); 
//             console.log(toplama);
//             break;
//         case 2:
//             console.log(cixma);
//             break; 
//         default:
//             console.log("netice yoxdur");
//             break;
//     }
// }

// operator()













// C Bir eded daxil edin eded 50den kicikdirse...

// alert()
function findNumOfDiv(a) {
    var say=0
    for (var i = 1; i < a.length; i++) {
        if (a<50 && i % 3 == 0) {
            console.log(i); 
            say++
        }

        else if (a>50 && a<100 && a.i % 5 == 0) {
            console.log(i);
            say++
        }

        else if (a>100 && i % 8 == 0) {
            // console.log(i);
            say++
        }
        
    }
}
var x = prompt();
console.log(findNumOfDiv(x)); 
