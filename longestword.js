const longestword = (sentence) => {
  const arraylength = sentence.split(" ");
  let longest = " ";
  for (let i = 0; i < arraylength.length; i++) {
    const current = arraylength[i];
    if (current.length > longest.length) {
      longest = current;
    }
  }
  return longest;
};

const sentence = "Iam gokul from Coimbatore";
const length = longestword(sentence);
console.log(length);
