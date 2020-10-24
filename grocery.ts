/**Eric Olsen
 * SWDV 665 1W
 * Week 1 Typescript Assignment
 * */

class Grocery {
    name: string;
    quantity: number;
    department: string;

    constructor(name: string, quantity: number, department: string) {
        this.name = name;
        this.quantity = quantity;
        this.department = department;
    }
}

function printItems(groceryItems) {
    let text = "";
    for (var i = 0; i < groceryItems.length; i++) {
        let item = groceryItems[i];
        text += "Name: " +item.name + ", Quantity: " + item.quantity + ", Department: " + item.department + "\r\n";
    }
    return text
}

let milk = new Grocery("Milk", 3, "Dairy");
let bread = new Grocery("Bread", 6, "Bakery");
let eggs = new Grocery("Eggs", 11, "Dairy");

let groceryItems = [milk, bread, eggs];

document.body.textContent = printItems(groceryItems);