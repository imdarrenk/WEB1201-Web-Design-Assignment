console.log("Contacts.js is loaded");

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault(); 
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
  
      const phonePattern = /^\d{7,15}$/;
  
      if (!name) {
        alert('Please enter your name.');
        return;
      }
  
      if (!email) {
        alert('Please enter your email.');
        return;
      }
  
      if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      if (!phone) {
        alert('Please enter your phone number.');
        return;
      }
  
      if (!phonePattern.test(phone)) {
        alert('Phone number must be 7 to 15 digits.');
        return;
      }
  
      alert('Form submitted successfully!');
      this.reset();
    });
});
//this is the script for mobile menu toggle
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

document.querySelectorAll('.mobile-nav-menu a, .mobile-auth-buttons a').forEach(link => {
    link.addEventListener('click', () => {
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

