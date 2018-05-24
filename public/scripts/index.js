getQuote();

document.getElementById("quoteButton").addEventListener("click", () => {
  getQuote();
});

function getQuote() {
  var req = new XMLHttpRequest();
  req.open('GET', 'https://talaikis.com/api/quotes/random/', true);

  req.onload = function() {
    let data = JSON.parse(this.response);
    if (data.quote.length < 170) {
      let quote = '"' + data.quote + '"';
      let author = '- ' + data.author;

      document.getElementById("quote").innerHTML = quote;
      document.getElementById("author").innerHTML = author;
    } else {
      getQuote();
    }
  };

  req.send();
};

document.getElementById("tweet").addEventListener("click", () => {
  let sendQuote = "https://twitter.com/intent/tweet/?text=" +
      document.getElementById("quote").innerHTML +
      ' ' +
      document.getElementById("author").innerHTML;
  document.getElementById("tweet").setAttribute('href', sendQuote);
});
