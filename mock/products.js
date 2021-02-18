export const prodType = {
  DRINK: 0,
  FOOD: 1
};

export const products = [
  {
    name: "Caffè",
    price: 0.5,
    type: prodType.DRINK
  },
  {
    name: "Cornetto",
    info: "con marmellata di albicocca",
    price: 1,
    type: prodType.FOOD,
    qty: 20
  },
  {
    name: "Acqua minerale",
    info: "bottiglietta 0,5 naturale",
    price: 0.8,
    type: prodType.DRINK,
    qty: 100
  },
  {
    name: "Acqua frizzante",
    info: "bottiglietta 0,5",
    price: 0.8,
    type: prodType.DRINK,
    qty: 100
  },
  {
    name: "Pizza margherita",
    info: "al trancio",
    price: 2.5,
    type: prodType.FOOD,
    qty: 20
  },
  {
    name: "Panino al prosciutto",
    price: 3,
    type: prodType.FOOD,
    qty: 15
  }
];
