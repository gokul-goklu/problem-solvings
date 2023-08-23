const arr = "[{(})]";

const paranthesis = (arr) => {
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "[" || arr[i] == "{" || arr[i] == "(") arr2.push(arr[i]);
    else if (arr2.pop() !== mapping[arr[i]]) return false;
  }

  if (arr2.length == 0) return true;
};

console.log(paranthesis(arr));
