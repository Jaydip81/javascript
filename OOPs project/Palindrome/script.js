class StringManipulator {
  constructor(inputString) {
    this.inputString = inputString;
  }

  cleanString() {
    this.inputString = this.inputString
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase();
  }
}

class PalindromeChecker extends StringManipulator {
  constructor(inputString) {
    super(inputString);
  }

  isPalindrome() {
    this.cleanString();

    const reversedString = this.inputString.split("").reverse().join("");
    return this.inputString === reversedString;
  }
}

function checkPalindrome() {
  const userInput = document.getElementById("userInput").value;
  const palindromeChecker = new PalindromeChecker(userInput);

  palindromeChecker.cleanString();
  const isPalindrome = palindromeChecker.isPalindrome();

  const resultElement = document.getElementById("result");
  resultElement.textContent = `Is Palindrome: ${isPalindrome}`;
}