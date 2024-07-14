// FontAwesome
const fontAwesomeScript = document.createElement('script');
fontAwesomeScript.src = "https://kit.fontawesome.com/0b3f1a6994.js";
fontAwesomeScript.crossOrigin = "anonymous";
document.head.appendChild(fontAwesomeScript);

// Bootstrap
const bootstrapScript = document.createElement('script');
bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
bootstrapScript.integrity = "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM";
bootstrapScript.crossOrigin = "anonymous";
document.head.appendChild(bootstrapScript);



document.addEventListener("DOMContentLoaded", function() {
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollingText = document.getElementById('scrolling-text');
    
    if (window.scrollY > 100) { // You can adjust the scroll position value as needed
        navbar.classList.add('scrolled');
        //scrollingText.style.display = 'block';
    } else {
        navbar.classList.remove('scrolled');
        //scrollingText.style.display = 'none';
    }
});
});
