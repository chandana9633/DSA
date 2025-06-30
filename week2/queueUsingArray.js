// class QueueArray {
//     constructor(size) {
//       this.queue = new Array(size);  
//       this.size = size;              
//       this.front = -1;              
//       this.rear = -1;                
//     }
//     isFull() {
//       return this.rear === this.size - 1;
//     }
//     isEmpty() {
//       return this.front === -1 || this.front > this.rear;
//     }
//     enqueue(value) {
//       if (this.isFull()) {
//         console.log("Queue overflow");
//         return;
//       }
//       if (this.front === -1) {
//         this.front = 0;  
//       }
//       this.queue[++this.rear] = value;  
//       console.log(`${value} enqueued to queue`);
//     }
//     dequeue() {
//       if (this.isEmpty()) {
//         console.log("Queue underflow");
//         return null;
//       }
//       const dequeuedValue = this.queue[this.front];
//       this.queue[this.front++] = undefined;  
//       if (this.front > this.rear) {  
//         this.front = -1;
//         this.rear = -1;
//       }
//       return dequeuedValue;
//     }
//     peek() {
//       if (this.isEmpty()) {
//         console.log("Queue is empty");
//         return null;
//       }
//       return this.queue[this.front];
//     }
//     display() {
//       if (this.isEmpty()) {
//         console.log("Queue is empty");
//         return;
//       }
//       let queueContent = "";
//       for (let i = this.front; i <= this.rear; i++) {
//         queueContent += this.queue[i] + " ";
//       }
//       console.log("Queue contents:", queueContent);
//     }
//   }
//   const queueArray = new QueueArray(5);
//   queueArray.enqueue(10);
//   queueArray.enqueue(20);
//   queueArray.enqueue(30);
//   queueArray.display();  
//   console.log("Dequeued:", queueArray.dequeue());  
//   queueArray.display();
  


//------------------------------------------------------------------------



class queueArray {
    constructor(size) {
        this.queue = new Array(size)
        this.front = -1
        this.rear = -1
        this.size = size
    }

    isEmpty() {
        return this.front === -1 || this.front > this.rear
    }

    isFull() {
        return this.rear === this.size - 1
    }

    enQueue(value) {
        if (this.isFull()) {
            console.log('the queue is full');
            return null
        }

        if (this.front===-1) {
            this.front=0
        }

        this.queue[++this.rear] = value
    }

    deQueue() {
        if (this.isEmpty()) {
            console.log('the queue is empty');
            return null
        }

        let deQueueEle = this.queue[this.front]
        this.front++
        if (this.front > this.rear) {
            this.front = -1
            this.rear = -1
        }
        return deQueueEle
    }

    print() {
        if (this.isEmpty()) {
            console.log('the queue is empty');
            return
        }

        for (let i = this.front; i <= this.rear; i++) {
            console.log(this.queue[i]);
        }
    }
}




const queues = new queueArray(5)
queues.enQueue(3)
queues.enQueue(2)
queues.enQueue(4)
queues.enQueue(8)
queues.print()

console.log('after dequeue');
queues.deQueue()
console.log('deQueue element :', queues.deQueue());
queues.print()
console.log('peek value :', queues.peek());

queues.peek()

//basic examples of queue..

class Queue{
    constructor(){
        this.items=[]
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
            console.log('Queue is empty !');
            return undefined
        }
        return this.items.shift()
    }

    peek(){
        if(this.isEmpty()){
            console.log('Queue is empty ');
            return undefined
        }
        return this.items[0]
    }

    isEmpty(){
        this.items.length===0
    }

    display(){
        console.log('Queue :',this.items.join('<-'));
    }
}

const queue=new Queue()

queue.enqueue('A')
queue.enqueue('B')
queue.enqueue('C')

queue.display()

console.log(queue.dequeue());
queue.display()

console.log(queue.peek());
