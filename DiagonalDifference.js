function diagonalDifference(arr) {
    // Write your code here
    var n = arr.length; 
    var sum1 = 0;
    var sum2 = 0;
    for(var i=0; i<n; i++){
     for(var j=0; j<n; j++){
         if(i === j) {
           sum1 += arr[i][j];
         }
         if(i + j === n - 1){
            sum2 += arr[i][j];
         }
      }
  }
   return Math.abs(sum1 - sum2);
}