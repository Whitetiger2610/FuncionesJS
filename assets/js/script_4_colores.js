  const color1 = document.getElementById('color1')
  const color2 = document.getElementById('color2')
  const color3 = document.getElementById('color3')
  const color4 = document.getElementById('color4')

  function pintarNegro(e){
    e.target.style.backgroundColor = 'black';
  }

  color1.addEventListener("click", pintarNegro);
  color2.addEventListener("click", pintarNegro);
  color3.addEventListener("click", pintarNegro);
  color4.addEventListener("click", pintarNegro);
