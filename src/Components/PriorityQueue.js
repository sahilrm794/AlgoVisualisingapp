// Class to represent an element in the priority queue with its priority
class QElement {
    constructor(element, priority) {
        this.element = element;  // The actual element (data)
        this.priority = priority;  // The priority associated with the element
    }
}

// PriorityQueue class implementing basic queue operations with priority
class PriorityQueue {
    constructor() {
        this.items = [];  // The array to hold the elements in the queue
    }

    // Method to enqueue an element with a given priority
    enqueue(element, priority) {
        // Create an object from QElement with given element and priority
        var qElement = new QElement(element, priority);
        var contain = false;

        // Find the correct position for the new element based on its priority
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                // Insert the element at the found position
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }

        // If no position was found (i.e., it's the highest priority), push it at the end
        if (!contain) {
            this.items.push(qElement);
        }
    }

    // Method to dequeue an element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";  // Return underflow if the queue is empty
        }
        return this.items.shift();  // Remove and return the first element
    }

    // Method to get the element at the front without removing it
    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";  // Return message if the queue is empty
        }
        return this.items[0];  // Return the first element in the queue
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.items.length === 0;  // Return true if queue is empty
    }

    // Method to get the element at the rear without removing it
    rear() {
        if (this.isEmpty()) {
            return "No elements in Queue";  // Return message if the queue is empty
        }
        return this.items[this.items.length - 1];  // Return the last element in the queue
    }
}

// Exporting the PriorityQueue class for external use
export default PriorityQueue;
