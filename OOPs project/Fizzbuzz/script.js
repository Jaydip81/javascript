class FizzBuzz {
    generateFizzBuzz(start, end) {
      let results = [];

      for (let num = start; num <= end; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
          results.push("FizzBuzz");
        } else if (num % 3 === 0) {
          results.push("Fizz");
        } else if (num % 5 === 0) {
          results.push("Buzz");
        } else {
          results.push(num.toString());
        }
      }

      return results;
    }
  }

  function Fizz_Buzz() {
    const rangeInput = document.getElementById("range").value;
    const [startStr, endStr] = rangeInput
      .split("-")
      .map((str) => parseInt(str.trim()));
    const start = isNaN(startStr) ? 1 : startStr;
    const end = isNaN(endStr) ? 100 : endStr;

    if (start > end) {
      alert(
        "Invalid range: Start number cannot be greater than end number."
      );
      return;
    }

    const fizzBuzz = new FizzBuzz();
    const results = fizzBuzz.generateFizzBuzz(start, end);

    const resultsContainer = document.getElementById("fizzbuzz-results");
    resultsContainer.innerHTML = ""; 

    results.forEach((result) => {
      const resultItem = document.createElement("div");
      resultItem.classList.add("result-item");
      resultItem.textContent = result;
      resultsContainer.appendChild(resultItem);
    });
  }