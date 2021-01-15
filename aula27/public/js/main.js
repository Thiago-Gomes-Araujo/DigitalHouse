console.log('Hello Word')

/* let nome = prompt('Qual seu nome?');
console.log('Olá caro Usuário ' + nome); */

/* let idade = confirm('Maior de idade');
if(!idade){
    window.location.reload();
}
 */

 let logo = document.querySelector('.logo');
 logo.addEventListener('mouseover', function(){
   logo.style.transform = 'rotate(180deg)'
 });

 logo.addEventListener('mouseout', function(){
  logo.style.transform = 'rotate(0deg)'
})

let header = document.querySelector('.navbar');

window.onscroll = function fixandoHeard(){
  if(window.pageYOffset > 0){
    header.style.opacity = '1';
  } else{
    header.style.opacity = '0.7';
  }
}

let cards = document.querySelectorAll('.card-deck img');

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('mouseover',function(){
    this.classList.add('grow');
    this.classList.remove('shrink');
  })

  cards[i].addEventListener('mouseout',function(){
    this.classList.remove('grow');
    this.classList.add('shrink');
  })
}
