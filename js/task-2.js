'use strict';
class Storage {
#items;

constructor(items) {
    this.#items = items;
}

getItems() {
    return this.#items;
}

addItem(newItem) {
    this.#items.push(newItem);
}

removeItem(itemToRemove) {
    const indexItemRemove = this.#items.indexOf(itemToRemove);
    if (indexItemRemove !== -1) { 
        this.#items.splice(indexItemRemove, 1);
    }
    else {
        return 'This element is not found.';
    }
}
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]