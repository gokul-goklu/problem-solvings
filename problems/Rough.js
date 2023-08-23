const arr = "[{()}]";

const paranthesis = (arr) => {
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "[" || arr[i] == "{" || arr[i] == "(") arr2.push(arr[i]);
    else if (arr2[arr2.length - 1] !== mapping[arr[i]]) arr2.pop();
  }

  if (arr2.length == 0) return true;
  if (arr2.length !== 0) return false;
};

console.log(paranthesis(arr));
