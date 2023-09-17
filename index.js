// Code your solutions in this file
function writeCards(names, eventName) {
  
  const messages = [];

  
  for (let i = 0; i < names.length; i++) {
    
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;

    
    messages.push(message);
  }

  
  return messages;
}


const names = ["Ada", "Brendan", "Ali"];
const eventName = "birthday";
const thankYouMessages = writeCards(names, eventName);


for (const message of thankYouMessages) {
  console.log(message);
}

function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}

countDown(10); 
