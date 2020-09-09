function plusMinus(arr) {
    const negatives = arr.filter(x=>x<0).length/arr.length;
    const positives = arr.filter(x=>x>0).length/arr.length;
    const zeros = arr.filter(x=>x==0).length/arr.length;
    console.log(positives.toFixed(6));
    console.log(negatives.toFixed(6));
    console.log(zeros.toFixed(6));
}
