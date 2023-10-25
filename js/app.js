if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../sw.js")
    .then(function (registration) {
      console.log("Service Worker registrado con éxito:", registration);
    })
    .catch(function (error) {
      console.log("Error al registrar el Service Worker:", error);
    });
}  



// Función para agregar opciones al segundo select
function addCityOptions(SelectPersonajes) {
  const SelectVersiones = document.getElementById('Versiones');
  SelectVersiones.innerHTML = ''; // Limpia el segundo select
  
  if (SelectPersonajes === 'bob') {
      const version = ['','BOB ESPONJA BEBE', 'BOB ESPONJA TRISTE','BOB ESPONJA CANTANTE'];
      version.forEach(function(versionName) {
          const option = document.createElement('option');
          option.value = versionName;
          option.text = versionName;
          SelectVersiones.appendChild(option);
      });
  } else if (SelectPersonajes === 'calamardo') {
      const version = ['', 'CALAMARDO CANTANTE','CALAMARDO BAILANDO','CALAMARDO PINTANDO'];
      version.forEach(function(versionName) {
          const option = document.createElement('option');
          option.value = versionName;
          option.text = versionName;
          SelectVersiones.appendChild(option);
      });
  }
  else if (SelectPersonajes === 'patricio') {
    const version = ['', 'PATRICIO DOCTOR','PATRICIO TRABAJANDO','PATRICIO RIENDO'];
    version.forEach(function(versionName) {
        const option = document.createElement('option');
        option.value = versionName;
        option.text = versionName;
        SelectVersiones.appendChild(option);
    });
}
else if (SelectPersonajes === 'arenita') {
  const version = ['', 'ARENITA KARATE','ARENITA BAQUERA','ARENITA SIN TRAJE'];
  version.forEach(function(versionName) {
      const option = document.createElement('option');
      option.value = versionName;
      option.text = versionName;
      SelectVersiones.appendChild(option);
  });
}
else if (SelectPersonajes === 'gary') {
  const version = ['', 'GARY SIN CAPARAZON','GARY COMIENDO','GARY ENAMORADO'];
  version.forEach(function(versionName) {
      const option = document.createElement('option');
      option.value = versionName;
      option.text = versionName;
      SelectVersiones.appendChild(option);
  });
}
}

document.addEventListener('DOMContentLoaded', function() {
  const Personajes = document.getElementById('Personajes');
  
  // Agrega las opciones iniciales al segundo select
  addCityOptions(Personajes.value);
  
  // Agrega un evento 'change' al primer select
  Personajes.addEventListener('change', function() {
      const SelectPersonajes = Personajes.value;
      // Agrega las opciones correspondientes al país seleccionado
      addCityOptions(SelectPersonajes);
  });
});

const nombrePersonajes = document.getElementById("Personajes");
const posterPersonaje = document.getElementById("posterPersonaje");
const nombre = document.getElementById("nombre");

nombrePersonajes.addEventListener(
  "change",
  function () {
    switch (this.value) {
      case "bob":
        nombre.innerHTML = "BOB ESPONJA";
        nombrev.innerHTML = "";
        posterPersonaje.src = "img/1.png";
        posterPersonaje2.src = "img/principal.png";
        posterPersonaje.addEventListener("click", function() {
          window.location.href = ("BOB ESPONJA.html");
        });
        break;
      case "calamardo":
        nombre.innerHTML = "CALAMARDO";
        nombrev.innerHTML = "";
        posterPersonaje.src = "img/2.png";
        posterPersonaje2.src = "img/principal.png";
        posterPersonaje.addEventListener("click", function() {
          window.location.href = ("CALAMARDO.html");
        });
        break;
      case "patricio":
        nombre.innerHTML = "PATRICIO";
        nombrev.innerHTML = "";
        posterPersonaje.src = "img/3.png";
        posterPersonaje2.src = "img/principal.png";
        posterPersonaje.addEventListener("click", function() {
          window.location.href = ("PATRICIO.html");
        });
        break;
        case "arenita":
          nombre.innerHTML = "ARENITA";
          nombrev.innerHTML = "";
          posterPersonaje.src = "img/6.png";
          posterPersonaje2.src = "img/principal.png";
          posterPersonaje.addEventListener("click", function() {
            window.location.href = ("ARENITA.html");
          });
      break;
      case "gary":
        nombre.innerHTML = "GARY";
        nombrev.innerHTML = "";
      posterPersonaje.src = "img/9.png";
      posterPersonaje2.src = "img/principal.png";
      posterPersonaje.addEventListener("click", function() {
        window.location.href = ("GARY.html");
      });
      break;
      default:
        posterPersonaje.src = "img/principal.png";
        break;
    }
  })






  const nombrev = document.getElementById("nombrev");
  const SelectVersiones = document.getElementById("Versiones");
  SelectVersiones.addEventListener("change", function () {
      const selectedVersion = SelectVersiones.value;
      switch (selectedVersion) {
          case "BOB ESPONJA BEBE":
              nombrev.innerHTML = "BOB ESPONJA BEBE";
              posterPersonaje2.src = "img/b1.jpg";
              posterPersonaje2.addEventListener("click", function() {
                window.location.href = ("BOB ESPONJA1.html");
              });
              break;
          case "BOB ESPONJA TRISTE":
            nombrev.innerHTML = "BOB ESPONJA TRISTE";
              posterPersonaje2.src = "img/b2.jpg";
              posterPersonaje2.addEventListener("click", function() {
                window.location.href = ("BOB ESPONJA2.html");
              });
              break;
          case "BOB ESPONJA CANTANTE":
            nombrev.innerHTML = "BOB ESPONJA CANTANTE";
              posterPersonaje2.src = "img/b3.webp";
              posterPersonaje2.addEventListener("click", function() {
                window.location.href = ("BOB ESPONJA3.html");
              });
              break;
          case "CALAMARDO CANTANTE":
            nombrev.innerHTML = "CALAMARDO CANTANTE";
              posterPersonaje2.src = "img/C1.png";
              posterPersonaje2.addEventListener("click", function() {
                window.location.href = ("CALAMARDO1.html");
              });
              break;
          case "CALAMARDO BAILANDO":
            nombrev.innerHTML = "CALAMARDO BAILANDO";
              posterPersonaje2.src = "img/c2.jpg";
              posterPersonaje2.addEventListener("click", function() {
                window.location.href = ("CALAMARDO2.html");
              });
              break;
          case "CALAMARDO PINTANDO":
            nombrev.innerHTML = "CALAMARDO PINTANDO";
          posterPersonaje2.src = "img/c3.webp";
          posterPersonaje2.addEventListener("click", function() {
            window.location.href = ("CALAMARDO3.html");
          });
          break;
          case "PATRICIO DOCTOR":
            nombrev.innerHTML = "PATRICIO DOCTOR";
              posterPersonaje2.src = "img/p1.jpg";
              posterPersonaje2.addEventListener("click", function() {
                window.location.href = ("PATRICIO1.html");
              });
              break;
          case "PATRICIO TRABAJANDO":
            nombrev.innerHTML = "PATRICIO TRABAJANDO";
              posterPersonaje2.src = "img/p2.jpg";
              posterPersonaje2.addEventListener("click", function() {
                window.location.href = ("PATRICIO2.html");
              });
              break;
          case "PATRICIO RIENDO":
            nombrev.innerHTML = "PATRICIO RIENDO";
          posterPersonaje2.src = "img/p3.jpg";
          posterPersonaje2.addEventListener("click", function() {
            window.location.href = ("PATRICIO3.html");
          });
          break;
          case "ARENITA KARATE":
            nombrev.innerHTML = "ARENITA KARATE";
              posterPersonaje2.src = "img/a1.webp";
              posterPersonaje2.addEventListener("click", function() {
                window.location.href = ("ARENITA1.html");
              });
              break;
          case "ARENITA BAQUERA":
            nombrev.innerHTML = "ARENITA BAQUERA";
              posterPersonaje2.src = "img/a2.webp";
              posterPersonaje2.addEventListener("click", function() {
                window.location.href = ("ARENITA2.html");
              });
              break;
          case "ARENITA SIN TRAJE":
            nombrev.innerHTML = "ARENITA SIN TRAJE";
              posterPersonaje2.src = "img/a3.jpg";
              posterPersonaje2.addEventListener("click", function() {
                window.location.href = ("ARENITA3.html");
              });
              break;
          case "GARY SIN CAPARAZON":
            nombrev.innerHTML = "GARY SIN CAPARAZON";
              posterPersonaje2.src = "img/g1.png";
              posterPersonaje2.addEventListener("click", function() {
                window.location.href = ("GARY1.html");
              });
              break;
          case "GARY COMIENDO":
            nombrev.innerHTML = "GARY COMIENDO";
              posterPersonaje2.src = "img/g2.jpg";
              posterPersonaje2.addEventListener("click", function() {
                window.location.href = ("GARY2.html");
              });
              break;
          case "GARY ENAMORADO":
            nombrev.innerHTML = "GARY ENAMORADO";
            posterPersonaje2.src = "img/g3.jpg";
            posterPersonaje2.addEventListener("click", function() {
              window.location.href = ("GARY3.html");
            });
            break;
              case "":
              posterPersonaje2.src = "img/principal.png";
              break;
      }});

