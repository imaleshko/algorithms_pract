class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            return "Неправильний індекс";
        }
        let current = this.head;
        if (index === 0) {
            this.head = current.next
            if (this.head) {
                this.head.prev = null;
            }
            if (!this.head) {
                this.tail = null;
            }
        }
        else if (index === this.size - 1) {
            current = this.tail;
            this.tail = current.prev;
            this.tail.next = null;
        }
        else {
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        this.size--;
        return current.data;
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            return "Неправильний індекс";
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

    dublicateValues() {
        if (this.size === 0) {
            return "Недостатньо елементів";
        }
        let p1 = this.head.data;
        console.log(`Показчик спочатку: ${p1}`);
        let current = this.head;
        while (current) {
            if (current.data % 2 !== 0) {
                let dublicate = new Node(current.data);
                dublicate.prev = current.prev;
                dublicate.next = current;
                if (current.prev) {
                    current.prev.next = dublicate;
                }
                else {
                    this.head = dublicate;
                }
                current.prev = dublicate;
                this.size++;
            }
            current = current.next;
        }
        p1 = this.head.data;
        console.log(`Показчик після дублювання: ${p1}`);
    }
}

function main() {
    let list = new DoublyLinkedList();
    let inputData = [];
    inputData.forEach(i => {
        list.add(i);
    })

    console.log("Список спочатку:" + list.printList());
    list.dublicateValues();
    console.log("Список після дублювання:" + list.printList());
}

main();