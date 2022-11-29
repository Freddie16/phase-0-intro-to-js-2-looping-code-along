// Code your solutions in this file
//for (let age = 30; age < 40; age++){
   // console.log(`I'm ${age} years old. Happy birthday to me!`);
   // debugger;*\\
//
const gifts = ["teddy bear", "drone", "doll"];
const message = ["for the wonderful birthday gift!"]
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
    return gifts;
}
wrapGifts(gifts);
  }
const names = ["Ada","Brendan","Ali",]
const eventName =["Birthday"]
  function writeCards(names,eventName){
    let array =[]
  for (let i = 0; i < names.length; i++){
    array.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
}
return array
  }
  function countDown(number){
    while (number >= 0){
        console.log (number);
        number--;
    }
  }