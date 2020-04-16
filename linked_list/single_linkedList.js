class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // insert last
    insertLast(data) {
        let node = new Node(data);

        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    // insert at
    insertAt(index, data) {
        if (index < 0 || index > this.size) {
            return false;
        }

        if (index === 0) {
            this.head = new Node(data);
            this.size = 1;
            return;
        }

        let previous;
        let count = 0;
        let current = this.head;
        let node = new Node(data);

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        node.next = current;
        previous.next = node;
        this.size++;
    }

    // remove the first data
    removeFirst() {
        if (this.size >= 1) {
            this.head = this.head.next;
            this.size--;
        }
    }

    // remove the last data
    removeLast() {
        let prev;
        let current = this.head;

        while (current.next) {
            prev = current;
            current = current.next;
        }

        prev.next = null;
        this.size--;
    }


    // remove at index
    removeAt(index) {
        if (index < 0 || index > this.size) {
            return false;
        }

        let previous;
        let count = 0;
        let current = this.head;

        if (index === 0) {
            this.head = current.next;

        } else {
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }

            previous.next = current.next;
        }

        this.size--;
    }

    // get data at (index)
    getAt(index) {
        if (!this.head) return null;

        if (index > this.size - 1) {
            return null;
        }

        let count = 0;
        let current = this.head;

        while (current) {
            if (count === index) {
                return `Data => ${current.data}`;
            }

            current = current.next;
            count++;
        }

        return null;
    }

    // get data
    getData(data) {
        if (!this.head) return null;

        let current = this.head;

        while (current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }

        return "---- Data not found ----";
    }

    // get the middle data
    getMiddle() {
        if (!this.head) return null;

        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        return slow.data;
    }

    // reverse linked list
    reverse() {
        let prev;
        let next;
        let curr = this.head;

        while (curr !== null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;
    }

    // print all data
    printData() {
        if (!this.head) return null;

        let result = "";
        let current = this.head;

        while (current) {
            result += current.data + " => ";
            current = current.next;
        }

        return result + null;
    }

    // check size of linked lis
    sizeData() {
        return this.size;
    }

    // clear all data
    cleartData() {
        this.head = null;
        this.size = 0;
    }
}


let ll = new LinkedList();

ll.insertFirst(10);
ll.insertLast(20);
ll.insertLast(30);
ll.insertLast(40);
ll.insertLast(50);
ll.insertAt(15, 1);
ll.insertLast(60);
ll.insertAt(6, 2);

ll.printData();

ll.removeAt(-9);

console.log(ll.printData());