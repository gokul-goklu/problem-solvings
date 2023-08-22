const arr = [8, 8, 6, 5, 4, -3, 2, 1];

function check(arr, k) {
  const positiveArr = [];
  const negativeArr = [];
  let klargest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positiveArr[arr[i]] = positiveArr[arr[i]] || 0;
      positiveArr[arr[i]] = positiveArr[arr[i]] + 1;
    }

    if (arr[i] < 0) {
      let curr = Math.abs(arr[i]);
      negativeArr[curr] = negativeArr[curr] || 0;
      negativeArr[curr] = negativeArr[curr] + 1;
    }
  }
  let target = 0;
  for (let i = positiveArr.length - 1; i >= 0; i--) {
    if (target < k) {
      if (positiveArr[i]) {
        //  console.log(i);
        target = target + 1;
      }
    }

    if (target === k) {
      klargest = i;
      break;
    }
  }

  if (target < k) {
    for (let i = 0; i < negativeArr.length; i++) {
      if (target < k) {
        if (negativeArr[i]) {
          // console.log(i);
          target = target + 1;
        }
      }
      if (target === k) {
        klargest = `-${i}`;
        break;
      }
    }
  }
  console.log(klargest);
}

check(arr, 1);
