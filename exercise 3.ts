// function that adds two numbers
function Add(a: number, b: number): number 
{
    return a + b;
}
console.log( Add(6,2) );


//Function that returns a fixed number => 0
function FixedNumber(): number 
{
    return 0;
}
console.log( FixedNumber() );


function StringToUpperCase(text: string, toChange?: boolean): string 
{
    if (toChange)         
        return text.toUpperCase();
     else 
        return text.toLowerCase();    
}

console.log("iscapitalletters");
console.log("iscapitalletters", true);
