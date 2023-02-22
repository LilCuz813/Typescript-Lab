export {}

interface Mountain{
    name:string;
    height:number;
}

let Moutains:Mountain[] = [
    {
        name:"Kilimanjaro",
        height: 19341,
    },
    {
        name:"Everest",
        height: 29029,
    },
    {
        name:"Denali",
        height: 20310,
    }
]

function findNameOfTallestMountain(mountains:Mountain[]):string{
    let tallMountain:Mountain = mountains[0];
    mountains.forEach((m:Mountain) => {
        if(m.height >= tallMountain.height){
            tallMountain = m;
        }
    });

    return tallMountain.name
}

let mountainName:string = findNameOfTallestMountain(Moutains);
console.log(mountainName);

interface Product{
    name: string;
    price: number;
}

let Products: Product[] = [
    {
        name:"Strawberries",
        price:5.50
    },
    {
        name:"Controller",
        price:65.50
    },
    {
        name:"Headset",
        price:55.50
    },
    {
        name:"Gatorade",
        price:2.50
    },
]

function calcAverageProductPrice(items:Product[]):number{
    let productSum:number = 0;
    items.forEach((p:Product) => {
        productSum += p.price;
    });
    let productAvg:number = productSum / Products.length;
    return productAvg;
}

let averagePrice:number = calcAverageProductPrice(Products);
console.log(averagePrice);

interface InventoryItem{
    product: Product;
    quantity: number;
}

let Inventory: InventoryItem[] = [
    {
        quantity: 10,
        product:{
            name:"motor",
            price: 10.00
        }
    },
    {
        quantity: 4,
        product:{
            name:"sensor",
            price: 12.50
        }
    },
    {
        quantity: 20,
        product:{
            name:"LED",
            price: 1.00
        }
    }
];

function calcInventoryValue(object:InventoryItem[]):number{
    let inventorySum:number = 0;
    object.forEach((i:InventoryItem) => {
        inventorySum += i.product.price * i.quantity;
    });
    return inventorySum; 
}
let grandPrice:number = calcInventoryValue(Inventory);
console.log(grandPrice);