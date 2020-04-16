class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}


class SinglyCircularLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(data) {
        let node = new Node(data);

        if (!this.head) {
            node.next = node;
            this.head = node;
            this.size++;

        } else {
            node.next = this.head;

            let current = this.head;

            while (current.next.data !== this.head.data) {
                current = current.next;
            }

            current.next = node;
            this.size++;
        }
    }


    insertAt(index, data) {
        let node = new Node(data);

        if (index < 0 || index > this.size) return false;

        if (index === 0) {
            this.head = node;
            this.size = 1;
            return;
        }

        let previous;
        let count = 0;
        let current = this.head;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        node.next = current;
        previous.next = node;
        this.size++;
    }


    printData() {
        let count = 0;
        let current = this.head;

        while (current !== null && count !== this.size) {
            console.log(current.data + "\n");
            current = current.next;
            count++;
        }
    }
}


let ll = new SinglyCircularLinkedList();

ll.insert(10);
ll.insert(20);
ll.insert(30);
ll.insert(40);
ll.insert(50);
ll.insertAt(5, 60);

ll.printData();

console.log(ll.head.next.next.next.next.next);