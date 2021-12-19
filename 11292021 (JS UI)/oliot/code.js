let person = {
    fname: "Minna",
    lname: "Virtanen",
    age: 32
}

person.length = 168;

let persons = [
    {
        fname: "Tiina",
        lname: "Karvonen",
        age: 25
    },
    {
        fname: "Lasse",
        lname: "Haverinen",
        age: 45
    },
    person
];

//persons.forEach( p => console.log(p.fname));

let copyPerson = person;
copyPerson.fname = "Reiska"

console.log(person);

function testi(p) {
    p.age = 50;
}

testi(person);
console.log(person.age);