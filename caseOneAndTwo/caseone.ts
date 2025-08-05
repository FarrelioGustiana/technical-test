type IFruit = {
  fruitId: number;
  fruitName: string;
  fruitType: "IMPORT" | "LOCAL";
  stock: number;
};

const fruits: IFruit[] = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

const andiFruits = fruits
  .map((f) => f.fruitName)
  .map((f) => f[0].toUpperCase() + f.slice(1));

const uniqueFruits: string = andiFruits
  .reduce((acc: string[], current: string) => {
    if (!acc.includes(current)) {
      acc.push(current);
    }
    return acc;
  }, [])
  .reduce((acc: string, current: string) => acc + ", " + current);

console.log(`Andi fruits are ${uniqueFruits}`);

const localFruits = fruits.filter((f) => f.fruitType === "LOCAL");
const importFruits = fruits.filter((f) => f.fruitType === "IMPORT");

let totalLocalFruitStocks = 0;
let totalImportFruitStocks = 0;

fruits.forEach((fruits) => {
  if (fruits.fruitType === "LOCAL") {
    totalLocalFruitStocks += fruits.stock;
  } else {
    totalImportFruitStocks += fruits.stock;
  }
});

localFruits.forEach((f) => {
  console.log(`buah yang ada di wadah lokal ${f.fruitName}`);
});

importFruits.forEach((f) => {
  console.log(`buah yang ada di wadah import ${f.fruitName}`);
});

console.log(`total stock wadah import ${totalImportFruitStocks}`);
console.log(`total stock wadah Local ${totalLocalFruitStocks}`);
