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
            let current;

            if (!this.head) {
                  this.head = node;
            } else {
                  current = this.head;

                  while (current.next) {
                        current = current.next;
                  }

                  current.next = node;
            }

            this.size++;
      }


      // insert at
      insertAt(data, index) {
            if (index > 0 && index > this.size) {
                  return false;
            }

            if (index === 0) {
                  this.head = new Node(data);
                  return;
            }

            let node = new Node(data);
            let current, previous;
            let count = 0;

            current = this.head;

            while (count < index) {
                  previous = current;
                  current = current.next;
                  count++;
            }

            node.next = current;
            previous.next = node;
            this.size++;
      }


      // remove at index
      removeAt(index) {
            if (index > 0 && index > this.size) {
                  return false;
            }

            let current = this.head;
            let previous;
            let count = 0;

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
            this.size++;
      }


      // get data at
      getAt(index) {
            let current = this.head;
            let count = 0;

            while (current) {
                  if (count === index) {
                        return `Data => ${current.data}`;
                  }
                  current = current.next;
                  count++;
            }

            return null;
      }


      // get the middle data
      getMiddle() {
            if (this.head === null) {
                  return null;
            }

            let slow = this.head;
            let fast = this.head;

            while (fast !== null && fast.next !== null) {
                  fast = fast.next.next;
                  slow = slow.next;
            }

            return slow.data;
      }


      // print all data
      printData() {
            let current = this.head;
            let result = "";

            while (current) {
                  result += current.data + " => ";
                  current = current.next;
            }

            console.log(result + null);
      }

      // clear all data
      clearListData() {
            this.head = null;
            this.size = 0;
      }
}



let ll = new LinkedList();


ll.insertFirst(10);
ll.insertLast(20);
ll.insertAt(5, 1);
ll.insertLast(40);
ll.insertLast(50);

console.log(ll.getAt(0));

console.log("\n");

console.log(ll.getMiddle());

console.log("\n");

ll.printData();