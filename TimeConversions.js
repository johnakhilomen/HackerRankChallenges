function timeConversion(s) {
    /*
     * Write your code here.
     */
    let timeOfDay = s.slice(-2);
    let timeArray = s.slice(0, -2).split(":");
    console.log(timeArray);
    if (timeOfDay === "AM" && timeArray[0] === "12") 
    {
        timeArray[0] = "00";
    } 
    else if (timeOfDay === "PM") 
    {
        timeArray[0] = (timeArray[0] % 12) + 12
    }  
    return timeArray.join(":");
}