class Calculator 
{
    // validate if the input is a number
    private ValidateNumber(value: any): boolean 
    {
        return typeof value === 'number' && !isNaN(value);
    }

    // addition
    Add(a: any, b: any): number | string 
    {
        if (this.ValidateNumber(a) && this.ValidateNumber(b))         
            return a + b;        
        else         
            return "Invalid input: Both values must be numbers.";        
    }

    // subtraction
    Subtract(a: any, b: any): number | string 
    {
        if (this.ValidateNumber(a) && this.ValidateNumber(b))         
            return a - b;        
        else         
            return "Invalid input: Both values must be numbers.";
        
    }

    // multiplication
    Multiply(a: any, b: any): number | string
    {
        if (this.ValidateNumber(a) && this.ValidateNumber(b))        
            return a * b;        
        else         
            return "Invalid input: Both values must be numbers.";        
    }

    // vision
    Divide(a: any, b: any): number | string 
    {
        if (this.ValidateNumber(a) && this.ValidateNumber(b)) 
        {
            if (b === 0)             
                return "Error!!! Division by zero is not allowed.";           

            return a / b;
        } 
        else         
            return "Invalid input; Both values must be numbers.";
        
    }
}

// Example usage:
const calculator = new Calculator();

console.log(calculator.Add(6, 2)); // Output: 8
console.log(calculator.Subtract(6, 2)); // Output: 4
console.log(calculator.Multiply(6, 2)); // Outputs: 12
console.log(calculator.Divide(6, 2)); // Outputs: 3

console.log(calculator.Add(6, "2")); // Outputs: Invalid input: Both values must be numbers.
console.log(calculator.Divide(2, 0)); // Outputs: Error: Division by zero is not allowed.
