class Node {
   constructor(data, next = null) {
      this.data = data;
      this.next = next;
   }
}

class LinkedListQueue {
   constructor() {
      this.head = null;
      this.size = 0;
   }

   enqueue(data) {
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

   dequeue() {
      if (!this.head) {
         return null;
      } else {
         this.head = this.head.next;
         this.size--;
      }
   }

   front() {
      let current = this.head;
      return `Data : ${current.data}`;
   }

   sizeData() {
      return `Size : ${this.size}`;
   }
}

const ql = new LinkedListQueue();

ql.enqueue(5);
ql.enqueue(10);
ql.enqueue(20);
ql.dequeue();
ql.enqueue(30);

console.log(ql.front());
console.log(ql.sizeData());

console.log(ql.head);
