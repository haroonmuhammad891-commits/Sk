document.addEventListener('DOMContentLoaded', () => {
    
    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('glass', 'shadow-lg');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('glass', 'shadow-lg');
            navbar.classList.add('bg-transparent');
        }
    });

    // --- Interactive Form Logic (AI Demo) ---
    const roadmapForm = document.getElementById('roadmap-form');
    const formContainer = document.getElementById('form-container');
    const dashboardContainer = document.getElementById('dashboard-container');
    const generateBtn = document.getElementById('generate-btn');
    const btnText = document.getElementById('btn-text');
    const loadingSpinner = document.getElementById('loading-spinner');

    if (roadmapForm) {
        roadmapForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show loading state
            btnText.textContent = "Analyzing Skills...";
            loadingSpinner.classList.remove('hidden');
            generateBtn.disabled = true;
            generateBtn.classList.add('opacity-80', 'cursor-not-allowed');

            // Simulate AI Processing Time
            setTimeout(() => {
                // Hide Form, Show Dashboard
                formContainer.classList.add('hidden');
                
                // Animate dashboard entrance
                dashboardContainer.classList.remove('hidden');
                dashboardContainer.classList.add('animate-fade-in-up');
                
                // Reset form button for future usage (if needed)
                btnText.textContent = "Generate My Income Plan";
                loadingSpinner.classList.add('hidden');
                generateBtn.disabled = false;
                generateBtn.classList.remove('opacity-80', 'cursor-not-allowed');
                roadmapForm.reset();

            }, 2000); // 2-second simulation
        });
    }

    // --- Reset Dashboard to Form ---
    const tryAgainBtn = document.getElementById('try-again-btn');
    if (tryAgainBtn) {
        tryAgainBtn.addEventListener('click', () => {
            dashboardContainer.classList.add('hidden');
            dashboardContainer.classList.remove('animate-fade-in-up');
            
            formContainer.classList.remove('hidden');
            formContainer.classList.add('animate-fade-in-up');
        });
    }

    // --- Intersection Observer for Scroll Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
        observer.observe(el);
    });

});
