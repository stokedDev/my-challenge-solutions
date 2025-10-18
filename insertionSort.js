/* This is my insertionSort solution for https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort */
function insertionSort(array) {
  for(let i = 1; i < array.length; i++){
    let currentValue = array[i];
    let j = i - 1;
    while(j >= 0 && array[j] > currentValue){
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currentValue;
  }
  return array;
}