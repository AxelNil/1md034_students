
/*
var menuItem = function(name, calories, gluten, lactose, image) {
    this.itemName = name;
    this.itemCalories = calories;
    this.glutenBool = gluten;
    this.lactoseBool = lactose;
    this.picture = image;

    this.info = function () {
        var description = this.itemName + ", " + this.itemCalories + " kCal";

        if (this.lactoseBool) {
            description += "\n Contains lactose";
        }
        description += "\n Contains gluten";

        if (this.glutenBool) {
        }

        return description;
    };

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

var menu = [WTM, FTL, TJR, TFB, TEB]; */
/*
let row = document.getElementsByClassName("column");
for (var i = 0; i < row.length; i++) {
    //Name
    let h3Item = document.createElement("h3");
    let nameItem = document.createTextNode(menu[i].itemName);
    h3Item.appendChild(nameItem);
    row[i].appendChild(h3Item);

    //Image
    let img = document.createElement("img");
    img.src = menu[i].picture;
    img.height = 200;
    img.width = 210;
    row[i].appendChild(img);

    //List
    let listItem = document.createElement("ul");

    let kCalItem = document.createElement("li");
    let kCal = document.createTextNode(menu[i].itemCalories + " calories");

    let glutenItem = document.createElement("li");
    let gluten = document.createTextNode("Contains gluten");

    let lactoseItem = document.createElement("li");
    let lactose = document.createTextNode("Contains lactose");

    kCalItem.appendChild(kCal);
    listItem.appendChild(kCalItem);
    if (menu[i].glutenBool) {
        glutenItem.appendChild(gluten);
        listItem.appendChild(glutenItem);
    }
    if (menu[i].lactoseBool) {
        lactoseItem.appendChild(lactose);
        listItem.appendChild(lactoseItem);
    }

    row[i].appendChild(listItem);
} */

//document.getElementById("myDiv").innerHTML = "Välj en burgare";

/*document.getElementById("b1").innerHTML = WTM.itemName;
document.getElementById("b2").innerHTML = FTL.itemName;
document.getElementById("b3").innerHTML = TJR.itemName;
document.getElementById("b4").innerHTML = TFB.itemName;
document.getElementById("b5").innerHTML = TEB.itemName;

var menu = [WTM, FTL, TJR, TFB, TEB];

var bs = ["b1", "b2", "b3", "b4", "b5"];

for (var i = 0; i < 5; ++i) {

  document.getElementById(bs[i]).innerHTML = menu[i].info();
}*/
