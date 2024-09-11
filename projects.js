// projects.js
document.addEventListener('DOMContentLoaded', function() {
    const topMenu = document.getElementById('top-menu');
    const links = document.querySelectorAll('#top-menu ul li a');
    const projectItems = document.querySelectorAll('.project-item');

    // Function to add or remove class based on scroll position
    function checkScroll() {
        if (window.scrollY > 50) {
            topMenu.classList.add('scrolled');
        } else {
            topMenu.classList.remove('scrolled');
        }
    }

    // Listen to scroll events
    window.addEventListener('scroll', checkScroll);

    // Smooth scrolling and active state for top menu links
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            // Remove active class from all project items
            projectItems.forEach(item => item.classList.remove('active'));

            // Show the selected project and hide others
            if (targetElement) {
                targetElement.classList.add('active');

                // Scroll to the project section
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Remove active class from all links
                links.forEach(link => link.classList.remove('active'));
                // Add active class to the clicked link
                this.classList.add('active');
            }
        });
    });
});
