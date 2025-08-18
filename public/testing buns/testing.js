const age_input = document.getElementById("age_input");
const age_check = document.getElementById("age_check");
const age_result = document.getElementById("age_result");
let age;

age_check.onclick = function() {

age = age_input.value;
age = Number(age)

if (age > 100){
    resultElement.textcontent = `You're literally ancient dawg.`;
}

else if (age >= 18) {
    resultElement.textcontent = `Yeah, you're of Unc status.`;
}

else if (age == 18) {
    resultElement.textcontent = `It sucks to be an Unc man.`;
}

else (age < 18) {
    resultElement.textcontent = `You're a lil baby bro.`;
}

}   