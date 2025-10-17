// this is my solution to the merge sort challenge at https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-merge-sort
function mergeSort(array) {
  if(array.length <= 1){
    return array;
  }
  function merge(left, right){
    const resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){
      if(left[leftIndex] < right[rightIndex]){
        resultArr.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArr.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return resultArr.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
  }
  let middle = Math.floor(array.length/2);
  let left = array.slice(0,middle);
  let right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}