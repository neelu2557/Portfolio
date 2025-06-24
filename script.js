// Scroll animation for project cards
document.addEventListener("DOMContentLoaded", () => {
    const fadeIns = document.querySelectorAll('.fade-in');

    const fadeInOnScroll = () => {
        fadeIns.forEach((element) => {
            const elementPos = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (elementPos < screenHeight - 100) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Run on load too
});
function handleSubmit(event) {  
    event.preventDefault(); // Prevent the default form submission  

    // Show thank you message  
    document.getElementById('thankYou').classList.remove('hidden');  

    // Optionally, reset the form  
    document.getElementById('contactForm').reset();  

    // Optional: Hide the thank you message after a few seconds  
    setTimeout(() => {  
        document.getElementById('thankYou').classList.add('hidden');  
    }, 5000);  
}  
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});
