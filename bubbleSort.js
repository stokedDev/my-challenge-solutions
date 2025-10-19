/* This is my bubbleSort solution for https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort */

function bubbleSort(array) {
  for(let i = 0; i < array.length - 1; i++){
    for(let j = 0; j < array.length - 1 - i; j++){
      if(array[j] > array[j + 1]){
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}