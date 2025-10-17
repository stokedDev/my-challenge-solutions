/* This is my quickSort solution for https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-quick-sort  */

function quickSort(array) {
  if(array.length <= 1){
    return array;
  }
  const pivot = array[0];
  const left = [];
  const right = [];
  for(let i = 1; i < array.length; i++){
    if(pivot > array[i]){
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}