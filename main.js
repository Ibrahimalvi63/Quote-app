const url = "https://api.api-ninjas.com/v1/quotes";
const apiKey = "qiv6ie/NAIPCEGEMqAEc4w==qFerhhK17TzVPETe";

async function getQuote() {
  let response = await fetch(url, {
    method: "GET",
    headers: { "x-api-key": apiKey },
  });
  let data = await response.json();

  const quoteEl = document.querySelector("#quote");
  const authorEl = document.querySelector("#author");
  quoteEl.innerHTML = data[0].quote;
  authorEl.innerHTML = data[0].author;
  console.log(quote, author);
}

getQuote();

function tweet() {
  window.open(
    `https://twitter.com/intent/tweet?text=${quoteEl.innerHTML} ---by ${authorEl.innerHTML}`,
    "Tweet window",
    "width=600px, height=300px"
  );
}
