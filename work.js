// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let current=arr[i]
//         let j=i-1
        
//         while(j>=0&&arr[j]>current){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current
//     }
//     console.log('Insertion sort is :',arr)
// }

// insertionSort([9,12,5,3,8,2])



// function mergeSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let right=mergeSort(arr.slice(mid))
//     let left=mergeSort(arr.slice(0,mid))
    
//     return merge(left,right)
// }

// function merge(left,right){
//     let i=0
//     let j=0
//     let result=[]
//     while(i<left.length && j<right.length){
//         if(left[i]>right[j]){
//             result.push(right[j])
//             j++
//         }else{
//             result.push(left[i])
//                 i++
//             }
//         }
//         return result.concat(left.slice(i)).concat(right.slice(j))
//     }


// console.log('Merge sort is ',mergeSort([13,5,23,8,9,4]))


// class Stack{
//     constructor(){
//         this.items=[]
//     }
//     push(element){
//         this.items.push(element)
//     }
    
//     pop(){
//         if(this.isEmpty()) return 'Stack is empty'
//     }
    
//     peek(){
//         if(this.isEmpty()) return 'Stack is empty'
//     }
    
//     isempty(){
//         return items.length===0
//     }
    
//     function reverse(s){
//         const mstack=new Stack()
//         while(!s.isEmpty()){
//             mstack.push(s.pop())
//         }
//         return mstack
//     }
    
//     print(){
//         console.log(this.items.join(" "))
//     }
// }

// let stack=new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.print()

// const reveresed=reverse(stack)
// console.log('Reveresed stack :')
// reveresed.print



// class QueueUsingStack{
//     constructor(){
//         this.stack1=[]
//         this.stack2=[]
//     }
//     enQueue(value){
//         this.stack1.push(value)
//     }
//     deQueue(){
//         if(this.stack2.length===0){
//             while(this.stack1.length>0){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2.pop()
//     }
    
//     peek(){
//         if(this.stack2.length===0){
//             while(this.stack2.length>0){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2[this.stack2.length-1]
//     }
    
//     print(){
//         console.log('stack1',this.stack1)
//         console.log('stack2',this.stack2)
//     }
// }


// const queueUseStack=new QueueUsingStack()

// queueUseStack.enQueue(10)
// queueUseStack.enQueue(20)
// queueUseStack.enQueue(30)
// queueUseStack.print()

// console.log('after the dequeue')
// queueUseStack.deQueue()
// queueUseStack.print()

// queueUseStack.peek()



//.............3rd week coveres.............


// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinaryTree {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     const newNode = new Node(value);
//     if (!this.root) return (this.root = newNode);

//     let queue = [this.root];
//     while (queue.length) {
//       let current = queue.shift();
//       if (!current.left) return (current.left = newNode);
//       else queue.push(current.left);

//       if (!current.right) return (current.right = newNode);
//       else queue.push(current.right);
//     }
//   }

//   inorder(node = this.root) {
//     if (!node) return;
//     this.inorder(node.left);
//     console.log(node.value);
//     this.inorder(node.right);
//   }
// }

// const tree = new BinaryTree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.inorder();


// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     const newNode = new Node(value);
//     if (!this.root) {
//       this.root = newNode;
//       return;
//     }

//     let current = this.root;
//     while (true) {
//       if (value < current.value) {
//         if (!current.left) {
//           current.left = newNode;
//           return;
//         }
//         current = current.left;
//       } else {
//         if (!current.right) {
//           current.right = newNode;
//           return;
//         }
//         current = current.right;
//       }
//     }
//   }

//   inorder(node = this.root) {
//     if (!node) return;
//     this.inorder(node.left);
//     console.log(node.value);
//     this.inorder(node.right);
//   }

//   preorder(node = this.root) {
//     if (!node) return;
//     console.log(node.value);
//     this.preorder(node.left);
//     this.preorder(node.right);
//   }

//   delete(value, node = this.root) {
//     if (!node) return null;

//     if (value < node.value) {
//       node.left = this.delete(value, node.left);
//     } else if (value > node.value) {
//       node.right = this.delete(value, node.right);
//     } else {
//       if (!node.left) return node.right;
//       if (!node.right) return node.left;

//       let minNode = this.findMin(node.right);
//       node.value = minNode.value;
//       node.right = this.delete(minNode.value, node.right);
//     }

//     return node;
//   }

//   findMin(node) {
//     while (node.left) {
//       node = node.left;
//     }
//     return node;
//   }
// }

// const bst = new BST();
// bst.insert(50);
// bst.insert(30);
// bst.insert(70);
// bst.insert(20);
// bst.insert(40);
// bst.insert(60);
// bst.insert(80);

// console.log("Inorder Traversal:");
// bst.inorder(); 

// console.log("Preorder Traversal:");
// bst.preorder();

// console.log("Deleting node 70...");
// bst.delete(70);

// console.log("Inorder after deletion:");
// bst.inorder(); 


//-------------------------trie--------------------------------------

// class TrieNode {
//   constructor() {
//     this.children = {};
//     this.isEndOfWord = false;
//   }
// }

// class Trie {
//   constructor() {
//     this.root = new TrieNode();
//   }

//   insert(word) {
//     let node = this.root;
//     for (let char of word) {
//       if (!node.children[char]) {
//         node.children[char] = new TrieNode();
//       }
//       node = node.children[char];
//     }
//     node.isEndOfWord = true;
//   }

//   suggest(prefix) {
//     let node = this.root;
//     for (let char of prefix) {
//       if (!node.children[char]) return [];
//       node = node.children[char];
//     }
//     return this._findWordsFromNode(node, prefix);
//   }

//   _findWordsFromNode(node, prefix) {
//     let results = [];
//     if (node.isEndOfWord) results.push(prefix);

//     for (let char in node.children) {
//       results.push(...this._findWordsFromNode(node.children[char], prefix + char));
//     }
//     return results;
//   }
// }

// const trie = new Trie();
// const workouts = ["fullbody", "flexibility", "fatburn", "focus", "formfix"];
// workouts.forEach(word => trie.insert(word));

// console.log(trie.suggest("f"));  
// console.log(trie.suggest("fl")); 
// console.log(trie.suggest("fo"));  







//================================================================================================

// //week 3---------
// What is an AVL Tree?
// What is a graph?
// What is the difference between a directed and an undirected graph?
// What is graph traversal?
// What is heapify?

// Practical
// Calculate the height of the tree – Not done
// Write a program for tree traversal – Not done

// Feedback:
// Your understanding of theory needs more depth, and practical implementation is missing.
// Revisit the basic concepts of trees and graphs.
// Write small practice programs to build confidence (e.g., in-order traversal, BFS, DFS).

// Focus on one problem at a time instead of trying to do everything at once.

//================================================================================================

// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class BinaryTree{
//     constructor(){
//         this.root=null
//     }
    
//     insert(value){
//         const node=new Node(value)
//         if(!this.root){
//             this.root=node
//             return
//         }
//         let queue=[this.root]
//         while(queue.length>0){
//             let curr=queue.shift()
//             if(!curr.left){
//                 curr.left=node
//                 break
//             }else{
//                 queue.push(curr.left)
//             }
//             if(!curr.right){
//                 curr.right=node
//                 break
//             }else{
//                 queue.push(curr.right)
//             }
//         }
//     }
    
    
    
//     print(){
//         if(!this.root){
//             return null
//         }
//         let queue=[this.root]
//         while(queue.length>0){
//             let curr=queue.shift()
//             console.log(curr.value)
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }
// }



// const tree=new BinaryTree()
// tree.insert(6)
// tree.insert(8)
// tree.insert(2)
// tree.insert(9)
// tree.insert(19)
// tree.insert(76)

// tree.print()






// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class BST{
//     constructor(){
//         this.root=null
//     }
    
//     insert(value){
//         let node=new Node(value)
//         if(!this.root){
//             this.root=node
//             return
//         }else{
//             let curr=this.root
//             while(true){
//                 if(curr.value>value){
//                     if(curr.left===null){
//                         curr.left=node
//                         break
//                     }else{
//                         curr=curr.left
//                     }
//                 }else if(curr.value<value){
//                     if(curr.right===null){
//                         curr.right=node
//                         break
//                     }else{
//                         curr=curr.right
//                     }
//                 }else{
//                     console.log)'You can't add duplicate values
//                     return
//                 }
//             }
//         }
//     }
    
//     inorder(root){
//         if(root){
//             this.inorder(root.left)
//             console.log(root.value)
//             this.inorder(root.right)
//         }
//     }
    
//     preorder(root){
//         if(root){
//             console.log(root.value)
//             this.preorder(root.left)
//             this.preorder(root.right)
//         }
//     }
    
//     postorder(root){
//         if(root){
//             this.postorder(root.left)
//             this.postorder(root.right)
//             console.log(root.value)
//         }
//     }
    
//     print(){
        
//     }
// }


//-------------------------------bt-------------------------------------------------------

// Binary Tree Node class
// class BinaryTree {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// Inorder Traversal: Left → Root → Right
// function inorder(node) {
//     if (node === null) return;
//     inorder(node.left);
//     console.log(node.val);
//     inorder(node.right);
// }

// Preorder Traversal: Root → Left → Right
// function preorder(node) {
//     if (node === null) return;
//     console.log(node.val);
//     preorder(node.left);
//     preorder(node.right);
// }

// Postorder Traversal: Left → Right → Root
// function postorder(node) {
//     if (node === null) return;
//     postorder(node.left);
//     postorder(node.right);
//     console.log(node.val);
// }



// const root = new BinaryTree(1);
// root.left = new BinaryTree(2);
// root.right = new BinaryTree(3);
// root.left.left = new BinaryTree(4);
// root.left.right = new BinaryTree(5);

// Traversals.
// console.log("Inorder Traversal :");
// inorder(root);       

// console.log("Preorder Traversal :");
// preorder(root);     

// console.log("Postorder Traversal :");
// postorder(root);    

//-----------------------------bst--------------------------------------

// class BSTNode{
//     constructor(val){
//         this.val=val
//         this.left=null
//         this.right=null
//     }

//     insert(node){
//         if(node<this.val){
//             if(this.left===null){
//                 this.left=new BSTNode(node)
//             }else{
//                 this.left.insert(node)
//             }
//             }else{
//                 if(this.right===null){
//                     this.right=new BSTNode(node)
//                 }else{
//                     this.right.insert(node)
//                 }
//             }
//         }
//     }


//     search(target){
//         if(this.val===target) return true
//         if(target<this.val&& this.left) return
        
//         this.left.search(target)
//         if(target>this.val && this.right) return
//         this.right.search(target)
//         return false
//     }
// }



// const bst=new BSTNode(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// console.log(bst.search(7));



//-----------------------------------graph---------------------------------------

// class Graph{
//     constructor(){
//         this.adjList={}
//     }

//     addVertex(vertex){
//         if(!this.addVertex[vertex]){
//             this.adjList[vertex]=[]
//         }
//     }
//     addEdge(v1,v2){
//         this.adjList[v1].push(v2)
//         this.adjList[v2].push(v1)
//     }
// }

// function dfs(graph,vertex,visited=new Set()){
//     if(!vertex || visited.has(vertex)) return
//     console.log(vertex);
//     visited.add(vertex)

//     for(let neighbor of graph.adjList[vertex]){
//         dfs(graph,neighbor,visited)
//     }
// }

// function bfs(graph,start){
//     const visited=new Set()
//     const queue=[start]

//     while (queue.length>0){
//         const vertex=queue.shift()

//         if(!visited.has(vertex)){
//             console.log(vertex);
//             visited.add(vertex)

//             for(let neighbor of graph.adjList[vertex]){
//                 if(!visited.has(neighbor)){
//                     queue.push(neighbor)
//                 }
//             }
//         }
//     }
// }

// const graph=new Graph()

// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addVertex('D')

// graph.addEdge('A','B')
// graph.addEdge('A','C')
// graph.addEdge('B','D')

// console.log(graph.adjList);

// dfs(graph,'A')
// bfs(graph,'A')

//-------------------------------Heap---------------------------------

class MaxHeap{
    constructor(){
        this.heap=[]
    }

    insert(value){
        this.heap.push(value)
        this.boubleUp()
    }
    boubleUp(){
        let index=this.heap.length-1

        while(index>0){
            let parent=Math.floor((index-1)/2)
            if(this.heap[index]<=this.heap[parent]) break

            [this.heap[index],this.heap[parent]]=[this.heap[parent],this.heap[index]]
            index=parent
        }
    }
    extractMax(){
        if(this.heap.length===0) return null
        if(this.heap.length===1) return this.heap.pop()
        this.sinkDown(0) 
        return max
    }

    sinkDown(index){
        const length=this.heap.length
        const value=this.heap[index]

        while(true){
            let left=2*index+1
            let right=2*index+2 
            let largest=index

            if(left<length && this.heap[left]>this.heap[largest]) largest=left
            if(right<length && this.heap[right]>this.heap[largest]) largest=right

            if(largest===index) break

            [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]]
            largest=right

            if(largest==index) break

            [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]]
            index=largest
        }
    }    
}

const heap=new MaxHeap()
heap.insert(50)
heap.insert(30)
heap.insert(40)
heap.insert(10)
heap.insert(20)

console.log(heap.heap);

console.log(heap.extractMax());
console.log(heap.heap);


//------------------------------------------------------------------------------

// class Graph{
//     constructor(){
//         this.adjList={}
//     }

//     addVertex(v){
//         if(!this.adjList[v])
//             this.adjList[v]=[]
//     }

//     addEdge(v1,v2){
//         this.addVertex(v1)
//         this.addVertex(v2)
//         this.adjList[v1].push(v2)
//         this.adjList[v2].push(v1)
//     }
// }


//---------------------------------------------------------------


