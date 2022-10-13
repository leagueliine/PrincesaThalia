 let aba = document.getElementsByClassName('aba');
 console.log(aba)
 let conteudo = document.getElementsByClassName('info');
 console.log(conteudo)

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
 
 /* const aba = document.getElementsByClassName('aba');
  console.log(aba)

  const conteudo = document.getElementsByClassName('info')
  console.log(conteudo)

  //aba[1].onclick = () => conteudo[0].classList.remove("selecionada") || conteudo[1].classList.add("selecionada");
  aba[1].onclick = () => aba[0].classList.remove("selecionada") || aba[1].classList.add("selecionada");


  aba[1].onclick = () => { 
    aba[1].classList.add("selecionada");
  if(aba){
    aba[0].classList.contains('selecionada')
    aba[0].classList.remove('selecionada')
  }};

    aba[0].onclick = () => { 
      aba[0].classList.add("selecionada");
    if(aba){
      aba[1].classList.contains('selecionada')
      aba[1].classList.remove('selecionada')
    };
  };
*/
