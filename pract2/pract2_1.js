class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            return "Елемента з таким індексом не існує";
        }
        let current = this.head;
        let prev = null;
        if (index === 0) {
            this.head = current.next;
        } else {
            for (let i = 0; i < index; i++) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
        }
        this.size--;
        return current.data;
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            return "Елемента з таким індексом не існує";
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }

    getSize() {
        return this.size;
    }

    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + " ";
            current = current.next;
        }
        return result.trim();
    }

    deleteItem() {
        if (!this.head || !this.head.next) {
            return "В списку недостатньо елементів"
        }
        let current = this.head;
        let prev = null; // перед видаленим
        let before = null; // перед теперішнім, для видалення
        while (current && current.next) {
            before = current;
            current = current.next;

            if (current.data > 10 && current.data < 20) {
                if (prev === null) {
                    this.head = current;
                }
                else {
                    prev.next = current;
                }
                this.size--;
            }
            else {
                prev = before;
            }
        }
    }
}

function main() {
    let list = new SingleLinkedList;
    let inputData = [32, 15, 34, 44, 54, 12, 13, 14]
    inputData.forEach(i => {
        list.add(i);
    })
    console.log("Список спочатку:", list.printList());
    list.deleteItem();
    console.log("Список після видалення елементів:", list.printList());
}

main();