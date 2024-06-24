function Add(a: number, b: number): number 
{
    return a + b;
}

function FixedNumber(): number 
{
    return 0;
}

function StringToUpperCase(text: string, toChange?: boolean): string 
{
    if (toChange)         
        return text.toUpperCase();
     else 
        return text.toLowerCase();    
}