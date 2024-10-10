// responsiivisuus, navigointipalkin vaihtaminen

function navigointi() {
  let mobiililinkit = document.getElementById("mobiililinkit");

  if (mobiililinkit.style.display === "none") {
    mobiililinkit.style.display = "block";
  } else {
    mobiililinkit.style.display = "none";
  }
}

// sivun ulkoasun vaihtavat napit

let tumma = false;

function tummaTila() {
  document
    .getElementById("tyyli")
    .setAttribute("href", "/css/tummatyyli.css");
  document
    .getElementById("mobiilityyli")
    .setAttribute("href", "/css/tummamobiilityyli.css");
  document
    .getElementById("palkittyyli")
    .setAttribute("href", "/css/tummapalkittyyli.css");

  document.getElementById("logo").setAttribute("src", "../img/tummalogo.png");

  document.getElementById("tummanappi").style.display = "none";
  document.getElementById("valonappi").style.display = "block";

  tumma = true;
}

function valoTila() {
  document.getElementById("tyyli").setAttribute("href", "/css/tyyli.css");
  document
    .getElementById("mobiilityyli")
    .setAttribute("href", "/css/mobiilityyli.css");
  document
    .getElementById("palkittyyli")
    .setAttribute("href", "/css/palkittyyli.css");

  document.getElementById("logo").setAttribute("src", "/img/logo.png");

  document.getElementById("valonappi").style.display = "none";
  document.getElementById("tummanappi").style.display = "block";
}

function valoTarkistus() {
  if (tumma === true) {
    tummaTila();
  }
} 

window.addEventListener('load', function() {
  valoTarkistus();
});


// taitopalkkien animaatiot

function laske() {
  let hopottaja = document.getElementById("hopottaja");
  let pohtija = document.getElementById("pohtija");
  let taiteilija = document.getElementById("taiteilija");
  let holmoilija = document.getElementById("holmoilija");

  let palkkiteksti = document.querySelectorAll(".palkkiteksti");
  let palkki = document.querySelectorAll(".palkki");

  palkki.forEach(function (x) {
    x.style.transition = "none";
    x.style.width = "0";
  });

  palkkiteksti.forEach(function (x) {
    x.style.display = "none";
  });

  setTimeout(function () {
    palkki.forEach(function (x) {
      x.style.transition = "width 2s ease-in-out";
    });

    hopottaja.style.width = "99%";
    pohtija.style.width = "87%";
    taiteilija.style.width = "68%";
    holmoilija.style.width = "83%";

    setTimeout(function () {
      palkkiteksti.forEach(function (x) {
        x.style.display = "block";
      });
    }, 2000);
  }, 50);
}

// lataa ensimmäiset kuvat näkyville sivun ladatessa

let intiaslideIndex = 1;
let cheerslideIndex = 1;

window.addEventListener('load', function() {
  naytaIntiaSlide(1);
});

window.addEventListener('load', function() {
  naytaCheerSlide(1);
});

// intia-gallerian asetukset

function liikuIntiaSlide(n) {
  naytaIntiaSlide((intiaslideIndex += n));
}

function isoIntiaSlide(n) {
  naytaIntiaSlide((intiaslideIndex = n));
}

function naytaIntiaSlide(n) {
  let i;
  let intiaslidet = document.getElementsByClassName("slidet intia");
  let intiapisteet = document.getElementsByClassName("pikkukuva intia");

  if (n > intiaslidet.length) {
    intiaslideIndex = 1;
  }
  if (n < 1) {
    intiaslideIndex = intiaslidet.length;
  }

  for (i = 0; i < intiaslidet.length; i++) {
    intiaslidet[i].style.display = "none";
  }

  for (i = 0; i < intiapisteet.length; i++) {
    intiapisteet[i].className = intiapisteet[i].className.replace(
      " active",
      ""
    );
  }

  intiaslidet[intiaslideIndex - 1].style.display = "block";
  intiapisteet[intiaslideIndex - 1].className += " active";
}

// cheer-gallerian asetukset

function liikuCheerSlide(n) {
  naytaCheerSlide((cheerslideIndex += n));
}

function isoCheerSlide(n) {
  naytaCheerSlide((cheerslideIndex = n));
}

function naytaCheerSlide(n) {
  let i;
  let cheerslidet = document.getElementsByClassName("slidet cheer");
  let cheerpisteet = document.getElementsByClassName("pikkukuva cheer");

  if (n > cheerslidet.length) {
    cheerslideIndex = 1;
  }
  if (n < 1) {
    cheerslideIndex = cheerslidet.length;
  }

  for (i = 0; i < cheerslidet.length; i++) {
    cheerslidet[i].style.display = "none";
  }

  for (i = 0; i < cheerpisteet.length; i++) {
    cheerpisteet[i].className = cheerpisteet[i].className.replace(
      " active",
      ""
    );
  }

  cheerslidet[cheerslideIndex - 1].style.display = "block";
  cheerpisteet[cheerslideIndex - 1].className += " active";
}

// peligalleria

let pelislideIndex = 1;

window.addEventListener('load', function() {
  naytaPeliSlide(1);
});


function liikuPeliSlide(n) {
  naytaPeliSlide((pelislideIndex += n));
}

function naytaPeliSlide(n) {
  let i;
  let pelislidet = document.getElementsByClassName("slidet peli");

  if (n > pelislidet.length) {
    pelislideIndex = 1;
  }
  if (n < 1) {
    pelislideIndex = pelislidet.length;
  }

  for (i = 0; i < pelislidet.length; i++) {
    pelislidet[i].style.display = "none";
  }

  pelislidet[pelislideIndex - 1].style.display = "block";

}

