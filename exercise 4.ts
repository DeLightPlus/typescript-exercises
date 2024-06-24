class Person
{
    name: string;
    age: number;
    private socialSecurityNumber: string;

    constructor(name: string, age: number, socialSecurityNumber: string)
    {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;
    }

    Name(): string 
    {
        return this.name;
    }

    Age(): number {
        return this.age;
    }

    // Optional: A method to get the social security number
    SocialSecurityNumber(): string {
        return this.socialSecurityNumber;
    }
}

const person = new Person("Kabelo", 26, "123-45-6789");
//console.log(person.getName()); 
//console.log(person.getAge());