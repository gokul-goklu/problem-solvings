const Longest = (text) => {
  const arrayTxt = text.split(" ");
  let long = " ";
  for (let i = 0; i < arrayTxt.length; i++) {
    if (arrayTxt[i].length > long.length) {
      long = arrayTxt[i];
    }
  }
  return long;
};

const text = "Hello am Virat is cricketer";
const result = Longest(text);
console.log(result, result.length);
