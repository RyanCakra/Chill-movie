document.addEventListener('DOMContentLoaded', function () {
  const headers = document.querySelectorAll('.footer-section h3');
  headers.forEach((header) => {
    header.addEventListener('click', function () {
      this.classList.toggle('active');
      const icon = this.querySelector('.fas');
      if (this.classList.contains('active')) {
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-down');
      } else {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-right');
      }
    });
  });
});

// function togglePasswordVisibility() {
//   const passwordField = document.getElementById('password');
//   const toggleIcon = document.querySelector('.toggle-password');
//   if (passwordField.type === 'password') {
//     passwordField.type = 'text';
//     toggleIcon.classList.remove('fa-eye-slash');
//     toggleIcon.classList.add('fa-eye');
//   } else {
//     passwordField.type = 'password';
//     toggleIcon.classList.remove('fa-eye');
//     toggleIcon.classList.add('fa-eye-slash');
//   }
// }

document.addEventListener('DOMContentLoaded', function () {
  const toggleIcons = document.querySelectorAll('.toggle-password');

  toggleIcons.forEach((icon) => {
    icon.addEventListener('click', function () {
      const input = this.previousElementSibling;
      if (input.type === 'password') {
        input.type = 'text';
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
      } else {
        input.type = 'password';
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
      }
    });
  });
});
