class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}


class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(data) {
        let node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.size++;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = node;
        node.previous = current;
        this.size++;
    }


    insertAt(index, data) {
        if (index > this.size) {
            return;

        } else {
            let prev;
            let count = 0;
            let current = this.head;
            let node = new Node(data);

            while (count < index) {
                prev = current;
                current = current.next;
                count++;
            }

            node.next = current;
            node.previous = prev;
            prev.next = node;
            this.size++;
        }
    }


    remove() {
        if (!this.head) {
            return;
        } else {

            let prev;
            let current = this.head;

            while (current.next !== null) {
                prev = current;
                current = current.next;
            }

            prev.next = null;
            this.size--;
        }
    }


    removeAt(index) {
        if (index > this.size || !this.head) {
            return;

        } else {
            let prev;
            let count = 0;
            let current = this.head;

            while (count < index) {
                prev = current;
                current = current.next;
                count++;
            }

            prev.next = current.next;
            this.size--;
        }
    }


    getData(data) {
        if (!this.head) return null;

        let current = this.head;

        while (current) {
            if (current.data === data) return true;

            current = current.next;
        }

        return false;
    }


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


    sizeData() {
        return this.size;
    }


    clearData() {
        this.head = null;
        this.size = 0;
    }
}


const dl = new DoubleLinkedList();


dl.insert(10);
dl.insert(20);
dl.insert(30);


console.log(dl.getMiddle());
console.log(dl.getData(30));


console.log(dl.head);