
  const toggleBtn = document.querySelector('[data-toggle="slidder"]');
  const slidder = document.querySelector('.slidder');

  toggleBtn.addEventListener('mouseover', () => {
    slidder.classList.add('active');
  });

  toggleBtn.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!slidder.matches(':hover')) {
        slidder.classList.remove('active');
      }
    }, 100);
  });

  slidder.addEventListener('mouseleave', () => {
    slidder.classList.remove('active');
  });

