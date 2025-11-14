document.addEventListener('DOMContentLoaded', function() {
    
    // Quote calculator functionality
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        const propertySize = quoteForm.querySelector('select');
        // Add-on checkboxes are no longer needed
        // const addOns = quoteForm.querySelectorAll('input[type="checkbox"]');
        const totalDisplay = document.querySelector('#quote .text-4xl');

        // Prices INCREASED to be all-inclusive
        const basePrices = {
            'studio': 200,
            '1bed': 250,
            '2bed': 320,
            '3bed': 390
        };

        // Add-on prices are no longer needed
        // const addOnPrices = { ... };

        function calculateTotal() {
            // 1. Get base price
            let total = basePrices[propertySize.value];
            
            // 2. Add-on logic is REMOVED
            
            // 3. Update the display
            totalDisplay.textContent = `$${total.toFixed(2)}`;
            totalDisplay.classList.add('animate-pop');
            setTimeout(() => totalDisplay.classList.remove('animate-pop'), 300);
        }

        propertySize.addEventListener('change', calculateTotal);
        // Event listener for add-ons is REMOVED

        // Initialize calculator
        calculateTotal();
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when a link is clicked
    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});
