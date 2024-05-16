document.addEventListener('DOMContentLoaded', function () {
  const headers = document.querySelectorAll('.footer-section h3');
  headers.forEach((header) => {
    header.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });
});
