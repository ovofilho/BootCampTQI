const cartas = document.querySelectorAll('.carta');
let hasFlippedCard = false;
let firstCard, secondCard;
let travaMesa = false;


function viraCarta() {

    if(travaMesa) return;
    if(this === firstCard) return;
   
    
    this.classList.add('flip');// ao contrario do toggle, ele só adiciona uma vez
    

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this; //recebe o elemento clicado para comparar com a segunda carta
       
        return;
    }
    secondCard = this;
    hasFlippedCard = false; //reseta a carta selecionada
    checkForMatch();
}

function checkForMatch(){
    
    if(firstCard.dataset.card === secondCard.dataset.card){//exatamente iguais

        disableCard();
        return
    }
    desviraCarta();
}

function disableCard(){
    firstCard.removeEventListener('click', viraCarta);
    secondCard.removeEventListener('click', viraCarta);
    zeraMesa();
}

function desviraCarta(){
    travaMesa = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        zeraMesa();
    }, 1500);
}

(function embaralhaCartas(){
    cartas.forEach((carta)=>{
        let posicao = Math.floor(Math.random() * 12); //sorteia um aleatorio dentro de 12 e arredonda pra baixo
        carta.style.order = posicao;
    });

})();//imediatly invocked function, função renderizada imediatamente ao ser carregada

function zeraMesa(){
    [hasFlippedCard,travaMesa] = [false, false];
    [firstCard, secondCard] = [null, null];

}
cartas.forEach((carta) => {
    carta.addEventListener('click',viraCarta)
});


