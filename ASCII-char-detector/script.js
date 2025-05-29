function detectCharacter() {
    const input = document.getElementById('input-text').value;
    const result = document.getElementById('result');

    // Check if it is a Unicode or an ASCII Character
    if (isASCII(input)) {
        result.textContent = 'The input contains an ASCII character.';
    } else if (isUnicode(input)) {
        result.textContent = 'The input contains a Unicode character.';
    } else {
        result.textContent = 'Please enter a character.';
    }
}

function isASCII(char) {
    // Check if the character is within the ASCII range
    return char.charCodeAt(0) >= 0 && char.charCodeAt(0) <= 127;
}

function isUnicode(char) {
    // Check if the character is outside the ASCII range
    return char.charCodeAt(0) > 127;
}