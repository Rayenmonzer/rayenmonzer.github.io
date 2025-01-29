import { aBrochette, aDej, aFalafel, aFiletDePoulet, aKafta, aMerguez, aMixte, aShawarma, aShishTaouk, aUlt, aVege, bBaconFromage, bBreakfast, baklava, blt, burger, cAmandes, cDej, cMatin, chausson, choco, couscous, croissant, falafel, gCheese, logo, mAnglais, muffin, oWest, pReg, pShawarma, patate, rice, sDePoulet, sExtreme, saladeReg, trio } from "../img/img";

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
    id: "dinner",
    title: "Dîner",
  },
  {
    id: "sides",
    title: "Accompagnements",
  },
  {
    id: "sweets",
    title: "Viennoiserie",
  },
];


const itemsFR = [
  {
    id: "breakfast",
    title: "Petit-déjeuner",
    articles: [
      {
        id: "1",
        img: aDej,
        title: "Assiette Déjeuner",
        description: "2 oeufs tournés, viande (choix de bacon,jambon ou saucisses), laitues, tomates, patates déjeuner et 2 toasts."
      },
      {
        id: "2",
        img: mAnglais,
        title: "Muffin Anglais",
        description: "Œuf, fromage et viande sur un muffin anglais beurré. *🍴"
      },
      {
        id: "3",
        img: bBaconFromage,
        title: "Bagel Fromage Bacon",
        description: "Bagel beurré avec fromage à la crème et bacon. *🍴"
      },
      {
        id: "4",
        img: cMatin,
        title: "Club Matin",
        description: "Club sandwich de 3 pains, œuf, bacon, fromage, laitue, tomates, mayonnaise et pommes de terre du petit-déjeuner."
      },
      {
        id: "5",
        img: oWest,
        title: "Omelette Western",
        description: "Omelette aux légumes et jambon, servie avec pommes de terre du petit-déjeuner et 2 pains."
      },
      {
        id: "6",
        img: sExtreme,
        title: "Sandwich Extrême",
        description: "Notre sandwich populaire inclut un œuf, jambon, bacon, laitue, tomates et mayonnaise. *🍴"
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
        title: "Sandwich BLT",
        description: "Sandwich de bacon, laitue et tomates. *🍴" 
      },
      {
        id: "9",
        img: cDej,
        title: "Croissant Déjeuner",
        description: "Œuf, fromage, jambon, bacon, laitue, tomates et mayonnaise servi dans un croissant beurré. *🍴"
      },
      {
        id: "10",
        img: aUlt,
        title: "Assiette Ultime",
        description: "Assiette contenant 3 œufs, 2 bacons, 2 saucisses, 2 jambons, laitue, tomates, pommes de terre et 2 tranches de pain."
      },
      {
        id: "11",
        img: bBreakfast,
        title: "Bol Déjeuner",
        description: "Bol avec une base de patates déjeuner, deux oeufs, bacon, saucisse, jambon, legumes fris et sauce au choix."
      },
    ],
  },
  {
    id: "dinner",
    title: "Dîner",
    articles: [
      {
        id: "11",
        img: aShishTaouk,
        title: "Assiette Shish Taouk",
        description: "Poulet Shish Taouk, servi avec riz, pommes de terre, salade et sauces."
      },
      {
        id: "12",
        img: aShawarma,
        title: "Assiette Shawarma Bœuf",
        description: "Shawarma bœuf et poulet, servi avec riz, pommes de terre, salades et hummus."
      },
      {
        id: "13",
        img: aMixte,
        title: "Assiette Mixte",
        description: "Shawarma bœuf et poulet, servi avec riz, pommes de terre, salade, sauce et hummus."
      },
      {
        id: "14",
        img: trio,
        title: "Trio Sandwich",
        description: "Sandwich au choix servi avec une boisson en canette, une portion de patate et de salade."
      },
      {
        id: "15",
        img: sDePoulet,
        title: "Salade Poulet",
        description: "Salade Fattouche ou César avec une portion de poulet Shish Taouk. Remplaçable par du shawarma bœuf."
      },
      {
        id: "16",
        img: aBrochette,
        title: "Brochette de Poulet",
        description: "Brochette servie avec riz, pommes de terre, salade et sauces."
      },
      {
        id: "17",
        img: aFiletDePoulet,
        title: "Filet de Poulet",
        description: "Filet de poulet servi avec riz, pommes de terre, salade et sauces."
      },
      {
        id: "18",
        img: aKafta,
        title: "Assiette Kafta",
        description: "Galettes de bœuf épicées (2), servies avec riz, pommes de terre, salade et sauces."
      },
      {
        id: "19",
        img: aFalafel,
        title: "Assiette Falafel",
        description: "Boulettes frites sans gluten de pois chiches assaisonnés."
      },
      {
        id: "20",
        img: aMerguez,
        title: "Assiette Merguez",
        description: "Saucisses Merguez servies avec riz et pommes de terre, avec le choix de salades et sauces."
      },
      {
        id: "21",
        img: couscous,
        title: "Assiette Couscous",
        description: "Légumes somptueusement mijotés servis sur un lit de couscous, un plat nord-africain de petites boules de semoule cuites à la vapeur."
      },
      {
        id: "22",
        img: logo,
        title: "Assiette Couscous Viande",
        description: "Légumes somptueusement mijotés servis sur un lit de couscous. Choix de viande."
      },
      {
        id: "23",
        img: aVege,
        title: "Assiette Végétarienne",
        description: "Légumes mijotés, légumes grillés, taboulé, pommes de terre à l'ail, riz et riz."
      },
      {
        id: "24",
        img: pReg,
        title: "Poutine Traditionnelle",
        description: ""
      },
      {
        id: "25",
        img: pShawarma,
        title: "Poutine Shawarma",
        description: "Pommes de terre frites ou pommes de terre à l'ail, fromage en grains, choix de Shish Taouk poulet ou shawarma bœuf, sauce poutine."
      },
      {
        id: "26",
        img: burger,
        title: "Hamburger",
        description: "200 grammes de galette de bœuf garnie de laitue, tomates, oignon et fromage, servie avec des pommes de terre à l'ail."
      },
      {
        id: "27",
        img: saladeReg,
        title: "Grande Salade au Choix",
        description: "3 choix de salades fraîches du jour."
      },
      {
        id: "28",
        img: saladeReg,
        title: "Petite Salade au Choix",
        description: "2 choix de salades fraîches du jour."
      }
    ],
  },
  {
    id: "sides",
    title: "Accompagnements",
    articles: [
      {
        id: "33",
        img: saladeReg,
        title: "Petite Salade au Choix",
        description: "2 choix de salades fraîches du jour."
      },
      {
        id: "35",
        img: falafel,
        title: "Boules de Falafel (4 morceaux)",
        description: ""
      },
      {
        id: "36",
        img: rice,
        title: "Bol de Riz",
        description: ""
      },
      {
        id: "37",
        img: patate,
        title: "Bol de Patates",
        description: ""
      },
    ],
  },
  {
    id: "sweets",
    title: "Viennoiserie",
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
        title: "Chocolatine",
        description: ""
      },
      {
        id: "40",
        img: croissant,
        title: "Croissant au Beurre",
        description: ""
      },
      {
        id: "41",
        img: cAmandes,
        title: "Croissant aux Amandes",
        description: ""
      },
      {
        id: "42",
        img: chausson,
        title: "Chausson aux Pommes",
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
const cateringFR = [
  {
    id: "1",
    img: logo,
    title: "Thermos de café",
    description: "Inclut crème, lait, sucres, couverts, batonets et napkins",
    price: "17,80$ pour 10 personnes",
  },
  {
    id: "2",
    img: logo,
    title: "Viennoiseries",
    description: "Croissants, Chocolatines, Amandines, et Chaussons au pommes",
    price: "3,00$ / Personne",
  },
  {
    id: "3",
    img: logo,
    title: "Muffins/Biscuits",
    description: "Morceaux de muffin et biscuits",
    price: "2,25$ / Personne",
  },
  {
    id: "4",
    img: logo,
    title: "Fruits",
    description: "Plateau de fruits frais (min. 10 personnes)",
    price: "3,25$ / Personne",
  },
  {
    id: "5",
    img: logo,
    title: "Fromages",
    description: "Plateau de fromages avec craquelins et raisins (min. 10 personnes)",
    price: "3,25$ / Personne",
  },
  {
    id: "6",
    img: logo,
    title: "Petites Bouchets",
    description: "Bouchets de dinde, jambon, saumon, crabe, et bagel fromage coupé en 4",
    price: "4,99$ / Personne",
  },
  {
    id: "7",
    img: logo,
    title: "Yougourt",
    description: "Yougourt vanille avec fruits de champs et céréales granola",
    price: "3,99$ / Personne",
  }
];

export {navLinksFR, menuNavFR, itemsFR, cateringFR};