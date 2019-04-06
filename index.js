function getQuote() {
  console.log("get quote");
  fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      const titleBox = document.getElementById("randomQuote");
      titleBox.innerHTML = `${data[0].quote}`;
      document.getElementById("simpsonImage").src = `${data[0].image}`;
      document.getElementById("character").innerHTML = `${data[0].character}`;
    });
}

getQuote();
