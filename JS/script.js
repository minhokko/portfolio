/* MENU HAMBURGUER*/

const menuHamburguer = document.querySelector(".menu-hamburguer");
menuHamburguer.addEventListener("click", () => {
  toggleMenu();
});

function toggleMenu() {
  const nav = document.querySelector(".nav-responsive");
  menuHamburguer.classList.toggle("change");

  if (menuHamburguer.classList.contains("change")) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}

const items = document.querySelectorAll(".contact-item");

/* MENU HAMBURGUER*/

/* ANIMAÇÃO CONTATO */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

items.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    observer.observe(item);
});
/* ANIMAÇÃO CONTATO */

/*ANIMAÇÃO ENTRANDO NA TELA PELA LATERAL */
const myObserver = new IntersectionObserver ( (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach ( (element) => myObserver.observe(element))

/*ANIMAÇÃO ENTRANDO NA TELA PELA LATERAL */

/* ANIMAÇÃO DE FOSCO E PARA O NORMAL */

const observar = new IntersectionObserver ( (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('mostra')
        } else {
            entry.target.classList.remove('mostra')
        }
    })
})

const elemento = document.querySelectorAll('.escondido')

elemento.forEach ( (elemento) => observar.observe(elemento))

/* ANIMAÇÃO DE FOSCO E PARA O NORMAL */