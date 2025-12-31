// ===================================
// THE URBAN BULLETIN - ANIMATIONS & INTERACTIONS
// ===================================

const { animate, stagger, scroll, inView } = Motion;

document.addEventListener('DOMContentLoaded', () => {
    // Initialize countdown
    initCountdown();

    // Initialize Motion animations
    initMotionAnimations();

    // Initialize scroll-triggered animations
    initScrollAnimations();

    // Initialize hover effects
    initHoverEffects();

    // Initialize accordion
    initAccordion();

    // Initialize video player
    initVideoPlayer();

    // Initialize ticket card interactions
    initTicketCards();

    // Initialize button micro-interactions
    initButtonEffects();

    // Initialize magnetic cursor effect
    initMagneticElements();
});

// ===================================
// MOTION ANIMATIONS - Entry Animations
// ===================================

function initMotionAnimations() {
    // Masthead entrance
    animate('.masthead',
        { opacity: [0, 1], y: [-30, 0] },
        { duration: 0.8, easing: [0.22, 1, 0.36, 1] }
    );

    // Newspaper title with scale
    animate('.newspaper-title',
        { opacity: [0, 1], scale: [0.9, 1], y: [20, 0] },
        { duration: 1, delay: 0.2, easing: [0.22, 1, 0.36, 1] }
    );

    // Decorative lines slide in
    animate('.decorative-line',
        { scaleX: [0, 1], opacity: [0, 1] },
        { duration: 0.6, delay: 0.4, easing: 'easeOut' }
    );

    // Masthead sub elements
    animate('.masthead-sub > span',
        { opacity: [0, 1], y: [10, 0] },
        { duration: 0.5, delay: stagger(0.1, { start: 0.5 }), easing: 'easeOut' }
    );

    // Main headline with typewriter-like reveal
    animate('.main-headline',
        { opacity: [0, 1], y: [40, 0] },
        { duration: 0.8, delay: 0.6, easing: [0.22, 1, 0.36, 1] }
    );

    // Kicker badge
    animate('.kicker',
        { opacity: [0, 1], scale: [0.8, 1] },
        { duration: 0.5, delay: 0.4, easing: 'easeOut' }
    );

    // Headline rule draws in
    animate('.headline-rule',
        { scaleX: [0, 1] },
        { duration: 0.6, delay: 0.9, easing: 'easeOut' }
    );
}

// ===================================
// SCROLL-TRIGGERED ANIMATIONS
// ===================================

function initScrollAnimations() {
    // Video section
    inView('.video-section', ({ target }) => {
        animate(target.querySelector('.video-frame'),
            { opacity: [0, 1], y: [60, 0], rotateX: [5, 0] },
            { duration: 0.8, easing: [0.22, 1, 0.36, 1] }
        );

        animate(target.querySelector('.video-cta'),
            { opacity: [0, 1], y: [30, 0] },
            { duration: 0.6, delay: 0.3, easing: 'easeOut' }
        );
    }, { amount: 0.3 });

    // Ticket cards with staggered entrance
    inView('.tickets-section', ({ target }) => {
        animate('.ticket-wrapper',
            { opacity: [0, 1], y: [80, 0], rotateY: [25, 0] },
            { duration: 0.8, delay: stagger(0.15), easing: [0.22, 1, 0.36, 1] }
        );
    }, { amount: 0.2 });

    // CTA section
    inView('.cta-section', ({ target }) => {
        animate(target.querySelector('.cta-ornament'),
            { opacity: [0, 1], scale: [0.5, 1] },
            { duration: 0.5, easing: 'easeOut' }
        );

        animate(target.querySelector('.cta-headline'),
            { opacity: [0, 1], y: [30, 0] },
            { duration: 0.6, delay: 0.1, easing: [0.22, 1, 0.36, 1] }
        );

        animate(target.querySelector('.cta-subtext'),
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.5, delay: 0.2, easing: 'easeOut' }
        );

        animate(target.querySelector('.cta-button'),
            { opacity: [0, 1], y: [20, 0], scale: [0.95, 1] },
            { duration: 0.6, delay: 0.3, easing: [0.22, 1, 0.36, 1] }
        );

        animate('.cta-badges .badge',
            { opacity: [0, 1], y: [15, 0] },
            { duration: 0.4, delay: stagger(0.08, { start: 0.5 }), easing: 'easeOut' }
        );
    }, { amount: 0.3 });

    // FAQ section
    inView('.faq-section', ({ target }) => {
        animate(target.querySelector('.section-header'),
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.6, easing: 'easeOut' }
        );

        animate('.accordion-item',
            { opacity: [0, 1], x: [-30, 0] },
            { duration: 0.5, delay: stagger(0.1, { start: 0.2 }), easing: [0.22, 1, 0.36, 1] }
        );
    }, { amount: 0.2 });

    // Footer
    inView('.newspaper-footer', ({ target }) => {
        animate(target.querySelector('.footer-rule'),
            { scaleX: [0, 1] },
            { duration: 0.6, easing: 'easeOut' }
        );

        animate(target.querySelector('.footer-cta'),
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.5, delay: 0.2, easing: 'easeOut' }
        );
    }, { amount: 0.5 });

    // Parallax scroll effect on video section
    scroll(
        animate('.video-frame', { y: [0, -30] }),
        { target: document.querySelector('.video-section'), offset: ['start end', 'end start'] }
    );
}

// ===================================
// HOVER EFFECTS & MICRO-INTERACTIONS
// ===================================

function initHoverEffects() {
    // Video CTA badges hover
    document.querySelectorAll('.video-badge').forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            animate(badge, { scale: 1.05, y: -2 }, { duration: 0.2, easing: 'easeOut' });
            animate(badge.querySelector('.badge-dot'),
                { scale: [1, 1.5, 1] },
                { duration: 0.4, easing: 'easeInOut' }
            );
        });

        badge.addEventListener('mouseleave', () => {
            animate(badge, { scale: 1, y: 0 }, { duration: 0.2, easing: 'easeOut' });
        });
    });

    // CTA badges hover
    document.querySelectorAll('.cta-badges .badge').forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            animate(badge,
                { scale: 1.08, borderColor: 'rgba(181, 158, 95, 0.8)' },
                { duration: 0.2, easing: 'easeOut' }
            );
        });

        badge.addEventListener('mouseleave', () => {
            animate(badge,
                { scale: 1, borderColor: 'rgba(181, 158, 95, 0.4)' },
                { duration: 0.2, easing: 'easeOut' }
            );
        });
    });
}

// ===================================
// TICKET CARD INTERACTIONS
// ===================================

function initTicketCards() {
    const tickets = document.querySelectorAll('.ticket-wrapper');

    tickets.forEach(ticket => {
        const card3d = ticket.querySelector('.ticket-3d');
        const image = ticket.querySelector('.ticket-bg-image img');

        // Add CSS transition for smooth reset
        card3d.style.transition = 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)';

        ticket.addEventListener('mouseenter', () => {
            // Pause the rotation animation on the wrapper (where the CSS animation is)
            ticket.style.animationPlayState = 'paused';

            // Remove transition during active hover for responsive feel
            card3d.style.transition = 'none';

            // Image zoom
            if (image) {
                animate(image,
                    { scale: 1.15 },
                    { duration: 0.6, easing: 'easeOut' }
                );
            }
        });

        ticket.addEventListener('mouseleave', () => {
            // Re-enable transition for smooth reset
            card3d.style.transition = 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)';

            // Smoothly reset transform
            card3d.style.transform = '';

            // Resume rotation animation on wrapper after delay
            setTimeout(() => {
                ticket.style.animationPlayState = 'running';
            }, 800);

            // Reset image zoom
            if (image) {
                animate(image,
                    { scale: 1.1 },
                    { duration: 0.6, easing: 'easeOut' }
                );
            }
        });

        // 3D tilt on mouse move - card tilts toward cursor
        ticket.addEventListener('mousemove', (e) => {
            const rect = ticket.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Tilt toward cursor: top lifts when cursor at top, bottom lifts when cursor at bottom
            const rotateX = (centerY - y) / 12;
            const rotateY = (x - centerX) / 12;

            card3d.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        // Click to navigate to apply section
        ticket.addEventListener('click', (e) => {
            e.preventDefault();
            const applySection = document.getElementById('apply');
            if (applySection) {
                applySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ===================================
// BUTTON MICRO-INTERACTIONS
// ===================================

function initButtonEffects() {
    // Main CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button, .video-cta-button, .footer-cta');

    ctaButtons.forEach(button => {
        // Hover animation
        button.addEventListener('mouseenter', () => {
            animate(button,
                { scale: 1.02 },
                { duration: 0.2, easing: 'easeOut' }
            );
        });

        button.addEventListener('mouseleave', () => {
            animate(button,
                { scale: 1 },
                { duration: 0.2, easing: 'easeOut' }
            );
        });

        // Click ripple effect
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);

            ripple.style.cssText = `
                position: absolute;
                background: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                pointer-events: none;
                width: ${size}px;
                height: ${size}px;
                left: ${e.clientX - rect.left - size/2}px;
                top: ${e.clientY - rect.top - size/2}px;
                transform: scale(0);
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            animate(ripple,
                { scale: [0, 2.5], opacity: [1, 0] },
                { duration: 0.6, easing: 'easeOut' }
            ).finished.then(() => ripple.remove());

            // Button press effect
            animate(button,
                { scale: [1, 0.97, 1] },
                { duration: 0.2, easing: 'easeOut' }
            );
        });
    });
}

// ===================================
// MAGNETIC CURSOR EFFECT
// ===================================

function initMagneticElements() {
    const magneticElements = document.querySelectorAll('.cta-button, .video-cta-button, .weather-badge');

    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            animate(el,
                { x: x * 0.15, y: y * 0.15 },
                { duration: 0.3, easing: 'easeOut' }
            );
        });

        el.addEventListener('mouseleave', () => {
            animate(el,
                { x: 0, y: 0 },
                { duration: 0.4, easing: [0.22, 1, 0.36, 1] }
            );
        });
    });
}

// ===================================
// COUNTDOWN TIMER
// ===================================

function initCountdown() {
    const countdownElement = document.getElementById('countdown');
    const countdownClones = document.querySelectorAll('.countdown-clone');
    if (!countdownElement) return;

    // Set target date to January 27, 2025 at 2PM PST
    const targetDate = new Date('2025-01-27T14:00:00-08:00');

    function updateCountdown() {
        const now = new Date();
        const difference = targetDate - now;

        let displayText;

        if (difference <= 0) {
            displayText = 'LIVE NOW!';
            countdownElement.style.color = '#c0392b';
            countdownClones.forEach(clone => {
                clone.style.color = '#c0392b';
            });

            // Pulse animation for LIVE
            animate(countdownElement,
                { scale: [1, 1.05, 1] },
                { duration: 1, repeat: Infinity, easing: 'easeInOut' }
            );
        } else {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            displayText = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        countdownElement.textContent = displayText;
        countdownClones.forEach(clone => {
            clone.textContent = displayText;
        });
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===================================
// ACCORDION FUNCTIONALITY
// ===================================

function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');

        if (!header) return;

        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all accordions first
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherHeader = otherItem.querySelector('.accordion-header');
                    if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current accordion
            if (!isActive) {
                item.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
            } else {
                item.classList.remove('active');
                header.setAttribute('aria-expanded', 'false');
            }
        });

        // Keyboard accessibility
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
    });
}

// ===================================
// VIDEO PLAYER FUNCTIONALITY
// ===================================

function initVideoPlayer() {
    const videoIframe = document.getElementById('video-iframe');
    if (!videoIframe) return;

    // Video iframe is visible by default, just ensure it's there
    videoIframe.style.opacity = '1';
}

// ===================================
// SMOOTH SCROLL
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// PARALLAX BACKGROUND EFFECT
// ===================================

scroll(({ y }) => {
    const container = document.querySelector('.newspaper-container');
    if (container) {
        container.style.backgroundPositionY = `${y.current * 0.05}px`;
    }
});

// ===================================
// CONSOLE EASTER EGG
// ===================================

console.log(`
%c╔══════════════════════════════════════╗
║     THE URBAN BULLETIN               ║
║     "All The News That's Fit         ║
║      To Build"                       ║
║                                      ║
║     Est. 2025                        ║
╚══════════════════════════════════════╝
`, 'color: #B59E5F; font-family: monospace;');
