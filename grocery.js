var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, department) {
        this.name = name;
        this.quantity = quantity;
        this.department = department;
    }
    return Grocery;
}());
function printItems(groceryItems) {
    var text = "";
    for (var i = 0; i < groceryItems.length; i++) {
        var item = groceryItems[i];
        text += item.name + " " + item.quantity + " " + item.department + "<br/>";
    }
    return text;
}
var milk = new Grocery("Milk", 3, "Dairy");
var bread = new Grocery("Bread", 6, "Bakery");
var eggs = new Grocery("Eggs", 11, "Dairy");
var groceryItems = [milk, bread, eggs];
document.body.textContent = printItems(groceryItems);
