
// Get Hot coffees sampleapis.com and ouput a list of ingredients in a latte
import fetch from 'node-fetch' 

async function getCoffeeAsync(){
try {
  const response = await fetch("https://api.sampleapis.com/coffee/hot");
  const coffeList = await response.json();
  console.log(coffeList);
} catch (error) {
  console.error(error);
}
}
getCoffeeAsync()



