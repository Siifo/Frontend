const 
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  $submit = document.getElementById("button"),
  $username = document.getElementById("username"),
  $password = document.getElementById("password")
  pwShowHide = document.querySelectorAll(".pw_hide");

// formOpenBtn.addEventListener("click", () => home.classList.add("show"));
// formCloseBtn.addEventListener("click", () => home.classList.remove("show"));


//mostrar contraseña
pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("bi bi-eye", "bi bi-eye-slash");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("bi bi-eye-slash", "bi bi-eye");
    }
  });
});

//registrarse
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

//loguearse
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

// Evento al hacer click en el boton ingresar del logueo
// addEventListener("click", (e)=> {
//   if(e.target === $submit){
//     if($username.value != "" && $password.value != ""){
//       e.preventDefault();
//       window.location.href = "./administrador";
//     }
//   }
// })