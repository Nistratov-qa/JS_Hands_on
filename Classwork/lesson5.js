/* call / bind / apply 

каррирование - позволяет с помощью .bind() задавать некую логику для уже существующей функции

ДЗ
1. bind2()
2. prototype on YouTube
3. factory function
    https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1

*/
//===========================================

function sayName(greeting1, greeting2) {
    console.log(this.name + " " + greeting1, greeting2);
    }
    
    const persone = {
    name: "Vlad",
    surname : "Sydorenko"
    }
    
    const persone1 = {
    name: "1",
    surname : "1"
    }
    
    const args = ["Hi","Hello"]
    // if (args.length == 2) {
    // args.push("lol");
    // }
    
    // // sayName("Hi","Hello")
    sayName.call(persone1, "Hi","Hello");
    // sayName.call(persone, ...args);
    
   // var user = { firstName: "Vlad", 
   // surname: "Syd", 
   // patronym: "Ivan"
   // };
   // function showFullName(firstPart, lastPart) { 
   // console.log(this);
   // console.log( this[firstPart] + " " + this[lastPart] ); 
   // }
   // showFullName.call(user, 'firstName', 'surname') // ”Vlad Syd" 
   // showFullName.call(user, 'firstName', 'patronym') // ”Vlad Ivan”
    
   // const vladGreeting = sayName.bind(persone);
   // vladGreeting.call(persone1,0,0)
   // vladGreeting(1,2);
   // vladGreeting(11,22);
   // vladGreeting(1112,1000);
    
   function mul(a,b) {
    return a * b
   }
    
   // const double = mul.bind(null,2);
   // const triple = mul.bind(null,3);
   // console.log(double(2))
   // console.log(double(3))
   // console.log(double(4))
    
   // console.log(triple(2))
   // console.log(triple(3))
   // console.log(triple(4))
    
//    bind2(mul, null, 2)(4) // function // 8
//    mul.bind2(null, 2)(4)
