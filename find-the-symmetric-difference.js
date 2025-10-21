/* This is my solution to the challenge at https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference */

function sym(...args){
  function getSymmetricDifference(arrA, arrB){
  const result = [];
  const setA = new Set(arrA);
  const setB = new Set(arrB);
  for(const element of setA){
    if(!setB.has(element)){
      result.push(element);
    }
  }
  for(const element of setB){
    if(!setA.has(element)){
      result.push(element);
    }
  }
  return result;
  }
  return args.reduce(getSymmetricDifference).sort((a,b)=> a - b);
}