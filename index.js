function scuberGreetingForFeet(num){
  let str = ""
  // Write your code here!
  if (num <= 400) str = "This one is on me!";
  else if (num > 2000 && num < 2500) str = 'I will gladly take your thirty bucks.';
  else if (num > 2500) str = 'No can do.';
  return str;
}

function ternaryCheckCity(str){
  // Write your code here!
  if (str === 'NYC') return ('Ok, sounds good.')
  else if (str === 'Pittsburgh') return ('No go.')
}

function switchOnCharmFromTip(str){
  // Write your code here!
  if (str === 'generous') return ('Thank you so much.')
  else if (str === 'not as generous') return ('Thank you.')
  else if (str === 'thanks for everything') return('Bye.')
}

var x = scuberGreetingForFeet(2501)
console.log(x)