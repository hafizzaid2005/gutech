//? PAIR WITH WAQAS


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
console.log(`${name} takes ${cookingTime} minutes to make and is ${difficulty} difficulty`);
};
//console.log(showRecipeInfo(recipe));


//*INGREDIENTS
const instructions = {
  preheatingTemp: "100f",
  panSize: "4 inch", 
  mixingTime: "7 minutes", 
  specialNotes: "Let the rice dry well",
};
//! INGREDIENTS INFO
const getPreparationNotes = ({ mixingTime, specialNotes }) => {
console.log(`Mix for ${mixingTime} and remember: ${specialNotes}`);
};
console.log(getPreparationNotes);

//* DISPLAY CARD
const createRecipeCard = (recipe) => {
    let { name, cookingTime, difficulty, mainIngredient,servings } = recipe;
    console.log(`
      🔪RECIPE NAME : ${name} 🔪 
      ------------------------------
      Difficulty: ${difficulty}
      Time Needed: ${cookingTime} minutes
      Serves: ${servings} people
      Main Ingredient: ${mainIngredient}`);
};
console.log(createRecipeCard(recipe));