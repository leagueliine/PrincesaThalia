 let aba = document.getElementsByClassName('aba');
 let conteudo = document.getElementsByClassName('info');
 let texto = document.getElementById('spanTitulo');

  let selectSession0 = function(){
    aba[1].classList.add('selecionada')
    conteudo[1].classList.add('selecionada')
    if(aba){
      aba[0].classList.contains('selecionada') &&
      conteudo[0].classList.contains('selecionada')
    }
    aba[0].classList.remove('selecionada')
    conteudo[0].classList.remove('selecionada')
  };

  let selectSession1 = function(){
    aba[0].classList.add('selecionada')
    conteudo[0].classList.add('selecionada')
    if(aba){
      aba[1].classList.contains('selecionada') &&
      conteudo[1].classList.contains('selecionada')
    }
    aba[1].classList.remove('selecionada')
    conteudo[1].classList.remove('selecionada')
  };

  aba[1].addEventListener('click', function(){
    selectSession0();
  });
 
  aba[0].addEventListener('click', function(){
    selectSession1();
  });
 
 let typeWriter = function (elemento) {
  const textArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textArray.forEach((letra, i) => {
    setTimeout( () => elemento.innerHTML += letra, 30 * i)
  });
 };

 typeWriter(texto)

 const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});
