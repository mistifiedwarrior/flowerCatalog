const main = () => {
  const jar = document.querySelector('.img');
  jar.addEventListener('click', () => {
    setTimeout(() => {
      jar.classList.remove('hidden');
    }, 500);
    jar.classList.add('hidden');
    //what is toggleDiv ek variable
    // you haven't link this file to your main file
    //ohkk
  });
};
window.onload = main;
