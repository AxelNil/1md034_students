var menuItem = function(name, calories, gluten, lactose, image) {
    this.itemName = name;
    this.itemCalories = calories;
    this.glutenBool = gluten;
    this.lactoseBool = lactose;
    this.picture = image;
};

let WTM = new menuItem(
    "The Way Too Much", 500, true, true,
    "https://cdn-image.foodandwine.com/sites/default/files/whole-hog-burger-fwx.jpg");

let FTL = new menuItem(
    "The Far Too Little", 50, false, true,
    "https://images.ricardocuisine.com/services/recipes/500x675_5408.jpg");


let TJR = new menuItem(
    "The Just Right", 250, false, false,
    "https://f4d5s4a5.stackpathcdn.com/wp-content/uploads/2018/06/Vegan_High_Protein_Mushroom_Burgers_Sweet_Simple_Vegan_1-copy.jpg");

let TFB = new menuItem(
    "The Fish Burger", 200, true, true,
    "https://www.eatwell.co.nz/images/recipes/20042015BiteFishBurgers.jpg?width=603&height=339&mode=crop&upscale=false"
);

let TEB = new menuItem(
    "The Expensive Burger", 300, true, true,
    "https://dubaiapartment.com/wp-content/uploads/2017/03/The-most-expensive-burger-in-the-world1.jpeg"
);

function printBorgor(borgor) {
    console.log(borgor.itemName + ", " + borgor.itemCalories + " kCal");
}

printBorgor(WTM);
printBorgor(FTL);
printBorgor(TJR);
printBorgor(TFB);
printBorgor(TEB);
