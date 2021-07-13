// Queue => First In, First Out

class Queue {
	constructor() {
		this.collection = [];
	}

	enqueue(element) {
		this.collection.push(element);
	}

	dequeue() {
		if (this.isEmpty()) {
			console.log("Data is empty");
			return;
		}

		this.collection.shift();
	}

	front() {
		if (this.isEmpty()) {
			console.log("Data is empty");
			return;
		}

		return this.collection[0];
	}

	isEmpty() {
		return this.collection.length === 0;
	}

	printQueue() {
		this.collection.forEach((data) => console.log(data));
	}
}

let queue = new Queue();

queue.enqueue(12);
queue.enqueue(13);
queue.enqueue(14);
queue.enqueue(15);
queue.dequeue();

queue.printQueue();
