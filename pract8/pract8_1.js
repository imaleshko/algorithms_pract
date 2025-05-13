class Warehouse {
    constructor() {
        this.size = 50;
        this.shelf = new Array(this.size).fill(null);
    }

    hash(key, k = 31) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i) * k * 17 * (hash + 5);
        }
        return hash % this.size;
    }

    add(name, quantity) {
        let index = this.hash(name);
        let start = index;
        while (this.shelf[index] && this.shelf[index].name != name) {
            index = (index + 1) % this.size;
            if (index === start) {
                return;
            }
        }
        if (this.shelf[index] && this.shelf[index].name === name) {
            this.shelf[index].quantity += quantity;
            console.log(`Товар ${name} додано. Кількість на складі: ${this.shelf[index].quantity}`);
        }
        else {
            this.shelf[index] = {
                name,
                quantity,
            }
            console.log(`Товар ${name} додано. Кількість на складі: ${this.shelf[index].quantity}`);
        }
    }

    search(name) {
        let index = this.hash(name);
        let start = index;
        while (this.shelf[index]) {
            if (this.shelf[index].name === name) {
                return this.shelf[index];
            }
            index = (index + 1) % this.size;
            if (index === start) {
                return;
            }
        }
        return null;
    }

    remove(name) {
        let index = this.hash(name);
        let start = index;
        while (this.shelf[index]) {
            if (this.shelf[index].name === name) {
                this.shelf[index] = null;
                console.log(`Товар ${name} видалено.`);
            } 
            index = (index + 1) % this.size;
            if (index === start) {
                return;
            }
        }
    }

    print() {
        console.log("Інвентар складу:");
        this.shelf.forEach((item, index) => {
            if (item) {
                console.log(`${index}: ${item.name} - ${item.quantity} шт.`);
            } else {
                console.log(`${index}: вільно`);
            }
        })
    }
}

let warehouse = new Warehouse;
warehouse.add("Молоко", 100);
warehouse.add("Сир", 50);
warehouse.add("Масло", 30);
warehouse.add("Макарони", 90);
warehouse.add("Шоколад", 100);
warehouse.add("Молоко", 100);
warehouse.print();
warehouse.remove("Сир")
warehouse.print();