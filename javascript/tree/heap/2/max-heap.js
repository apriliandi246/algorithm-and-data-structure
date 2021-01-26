// Rumus :
// parent = (i - 1) / 2
// left-child = 2 * p + 1
// right-child = 2 * p + 2

class MaxHeap {
   constructor() {
      this.heap = [];
      this.sort = [];
   }

   // menambah data
   insertData(data) {
      this.heap.push(data);

      if (this.heap.length > 2) {
         let idx = this.heap.length - 1;

         while (this.heap[idx] > this.heap[Math.floor((idx - 1) / 2)]) {
            [this.heap[Math.floor((idx - 1) / 2)], this.heap[idx]] = [
               this.heap[idx],
               this.heap[Math.floor((idx - 1) / 2)],
            ];

            idx = Math.floor((idx - 1) / 2);
         }
      }
   }

   removeData() {
      if (this.heap.length > 2) {
         this.sort.push(this.heap[0]);
         this.heap[0] = this.heap[this.heap.length - 1];
         this.heap.pop();

         if (this.heap.length === 2) {
            if (this.heap[0] > this.heap[1]) {
               this.sort.push(this.heap.shift(), this.heap.shift());
               return;
            }
         }

         let p = 0;
         let left = 2 * p + 1;
         let right = 2 * p + 2;

         while (
            this.heap[p] <= this.heap[left] ||
            this.heap[p] <= this.heap[right]
         ) {
            if (this.heap[left] > this.heap[right]) {
               [this.heap[p], this.heap[left]] = [
                  this.heap[left],
                  this.heap[p],
               ];

               p = 2 * p + 1;
            } else {
               [this.heap[p], this.heap[right]] = [
                  this.heap[right],
                  this.heap[p],
               ];

               p = 2 * p + 2;
            }

            left = 2 * p + 1;
            right = 2 * p + 2;

            if (
               this.heap[left] === undefined ||
               this.heap[right] === undefined
            ) {
               break;
            }
         }
      }
   }

   findData(data) {
      let i = 0;

      while (i < this.heap.length && this.heap[i] !== data) {
         i++;
      }

      if (this.heap[i] === data) {
         const result = {
            data,
            leftChild: this.heap[2 * i + 1] ? this.heap[2 * i + 1] : null,
            rightChild: this.heap[2 * i + 2] ? this.heap[2 * i + 2] : null,
         };
         return result;
      } else {
         return "Data not found";
      }
   }
}

const heap = new MaxHeap();

heap.insertData(10);
heap.insertData(2);
heap.insertData(12);
heap.insertData(9);
heap.insertData(1);
heap.insertData(3);
heap.insertData(4);
heap.insertData(0);
heap.insertData(8);
heap.insertData(6);
heap.insertData(5);
heap.insertData(7);
heap.insertData(11);

console.log(heap.heap);

console.log(heap.findData(6));

let size = heap.heap.length;

for (let i = 0; i < size; i++) {
   heap.removeData();
}

console.log(heap.sort);
