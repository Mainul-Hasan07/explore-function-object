var computer = {
    price: 29000,
    storage: '156gb',
    color: 'silver',
    processor: 'intel i5'
}
// console.log(computer);
// console.log(computer.processor);
var computerPrice = computer.price;
// console.log(computerPrice);

computer.price = 22000;
// console.log(computer);

// different ways to set a value of object an property

var priceProperty = 'price';
computer.price = 22000;
computer['price'] = 23000;
computer[priceProperty] = 23500;
console.log(computer);

var storageProperty = 'storage';
computer[storageProperty] = '512gb';
computer.storage = '1TB';
computer['storage'] = '2TB';
console.log(computer);