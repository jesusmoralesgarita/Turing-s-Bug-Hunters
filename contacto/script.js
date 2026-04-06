const miFormu = document.getElementById('contact-form');

miFormu.addEventListener('submit', function() {
    this.action = "https://formspree.io";
});