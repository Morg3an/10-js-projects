function calculateMaturityAmount() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("interestRate").value) / 100;
    const tenure = parseFloat(document.getElementById("tenure").value);
    const maturityAmount = principal * Math.pow((1 + rate), tenure);
    document.getElementById("result").innerText = "Maturity Amount: ₹" + maturityAmount.toFixed(2);
}

document.getElementById("calculateBtn").addEventListener("click", calculateMaturityAmount);