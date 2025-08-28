const ageInput = document.getElementById("ageInput");
const ageCheck = document.getElementById("ageCheck");
const ageResult = document.getElementById("ageResult");
let age;

ageCheck.onclick = function() {

age = ageInput.value;
age = Number(age)

if (age > 100) {
    ageResult.textContent = `You're literally ancient dawg.`;
}

else if (age >= 18) {
    ageResult.textContent = `Yeah, you're of Unc status.`;
}

else if (age == 18) {
    ageResult.textContent = `It sucks to be an Unc man.`;
}


else {
    ageResult.textContent = `You're a lil baby bro.`;

}   

// what if i want to compare the age value to a string?? :(

}   