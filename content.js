document.addEventListener('click', (e) => {
  const img = document.createElement('img');
  
  img.src = chrome.runtime.getURL('stitch.png');
  
  img.classList.add('stitch-click');
  
  // Posicionamento centralizado
  img.style.left = `${e.pageX - 25}px`;
  img.style.top = `${e.pageY - 25}px`;
  
  document.body.appendChild(img);

  // Remove do DOM após a animação acabar
  setTimeout(() => img.remove(), 1500);
});