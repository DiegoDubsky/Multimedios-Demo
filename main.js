//Parallax de la sección diseño
const designBack = document.getElementById("design_Back");
const designLetters = document.getElementById("imgDesignLetters");
const imgNavLogo = document.getElementById("imgNavLogo");
const navBar = document.getElementById("navbar");
const subLogo = document.getElementById("sublogo");

//Comportamientos cuando se hace scroll
window.addEventListener("scroll", function () {
   let offsetY = window.pageYOffset;
   //Cambiamos la posición del background
   //designBack.style.backgroundPositionY=100-offsetY*0.9+"px";
   //Reasignamos el alto del div background, sino no se ajusta bien
   designBack.style.height = designLetters.offsetHeight - 5 + "px";
   designBack.style.width = designLetters.offsetWidth - 5 + "px";

   //Achicamos el header si pasa los 50px
   let isMin = offsetY > window.visualViewport.height;

/*    imgNavLogo.setAttribute("min", isMin);
   navBar.setAttribute("min", isMin);
   subLogo.setAttribute("min", isMin); */
});

//Plugin de parallax, actualmente no lo estamos usando
/* var rellax = new Rellax('.rellax'); */
