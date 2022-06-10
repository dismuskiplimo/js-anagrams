module.exports = function (str, str1) {
  // remove invalid characters and convert to lowercase
  str = str.replace(/([^\w]|[_])+/g, "").toLowerCase();
  str1 = str1.replace(/([^\w]|[_])+/g, "").toLowerCase();

  // check if they are the same length
  if(str.length === str1.length){
    // arrays to hold individual characters
    let strArr = [];
    let str1Arr = [];

    for(let i = 0; i < str.length; i++){
      strArr.push(str[i]);
      str1Arr.push(str1[i]);
    }

    // sort the arrays
    strArr.sort();
    str1Arr.sort();

    for(let i = 0; i < strArr.length; i++){
      if(strArr[i] !== str1Arr[i]){
        return false;
      }
    }

    return true;

  }
  
  return false;
}
