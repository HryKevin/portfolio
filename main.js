///////////////////// Effet saisi au clavier dans le hero ///////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const typedElement = document.getElementById("typed-text");
  const cursor = document.querySelector(".cursor"); // Sélectionne l'élément du curseur
  const textItems = ["Développeur Front End ", "Développeur Back End "];
  const typingDelay = 90; // Délai entre chaque lettre lors de la saisie
  const erasingDelay = 75; // Délai entre chaque lettre lors de l'effacement
  const pauseDelay = 2000; // Délai avant de passer au texte suivant

  let currentItemIndex = 0;
  let currentTextIndex = 0;
  let isErasing = false;

  function typeText() {
    if (currentItemIndex < textItems.length) {
      const currentText = textItems[currentItemIndex];

      if (!isErasing && currentTextIndex <= currentText.length) {
        typedElement.textContent = currentText.substring(0, currentTextIndex);
        currentTextIndex++;
        setTimeout(typeText, typingDelay);
        // Affiche le curseur pendant la saisie
        cursor.style.opacity = "1";
      } else if (isErasing && currentTextIndex >= 0) {
        typedElement.textContent = currentText.substring(0, currentTextIndex);
        currentTextIndex--;
        setTimeout(typeText, erasingDelay);
        // Affiche le curseur pendant l'effacement
        cursor.style.opacity = "1";
      } else {
        if (!isErasing) {
          isErasing = true;
          setTimeout(typeText, pauseDelay);
        } else {
          currentItemIndex++;
          currentTextIndex = 0;
          isErasing = false;

          if (currentItemIndex === textItems.length) {
            currentItemIndex = 0;
          }

          setTimeout(typeText, 0);
        }
        // Cache le curseur après l'effacement complet
        cursor.style.opacity = "0";
      }
    }
  }

  typeText();
});

////////////////////////////////////////////////////////////////////////
// PAGE ABOUT

///////////////////// Effet saisi au clavier dans le hero ///////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const typedElement = document.getElementById("typed-text-about");
  const cursor = document.querySelector(".cursor"); // Sélectionne l'élément du curseur
  const textItems = ["À propos"];
  const typingDelay = 90; // Délai entre chaque lettre lors de la saisie
  const erasingDelay = 75; // Délai entre chaque lettre lors de l'effacement
  const pauseDelay = 2000; // Délai avant de passer au texte suivant

  let currentItemIndex = 0;
  let currentTextIndex = 0;
  let isErasing = false;

  function typeText() {
    if (currentItemIndex < textItems.length) {
      const currentText = textItems[currentItemIndex];

      if (!isErasing && currentTextIndex <= currentText.length) {
        typedElement.textContent = currentText.substring(0, currentTextIndex);
        currentTextIndex++;
        setTimeout(typeText, typingDelay);
        // Affiche le curseur pendant la saisie
        cursor.style.opacity = "1";
      } else if (isErasing && currentTextIndex >= 0) {
        typedElement.textContent = currentText.substring(0, currentTextIndex);
        currentTextIndex--;
        setTimeout(typeText, erasingDelay);
        // Affiche le curseur pendant l'effacement
        cursor.style.opacity = "1";
      } else {
        if (!isErasing) {
          isErasing = true;
          setTimeout(typeText, pauseDelay);
        } else {
          currentItemIndex++;
          currentTextIndex = 0;
          isErasing = false;

          if (currentItemIndex === textItems.length) {
            currentItemIndex = 0;
          }

          setTimeout(typeText, 0);
        }
        // Cache le curseur après l'effacement complet
        cursor.style.opacity = "0";
      }
    }
  }

  typeText();
});

////////////////////////////////////////////////////////////////////////
// PAGE CV

///////////////////// Effet saisi au clavier dans le hero ///////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const typedElement = document.getElementById("typed-text-cv");
  const cursor = document.querySelector(".cursor"); // Sélectionne l'élément du curseur
  const textItems = ["Curriculum Vitae"];
  const typingDelay = 90; // Délai entre chaque lettre lors de la saisie
  const erasingDelay = 75; // Délai entre chaque lettre lors de l'effacement
  const pauseDelay = 2000; // Délai avant de passer au texte suivant

  let currentItemIndex = 0;
  let currentTextIndex = 0;
  let isErasing = false;

  function typeText() {
    if (currentItemIndex < textItems.length) {
      const currentText = textItems[currentItemIndex];

      if (!isErasing && currentTextIndex <= currentText.length) {
        typedElement.textContent = currentText.substring(0, currentTextIndex);
        currentTextIndex++;
        setTimeout(typeText, typingDelay);
        // Affiche le curseur pendant la saisie
        cursor.style.opacity = "1";
      } else if (isErasing && currentTextIndex >= 0) {
        typedElement.textContent = currentText.substring(0, currentTextIndex);
        currentTextIndex--;
        setTimeout(typeText, erasingDelay);
        // Affiche le curseur pendant l'effacement
        cursor.style.opacity = "1";
      } else {
        if (!isErasing) {
          isErasing = true;
          setTimeout(typeText, pauseDelay);
        } else {
          currentItemIndex++;
          currentTextIndex = 0;
          isErasing = false;

          if (currentItemIndex === textItems.length) {
            currentItemIndex = 0;
          }

          setTimeout(typeText, 0);
        }
        // Cache le curseur après l'effacement complet
        cursor.style.opacity = "0";
      }
    }
  }

  typeText();
});

////////////////////////////////////////////////////////////////////////
// PAGE PROJET

///////////////////// Effet saisi au clavier dans le hero ///////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const typedElement = document.getElementById("typed-text-project");
  const cursor = document.querySelector(".cursor"); // Sélectionne l'élément du curseur
  const textItems = ["Projets"];
  const typingDelay = 90; // Délai entre chaque lettre lors de la saisie
  const erasingDelay = 75; // Délai entre chaque lettre lors de l'effacement
  const pauseDelay = 2000; // Délai avant de passer au texte suivant

  let currentItemIndex = 0;
  let currentTextIndex = 0;
  let isErasing = false;

  function typeText() {
    if (currentItemIndex < textItems.length) {
      const currentText = textItems[currentItemIndex];

      if (!isErasing && currentTextIndex <= currentText.length) {
        typedElement.textContent = currentText.substring(0, currentTextIndex);
        currentTextIndex++;
        setTimeout(typeText, typingDelay);
        // Affiche le curseur pendant la saisie
        cursor.style.opacity = "1";
      } else if (isErasing && currentTextIndex >= 0) {
        typedElement.textContent = currentText.substring(0, currentTextIndex);
        currentTextIndex--;
        setTimeout(typeText, erasingDelay);
        // Affiche le curseur pendant l'effacement
        cursor.style.opacity = "1";
      } else {
        if (!isErasing) {
          isErasing = true;
          setTimeout(typeText, pauseDelay);
        } else {
          currentItemIndex++;
          currentTextIndex = 0;
          isErasing = false;

          if (currentItemIndex === textItems.length) {
            currentItemIndex = 0;
          }

          setTimeout(typeText, 0);
        }
        // Cache le curseur après l'effacement complet
        cursor.style.opacity = "0";
      }
    }
  }

  typeText();
});

////////////////////////////////////////////////////////////////////////
// PAGE PROJET

///////////////////// Effet saisi au clavier dans le hero ///////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const typedElement = document.getElementById("typed-text-contact");
  const cursor = document.querySelector(".cursor"); // Sélectionne l'élément du curseur
  const textItems = ["Contact"];
  const typingDelay = 90; // Délai entre chaque lettre lors de la saisie
  const erasingDelay = 75; // Délai entre chaque lettre lors de l'effacement
  const pauseDelay = 2000; // Délai avant de passer au texte suivant

  let currentItemIndex = 0;
  let currentTextIndex = 0;
  let isErasing = false;

  function typeText() {
    if (currentItemIndex < textItems.length) {
      const currentText = textItems[currentItemIndex];

      if (!isErasing && currentTextIndex <= currentText.length) {
        typedElement.textContent = currentText.substring(0, currentTextIndex);
        currentTextIndex++;
        setTimeout(typeText, typingDelay);
        // Affiche le curseur pendant la saisie
        cursor.style.opacity = "1";
      } else if (isErasing && currentTextIndex >= 0) {
        typedElement.textContent = currentText.substring(0, currentTextIndex);
        currentTextIndex--;
        setTimeout(typeText, erasingDelay);
        // Affiche le curseur pendant l'effacement
        cursor.style.opacity = "1";
      } else {
        if (!isErasing) {
          isErasing = true;
          setTimeout(typeText, pauseDelay);
        } else {
          currentItemIndex++;
          currentTextIndex = 0;
          isErasing = false;

          if (currentItemIndex === textItems.length) {
            currentItemIndex = 0;
          }

          setTimeout(typeText, 0);
        }
        // Cache le curseur après l'effacement complet
        cursor.style.opacity = "0";
      }
    }
  }

  typeText();
});

///////////////////////////////////////////////////////////////////////////
// CLIQUE SUR HOME POUR AFFICHER LA NAV

// Sélection de l'icône "home" et de la modal
const homeIcon = document.getElementById("home-icon");
const modal = document.getElementById("myModal");

// Sélection du bouton de fermeture
const closeBtn = document.getElementsByClassName("close")[0];

// Ajout d'un écouteur d'événements sur le clic de l'icône "home"
homeIcon.addEventListener("click", function () {
  modal.style.display = "block";
});

// Ajout d'un écouteur d'événements sur le clic du bouton de fermeture
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Fermer la modal lorsque l'utilisateur clique en dehors de celle-ci
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
