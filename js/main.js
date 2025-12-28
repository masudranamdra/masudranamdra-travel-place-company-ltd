// Main JavaScript File

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const videoBtn = document.getElementById('videoBtn');
const videoModal = document.getElementById('videoModal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const backgroundSlider = document.querySelector('.background-slider');
const slides = document.querySelectorAll('.slide');
const travelForm = document.getElementById('travelDataForm');
const downloadBtn = document.getElementById('downloadBtn');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Background Slider
let currentSlide = 0;
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Start slideshow
if (backgroundSlider) {
    setInterval(nextSlide, 5000);
}

// Video Modal
if (videoBtn) {
    videoBtn.addEventListener('click', () => {
        videoModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
}

// Close Modal
closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Form Validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'var(--accent-color)';
            
            // Add error message
            const errorDiv = input.nextElementSibling;
            if (!errorDiv || !errorDiv.classList.contains('error-message')) {
                const error = document.createElement('div');
                error.className = 'error-message';
                error.style.color = 'var(--accent-color)';
                error.style.fontSize = '0.9rem';
                error.style.marginTop = '0.3rem';
                error.textContent = 'এই তথ্যটি আবশ্যক';
                input.parentNode.insertBefore(error, input.nextSibling);
            }
        } else {
            input.style.borderColor = '';
            const errorDiv = input.nextElementSibling;
            if (errorDiv && errorDiv.classList.contains('error-message')) {
                errorDiv.remove();
            }
            
            // Email validation
            if (input.type === 'email') {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(input.value)) {
                    isValid = false;
                    input.style.borderColor = 'var(--accent-color)';
                    const error = document.createElement('div');
                    error.className = 'error-message';
                    error.style.color = 'var(--accent-color)';
                    error.textContent = 'বৈধ ইমেইল দিন';
                    input.parentNode.insertBefore(error, input.nextSibling);
                }
            }
            
            // Phone validation
            if (input.type === 'tel') {
                const phonePattern = /^01[3-9]\d{8}$/;
                if (!phonePattern.test(input.value)) {
                    isValid = false;
                    input.style.borderColor = 'var(--accent-color)';
                    const error = document.createElement('div');
                    error.className = 'error-message';
                    error.style.color = 'var(--accent-color)';
                    error.textContent = 'বৈধ মোবাইল নাম্বার দিন';
                    input.parentNode.insertBefore(error, input.nextSibling);
                }
            }
        }
    });
    
    return isValid;
}

// Image Preview
const profileImageInput = document.getElementById('profileImage');
const imagePreview = document.getElementById('imagePreview');

if (profileImageInput && imagePreview) {
    profileImageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.innerHTML = `
                    <img src="${e.target.result}" alt="প্রোফাইল ছবি" style="max-width: 200px; border-radius: 50%;">
                    <p style="margin-top: 10px;">ছবি নির্বাচিত হয়েছে</p>
                `;
            };
            reader.readAsDataURL(file);
        }
    });
}

// Rating System
const ratingStars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('ratingValue');

if (ratingStars.length > 0) {
    ratingStars.forEach(star => {
        star.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            ratingValue.value = value;
            
            // Update star display
            ratingStars.forEach((s, index) => {
                if (index < value) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
        
        star.addEventListener('mouseover', function() {
            const value = this.getAttribute('data-value');
            ratingStars.forEach((s, index) => {
                if (index < value) {
                    s.style.color = 'var(--warning-color)';
                }
            });
        });
        
        star.addEventListener('mouseout', function() {
            const value = ratingValue.value;
            ratingStars.forEach((s, index) => {
                if (index >= value) {
                    s.style.color = '#ddd';
                }
            });
        });
    });
}

// Age Calculation
const dobInput = document.getElementById('dob');
const ageInput = document.getElementById('age');

if (dobInput && ageInput) {
    dobInput.addEventListener('change', function() {
        const dob = new Date(this.value);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        
        ageInput.value = age > 0 ? age : '';
    });
}

// Form Submission
if (travelForm) {
    travelForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm(this)) {
            // Collect form data
            const formData = collectFormData();
            
            // Save to localStorage
            localStorage.setItem('travelFormData', JSON.stringify(formData));
            
            // Enable download button
            if (downloadBtn) {
                downloadBtn.disabled = false;
                downloadBtn.classList.add('hover-pulse');
                
                // Show success message
                showNotification('ডাটা সফলভাবে সংরক্ষণ করা হয়েছে! এখন PDF ডাউনলোড করতে পারেন।', 'success');
                
                // Scroll to download button
                downloadBtn.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            showNotification('দয়া করে সকল আবশ্যক তথ্য পূরণ করুন।', 'error');
        }
    });
}

function collectFormData() {
    const formData = {
        personalInfo: {
            fullName: document.getElementById('fullName').value,
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            mobile: document.getElementById('mobile').value,
            altMobile: document.getElementById('altMobile').value,
            dob: document.getElementById('dob').value,
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            nationality: document.getElementById('nationality').value
        },
        locationDetails: {
            country: document.getElementById('country').value,
            division: document.getElementById('division').value,
            district: document.getElementById('district').value,
            upazila: document.getElementById('upazila').value,
            postCode: document.getElementById('postCode').value,
            fullAddress: document.getElementById('fullAddress').value,
            currentCity: document.getElementById('currentCity').value
        },
        educationInfo: {
            education: document.getElementById('education').value,
            profession: document.getElementById('profession').value,
            company: document.getElementById('company').value,
            skills: document.getElementById('skills').value,
            experience: document.getElementById('experience').value,
            interests: Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(cb => cb.value),
            visitPurpose: document.getElementById('visitPurpose').value
        },
        websiteInfo: {
            source: document.getElementById('source').value,
            visitedBefore: document.getElementById('visitedBefore').value,
            rating: document.getElementById('ratingValue').value,
            serviceInterest: document.getElementById('serviceInterest').value,
            feedback: document.getElementById('feedback').value,
            updates: document.getElementById('updates').value
        },
        timestamp: new Date().toISOString()
    };
    
    return formData;
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <p>${message}</p>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem 1rem 1rem;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        z-index: 9999;
        min-width: 300px;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;
    
    // Set colors based on type
    const colors = {
        success: { bg: '#d4edda', color: '#155724', border: '#c3e6cb' },
        error: { bg: '#f8d7da', color: '#721c24', border: '#f5c6cb' },
        info: { bg: '#d1ecf1', color: '#0c5460', border: '#bee5eb' }
    };
    
    const colorSet = colors[type] || colors.info;
    notification.style.backgroundColor = colorSet.bg;
    notification.style.color = colorSet.color;
    notification.style.borderLeft = `4px solid ${colorSet.border}`;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: inherit;
        margin-left: 1rem;
    `;
    
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add animation for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Scroll Animation
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    // Add animation class to elements
    const animatedElements = document.querySelectorAll('.country-card, .service-card, .feature-card, .form-section');
    animatedElements.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Initialize scroll animation
    animateOnScroll();
    
    // Check for saved form data
    const savedData = localStorage.getItem('travelFormData');
    if (savedData && downloadBtn) {
        downloadBtn.disabled = false;
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Lazy loading images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                if (src) {
                    img.src = src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Back to top button
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--secondary-color);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: var(--box-shadow);
        transition: var(--transition);
    `;
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.background = 'var(--primary-color)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.background = 'var(--secondary-color)';
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
    
    return button;
}

// Initialize back to top button
createBackToTopButton();

// Theme Toggle (Optional Feature)
function createThemeToggle() {
    const toggle = document.createElement('button');
    toggle.innerHTML = '🌙';
    toggle.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 1000;
        box-shadow: var(--box-shadow);
        transition: var(--transition);
    `;
    
    let isDark = localStorage.getItem('theme') === 'dark';
    
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggle.innerHTML = '☀️';
    }
    
    toggle.addEventListener('click', () => {
        isDark = !isDark;
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            toggle.innerHTML = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            toggle.innerHTML = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
    
    document.body.appendChild(toggle);
    return toggle;
}

// Initialize theme toggle if needed
// createThemeToggle();