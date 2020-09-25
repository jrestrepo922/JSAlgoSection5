
// ------------27 Requency Counters pattern -----------//
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false; 
//     }
//     arr1Obj = {};
//     arr2Obj = {};
//     for(let ele of arr1){
//         arr1Obj[ele] = (arr1Obj[ele] || 0 ) + 1
//     }
//     for(let ele of arr2){
//         arr2Obj[ele] = (arr2Obj[ele] || 0) + 1
//     }
//     for(let key in arr1Obj){
//         debugger
//         if(!(key**2 in arr2Obj)) return false
//         if(arr1Obj[key**2] !== arr2Obj[key]) return false 
//     }
//     return true; 

// }

// same([2,2,3], [9,4,4])









// ------------28 Frequency Counters: Anagram Challenge -------------//
// My approach
// function anagram(s1, s2){
//     if(s1.length === 0 && s2.length === 0) return true;
//     if(s1.length !== s2.length) return false; 
//     let s1Obj = {}; 
//     let s2Obj = {};
//     for(let char of s1){
//         s1Obj[char] = (s1Obj[char] || 0) + 1
//     }
//     for(let char of s2){
//         s2Obj[char] = (s2Obj[char] || 0) + 1
//     }
//     for(let key in s1Obj){
//         if(!(key in s2Obj)) return false; 
//         if(s1Obj[key] !== s2Obj[key]) return false; 
//     }
//     return true; 
// }


// let output = anagram('abcde', 'aebdc')


// Video Solution approach 

// function validAnagram(first, second){
//     if(first.length !== second.length) return false
    
//     const lookup = {}

//     for(let char of first){
//         lookup[char] ? lookup[char] += 1 : lookup[char] = 1 
//     }
//     // {a: 4, n: 1, g: 1, r: 1, m: 1} , second = "nagaram"
//     debugger
//     // for loop not enter because the length of an empty string is zero. causing it to reach the return value at the end. 
//     for(var i = 0; i < second.length; i++){
//         letter = second[i];
//         // 0 is a false value so if the frenquency is not the same 
//         if(!lookup[letter]){
//             return false
//         } else {
//             lookup[letter] -= 1
//         }
//     }
//     return true; 
    
// }




// let output = validAnagram('', '')









//-------- 30 Multiple Pointers Pattern ----------------// 
// function sumZero(arr){
//     // create the pointers 
//     let left  = 0; 
//     let right  = arr.length - 1; 

//     while(left < right){
//         if((arr[left] + arr[right]) === 0){
//             return [arr[left], arr[right]]
//         } else if((arr[left] + arr[right]) > 0){
//             right--
//         } else {
//             left++ 
//         }
//     }
//     return undefined

// }



// // let output = sumZero([-3, - 2, -1, 0, 1, 5, 6])
// let output = sumZero([1,2,3])









// 31 Multiple Pointers: Count Unique Values Challenge 
// TC O(N) because we are transversing an array 
// TC O(1) the size of the input does not increase the amount of memore use. 
// function  uniqueValues(arr){
//     if(arr.length === 0) return 0;
//     let count = 0; 
//     count++; 
//     for(var i = 0; i < (arr.length - 1); i++){
//         if(arr[i] !== arr[i+1]){
//             count++
//         }
//     }
//     return count
// }

// function uniqueValues(arr){
//     let arrSet = new Set(arr)
//     // to turn back the set into an array use 
//     let uniqueArray = Array.from(arrSet)
//     // return arrSet.size
//     return uniqueArray.length
// }

// function uniqueValues(arr){
//     if(arr.length === 0) return 0;
//     let i = 0;
//     let j = 1
//     while(j < arr.length){
//         if(arr[i] === arr[j]){
//             j++
//         } else {
//             i++
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1
// }



// let output = uniqueValues([1,1,2,3,3,4,5,6,6,7])









// 33 Sliding Window Pattern
// TC is O(n)
// SC is O(1)
// function maxSubArraySum(arr, n){
//     if(arr.length < num) return null;
//     let i = 0; 
//     let largestSum = 0;

//     // add the first 4 elements 
//     while(n > i){
//         largestSum += arr[i]
//         i++
//     }
//     let finalLargestSum = largestSum;
//     // now will slide adding the next elemnt and removing the first 
//     for(var j = 0; j <= (arr.length - n); j++){
//         largestSum = largestSum - arr[j] + arr[n + j]
//         if( largestSum > finalLargestSum){ // could also use Math.max
//             finalLargestSum = largestSum;
//         }
//     }
    
//     return finalLargestSum


// }

// let output = maxSubArraySum([1,2,5,2,8,1,5], 2)









//----------------- 34 Divide and Conquer  ----------------//
// TC O(log(n))
// SC o(1)
// function search(arr, n){
//      let start = 0
//      let end = arr.length - 1
//      let midIndex; 
//      while(start <= end){
//         debugger
//         midIndex = Math.floor((start + end)  / 2)
//         if(arr[midIndex] === n) {
//             return midIndex
//         } else if(arr[midIndex] < n){
//             start = midIndex + 1
//         } else if(arr[midIndex] > n){
//             end = midIndex - 1
//         }
//      }
//      return -1 
// }


// let output = search([1,2,3,4,5,6,7,8,9,10], 10)



// let answer = document.querySelector("#answer")
// answer.innerText = `${output}`