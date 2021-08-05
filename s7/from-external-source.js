document.getElementById('generate-psalm').addEventListener('click', getPsalm);

let chapter;

function getPsalm() {
  const data = null;

  const xhr = new XMLHttpRequest();
  // xhr.withCredentials = true;

  // xhr.addEventListener("readystatechange", function () {
  //   if (this.readyState === this.DONE) {
  //     console.log(this.responseText);
  //   }
  // });

  // REQUEST Type, Url, Asychronus (t/f)
  xhr.open("GET", `https://ajith-holy-bible.p.rapidapi.com/GetChapter?Book=Psalms&chapter=${getRandomInt(150)}`, true);

  xhr.setRequestHeader("x-rapidapi-key", "4c3fd7e65amsh233a617ec9edde7p178257jsn210a88807cb2");
  xhr.setRequestHeader("x-rapidapi-host", "ajith-holy-bible.p.rapidapi.com");
  xhr.onload = function () {
    if (this.status === 200) {
      const response = this.responseText;
      console.log(response);
    }
  }

  xhr.send(data);
}

function getRandomInt(max) {
  chapter = Math.floor(Math.random() * max)
  document.getElementById('psalm-prayer').innerText = `PSA Ch.${chapter}`

  return chapter;
}



