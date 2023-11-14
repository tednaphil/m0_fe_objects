var contact1 = {
    name: "Taylor",
    address: "123 Holly St.",
    phone: "123-456-7890"
};
var contact2 = {
    name: "Sally",
    address: "456 Burgundy St.",
    phone: "098-765-4321"
};

// console.log (contact1.name);
// console.log(contact2.phone);

var customer1 = {
    name: "Leira Sånchez",
    date: "1/25/2022",
    macReceived: true
};

customer1.macType = "M1";
// console.log(Object.keys(customer1));
// console.log(Object.values(customer1));

var zoo = {
    giraffes: 3,
    zebras: 12,
    hippos: 2,
};
console.log(Object.keys(zoo));
console.log(Object.values(zoo));
zoo.flamingo = 8;
console.log(zoo.monkeys);
zoo.monkeys = 2;

console.log(Object.keys(zoo), Object.values(zoo));