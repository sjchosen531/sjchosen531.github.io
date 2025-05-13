document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    // Add click event to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the section id from the href attribute
            const sectionId = this.getAttribute('href');
            
            // Hide all sections
            document.querySelectorAll('main section').forEach(section => {
                section.classList.remove('active-section');
            });
            
            // Show the selected section
            document.querySelector(sectionId).classList.add('active-section');
        });
    });
});
