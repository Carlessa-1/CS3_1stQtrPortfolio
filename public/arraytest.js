//a arrays are a set of lockers

grades = [75, 98, 99, 100] // arrays start from 0, 1, 2, 3
for (let i = 0; i < 4; i++) {
    console.log(grades[i]) 
}

// what does [i] mean? - print the grade depending on its array number then u increase the array number by 1 until its less than 4
// what does grades.length mean - used when u dunno how long the entire thing is, so u just do length ng buong array!!

for(var grade of grades) {
    console.log(grade)
}