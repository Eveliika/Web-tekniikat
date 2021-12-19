let courses = [];

document.querySelector("button").addEventListener("click", addCourse);
document.getElementById("show").addEventListener("click", showAll);

function addCourse() {
    //Haetaan tiedot kentistä
    let cname = document.getElementById("course").value;
    let sNum = document.getElementById("student_num").value;
    //Luodaan tiedoista olio
    let course = {
        course_name: cname,
        student_num: sNum
    }
    //Lisätään olio taulukkoon
    courses.push(course);
    console.log(courses);
}

function showAll() {
    //Käydään läpi kaikki kurssit taulukosta
     courses.forEach( course => {
         //Luodaan kurssille list item
        let li = document.createElement("li");
        //Lisätään itemiin kurssin tiedot oliosta
        li.textContent = "Course " + course.course_name + " has " + course.student_num + " students registered.";
        //Lisätään list item domiin
        document.querySelector("ul").appendChild(li);
     });
}