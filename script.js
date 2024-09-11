// JavaScript for changing navigation style on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// JavaScript for changing background image and color on navigation link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to the clicked link
        this.classList.add('active');
        
        // Get the image URL from data attribute
        const imageUrl = this.getAttribute('data-image');
        
        // Change the background image and color
        document.body.style.backgroundImage = `url(${imageUrl})`;
        document.body.style.backgroundColor = '#f0f0f0'; // Reset background color
        
        // Scroll to the corresponding section
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
