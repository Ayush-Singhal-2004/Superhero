let darkMode = false;
var characterId = 0;
document.getElementById("my-dark-mode-btn").addEventListener("click", () => {
  if (!darkMode) {
    let navElem = document.getElementById("my-navbar");
    navElem.classList.add("text-bg-dark");
    let darkModeBtn = document.getElementById("my-dark-mode-btn");
    darkModeBtn.classList.add("text-bg-light");
    document.getElementById("myNavHead").style.color = "white";
    document.querySelector("body").classList.add("text-bg-dark");
    document.getElementById("my-toggle-icon").classList.add("text-bg-secondary");
    document.getElementById("my-nav-pad-id").style.paddingBottom = "3px";
    document.getElementById("my-form").style.paddingBottom = "5px";
    darkMode = true;
  } else {
    let navElem = document.getElementById("my-navbar");
    navElem.classList.remove("text-bg-dark");
    let darkModeBtn = document.getElementById("my-dark-mode-btn");
    darkModeBtn.classList.remove("text-bg-light");
    document.getElementById("myNavHead").style.color = "black";
    document.querySelector("body").classList.remove("text-bg-dark");
    document.getElementById("my-toggle-icon").classList.remove("text-bg-secondary");
    document.getElementById("my-nav-pad-id").style.paddingBottom = "8px";
    document.getElementById("my-form").style.paddingBottom = "0";
    darkMode = false;
  }
});

document.getElementById("search-btn").addEventListener("click", () => {
  let searchVal = document.getElementById("search-bar").value.toLowerCase().trim();
  if(searchVal == "ayush" || searchVal == "ayush singhal" || searchVal == "ayushsinghal")
  {
    document.write("Developed by : Ayush Singhal");
  }
  else if(searchVal.length > 0)
  {
    let promise = fetch(`https://www.superheroapi.com/api.php/122101309448066113/search/${searchVal}`);
    promise.then((value) => {
      return value.json();
    }).then((value) => {
      console.log(value);
      document.getElementById("character-img").src = value.results[0].image.url;
      let charTitle = document.getElementById("character-title");
      charTitle.innerHTML = document.getElementById("search-bar").value.toUpperCase();
      let biographyObj = value.results[0].biography;
      document.getElementById("character-name").innerHTML = "Name : " + biographyObj["full-name"];
      characterId = value.results[0].id;
    }).catch((err) => {
      document.getElementById("err-mssg").style.display = "flex";
      document.getElementById("err-mssg-box").innerHTML = "Invalid character has been searched!!";
    });
  }
  else
  {
    document.getElementById("err-mssg").style.display = "flex";
    document.getElementById("err-mssg-box").innerHTML = "Character name cannot be of 0 length!!";
  }
});

document.getElementById("err-mssg-btn").addEventListener("click", () => {
  document.getElementById("err-mssg").style.display = "none";
});

document.getElementById("left-btn").addEventListener("click", () => {
  characterId--;
  let promise = fetch(`https://www.superheroapi.com/api.php/122101309448066113/${characterId}`);
  promise.then((value) => {
    return value.json();
  }).then((value) => {
      console.log(value);
      document.getElementById("character-img").src = value.image.url;
      document.getElementById("character-title").innerHTML = value['name'];
      document.getElementById("character-name").innerHTML = "Name : " + value.biography["full-name"];
  });
});

document.getElementById("right-btn").addEventListener("click", () => {
  characterId++;
  let promise = fetch(`https://www.superheroapi.com/api.php/122101309448066113/${characterId}`);
  promise.then((value) => {
    return value.json();
  }).then((value) => {
      console.log(value);
      document.getElementById("character-img").src = value.image.url;
      document.getElementById("character-title").innerHTML = value['name'];
      document.getElementById("character-name").innerHTML = "Name : " + value.biography["full-name"];
  });
});