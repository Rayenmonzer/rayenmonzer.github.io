//Importing food images
import { aShishTaouk, aShawarma, 
  aMixte, aKafta, aBrochette, 
  aFiletDePoulet, aMerguez, 
  aFalafel, sDePoulet, aVege } from "../img/img";

//NAVIGATION BAR
const navLinksFR = [
  {
    id: "home",
    title: "Accueil",
  },
  {
    id: "menu",
    title: "Menu",
  },
  {
    id: "order",
    title: "Traiteur",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

//SUB NAV OF MENU PAGE
const menuNavFR = [
  {
    id: "breakfast",
    title: "Petit-déjeuner",
  },
  {
    id: "lunch",
    title: "Déjeuner",
  },
  {
    id: "dinner",
    title: "Dîner",
  },
  {
    id: "snacks",
    title: "Collations",
  },
  {
    id: "dessert",
    title: "Dessert",
  },
];

//"food" ITEMS
const itemsFR = [
  {
    id: "breakfast",
    title: "Petit-déjeuner",
    articles: [
      // Add breakfast items as needed
    ],
  },
  {
    id: "lunch",
    title: "Déjeuner",
    articles: [
      // Add lunch items as needed
    ],
  },
  {
    id: "dinner",
    title: "Dîner",
    articles: [
      { id: "1", img: aShishTaouk, title: "Assiette Shish Taouk", description: "Poulet, citron, huile d'olive, épices" },
      { id: "2", img: aShawarma, title: "Assiette Shawarma", description: "Viande, pain pita, tomates, concombres, oignons" },
      { id: "3", img: aMixte, title: "Assiette Mixte", description: "Assortiment de viandes, légumes grillés, sauce spéciale" },
      { id: "4", img: aKafta, title: "Assiette Kafta", description: "Viande de kafta, oignons, persil, épices" },
      { id: "5", img: aBrochette, title: "Assiette Brochette", description: "Brochettes de viande, poivrons, oignons" },
      { id: "6", img: aFiletDePoulet, title: "Assiette Filet de Poulet", description: "Filet de poulet, marinade spéciale" },
      { id: "7", img: aMerguez, title: "Assiette Merguez", description: "Merguez, sauce harissa, salade" },
      { id: "8", img: aFalafel, title: "Assiette Falafel", description: "Falafel, houmous, crudités" },
      { id: "9", img: sDePoulet, title: "Salade de Poulet", description: "Salade, poulet grillé, tomates, concombres" },
      { id: "10", img: aVege, title: "Assiette Végé", description: "Assortiment de légumes grillés, sauce végétalienne" },
      // Add more dinner items as needed
    ],
  },
  {
    id: "snacks",
    title: "Collations",
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
const cateringFR = [
  {
    id: "1",
    img: "food",
    title: "Poulet Rôti",
    description: "Délicieux poulet rôti",
    price: "5,23 $ / PAR PERSONNE",
  },
  {
    id: "2",
    img: "test",
    title: "Porc à l'Orange",
    description: "Délicieux porc à l'orange",
    price: "9,69 $ / PAR PERSONNE",
  },
  {
    id: "3",
    img: "test",
    title: "Salade Méditerranéenne",
    description: "Salade fraîche aux ingrédients méditerranéens",
    price: "7,99 $ / PAR PERSONNE",
  },
  {
    id: "4",
    img: "test",
    title: "Fruits de Mer Grillés",
    description: "Délicieux mélange de fruits de mer grillés",
    price: "12,50 $ / PAR PERSONNE",
  },
  {
    id: "5",
    img: "test",
    title: "Pâtes à la Carbonara",
    description: "Pâtes crémeuses à la sauce carbonara",
    price: "8,75 $ / PAR PERSONNE",
  },
  {
    id: "6",
    img: "test",
    title: "Bœuf Braisé",
    description: "Bœuf tendre braisé lentement",
    price: "11,20 $ / PAR PERSONNE",
  },
  {
    id: "7",
    img: "test",
    title: "Plat Végétarien",
    description: "Délicieux plat végétarien",
    price: "6,99 $ / PAR PERSONNE",
  },
  {
    id: "8",
    img: "test",
    title: "Assortiment de Sushis",
    description: "Assortiment frais de sushis",
    price: "14,99 $ / PAR PERSONNE",
  },
  {
    id: "9",
    img: "test",
    title: "Plateau de Fromages",
    description: "Sélection variée de fromages",
    price: "9,25 $ / PAR PERSONNE",
  },
  {
    id: "10",
    img: "test",
    title: "Pizza Margherita",
    description: "Pizza Margherita classique",
    price: "7,50 $ / PAR PERSONNE",
  },
  {
    id: "11",
    img: "test",
    title: "Riz Frit aux Légumes",
    description: "Délicieux riz frit aux légumes",
    price: "6,80 $ / PAR PERSONNE",
  },
  {
    id: "12",
    img: "test",
    title: "Canapés au Saumon",
    description: "Canapés garnis de saumon fumé",
    price: "10,50 $ / PAR PERSONNE",
  },
  {
    id: "13",
    img: "test",
    title: "Crêpes Sucrées",
    description: "Crêpes légères avec une garniture sucrée",
    price: "5,99 $ / PAR PERSONNE",
  },
  {
    id: "14",
    img: "test",
    title: "Tarte aux Fruits",
    description: "Délicieuse tarte aux fruits frais",
    price: "8,25 $ / PAR PERSONNE",
  },
  {
    id: "15",
    img: "test",
    title: "Cocktail de Crevettes",
    description: "Délicieux cocktail de crevettes",
    price: "13,45 $ / PAR PERSONNE",
  },
  {
    id: "16",
    img: "test",
    title: "Gâteau au Chocolat",
    description: "Gâteau au chocolat moelleux",
    price: "9,00 $ / PAR PERSONNE",
  },
  {
    id: "17",
    img: "test",
    title: "Tajine de Poulet",
    description: "Tajine de poulet traditionnel",
    price: "12,99 $ / PAR PERSONNE",
  },
  {
    id: "18",
    img: "test",
    title: "Mousse au Citron",
    description: "Mousse légère au citron",
    price: "6,50 $ / PAR PERSONNE",
  },
  {
    id: "19",
    img: "test",
    title: "Assiette de Charcuterie",
    description: "Assortiment de charcuterie fine",
    price: "10,75 $ / PAR PERSONNE",
  },
  {
    id: "20",
    img: "test",
    title: "Fondue au Fromage",
    description: "Fondue au fromage crémeuse",
    price: "11,80 $ / PAR PERSONNE",
  },
  // Add more catering items as needed
];

export {navLinksFR, menuNavFR, itemsFR, cateringFR};