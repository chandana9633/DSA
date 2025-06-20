
// Array problems
//================
//----------------------elements sum to equals target----------------------
// let arr=[6,5,4,3,9,8,0]

// function findTwoSum(arr,target){
//   for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[i]+arr[j]===target){
//         return [arr[i],arr[j]]
//       }
//     }
//   }
//   return null
// }
// console.log(findTwoSum([2,5,6,1,8,9,3],10));

//-----------------------move duplicates to end--------------------------

// function moveToEnd(arr,target){
//   let result=[]
//   for(let num of arr){
//     if(num!==target){
//       result.push(num) 
//     }
//   }

//   for(let num of arr){
//     if(num===target){
//       result.push(num)
//     }
//   }
//   return result
// }
// console.log(moveToEnd([1, 2, 1, 3, 4, 1, 1, 5], 1));

//---------------------------------------------------------------

// function moveDuplicatesToEnd(arr){
//   let seen=new Set
//   let unique=[],duplicates=[]

//   for(let value of arr){
//     if(!seen.has(value)){
//       seen.add(value)
//       unique.push(value)
//     }else{
//       duplicates.push(value)
//     }
//   }
//   return [...unique,...duplicates]
// }

// console.log(moveDuplicatesToEnd([12,4,2,4,2,2,2,1]));


//--------------------------------fibonacci--------------------------------

// function fibonacci(n){
//   let fib=[0,1]
//   for(let i=2;i<n;i++){
//     fib[i]=fib[i-1]+fib[i-2]
//   }
//   return fib  
// }
// console.log(fibonacci(2));
// console.log(fibonacci(7));
// console.log(fibonacci(10));

//-------------------------factorial---------------------------------------

// function factorial(n){
//   let result=1
//   for(let i=2;i<=n;i++){
//     result=result*i
//   }
//   return result
// }

// console.log(factorial(4));

//-----------------------prime --------------------------------------------

// function prime(n){
//   if(n<2){
//     return false
//   }
//   for(let i=2;i<Math.sqrt(n);i++){
//     if(n%i===0){
//       return false
//     }
//   }
//   return true
// }

// console.log(prime(4));
// console.log(prime(7));

//-----------------------recursive fibonacci--------------------------------

// function recursiveFibonacci(n){
//   if(n<2){
//     return n
//   }
//   return recursiveFibonacci(n-1)+recursiveFibonacci(n-2)
// }

// console.log(recursiveFibonacci(0));
// console.log(recursiveFibonacci(1));
// console.log(recursiveFibonacci(6));

//--------------------recursive factorial------------------------------------

// function recursiveFactorial(n){
//   if(n===0){
//     return 1
//   }
//   return n*recursiveFactorial(n-1)
// }
// console.log(recursiveFactorial(1));
// console.log(recursiveFactorial(5));
// console.log(recursiveFactorial(8));

//----------------------SEARCH ALGORITHMS---------linear search----------------

// function linearSearch(arr,target){
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]===target){
//       return i
//     }
//   }
//   return -1
// }

// console.log(linearSearch([3,12,5,8,2,9],5));

//-------------------linear search using recursion--------------------------

// function linearSearchRecursive(arr, target, index = 0) {
//   if (index >= arr.length) {
//     return -1;
//   }

//   if (arr[index] === target) {
//     return index;
//   }

//   return linearSearchRecursive(arr, target, index + 1);
// }


//-----------------------binary search---------------------------

// function binarySearch(arr,target){
//   arr.sort((a,b)=>a-b)

//   let leftIndex=0
//   let rightIndex=arr.length-1    

//   while(leftIndex<=rightIndex){
//     let middleIndex=Math.floor((leftIndex+rightIndex)/2)
//     if(target===arr[middleIndex]){
//       return middleIndex
//     }
//     if(target<arr[middleIndex]){
//       rightIndex=middleIndex-1
//     }else{
//       leftIndex=middleIndex+1
//     }
//   }
//   return -1

// }

// console.log(binarySearch([13,4,2,7,9,1],2));

 

// function binarySearch(arr,target){
//   arr.sort((a,b)=>a-b)

//   let leftIndex=0
//   let rightIndex=arr.length-1

//   while(leftIndex<=rightIndex){
//     let middleIndex=Math.floor((leftIndex+rightIndex)/2)

//     if(target===arr[middleIndex]){
//       return middleIndex
//     }
//     if(target<arr[middleIndex]){
//       rightIndex=middleIndex-1
//     }else{
//       leftIndex=middleIndex+1
//     }
//   }
//   return -1
// }
// console.log([1,2,5,6,3,9],5);

// //[1,2,3,5,6,9]=5/2=2,
// //index 2=3, 3<5 ---rightindex will continue,
// //leftIndex=2, 2+5= 7, 7/2=3----- index 3= 5

//-------------------------binary search using recursion----------------------------

// function recursiveBinarySearch(arr,target){
//   arr.sort((a,b)=>a-b)
//   return search(arr,target,0,arr.length - 1)
// }

// function search(arr,target,leftIndex,rightIndex){
//   if(leftIndex>rightIndex){
//     return - 1
//   }

//   let middleIndex=Math.floor((leftIndex+rightIndex)/2)
//   if(target===arr[middleIndex]){
//     return middleIndex
//   }

//   if(target<arr[middleIndex]){
//     return search(arr,target,leftIndex,middleIndex-1)
//   }else{
//     return search(arr,target,middleIndex+1,rightIndex)
//   }
// }

// console.log(recursiveBinarySearch([1,5,7,3,9,8,12],3));


//--------------------------Linked List-----------creation-----------------

// class Node{
//   constructor(value){
//     this.value=value
//     this.next=null
//   }
// }

// class LinkedList{
//   constructor(){
//     this.head=null
//     this.size=0
//   }

//   isEmpty(){
//     return this.size===0
//   }

//   getSize(){
//     return this.size
//   }
// }

// const list=new LinkedList()

// console.log('List is empty?',list.isEmpty());
// console.log('List size',list.getSize());


//-------------------------add new nodes-----------------------------


// class Node{
//   constructor(value){
//     this.value=value
//     this.next=null                  
//   }
// }

// class LinkedList{
//   constructor(){
//     this.head=null
//     this.size=0
//   }

//   isEmpty(){
//     return this.size===0
//   }

//   getSize(){
//     return this.size
//   }

//   prepend(value){
//     const node=new Node(value)
//     if(this.isEmpty()){
//       this.head=node
//     }else{
//       node.next=this.head
//       this.head=node
//     }
//     this.size++
//   }

//   append(value){
//     const node=new Node(value)
//     if(this.isEmpty()){
//       this.head=node
//     }else{
//       let prev=this.head
//       while(prev.next){
//         prev=prev.next
//       }
//       prev.next=node
//     }
//     this.size++
//   }

//   insert(value,index){
//     if(index<0 || index>this.size){
//       return
//     }
//     if(index===0){
//       this.prepend(value)
//     }else{
//       const node=new Node(value)
//       let prev=this.head
//       for(let i=0;i<index-1;i++){
//         prev=prev.next
//       }
//       node.next=prev.next
//       prev.next=node
//       this.size++
//     }
//   }
//   removeIndex(index){
//     if(index<0 || index>=this.size){
//       return null
//     }
//     let removeNode
//     if(index===0){
//       removeNode=this.head
//       this.head=removeNode.next
//     }else{
//       let prev=this.head
//       for(let i=0;i<index-1;i++){
//         prev=prev.next
//       }
//       removeNode=prev.next
//       prev.next=removeNode.next
//     }
//     this.size--
//     return removeNode.value
//   }
//   search(value){
//     if(this.isEmpty()){
//       return -1
//     }
//     let i=0
//     let curr=this.head
//     while(curr){
//       if(curr.value===value){
//         return i
//       }
//       curr =curr.next
//     }
//     return -1
//   }

//   reverse(){
//     let prev=null
//     let curr=this.head
//     while(curr){
//       let next=curr.next
//       curr.next=prev
//       prev=curr
//       curr=next
//     }
//     this.head=prev
//   }



//   print(){
//     if(this.isEmpty()){
//       console.log('List is empty');
//     }else{
//       let curr=this.head
//       let listValue=''
//       while(curr){
//         listValue+=`${curr.value}`
//         curr=curr.next
//       }
//       console.log(listValue);
      
//     }
//   }
// }

// const list=new LinkedList()
// console.log('List is empty?',list.isEmpty());
// console.log('List size',list.getSize());

// list.print()

// list.prepend(10)
// list.print()

// list.append(20)
// list.append(30)
// list.print()

// list.insert(10, 0)
// list.print()

// list.insert(20, 1)
// list.print()

// list.insert(40, 2)
// list.print()

// console.log(list.getSize());

// console.log(list.removeIndex(10));
// console.log(list.removeIndex(0));
// list.print()

// // console.log(list.search(40));
// list.reverse()
// list.print()

//------------------middle delete-----------------------
// removeMiddle() {
//   if (this.isEmpty()) {
//     console.log("List is empty");
//     return null;
//   }

//   const midIndex = Math.floor(this.size / 2);

//   // If list has only one node
//   if (this.size === 1) {
//     const removedValue = this.head.value;
//     this.head = null;
//     this.tail = null;
//     this.size--;
//     console.log(`Removed middle value: ${removedValue}`);
//     return removedValue;
//   }

//   let prev = null;
//   let curr = this.head;

//   for (let i = 0; i < midIndex; i++) {
//     prev = curr;
//     curr = curr.next;
//   }

//   // Now curr is the middle node
//   prev.next = curr.next;

//   // Update tail if needed
//   if (curr === this.tail) {
//     this.tail = prev;
//   }

//   this.size--;
//   console.log(`Removed middle value: ${curr.value}`);
//   return curr.value;
// }

//-------------------------------------------------

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   isEmpty() {
//     return this.head === null;
//   }

//   findMiddle() {
//     if (this.isEmpty()) {
//       return null;
//     }

//     let slow = this.head;
//     let fast = this.head;

//     while (fast !== null && fast.next !== null) {
//       slow = slow.next;
//       fast = fast.next.next;
//     }

//     return slow.value;
//   }

//   append(value) {
//     const newNode = new Node(value);
//     if (this.isEmpty()) {
//       this.head = newNode;
//     } else {
//       let current = this.head;
//       while (current.next !== null) {
//         current = current.next;
//       }
//       current.next = newNode;
//     }
//   }

//   printList() {
//     let current = this.head;
//     while (current !== null) {
//       console.log(current.value);
//       current = current.next;
//     }
//   }
// }


// const list = new LinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);

// list.printList();                  
// console.log(list.findMiddle());     



// class Node{
//   constructor(value){
//     this.value=value
//     this.prev=null
//     this.next=null
//   }
// }

// class DoublyLinkedList{
//   constructor(){
//     this.head=null
//     this.tail=null
//   }

//   isEmpty(){
//     return this.head===null
//   }

// }


// class Node{
//   constructor(value){
//     this.value=value
//     this.prev=null
//     this.next=next
//   }
// }

// class DoublyLinkedList{
//   constructor(){
//     this.head=null
//     this.tail=null
//   }

//   isEmpty(){
//     return this.head===null
//   }
// }



// function findSmallestStr(words,index=0,smallest=null){
//   if(index===words.length){
//     return smallest
//   }

//   const currentWrd=words[index]

//   if(smallest===null ||currentWrd.length<smallest.length){
//     smallest=currentWrd
//   }
//   return findSmallestStr(words,index+1,smallest)
// }

// const str="This is a recursive example"
// const wordsArray=str.split(" ")
// const smallestWord = findSmallestStr(wordsArray);
// console.log("Smallest word:", smallestWord)


//-------------

// function findOccurIndex(arr,target,index=0){
//   if(index>=arr.length) return -1
//   if(arr[index]===target) return index

//   return findOccurIndex(arr,target,index+1)
// }

// const arr=[1,2,2,3,3,5]
// const target=2

// const result=findOccurIndex(arr,target)
// console.log("First occurrence of", target, "is at index:", result);


//--------------------------





// class Node{
//   constructor(value){
//     this.value=value
//     this.next=null
//   }
// }

// class LinkedList{
//   constructor(){
//     this.head=null
//     this.tail=null
//     this.size=0
//   }

//   isEmpty(){
//     return this.size===0
//   }
  
//   append(value){
//     const node=new Node(value)
//     if(this.isEmpty()){
//       this.head=node
//       this.tail=node
//     }else{
//       this.tail.next=node
//       this.tail=node
//     }
//     this.size++

//   }

//   prepend(value){
//     const node=new Node(value)
//     node.next=this.head
//     this.head=node
//   }

//    reverse() {
//       if (this.isEmpty()) {
//         console.log("List is empty");
//         return;
//       }
  
//       let curr = this.head;
//       let prev = null;
//       this.tail = this.head;
  
//       while (curr) {
//         let next = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = next;
//       }
//       this.head = prev;
//     }

//     middle(){
//       if(!this.head){
//         console.log('list is empty');
//         return
//       }

//       let slow=this.head
//       let fast=this.head

//       while(fast&&fast.next){
//         slow=slow.next
//         fast=fast.next.next
//       }
//       console.log('middle:',slow.value);
      
//     }

//   print(){
//     let current=this.head
//     while(current!==null){
//       console.log(current.value);
//       current=current.next
//     }
//   }
// }

// const ll=new LinkedList()
// ll.append(12)
// ll.append(13)
// ll.prepend(14)
// ll.prepend(15)
// ll.print()
// // ll.reverse()
// ll.middle()

// function binarySearch(arr, target) {
//   arr.sort((a, b) => a - b); 

//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;

//   while (leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//     if (arr[middleIndex] === target) {
//       return middleIndex;
//     }

//     if (target < arr[middleIndex]) {
//       rightIndex = middleIndex - 1; 
//     } else {
//       leftIndex = middleIndex + 1;
//     }
//   }

//   return -1; 
// }


// console.log(binarySearch([12,4,3,6,7,1],3));



  //------------------count occurrences----------------------------------

//  function isEqual(str1, str2, index = 0) {
//   if (index === str1.length && index === str2.length) {
//     return true;
//   }

//   if (str1.length !== str2.length) {
//     return false;
//   }

//   if (str1[index].toLowerCase() !== str2[index].toLowerCase()) {
//     return false;
//   }
//   return isEqual(str1, str2, index + 1);
// }


//==================problem using linear and binary search============================

//Given an array arr and a number target, return the index of target. If not found, return -1.--Linear

// function linearSearch(arr,target){
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]===target) return i
//   }
//   return -1
// }

// time=o(n), space=o(1)
//-------------------------------


// Given a sorted array arr and a number target, return the index of target. If not found, return -1.--Binary


// function binarySearch(arr,target){
//   let leftIndex=0
//   let rightIndex=arr.length-1

//   while(leftIndex<=rightIndex){
//     let middle=Math.floor((leftIndex+rightIndex)/2)

//     if(arr[middle]===target) return middle
//     else if(arr[middle]<target) leftIndex=middle+1
//     else rightIndex=middle++
//   }
//   return -1
// }

// console.log(binarySearch([3,7,9,10,21,30],10))




// function fibonacci(n){
//   let fib=[0,1]
//   for(let i=2;i<n;i++){
//     fib[i]=fib[i-1]+fib[i-2]
//   }
//   return fib
// }

// console.log(fibonacci(7));

//singly linked list

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     getSize(){
//         return this.size
//     }

//     //Append
//     append(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//             this.tail=node
//         }else{
//             this.tail.next=node
//             this.tail=node
//         }
//         this.size++
//     }

//     //Prepend
//     prepend(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//             this.tail=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
        
//     }
//     //Reverse
//     reverse(){
//         if(this.isEmpty()){
//             console.log('list is empty');
//             return
//         }
//         let prev=null
//         let curr=this.head
//         this.tail=curr

//         while(curr){
//             let next=curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
//     }

//      findMiddle(){
//         if(!this.head){
//             console.log('List is empty');
//             return
//         }

//         let slow=this.head
//         let fast=this.head

//         while(fast&&fast.next){
//             slow=slow.next
//             fast=fast.next.next
//         }
//         console.log('Middle:',slow.value);
        
//     }



//     print(){
//     if(this.isEmpty()){
//         console.log('List is empty!');
//         return
//     }

//     let curr=this.head
//     let list=''

//     while(curr){
//         list+=`${curr.value}`
//         curr=curr.next
//     }
//     console.log(list);
//  }
// }

// const linkedList=new LinkedList()
// linkedList.append(2)
// linkedList.append(1)
// linkedList.append(7)
// linkedList.prepend(3)
// linkedList.prepend(6)
// linkedList.print()
// // linkedList.reverse()
// linkedList.findMiddle()
// // linkedList.print()

//--======================================================================================================================================

//Sum of N Numbers Using Recursion
// function sum(n){
//   if(n===0){
//     return n
//   }
//   return n+sum(n-1)
// }
// console.log(sum(5));


// //Factorial
// function fact(n){
//   if(n<=1){
//     return 1
//   }else{
//     return n*fact(n-1)
//   }
// }
// console.log(fact(7));


// doubly linked list

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//     }

//     append(value){
//         const node = new Node(value);
//         if (!this.head){
//             this.head = node;
//             this.tail = node;
//         } else {
//             this.tail.next = node;  
//             node.prev = this.tail;
//             this.tail = node;
//         }
//     }

//     prepend(value){
//         const node=new Node(value)
//         if(!this.head){
//             this.head=node
//             this.tail=node
//             return
//         }
//         node.next=this.head
//         this.head.prev=node
//         this.head=node
//     }

    

//     reverse(){
//         let curr=this.tail
//         while(curr){
//             console.log(curr.value);
//             curr=curr.prev
//         }
//     }

//     findMiddle(){
//         if(!this.head){
//             console.log('List is empty');
//             return
//         }

//         let slow=this.head
//         let fast=this.head

//         while(fast&&fast.next){
//             slow=slow.next
//             fast=fast.next.next
//         }
//         console.log('Middle:',slow.value);
        
//     }

//     removeDuplicates() {
//     const seen = new Set();
//     let curr = this.head;

//     while (curr) {
//         if (seen.has(curr.value)) {
//             const prev = curr.prev;
//             const next = curr.next;

//             if (prev) prev.next = next;
//             else this.head = next;

//             if (next) next.prev = prev;
//             else this.tail = prev;
//         } else {
//             seen.add(curr.value);
//         }
//         curr = curr.next;
//     }
// }



//     print(){
//         let curr=this.head
//         while(curr){
//             console.log(curr.value);
//             curr=curr.next
//         }
//     }
// }


// let dll=new DoublyLinkedList()
// dll.append(10)
// dll.append(20)
// dll.append(30)
// dll.append(30)
// dll.append(40)
// dll.append(40)
// dll.append(50)
// dll.reverse()
// dll.findMiddle()
// dll.removeDuplicates()
// dll.print()



// let str='hello'
// let result=''

// for(let i=0;i<str.length;i++){
//     if(i%2===1){
//         result+=str[i].toUpperCase()
//     }else{
//         result+=str[i]
//     }
// }
// console.log(result);



//----------------------------------------------------------------------------------------

// function binarySearch(arr,target){
//   let left=0
//   let right=arr.length-1

//   while(left<=right){
//     let mid=Math.floor((left+right)/2)
//     if(arr[mid]===target){
//       return mid
//     }else if(arr[mid]<target){
//       left=mid+1
//     }else{
//       right=mid-1
//     }
//   }
//   return -1
// }

// console.log(binarySearch([3,6,9,12,15],6));

//#########################################################

// function reverseStr(str){
//   if(str===''){
//     return ''
//   }
//   return reverseStr(str.slice(1))+str[0]
// }
// console.log(reverseStr('jeyna'));

//#########################################################

// function findMax(arr,max= -Infinity){
//   if(arr.length===0){
//     return max
//   }
//   const current=arr[0]
//   if(current>max){
//     max=current
//   }
//   return findMax(arr.slice(1),max) 
// }

// console.log(findMax([12,4,32,5,8,10]));

//########################################################

// function findMin(arr,min=Infinity){
//   if(arr.length===0){
//     return min
//   }
//   const current=arr[0]
//   if(current<min){
//     min=current
//   }
//   return findMin(arr.slice(1),min)
// }
// console.log(findMin([3,6,19,9,2]));

//#########################################################

// function sumArr(arr){
//   if(arr.length===0) return 0
//   return arr[0]+ sumArr(arr.slice(1))
// }
// console.log(sumArr([12,4,52,6,17,36]));

//##########################################################

// function isPalientrom(str){
//   if(str.length<=1) return true
//   if(str[0]!==str[str.length-1]) return false
//   return isPalientrom(str.slice(1,-1))
// }

// console.log(isPalientrom('reler'));

//###########################################################

// function fib(n){
//   if(n<=1){
//     return n
//   }
//   return fib(n-1)+fib(n+2)
// }
// console.log(fib(3));

//############################################################

