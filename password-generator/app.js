const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';

const lengthElement = document.getElementById('length');
const includeUppercaseElement = document.getElementById('includeUppercase');
const includeLowercaseElement = document.getElementById('includeLowercase');
const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');

const generateBtn = document.getElementById('generateBtn');
const passwordElement = document.getElementById('password');

generateBtn.addEventListener('click', () => {
    const length = parseInt(lengthElement.value);
    const includeUppercase = includeUppercaseElement.checked;
    const includeLowercase = includeLowercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;

    passwordElement.value = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
});

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    let charset = lowerCaseLetters;
    if (includeUppercase) charset += upperCaseLetters;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += specialCharacters;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}