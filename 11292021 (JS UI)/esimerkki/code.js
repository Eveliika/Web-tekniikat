let persons = [
    {
        fname: "Reima",
        age: 25
    },
    {
        fname: "Liisa",
        age: 17
    },
    {
        fname: "Sami",
        age: 14
    }
]


let children = persons.filter( p => p.age < 18 )