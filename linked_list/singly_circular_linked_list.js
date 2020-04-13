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

        } else {
            node.next = this.head;

            let current = this.head;

            while (current.next.data !== this.head.data) {
                current = current.next;
            }

            current.next = node;
        }
    }

    printData() {
        let count = 0;
        let current = this.head;

        while (current !== null && count !== 10) {
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

ll.printData();