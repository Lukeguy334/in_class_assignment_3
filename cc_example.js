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
    }
};
inventory.addItem("Monitor", 5);
inventory.addItem("Keyboard", 10);
console.log(inventory.items);
// Expected output: [{ name: "Monitor", quantity: 5 }, { name: "Keyboard", quantity: 10 }]

