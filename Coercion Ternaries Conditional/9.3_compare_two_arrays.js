const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber","Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];


for (let i = 0; i < food1.length; i++) {
  if (food2.includes(food1[i])) {
    console.log(true);
  } else {
    console.log(false);
  }
}