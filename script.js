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
    console.clear()
    input.value = json[0]['content']
    console.log(json)
  });
}

var botao200 = document.querySelector("#botao200")
botao200.addEventListener("click", status200)

function status200() {
  fetch("https://api.quotable.io/quotes/random", {method: "GET"})
  .then((response) => {
    console.clear()
    console.log("Resposta do código 200")
    console.log(response)
})
}

var botao400 = document.querySelector("#botao400")
botao400.addEventListener("click", status400)

function status400() {
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=10&lon=24&appid=alalalala", {method: "GET"})
  .then((response) => {
    console.clear()
    console.log("Resposta do código 401")
    console.log(response)
})
}

var botao404 = document.querySelector("#botao404")
botao404.addEventListener("click", status404)

function status404() {
  fetch("https://api.quotable.io/quotes/random/lerolero", {method: "GET"})
  .then((response) => {
    console.clear()
    console.log("Resposta do código 404")
    console.log(response)
})
}