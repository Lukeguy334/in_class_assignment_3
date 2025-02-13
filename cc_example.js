// Task 5

let orders = [
    { id: 101, customer: "Alice", total: 300 },
    { id: 102, customer: "Bob", total: 450 },
    { id: 103, customer: "Charlie", total: 200 }
];

function findOrders(orders, orderId) {
    return orders.find(order => order.id === orderId);
}

console.log(findOrders(orders, 101)); // { id: 101, customer: "Alice", total: 300 }

// Task 6

let inventory = {
    items: [],
    addItem(name, quantity) {
        this.items.push({ name, quantity });
    },
    removeLatestItem() {
        this.items.pop();
    },
    removeFirstItem() {
        this.items.shift();
    }
};
inventory.addItem("Monitor", 5);
inventory.addItem("Keyboard", 10);
inventory.addItem("Mouse", 3);

console.log(inventory.items); //pre item removal
inventory.removeLatestItem();
console.log(inventory.items); // post item removal
inventory.removeFirstItem();
console.log(inventory.items); // post first item removal


//Task 7

let employees = [
    { name: "Alice", position: "Developer", salary: 70000 },
    { name: "Bob", position: "Designer", salary: 60000 },
    { name: "Charlie", position: "Manager", salary: 90000 }
];

function findEmployees(employees, name) {
    return employees.find(employee => employee.name === name);
}

console.log(findEmployees(employees, "Charlie"));
// Expected output: { name: "Charlie", position: "Manager", salary: 90000 }

// Task 8

let orders1 = [
    { id: 1, customer: "Alice" }, 
    { id: 2, customer: "Bob" }
];
let orders2 = [
    { id: 3, customer: "Charlie" }, 
    { id: 4, customer: "David" }
];

function combineOrders(orders1, orders2) {
    return [...orders1, ...orders2];
}

console.log(combineOrders(orders1, orders2));
