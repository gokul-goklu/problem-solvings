const alterNumber = (num) => {
  let j = 0;

  for (let i = 0; i < num.length; i++) {
    let temp;
    if (num[i] == 0) {
      temp = num[i];
      num[i] = num[j];
      num[j] = temp;
      j++;
    }
  }
  console.log(num);
};

const num = [0, 1, 1, 1, 0, 0, 0, 1];
alterNumber(num);
