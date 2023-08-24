//String Ends with
//If the ending is equal to 0 return true

function solution(str, ending){
    if (ending.length == 0) 
      return true;
    else
      return str.substr(-(ending.length)) == ending;
  }