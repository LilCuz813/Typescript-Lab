"use strict";
exports.__esModule = true;
var Moutains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function findNameOfTallestMountain(mountains) {
    var tallMountain = mountains[0];
    mountains.forEach(function (m) {
        if (m.height >= tallMountain.height) {
            tallMountain = m;
        }
    });
    return tallMountain.name;
}
var mountainName = findNameOfTallestMountain(Moutains);
console.log(mountainName);
var Products = [
    {
        name: "Strawberries",
        price: 5.50
    },
    {
        name: "Controller",
        price: 65.50
    },
    {
        name: "Headset",
        price: 55.50
    },
    {
        name: "Gatorade",
        price: 2.50
    },
];
function calcAverageProductPrice(items) {
    var productSum = 0;
    items.forEach(function (p) {
        productSum += p.price;
    });
    var productAvg = productSum / Products.length;
    return productAvg;
}
var averagePrice = calcAverageProductPrice(Products);
console.log(averagePrice);
var Inventory = [
    {
        quantity: 10,
        product: {
            name: "motor",
            price: 10.00
        }
    },
    {
        quantity: 4,
        product: {
            name: "sensor",
            price: 12.50
        }
    },
    {
        quantity: 20,
        product: {
            name: "LED",
            price: 1.00
        }
    }
];
function calcInventoryValue(object) {
    var inventorySum = 0;
    object.forEach(function (i) {
        inventorySum += i.product.price * i.quantity;
    });
    return inventorySum;
}
var grandPrice = calcInventoryValue(Inventory);
console.log(grandPrice);
