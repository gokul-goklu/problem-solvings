const alterNumber = (num) => {
    for (let i = 0; i < num.length; i++) {
      if (num[i] == 1) {
        for (j = i + 1; j < num.length; j++) {
          let temp;
          if (num[j] == 0) {
            temp = num[i];
            num[i] = num[j];
            num[j] = temp;
          }
        }
      }
    }
    console.log(num);
  };
  
  const num = [0, 0, 1, 1, 0, 0, 0, 1];
  alterNumber(num);
  