
// //---------------------------reversing string using recursion--------------------

function reverseStr(str){
  if(str===''){
    return ''
  }

  return reverseStr(str.slice(1))+str[0]
}

console.log(reverseStr('hilo'));


//-------------------------------Palindrome or not--------------------------------

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));   


//---------------------string using recursion--------------------------------------


function firstNonRepeating(str) {
  const map = {};
  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let char of str) {
    if (map[char] === 1) return char;
  }
  return null;
}
console.log(firstNonRepeating("aabbcddde")); 


//-------------------------Remove character------------------------------------------
function removeChar(str, target) {
  if (str.length === 0) return "";
  const first = str[0] === target ? "" : str[0];
  return first + removeChar(str.slice(1), target);
}
console.log(removeChar("banana", "a"));

//-------------------------Count character-------------------------------------------
function countChar(str, char) {
  if (str.length === 0) return 0;
  return (str[0] === char ? 1 : 0) + countChar(str.slice(1), char);
}
console.log(countChar("mississippi", "s"));


//---------------------------recursion using Array-----------------------------------

function findMax(arr, index = 0) {
  if (index === arr.length - 1) return arr[index];
  return Math.max(arr[index], findMax(arr, index + 1));
}

//-------------------------------Sum of array----------------------------------------

function sumArray(arr, index = 0) {
  if (index === arr.length) return 0;
  return arr[index] + sumArray(arr, index + 1);
}

//-------------------------------Array sorted or not----------------------------------

// function isSorted(arr, index = 0) {
//   if (index === arr.length - 1) return true;
//   return arr[index] <= arr[index + 1] && isSorted(arr, index + 1);
// }
//-----------------------------Recursive fibonacci------------------------------------


function printFibonacciUnderLimit(a, b, limit) {
    if (a > limit) return;
    console.log(a);
    printFibonacciUnderLimit(b, a + b, limit);
}

printFibonacciUnderLimit(0, 1, 50);  
Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

//-------------------------Sum array---------------------------------------------------

function sumOfArray(arr,i=0,sum=0){
  if(arr.length===i){
    return sum
  }

  return sumOfArray(arr,i+1,sum+arr[i])
}

console.log(sumOfArray([12,4,5,3,1]))

//-------------------------------------------------------------------------------------

// let nums=[9,3,6,10,2,4]
// nums.sort((a,b)=>a-b)
// console.log(nums);
//------------------------------Two sum------------------------------------------------

let nums = [2, 7, 11, 15]
let tar=9

function twoSum(nums,tar){
    for (let i = 0; i < nums.length; i++) {
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===tar){
                return [i,j]
            }
        }    
    }
}

console.log(twoSum([2,6,12,8,3,9],11));

//-------------------------------------------------------------------------------------

// function twoSum(arr,target){
//     let left=0
//     let right=arr.length-1

//     while(left<right){
//         const sum=arr[left]+arr[right]
//         if(sum===target) return [left,right]
//         else if(sum<target) left++
//         else right--
//     }
// }

// console.log(twoSum([2,1,6,4,9,8,5],14));


//--------------------------Recursive binary search-----------------------------------------

function recursiveBinarySearch(arr,target,left=0,right=arr.length-1){
    if(left>right){
        return -1
    }
    const mid=Math.floor((left+right)/2)

    if(arr[mid]===target){
        return mid
    }
    if(arr[mid]>target){
        return recursiveBinarySearch(arr,target,left,mid-1)
    }else{
        return recursiveBinarySearch(arr,target,mid+1,right)
    }
}
const arr=[2,4,6,8,10]
const target=4

const result=recursiveBinarySearch(arr,target)
console.log(result!==-1 ?`Index : ${result}`:'Not found');


//-------------------------------Remove character--------------------------------------------


function removeCharRecursive(str,removeChar){
    if(str.length===0){
        return ''
    }

    let firstChar=str[0]
    let rest=removeCharRecursive(str.slice(1),removeChar)

    if(firstChar===removeChar){
        return rest
    }else{
        return firstChar+rest
    }    
}

console.log(removeCharRecursive('hello','l'));


//------------------------------subArray-problem--------------------------------------------

function printSubArray(arr){
    for(let i=0;i<arr.length;i++){
        for(j=i;j<arr.length;j++){
            console.log(arr.slice(i,j+1));
        }
    }
}

printSubArray([1,2,3,4,5])

//------------------------------ASCII------------------------------------------------------

// console.log("A".charCodeAt(0)); // Outputs: 65

//-----------------------------2D Array----------------------------------------------------

let matrix = [
  [1, 2, 3],   // Row 0
  [4, 5, 6],   // Row 1
  [7, 8, 9]    // Row 2
];


for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        console.log(matrix[i][j]);
    }
}

//-------->>>>>>>>>>----------------String end with DOt-------------------------------------------------

function strEndWith(str){
    return str.endsWith('.')? str:str+'.'
}
console.log(strEndWith('hii'));

//--------->>>>>>>>>>-------------Remove smallest number from an arrayy---------------------------------

function smallestRemove(arr){
     if(arr.length===0) return []

     let min=Math.min(...arr)
     let index=arr.indexOf(min)

     arr.splice(index,1)
     return arr
}

// console.log(smallestRemove([12,4,7,2,9,6]));

// function removeAllSmall(arr){
//     if(arr.length===0) return []

//     let min=Math.min(...arr)-
//     return arr.filter(num=>num!==min)
// }

// console.log(removeAllSmall([12,4,7,2,9,6,2]));

//------------------------Remove all Duplicates from array--------------------------------------------

function removeDupli(arr,index=0,seen=[]){
    if(index>=arr.length) return seen

    if(!seen.includes(arr[index])){
        seen.push(arr[index])
    }
    return removeDupli(arr,index+1,seen)

}

console.log(removeDupli([12,4,7,2,9,4,6,2]));



//-----------------------------Second largest from array----------------------------------------------

function secondLargestFind(arr,index=0,largest=-Infinity,Second=-Infinity){
    if(index>=arr.length) return Second

    let curr=arr[index]
    if(curr>largest){
        Second=largest
        largest=curr
    }else if(curr>Second && curr<largest){
        Second=curr
    }
    return secondLargestFind(arr,index+1,largest,Second)
}

console.log(secondLargestFind([10, 20, 30, 40]));

//-----------------------------Sum of even numbers----------------------------------------------------

function findEven(arr,index=0,sum=0){
    if(index>=arr.length) return sum

    if(arr[index]%2===0){
        sum+=arr[index]
    }
    return findEven(arr,index+1,sum)
}

console.log(findEven([1, 2, 3, 4, 5, 6]));


// function sumArr(arr,sum=0,index=0){
//     if(index>=arr.length) return sum

//     sum+=arr[index]
//     return sumArr(arr,sum,index+1)
// }
// console.log(sumArr([1, 2, 3, 4, 5, 6]))

//-------------------------------String palindrome --------------------------------------------------


  function isPalindrome(str) {
    if (str.length <= 1) {
      return true;
    }
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
    return isPalindrome(str.slice(1, str.length - 1));
  }
  
  console.log(isPalindrome("racecar")); 


//-------------------------------Delete character--------------------------------------------------
function deleteChar(str, index, delValue){
    if(str.length === index){
        return str;
    }


    if(str[index] === delValue){
        str = str.replace(delValue, "");
       return deleteChar(str, index, delValue);
    }

    return deleteChar(str, index + 1, delValue);
}

console.log(deleteChar("hello", 0, "l"));


//------------------------------------coundOccurence-----------------------------------------------

function coundOccurence(str,char,index=0){
    if(index===str.length){
        return 0
    }

    let count=str[index]===char?1 :0
    return count+ coundOccurence(str,char,index+1)
}

console.log(coundOccurence('acceddresc','c'));


