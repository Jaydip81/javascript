document.addEventListener("DOMContentLoaded", function () {
    let TimerDisplay = document.getElementById("Timer");
    let quoteDisplay = document.getElementById("quote");
  
    let Quotes = [
      "TI never thought life could be such a neat adventure. - Son goku",
      "If you don’t take risks, you can’t create a future. - Monkey D Luffy",
      "Push through the pain. Giving up hurts more. - Vegeta",
      "The strong should aid and protect the weak. Then, the weak will become strong, and they in turn will aid and protect those weaker than them. That is the law of nature. - Tanjiro Kamado",
      "Hard work is worthless for those that don’t believe in themselves. - Naruto Uzumaki",
      "Searching for someone to blame is such a pain. - Gojo",
      "The important thing is not how long you live. It’s what you accomplish with your life. - Grovyle",
      "You miss 100% of the shots you don’t take. - Wayne Gretzky",
      "Sometimes, we have to look beyond what we want and do what’s best. - Piccolo",
      "Helping other people is the best way to make up for your mistakes. - Kenshin Himura",
    ];
  
    let timeLeft = 30;
    let quoteIndex = 0;
  
   setInterval(() => {
      timeLeft--;
      TimerDisplay.textContent = timeLeft;
  
      if (timeLeft === 0) {
        quoteDisplay.textContent = Quotes[quoteIndex];
        quoteIndex = (quoteIndex + 1) % Quotes.length;
        timeLeft = 30;
      } else if (timeLeft % 30 === 0) {
        quoteDisplay.textContent = Quotes[quoteIndex];
        quoteIndex = (quoteIndex + 1) % Quotes.length;
      }
    }, 150);
  });
