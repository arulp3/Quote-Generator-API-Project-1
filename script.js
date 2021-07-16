
const btn = document.querySelector('.btn')

btn.addEventListener('click', function(){
  fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "5a0fac7954msh44654d1321758e8p1a8737jsn1d57f1a7bb15",
      "x-rapidapi-host": "quotes15.p.rapidapi.com"
    }
  })
  .then(res => res.json())
  .then(response => {
    console.log(response.originator.name);
    document.querySelector('.para').innerHTML = response.content
    document.querySelector('.name').innerHTML = response.originator.name
  })
  .catch(err => {
    console.error(err);
  });
})



