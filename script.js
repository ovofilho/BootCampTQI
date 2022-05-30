const cartas = document.querySelectorAll('.carta');

function viraCarta() {
    this.classList.toggle('flip');
}

alert(cartas.length);

cartas.forEach((carta) => {
    carta.addEventListener('click',viraCarta)
});
