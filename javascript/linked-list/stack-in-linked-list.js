class Node {
   constructor(data, next = null) {
      this.data = data;
      this.next = next;
   }
}

class LinkedListStack {
   constructor() {
      this.head = null;
      this.size = 0;
   }

   push(data) {
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

   pop() {
      let current = this.head;

      if (this.head.next === null) {
         this.head = null;
      } else if (this.head.next !== null) {
         let prev;

         while (current.next) {
            prev = current;
            current = current.next;
         }

         prev.next = null;
         this.size--;
      } else {
         return false;
      }
   }

   peek() {
      let current = this.head;

      while (current.next) {
         current = current.next;
      }

      return `Data : ${current.data}`;
   }

   sizeData() {
      return `Size : ${this.size}`;
   }
}

const ls = new LinkedListStack();

ls.push(10);
ls.push(20);
ls.push(30);
ls.push(40);

ls.pop();

console.log(ls.sizeData());
console.log(ls.peek());

console.log(ls.head);
