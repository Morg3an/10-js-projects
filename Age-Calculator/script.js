const birthdateInput = document.getElementById("birthdate");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
    const birthdate = new Date(birthdateInput.value);
    const age = calculateAge(birthdate);
    resultDiv.textContent = `Result of Age: ${age} years`;
});

function calculateAge(birthdate) {
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
}
