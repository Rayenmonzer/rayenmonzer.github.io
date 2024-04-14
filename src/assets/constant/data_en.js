import { aBrochette, aDej, aFalafel, aFiletDePoulet, aKafta, aMerguez, aMixte, aShawarma, aShishTaouk, aUlt, aVege, bBaconFromage, bBreakfast, baklava, blt, burger, cAmandes, cDej, cMatin, chausson, choco, couscous, croissant, falafel, gCheese, logo, mAnglais, muffin, oWest, pReg, pShawarma, patate, rice, sDePoulet, sExtreme, saladeReg, trio } from "../img/img";

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
    id: "dinner",
    title: "Dinner",
  },
  {
    id: "sides",
    title: "Sides",
  },
  {
    id: "sweets",
    title: "Sweets",
  }
];

//FOOD ITEMS
const itemsEN = [
  {
    id: "breakfast",
    title: "Breakfast",
    articles: [
      {
        id: "1",
        img: aDej,
        title: "Breakfast Plate",
        description: "2 over easy eggs, meat (choice of bacon, ham, or sausages), lettuce, tomatoes, breakfast potatoes, and 2 toasts."
      },
      {
        id: "2",
        img: mAnglais,
        title: "English Muffin",
        description: "Egg, cheese, and meat on a buttered English muffin. *🍴"
      },
      {
        id: "3",
        img: bBaconFromage,
        title: "Cheese Bacon Bagel",
        description: "Buttered bagel with cream cheese and bacon. *🍴"
      },
      {
        id: "4",
        img: cMatin,
        title: "Breakfast Club",
        description: "Club sandwich with 3 layers of bread, egg, bacon, cheese, lettuce, tomatoes, mayonnaise, and breakfast potatoes."
      },
      {
        id: "5",
        img: oWest,
        title: "Western Omelette",
        description: "Omelette with vegetables and ham, served with breakfast potatoes and 2 slices of bread."
      },
      {
        id: "6",
        img: sExtreme,
        title: "Extreme Sandwich",
        description: "Includes one egg, ham, bacon, lettuce, tomatoes, and mayonnaise. *🍴"
      },
      {
        id: "7",
        img: gCheese,
        title: "Grilled Cheese",
        description: "*🍴"
      },
      {
        id: "8",
        img: blt,
        title: "BLT Sandwich",
        description: "Sandwich with bacon, lettuce, and tomatoes. *🍴"
      },
      {
        id: "9",
        img: cDej,
        title: "Breakfast Croissant",
        description: "Egg, cheese, ham, bacon, lettuce, tomatoes, and mayonnaise served in a buttered croissant. *🍴"
      },
      {
        id: "10",
        img: aUlt,
        title: "Ultimate Plate",
        description: "Plate with 3 eggs, 2 bacons, 2 sausages, 2 hams, lettuce, tomatoes, potatoes, and 2 slices of bread."
      },
      {
        id: "11",
        img: bBreakfast,
        title: "Breakfast Bowl",
        description: "Bowl with breakfast potatoes base, two eggs, bacon, sausage, ham, fresh vegetables, and choice of sauce."
      },
    ],
  },
  {
    id: "dinner",
    title: "Dinner",
    articles: [
      {
        id: "11",
        img: aShishTaouk,
        title: "Shish Taouk Plate",
        description: "Chicken Shish Taouk, served with rice, potatoes, salad, and sauces."
      },
      {
        id: "12",
        img: aShawarma,
        title: "Beef Shawarma Plate",
        description: "Beef and chicken shawarma, served with rice, potatoes, salads, and hummus."
      },
      {
        id: "13",
        img: aMixte,
        title: "Mixed Plate",
        description: "Beef and chicken shawarma, served with rice, potatoes, salad sauce, and hummus."
      },
      {
        id: "14",
        img: trio,
        title: "Trio Sandwich",
        description: "Sandwich of choice served with a canned drink, a portion of potato, and salad."
      },
      {
        id: "15",
        img: sDePoulet,
        title: "Chicken Salad",
        description: "Fattouche or Caesar salad with a portion of Shish Taouk chicken. Replaceable with beef shawarma."
      },
      {
        id: "16",
        img: aBrochette,
        title: "Chicken Skewer",
        description: "Skewer served with rice, potatoes, salad, and sauces."
      },
      {
        id: "17",
        img: aFiletDePoulet,
        title: "Chicken Filet",
        description: "Chicken filet served with rice, potatoes, salad, and sauces."
      },
      {
        id: "18",
        img: aKafta,
        title: "Kafta Plate",
        description: "Spiced beef patties (2), served with rice, potatoes, salad, and sauces."
      },
      {
        id: "19",
        img: aFalafel,
        title: "Falafel Plate",
        description: "Gluten-free fried balls of seasoned chickpeas."
      },
      {
        id: "20",
        img: aMerguez,
        title: "Merguez Plate",
        description: "Merguez sausages served with rice and potatoes, with a choice of salads and sauces."
      },
      {
        id: "21",
        img: couscous,
        title: "Couscous Plate",
        description: "Sumptuously stewed vegetables served on a bed of couscous, a North African dish of small steamed balls of semolina."
      },
      {
        id: "22",
        img: logo,
        title: "Couscous Meat Plate",
        description: "Sumptuously stewed vegetables served on a bed of couscous. Choice of meat."
      },
      {
        id: "23",
        img: aVege,
        title: "Vegetarian Plate",
        description: "Stewed veggies, grilled vegetables, tabbouleh, garlic potatoes, rice, and rice."
      },
      {
        id: "24",
        img: pReg,
        title: "Traditional Poutine",
        description: ""
      },
      {
        id: "25",
        img: pShawarma,
        title: "Shawarma Poutine",
        description: "Fried potatoes or garlic potatoes, cheese curds, choice of chicken Shish Taouk or beef shawarma, poutine sauce."
      },
      {
        id: "26",
        img: burger,
        title: "Hamburger",
        description: "200 grams of beef patty garnished with lettuce, tomatoes, onion, and cheese, served with garlic potatoes."
      },
      {
        id: "27",
        img: saladeReg,
        title: "Large Salad",
        description: "3 choices of fresh salads of the day."
      },
      {
        id: "28",
        img: saladeReg,
        title: "Small Salad",
        description: "2 choices of fresh salads of the day."
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    articles: [
      {
        id: "33",
        img: saladeReg,
        title: "Small Salad",
        description: "2 choices of fresh salads of the day."
      },
      {
        id: "35",
        img: falafel,
        title: "Falafel Balls (4 pieces)",
        description: ""
      },
      {
        id: "36",
        img: rice,
        title: "Rice Bowl",
        description: ""
      },
      {
        id: "37",
        img: patate,
        title: "Potato Bowl",
        description: ""
      },
    ],
  },
  {
    id: "sweets",
    title: "Sweets",
    articles: [
      {
        id: "38",
        img: muffin,
        title: "Muffin",
        description: ""
      },
      {
        id: "39",
        img: choco,
        title: "Chocolate Croissant",
        description: ""
      },
      {
        id: "40",
        img: croissant,
        title: "Butter Croissant",
        description: ""
      },
      {
        id: "41",
        img: cAmandes,
        title: "Almond Croissant",
        description: ""
      },
      {
        id: "42",
        img: chausson,
        title: "Apple Turnover",
        description: ""
      },
      {
        id: "43",
        img: baklava,
        title: "Baklava",
        description: ""
      },
    ],
  }
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