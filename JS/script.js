document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.box-image img');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);
  
    images.forEach((image) => {
      image.addEventListener('click', function () {
        const modalImage = document.createElement('img');
        modalImage.src = this.src;
        modal.innerHTML = '';
        modal.appendChild(modalImage);
        modal.style.display = 'flex';
      });
    });
  
    modal.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  
    modal.querySelector('img').addEventListener('click', function (event) {
      event.stopPropagation();
    });
  });
  

//   BOTÃO

document.addEventListener('DOMContentLoaded', function () {
    const btnScrollToTop = document.getElementById('btnScrollToTop');
  
    // Adiciona um ouvinte de evento de rolagem para mostrar ou ocultar o botão
    window.addEventListener('scroll', function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScrollToTop.style.display = 'block';
      } else {
        btnScrollToTop.style.display = 'none';
      }
    });
  
    // Adiciona um ouvinte de evento de clique para rolar até o topo quando o botão é clicado
    btnScrollToTop.addEventListener('click', function () {
      document.body.scrollTop = 0; // Para navegadores da web
      document.documentElement.scrollTop = 0; // Para Internet Explorer, Firefox, Safari, etc.
    });
  });
  