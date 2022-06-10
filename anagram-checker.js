module.exports = function (str, str1) {
  // write your code here
  str = str.replace(/[^\w]/g, "").toLowerCase();
  str1 = str1.replace(/[^\w]/g, "").toLowerCase()
  let hash = {};
  for(let i = 0; i < str.length; i++){
    let key = str[i];
    hash[key] = hash[key] + 1 || 1;
  }

  for(let i = 0; i < str1.length; i++){
    let key = str1[i];
    hash[key] -= 1;
  }

  let result = [];
  for(const e in hash){
    if(hash[e] > 0 && hash[e] != undefined){
      result.push(hash[e]);
      console.log(result);
    }
  }
  if(result.length === 0){
    return true;
  }else{
    return false;
  }
}
