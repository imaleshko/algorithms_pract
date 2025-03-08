class Phone {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(phone) {
        this.items.push(phone);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Черга порожня";
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    displayQueue() {
        this.items.forEach((phone, index) => {
            console.log(`${index + 1}. Телефон: ${phone.model}, ціна: ${phone.price} грн`);
        });
    }

    clearQueue() {
        this.items = [];
    }
}

function main() {
    const queue = new Queue();

    queue.enqueue(new Phone("iPhone 16", 33899));
    queue.enqueue(new Phone("iPhone 12", 20118));
    queue.enqueue(new Phone("Samsung Galaxy S25", 43999));
    queue.enqueue(new Phone("Samsung Galaxy S23", 27895));
    queue.enqueue(new Phone("Pixel 9", 25999));
    queue.enqueue(new Phone("Pixel 7", 14999));

    console.log("Черга спочатку:");
    queue.displayQueue();

    queue.dequeue();

    console.log("Дані після видалення:");
    queue.displayQueue();
}

main();