class Node {
      constructor(data) {
            this.data = data;
            this.next = null;
            this.prev = null;
      }
}


class DoubleLinkedList {
      constructor() {
            this.head = null;
            this.tail = null;
            this.size = 0;
      }

      // insert first
      insertFirst(data) {
            this.head = new Node(data);
            this.size++;
      }

      // insert last
      insertLast(data) {
            let node = new Node(data);
            let current = this.head;
            let previous;

            while (current) {
                  previous = current;
                  current = current.next;
            }

            previous.next = node;
            previous.next.prev = previous;
            this.tail = node;
            this.size++;
      }

      // insert data at
      insertAt(index, data) {
            let node = new Node(data);
            let previous;

            if (index > this.size) return false;

            if (index === 0) {
                  this.head = node;
                  this.head.prev = null;

            } else if (index === this.size - 1) {
                  previous = this.tail;
                  this.tail.next = node;
                  this.tail.prev = previous;
                  this.size++;

            } else {
                  let current = this.head;
                  let count = 0;

                  while (count < index) {
                        previous = current;
                        current = current.next;
                        count++;
                  }

                  previous.next = node;
                  previous.next.prev = previous;
                  this.tail = node;
                  this.size++;
            }
      }

      // remove first
      removeFirst() {
            if (this.size > 1) {
                  this.head = this.head.next;
                  this.head.prev = null;
                  this.size--;
            }
      }

      // remove lasts
      removeLast() {
            let current = this.head;
            let previous;

            while (current) {
                  previous = current;
                  current = current.next;
            }

            this.tail = previous.prev;
            this.tail.next = null;
            this.size--;
      }

      // remove data at
      removeAt(index) {
            if (index > this.size) return false;

            let current = this.head;
            let count = 0;
            let previous;

            while (count < index) {
                  previous = current;
                  current = current.next;
                  count++;
            }

            previous.next = current.next;
            this.size--;
      }

      // print all data
      printList() {
            if (this.size == 0) {
                  console.log("---- Data is empty ----");
                  return;

            } else {
                  let current = this.head;
                  let result = "";

                  while (current) {
                        if (current.data != null) result += current.data + " => ";
                        current = current.next;
                  }

                  console.log(this.head.prev + " <= " + result + this.tail.next);
            }
      }

      // check size of data
      sizeData() {
            if (this.size === 0) {
                  return "---- Data is Empty ----";
            } else {
                  return "Data => " + this.size;
            }
      }

      // clear all data
      clearData() {
            this.head = null;
            this.size = 0;
      }
}


const dll = new DoubleLinkedList();

dll.insertFirst(10);
dll.insertLast(15);
dll.insertLast(20);
dll.insertAt(3, 12);
dll.removeAt(1);
dll.printList();

console.log(dll.sizeData());