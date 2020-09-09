function staircase(n) {
    for (let i = n; i >= 1; i--)
    {
        let someString = "";
        for (let j = i; j > 1; j--)
        {
            someString += " ";
        }
        for(let j = i; j <= n; j++)
        {
            someString +="#";
        }
        console.log(someString);
    }
}