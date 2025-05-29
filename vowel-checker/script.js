function checkVowels() {
    var inputText = document.getElementById("inputText").value;
    var vowelCount = 0;
    var resultElement = document.getElementById("result");

    inputText = inputText.toLowerCase(); // Convert input to lowercase for easier comparison

    for (var i = 0; i < inputText.length; i++) {
        var char = inputText.charAt(i);
        // Check if the character is a vowel
        if (isVowel(char)) {
            vowelCount++;
        }
    }

    /* // Display the result
    resultElement.textContent = "Total vowels found: " + vowelCount;
    */

    if (vowelCount > 0) {
        resultElement.textContent = "Total vowels found: " + vowelCount;
    } else {
        resultElement.textContent = "Result: No vowels found.";
    }
}

function isVowel(char) {
    var vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char);
}