var color

function cambiarColor(){
  ele = document.getElementById('key')
  ele.style.backgroundColor = color;
}

document.addEventListener('keydown', function(event){
  if (event.key === 'a'){
    color = 'pink';
    cambiarColor(color);
  }
  else if (event.key === 's'){
    color = 'orange';
    cambiarColor(color);
  }
  else if (event.key === 'd'){
    color = 'skyblue';
    cambiarColor(color);
  }
})

function agregarElemento() {
  contenedor = document.querySelector('body'); 
  nuevoElemento = document.createElement('div');
  nuevoElemento.style.backgroundColor = color;
  nuevoElemento.style.width = "200px";
  nuevoElemento.style.height = "200px";
  nuevoElemento.style.marginTop = "2px"
  nuevoElemento.style.border = "solid 2px black"
  contenedor.appendChild(nuevoElemento);
  }

  document.addEventListener('keydown', function(event){
    if (event.key === 'q'){
      color = 'purple';
      agregarElemento(color);
    }
    else if (event.key === 'w'){
      color = 'grey';
      agregarElemento(color);
    }
    else if (event.key === 'e'){
      color = 'brown';
      agregarElemento(color);
    }
  })
  


