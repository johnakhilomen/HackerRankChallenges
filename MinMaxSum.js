function miniMaxSum(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    let sumOfEquals = 0;
    if(min == max)
    {
      for (let i = 1; i < arr.length; i++)
      {
        sumOfEquals += arr[i];
      }
      console.log(`${sumOfEquals} ${sumOfEquals}`);
    }
    else
    {
        let minArr = arr.filter(x=> x!= min);
        let maxArr = arr.filter(x=> x!= max);
        let maxSum = minArr.reduce( (accumulator, currentValue) => accumulator + currentValue);
        let minSum = maxArr.reduce((accumulator, currentValue)=> accumulator + currentValue);
    console.log(`${minSum} ${maxSum}`);
    }
    
    
    }