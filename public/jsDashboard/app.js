//evento que al dar click en las tres lineas mostrara y ocultara el side-menu

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});



//formulario pantalla
const form = document.getElementById("form");

const mostrarDashboard = document.getElementById("mostrarDashboard");

const hideDashboard = document.getElementById("dashboard") //oculatar dashboard

mostrarDashboard.addEventListener("click", function mostrarFormulario() {
  hideDashboard.style.display = "block";

  form.style.display = "none";
  
})



