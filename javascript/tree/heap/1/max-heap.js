// Rumus :
// parent: i / 2
// left-child: i * 2
// right-child: i * 2 + 1

class MaxHeap {
   constructor() {
      this.heap = [null];
      this.result = [];
   }

   // menambah data
   insert(num) {
      this.heap.push(num);

      if (this.heap.length >= 2) {
         let idx = this.heap.length - 1;

         while (this.heap[idx] > this.heap[Math.floor(idx / 2)]) {
            if (idx >= 1) {
               [this.heap[Math.floor(idx / 2)], this.heap[idx]] = [
                  this.heap[idx],
                  this.heap[Math.floor(idx / 2)],
               ];
            }

            if (Math.floor(idx / 2) > 1) {
               idx = Math.floor(idx / 2);
            } else {
               break;
            }
         }
      }
   }

   // menghapus data
   remove() {
      let smallest = this.heap[1];

      if (this.heap.length > 2) {
         // push data ke result
         this.result.push(this.heap[1]);

         // data pertama diubah dengan data yang terakhir
         this.heap[1] = this.heap[this.heap.length - 1];

         // menghapus data terakhir yang sudah pindah ke parent
         this.heap.pop();

         // jika data cuma ada 3
         if (this.heap.length === 3) {
            // jika parentnya lebih besar dari childnya
            if (this.heap[1] < this.heap[2]) {
               [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
            }

            return smallest;
         }

         let i = 1;
         let right = i * 2 + 1;
         let left = i * 2;

         // membandingkan parent dengan child-childnya
         while (
            this.heap[i] <= this.heap[left] ||
            this.heap[i] <= this.heap[right]
         ) {
            // jika right child lebih besar dari left child
            if (this.heap[right] > this.heap[left]) {
               [this.heap[i], this.heap[right]] = [
                  this.heap[right],
                  this.heap[i],
               ];

               i = i * 2 + 1;
            } else {
               [this.heap[i], this.heap[left]] = [
                  this.heap[left],
                  this.heap[i],
               ];

               i = i * 2;
            }

            left = i * 2;
            right = i * 2 + 1;

            if (
               this.heap[left] === undefined ||
               this.heap[right] === undefined
            ) {
               break;
            }
         }
      } else if (this.heap.length === 2) {
         this.result.push(this.heap.pop());
      } else {
         return null;
      }
   }

   // mencari data
   findData(data) {
      let i = 0;

      while (i < this.heap.length && this.heap[i] !== data) {
         i++;
      }

      if (this.heap[i] === data) {
         let result = {
            data,
            rightChild: this.heap[i * 2 + 1] ? this.heap[i * 2 + 1] : null,
            leftChild: this.heap[i * 2] ? this.heap[i * 2] : null,
         };
         return result;
      } else {
         return "Data not found";
      }
   }
}

const heap = new MaxHeap();

heap.insert(10);
heap.insert(2);
heap.insert(12);
heap.insert(9);
heap.insert(1);
heap.insert(3);
heap.insert(4);
heap.insert(0);

console.log(heap.heap);
console.log(heap.findData(10));

for (let i = 0; i <= 7; i++) {
   heap.remove();
}

console.log(heap.result);
