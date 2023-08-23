const arr = [2, -3, 4, -5, 6];
let k = 4;

const Sorting = (arr, k) => {
  let result;
  let t = 0;
  const positive = [];
  const negative = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num >= 0) {
      positive[num] = (positive[num] || 0) + 1;
    }

    if (num < 0) {
      let curr = Math.abs(num);
      negative[curr] = (negative[curr] || 0) + 1;
    }
  }
  for (let i = positive.length - 1; i >= 0; i--) {
    if (k > t) {
      if (positive[i]) t = t + positive[i];
    }
    if (t == k) {
      result = i;
      break;
    }
  }
  if (k > t) {
    for (let i = 0; i < negative.length; i++) {
      if (k > t) {
        if (negative[i]) t = t + negative[i];
      }
      if (k == t) {
        result = -i;
        break;
      }
    }
  }
  console.log(result);
};

Sorting(arr, k);
