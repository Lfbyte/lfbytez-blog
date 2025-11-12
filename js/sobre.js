
    var barraTopo   = document.getElementById('x1');
    var barraMeio   = document.getElementById('x2');
    var barraBaixo  = document.getElementById('x3');
    var divprofile = document.querySelector('div.profile');
  
    document.querySelector('div.profile').addEventListener('touchstart',function(e){
    
    if(!divprofile.classList.contains('rotate-effect')){

        divprofile.classList.add('rotate-effect')
        divprofile.classList.remove('rotate-effect-normal')

        
    }

    else if(divprofile.classList.contains('rotate-effect')) {
        
        divprofile.classList.add('rotate-effect-normal')
        divprofile.classList.remove('rotate-effect')
    }
})

      
  function animateX(){

      const isClosed = barraBaixo.style.display === "none";

      if (isClosed) {
                document.getElementsByClassName('nav-options')[0].style.display = "none"
          // Volta ao hamburguer normal
          barraBaixo.style.display = "block";
          barraTopo.style.transform = "rotate(0deg) translate(0, 0)";
          barraMeio.style.transform = "rotate(0deg) translate(0, 0)";
          // Mantém largura igual pra todas
          barraTopo.style.width = "60%";
          barraMeio.style.width = "60%";
  

      } else {
                  document.getElementsByClassName('nav-options')[0].style.display = "flex"
        // Transforma em X
          barraBaixo.style.display = "none";
          barraTopo.style.transform = "rotate(45deg) translate(7px, 6px)";
          barraMeio.style.transform = "rotate(-45deg) translate(5px, -5px)";
          barraTopo.style.width = "30px";
          barraMeio.style.width = "30px";

      }

}

function revealSobre(){
    document.querySelectorAll('div.container').forEach(e=> e.classList.add('reveal-sobre')) 
    document.querySelectorAll('footer').forEach(e=> e.classList.add('reveal-sobre')) 
  
}

      setTimeout(revealSobre, 100)
