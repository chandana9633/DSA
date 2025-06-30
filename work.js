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



