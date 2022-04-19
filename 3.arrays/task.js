
function compareArrays(arr1, arr2) {
  
  return result = arr1.every((item, index) => arr2[index] === item && arr1.length === arr2.length);
    
}

function advancedFilter(arr) {
  let resultArr = arr.filter((item) => item > 0 && item % 3 === 0).map(item => item*10)
  return resultArr; // array
}
