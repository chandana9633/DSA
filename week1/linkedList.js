

//--------------------------------SLL------------------------------------------

class Node{
  constructor(value){
    this.value=value
    this.next=null
  }
}

class LinkedList{
  constructor(){
    this.head=null
    this.tail=null
    this.size=0
  }
  isEmpty() {
      return this.size===0
    }

    append(value){
      const node=new Node(value)
      if (this.isEmpty()) {
        this.head=node
        this.tail=node
      }else{
        this.tail.next=node
        this.tail=node
      }
      this.size++
    }

    middle(){
        if (this.isEmpty()) {
            console.log('List is empty');
            return 
        }
        let slow=this.head
        let fast=this.head

        while(fast &&fast.next){
            slow=slow.next
            fast=fast.next.next
        }
        console.log('Middle is :',slow.value);
    }

    reverse(){
        let prev=null
        let curr=this.head
        this.tail=curr

        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
// --------------------------------------------
reverse(){
        if(this.isEmpty()){
            console.log('list is empty');
            return
        }
        let prev=null
        let curr=this.head
        this.tail=curr

        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
// ----------------------------------------------
      search(value){
    if(this.isEmpty()){
      return -1
    }
    let i=0
    let curr=this.head
    while(curr){
      if(curr.value===value){
        return i
      }
      curr =curr.next
    }
    return -1
  }

  insert(value,index){
    if(index<0 || index>this.size){
      return
    }
    if(index===0){
      this.prepend(value)
    }else{
      const node=new Node(value)
      let prev=this.head
      for(let i=0;i<index-1;i++){
        prev=prev.next
      }
      node.next=prev.next
      prev.next=node
      this.size++
    }
  }


    removeFrom(index){
    if(index<0 || index>=this.size){
      return null
    }
    let removeNode
    if(index===0){
      removeNode=this.head
      this.head=this.head.next
    }else{
      let prev=this.head
      for(let i=0;i<index-1;i++){
        prev=prev.next
      }
      removeNode=prev.next
      prev.next=removeNode.next
    }
    this.size--
    return removeNode.value
  }

  insertMiddle(value){
    const mid=Math.floor(this.size/2)
    this.insert(value,mid)
  }

  findOdds(){
    if(this.isEmpty()){
        console.log('List is empty');
        return
    }

    let curr=this.head
    console.log('Odd numbers in the list');
    
    while(curr){
        if(curr.value%2==1){
            console.log(curr.value)
        }
    }
      curr=curr.next
  }

  getOddValues(){
    let odds=[]
    let curr=this.head
    while(curr){
        if(curr.value%2!==0){
            odds.push(curr.value)
        }
        curr=curr.next
    }
    return odds
  }
    removeDuplicates() {
  if (this.isEmpty() || this.head.next === null) return;

  const seen = new Set();
  let curr = this.head;
  let prev = null;

  while (curr) {
    if (seen.has(curr.value)) {
      // Duplicate found — skip current node
      prev.next = curr.next;
      this.size--;
      // Update tail if needed
      if (curr === this.tail) {
        this.tail = prev;
      }
    } else {
      seen.add(curr.value);
      prev = curr;
    }
    curr = curr.next;
  }
}

    removeMiddle(){
    if(this.isEmpty()){
        console.log('List is empty');
        return null
    }

    const middleIndex=Math.floor(this.size/2)
    const removeMid=this.removeFrom(middleIndex)
    console.log(`Removed middle value: ${removeMid}`);
    return removeMid

    }


    
  removeByIndex(index) {
  if (index < 0 || index >= this.size) {
    console.log("Index out of bounds");
    return null;
  }

  let removedValue;

  if (index === 0) {
    removedValue = this.head.value;
    this.head = this.head.next;
    if (this.size === 1) this.tail = null;
  } else {
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }

    removedValue = prev.next.value;
    prev.next = prev.next.next;

    if (index === this.size - 1) {
      this.tail = prev;
    }
  }

  this.size--;
  console.log(`Removed value at index ${index}: ${removedValue}`);
  return removedValue;
}



    removeByValue(value) {
  if (this.isEmpty()) {
    console.log("List is empty");
    return null;
  }

  if (this.head.value === value) {
    this.head = this.head.next;
    if (this.size === 1) this.tail = null;
    this.size--;
    console.log(`Removed value: ${value}`);
    return value;
  }

  let prev = this.head;
  let curr = this.head.next;

  while (curr) {
    if (curr.value === value) {
      prev.next = curr.next;
      if (curr === this.tail) {
        this.tail = prev;
      }
      this.size--;
      console.log(`Removed value: ${value}`);
      return value;
    }
    prev = curr;
    curr = curr.next;
  }

  console.log("Value not found");
  return null;
}


    print(){
      let curr=this.head
      while(curr){
        console.log(curr.value);
        curr=curr.next
      }
    }
}

// const list=new LinkedList()

// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.print()
// list.middle()
// list.reverse()

const list = new LinkedList();
list.append(11);
list.append(20);
list.append(20);
list.append(32);
list.append(31);
list.append(40);

console.log("Original list:");
list.print();

list.reverse();
console.log("Reversed list:");
list.removeFrom(0)
list.insertMiddle(12)
console.log(list.getOddValues());


console.log("Before removing duplicates:");
list.print();

list.removeDuplicates();

console.log("After removing duplicates:");
list.removeMiddle()
list.print();

list.middle();




//-----------------------------------DLL-----------------------------------------------

class Node{
  constructor(value){
    this.value=value
    this.next=null
    this.prev=null
  }
}

class DoublyLinkedList{
  constructor(){
    this.head=null
    this.tail=null
    this.size=0
  }

  isEmpty(){
    return this.size===0
  }

  append(value){
    const node=new Node(value)
    if(this.isEmpty()){
      this.head=node
      this.tail=node
    }else{
      this.tail.next=node
      node.prev=this.tail
      this.tail=node
    }
    this.size++
  }

  prepend(value){
    const node=new Node(value)
    if(this.isEmpty()){
      this.head=node
      this.tail=node
    }else{
      node.next=this.head
      this.head.prev=node
      this.head=node
    }
    this.size++
  }

  
  remove(value) {
    if (this.isEmpty()) return;

    let current = this.head;

    while (current) {
      if (current.value === value) {
        if (current === this.head) {
          this.head = current.next;
          if (this.head) this.head.prev = null;
          else this.tail = null;
        } else if (current === this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        this.size--;
        return;
      }
      current = current.next;
    }
  }


  
    delete(value) {
      if (!this.head) {
        return null;
      }
      let curr = this.head;
      while (curr) {
        if (curr.value === value) {
          if (curr === this.head) {
            this.head = curr.next;
          }
  
          if (curr === this.tail) {
            this.tail = curr.prev;
          }
  
          if (curr.prev) {
            curr.prev.next = curr.next;
          }
  
          if (curr.next) {
            curr.next.prev = curr.prev;
          }
          curr.next = null;
          curr.prev = null;
          return;
        }
        curr = curr.next;
      }
      console.log("Not found");
      return;
    }

    findMidlle(){
      if(!this.head){
        console.log('List empty');
        return
      }
      let fast=this.head
      let slow=this.head

      while(fast&&fast.next){
        slow=slow.next
        fast=fast.next.next
      }
      console.log('The middle element : ',slow.value);
      
    }

    reverse(){
      if(!this.head){
        return null
      }
      let curr=this.head
      let prev=null

      while(curr){
        let next=curr.next
        curr.next=prev
        curr.prev=next
        prev=curr
        curr=next
      }
      this.tail=this.head
      this.head=prev
    }

    deleteByIdx(index) {
      if (!this.head) {
        console.log("List not found");
        return null;
      }
  
      let curr = this.head;
      let i = 0;
      while (curr) {
        if (index == i) {
          if (curr === this.head) {
            this.head = curr.next;
          }
  
          if (curr === this.tail) {
            this.tail = curr.prev;
          }
  
          if (curr.prev) {
            curr.prev.next = curr.next;
          }
  
          if (curr.next) {
            curr.next.prev = curr.prev;
          }
  
          curr.prev = null;
          curr.next = null;
          return;
        }
        i++;
        curr = curr.next;
      }
      console.log("No index found");
      return;
    }

  findSecondLargest() {
      if (!this.head || !this.head.next) {
        console.log("List too short");
        return null;
      }
  
      let curr = this.head;
      let largest = -Infinity;
      let secondLargest = -Infinity;
  
      while (curr) {
        if (curr.value > largest) {
          secondLargest = largest;
          largest = curr.value;
        } else if (curr.value > secondLargest && curr.value !== largest) {
          secondLargest = curr.value;
        }
        curr = curr.next;
      }
  
      if (secondLargest === -Infinity) {
        console.log("No second largest value");
        return null;
      }
  
      console.log("Second largest:", secondLargest);
      return secondLargest;
    }

   merge(list) {
      if (!list.head) {
        return null;
      }
      if (!this.head) {
        this.head = list.head;
        this.tail = list.tail;
      } else {
        this.tail.next = list.head;
        list.head.prev = this.tail; 
        this.tail = list.tail;
      }
    }
  
    sort() {
      if (!this.head || !this.head.next) {
        return null;
      }
      let curr = this.head.next;
      while (curr) {
        let key = curr;
        let prev = curr.prev;
        while (prev && prev.value > key.value) {
          [prev.value, key.value] = [key.value, prev.value];
          key = prev;
          prev = prev.prev;
        }
        curr = curr.next;
      }
    }

  print(){
    let curr=this.head
    while(curr){
      console.log(curr.value);
      curr=curr.next
    }
  }
}

let dll=new DoublyLinkedList()

dll.append(100)
dll.prepend(50)
dll.prepend(40)
dll.prepend(30)
dll.prepend(20)

dll.findMidlle()
dll.findSecondLargest()
dll.print()
dll.reverse()

 


//----------------------------------------Circular linked list--------------------------------------------------

class Node{
  constructor(value){
    this.value=value
    this.next=null
  }
}

class LinkedList{
  constructor(){
    this.head=null
    this.tail=null
    this.size=0
  }

  isEmpty(){
    return this.size===0
  }

  append(value){
    const node=new Node(value)
    if(this.isEmpty()){
      this.head=node
      this.tail=node
      this.tail.next=this.head
    }else{
      this.tail.next=node
      this.tail=node
      this.tail.next=this.head
    }
    this.size++
  }

  prepend(value){
    const node=new Node(value)
    if(this.isEmpty()){
      this.head=node
      this.tail=node
      this.tail.next=this.head
    }else{
      node.next=this.head
      this.head=node
      this.tail.next=this.head
    }
    this.size++
  }
  delete(value) {
      if (this.isEmpty()) return;
  
      let curr = this.head;
      let prev = null;
  
      if (curr.value === value) {
        if (this.size === 1) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = this.head.next;
          this.tail.next = this.head; 
        }
        this.size--;
        return;
      }
  
      while (curr !== this.tail && curr.value !== value) {
        prev = curr;
        curr = curr.next;
      }
  
      if (curr.value === value) {
        if (curr === this.tail) {
          this.tail = prev;
        }
        prev.next = curr.next;
        this.size--;
      }
    }

  findLargest(){
    if(this.isEmpty()){
       console.log('List is empty');
       return;  
    }
    let curr=this.head
    let max=this.head.value

    do {
      if(curr.value>max){
        max=curr.value
      }
      curr=curr.next
    } while (curr!==this.head);

    console.log('largest value id :',max);
  }

  isCircular() {
      if (this.isEmpty()) {
        return null;
      }
      if (this.size === 1) {
        return this.head === this.tail.next;
      }
  
      let fast = this.head;
      let slow = this.head;
  
      while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
          return true;
        }
      }
      return false;
    }

  print() {
  if (this.isEmpty()) return;

  let curr = this.head;
  do {
    console.log(curr.value);
    curr = curr.next;
  } while (curr !== this.head);
  }
}


let cLL=new LinkedList()

console.log('Original values');
cLL.append(10)
cLL.prepend(11)
cLL.prepend(12)
cLL.append(13)
cLL.print()

console.log('Updates!');

cLL.findLargest(12)
console.log('Is Circular ?',cLL.isCircular());

cLL.print()

