// Add some interactive animations
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.querySelector('.social-icon i').style.transform = 'scale(1.3) rotate(10deg)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.querySelector('.social-icon i').style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add ripple effect on click
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        let x = e.clientX - e.target.getBoundingClientRect().left;
        let y = e.clientY - e.target.getBoundingClientRect().top;
        
        let ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
            window.open(this.href, '_blank');
        }, 600);
    });
});