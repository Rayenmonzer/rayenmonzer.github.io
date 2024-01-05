//Importing food images
import { aShishTaouk, 
  aShawarma, aMixte, 
  aKafta, aBrochette, 
  aFiletDePoulet, aMerguez, 
  aFalafel, sDePoulet, aVege } from "../img/img";

//NAVIGATION BAR
const navLinksEN = 
[
    {
        id: "home",
        title: "Home"
    },
    {
        id: "menu",
        title: "Menu"
    },
    {
        id: "order",
        title: "Catering"
    },
    {
        id: "contact",
        title: "Contact"
    }
]

//SUB NAV OF MENU PAGE
const menuNavEN = [
  {
    id: "breakfast",
    title: "Breakfast",
  },
  {
    id: "lunch",
    title: "Lunch",
  },
  {
    id: "dinner",
    title: "Dinner",
  },
  {
    id: "snacks",
    title: "Snacks",
  },
  {
    id: "dessert",
    title: "Dessert",
  },
];

//FOOD ITEMS
const itemsEN = [
  {
    id: "breakfast",
    title: "Breakfast",
    articles: [
      // Add breakfast items as needed
    ],
  },
  {
    id: "lunch",
    title: "Lunch",
    articles: [
      // Add lunch items as needed
    ],
  },
  {
    id: "dinner",
    title: "Dinner",
    articles: [
      { id: "1", img: aShishTaouk, title: "Shish Taouk Plate", description: "Chicken, lemon, olive oil, spices" },
      { id: "2", img: aShawarma, title: "Shawarma Plate", description: "Meat, pita bread, tomatoes, cucumbers, onions" },
      { id: "3", img: aMixte, title: "Mixed Plate", description: "Assortment of meats, grilled vegetables, special sauce" },
      { id: "4", img: aKafta, title: "Kafta Plate", description: "Kafta meat, onions, parsley, spices" },
      { id: "5", img: aBrochette, title: "Skewer Plate", description: "Meat skewers, bell peppers, onions" },
      { id: "6", img: aFiletDePoulet, title: "Chicken Fillet Plate", description: "Chicken fillet, special marinade" },
      { id: "7", img: aMerguez, title: "Merguez Plate", description: "Merguez sausages, harissa sauce, salad" },
      { id: "8", img: aFalafel, title: "Falafel Plate", description: "Falafel, hummus, fresh vegetables" },
      { id: "9", img: sDePoulet, title: "Chicken Salad", description: "Salad, grilled chicken, tomatoes, cucumbers" },
      { id: "10", img: aVege, title: "Vegetarian Plate", description: "Assortment of grilled vegetables, vegan sauce" },
      // Add more dinner items as needed
    ],
  },
  {
    id: "snacks",
    title: "Snacks",
    articles: [
      // Add snack items as needed
    ],
  },
  {
    id: "dessert",
    title: "Dessert",
    articles: [
      // Add dessert items as needed
    ],
  },
];


//CATERING
const cateringEN = [
  {
    id: "1",
    img: "test",
    title: "Roast Chicken",
    description: "Delicious roasted chicken",
    price: "$5.23 / PER PERSON",
  },
  {
    id: "2",
    img: "test",
    title: "Orange Pork",
    description: "Tasty orange-flavored pork",
    price: "$9.69 / PER PERSON",
  },
  {
    id: "3",
    img: "test",
    title: "Mediterranean Salad",
    description: "Fresh salad with Mediterranean ingredients",
    price: "$7.99 / PER PERSON",
  },
  {
    id: "4",
    img: "test",
    title: "Grilled Seafood",
    description: "Delicious mix of grilled seafood",
    price: "$12.50 / PER PERSON",
  },
  {
    id: "5",
    img: "test",
    title: "Carbonara Pasta",
    description: "Creamy pasta with carbonara sauce",
    price: "$8.75 / PER PERSON",
  },
  {
    id: "6",
    img: "test",
    title: "Braised Beef",
    description: "Tender beef braised slowly",
    price: "$11.20 / PER PERSON",
  },
  {
    id: "7",
    img: "test",
    title: "Vegetarian Dish",
    description: "Delicious vegetarian dish",
    price: "$6.99 / PER PERSON",
  },
  {
    id: "8",
    img: "test",
    title: "Assorted Sushi",
    description: "Fresh assortment of sushi",
    price: "$14.99 / PER PERSON",
  },
  {
    id: "9",
    img: "test",
    title: "Cheese Platter",
    description: "Varied selection of cheeses",
    price: "$9.25 / PER PERSON",
  },
  {
    id: "10",
    img: "test",
    title: "Margherita Pizza",
    description: "Classic Margherita pizza",
    price: "$7.50 / PER PERSON",
  },
  {
    id: "11",
    img: "test",
    title: "Vegetable Fried Rice",
    description: "Delicious fried rice with vegetables",
    price: "$6.80 / PER PERSON",
  },
  {
    id: "12",
    img: "test",
    title: "Salmon Canapés",
    description: "Canapés filled with smoked salmon",
    price: "$10.50 / PER PERSON",
  },
  {
    id: "13",
    img: "test",
    title: "Sweet Crepes",
    description: "Light crepes with sweet filling",
    price: "$5.99 / PER PERSON",
  },
  {
    id: "14",
    img: "test",
    title: "Fruit Tart",
    description: "Delicious fresh fruit tart",
    price: "$8.25 / PER PERSON",
  },
  {
    id: "15",
    img: "test",
    title: "Shrimp Cocktail",
    description: "Tasty shrimp cocktail",
    price: "$13.45 / PER PERSON",
  },
  {
    id: "16",
    img: "test",
    title: "Chocolate Cake",
    description: "Moist chocolate cake",
    price: "$9.00 / PER PERSON",
  },
  {
    id: "17",
    img: "test",
    title: "Chicken Tajine",
    description: "Traditional chicken tajine",
    price: "$12.99 / PER PERSON",
  },
  {
    id: "18",
    img: "test",
    title: "Lemon Mousse",
    description: "Light lemon mousse",
    price: "$6.50 / PER PERSON",
  },
  {
    id: "19",
    img: "test",
    title: "Charcuterie Plate",
    description: "Assortment of fine charcuterie",
    price: "$10.75 / PER PERSON",
  },
  {
    id: "20",
    img: "test",
    title: "Cheese Fondue",
    description: "Creamy cheese fondue",
    price: "$11.80 / PER PERSON",
  },
  // Add more catering items as needed
];

export {navLinksEN, menuNavEN, itemsEN, cateringEN};