/* This is my selectionSort solution for https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort */


function selectionSort(array) {
  for(let i = 0; i < array.length - 1; i++){
    let minIndex = i;
    for(let j = i + 1; j < array.length; j++){
      if(array[j] < array[minIndex]){
        minIndex = j;
      }
    }
    if(i !== minIndex){
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}