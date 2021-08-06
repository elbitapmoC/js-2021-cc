document.getElementById('generate-random-verse').addEventListener('click', getScripture)
document.addEventListener("DOMContentLoaded", function () {
  getScripture();
});

const scripture = {}

function getScripture() {
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      let response = JSON.parse(this.responseText);
      let minifiedResponse = (response.results[0]);
      console.log(minifiedResponse);
    }
  });

  xhr.open("GET", "https://uncovered-treasure-v1.p.rapidapi.com/random");
  xhr.setRequestHeader("x-rapidapi-key", "4c3fd7e65amsh233a617ec9edde7p178257jsn210a88807cb2");
  xhr.setRequestHeader("x-rapidapi-host", "uncovered-treasure-v1.p.rapidapi.com");

  xhr.send(data);
}
