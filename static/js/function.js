const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
	nav.classList.add("visible");

})

cerrar.addEventListener("click", () => {
	nav.classList.remove("visible");


})

function cambiarTitulo(texto) {
var titulo = document.getElementById("titulo");
titulo.textContent = texto;

titulo.classList.remove("skill-title");
titulo.classList.add("skill-title-hidden");

setTimeout(function() {
titulo.textContent = texto;
titulo.classList.remove("skill-title-hidden");
titulo.classList.add("skill-title");
}, 300);
}

function restaurarTitulo() {
var titulo = document.getElementById("titulo");
titulo.textContent = "<>";

}
