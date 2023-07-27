var botaoGET = document.querySelector("#botaoGET")
botaoGET.addEventListener("click", getHTTP);

function getHTTP() {
    var input = document.querySelector("#inputGET")

    fetch("https://api.quotable.io/quotes/random", {method: "GET"})
  .then((response) => {
    console.log(response)

    return response.json()
})
  .then((json) => {
    input.value = json[0]['content']
    console.log(json)
  });
}
