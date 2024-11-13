//? PAIRED WITH WAQAS
//*RECIPE
const recipe = {
  name: "biryani", 
  cookingTime: 30, 
  difficulty: "medium", 
  mainIngredient: "rice",
  servings: 2, 
};
//! RECIPE INFO
const showRecipeInfo = ({ name, cookingTime, difficulty }) => {
return `${name} takes ${cookingTime} minutes to make and is ${difficulty} difficulty`;
};
console.log(showRecipeInfo(recipe));


//*INGREDIENTS
const instructions = {
  preheatingTemp: "100f",
  panSize: "4 inch", 
  mixingTime: "7 minutes", 
  specialNotes: "Let the rice dry well",
};
//! INGREDIENTS INFO
const getPreparationNotes = ( { mixingTime, specialNotes } ) => {
return `Mix for ${mixingTime} and remember: ${specialNotes}`;
};
console.log(getPreparationNotes(instructions));



//* DISPLAY CARD
const createRecipeCard = (recipe, instructions) => {
  let { name, cookingTime, difficulty, mainIngredient, servings } = recipe;
  let { mixingTime, specialNotes, preheatingTemp, panSize } = instructions;
  return (`
      🔪RECIPE NAME : ${name} 🔪 
      ------------------------------
      Difficulty: ${difficulty}
      Time Needed: ${cookingTime} minutes
      Serves: ${servings} people
      Main Ingredient: ${mainIngredient}
      ------------------------------------
      INSTRUCTIONS:
      1. Preheat over ${preheatingTemp}
      2. Use 9 inch pan ${panSize}
      3. Mix for 10 minutes ${mixingTime}
      Note: ${specialNotes}`);
};
console.log(createRecipeCard(recipe, instructions));