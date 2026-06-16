document.addEventListener('DOMContentLoaded', function() {
    const categoryHeaders = document.querySelectorAll('.category-header');
    
    categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const category = this.parentElement;
            const isActive = category.classList.contains('active');
            
            document.querySelectorAll('.product-category').forEach(cat => {
                cat.classList.remove('active');
            });
            
            if (!isActive) {
                category.classList.add('active');
            }
        });
    });
    
    function initSliders() {
        const sliders = document.querySelectorAll('.slider-container');
        
        sliders.forEach(slider => {
            const track = slider.querySelector('.slider-track');
            const images = track.querySelectorAll('.image-placeholder, .image-item');
            const prevBtn = slider.querySelector('.prev-btn');
            const nextBtn = slider.querySelector('.next-btn');
            const dotsContainer = slider.parentElement.querySelector('.slider-dots');
            
            if (!track || images.length === 0) return;
            
            let currentIndex = 0;
            const totalSlides = images.length;
            const visibleSlides = 1;
            const maxIndex = Math.max(0, totalSlides - visibleSlides);
            
            function createDots() {
                dotsContainer.innerHTML = '';
                for (let i = 0; i < totalSlides; i++) {
                    const dot = document.createElement('button');
                    dot.className = 'dot' + (i === currentIndex ? ' active' : '');
                    dot.addEventListener('click', () => goToSlide(i));
                    dotsContainer.appendChild(dot);
                }
            }
            
            function updateDots() {
                const dots = dotsContainer.querySelectorAll('.dot');
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }
            
            function updateButtons() {
                prevBtn.disabled = currentIndex === 0;
                nextBtn.disabled = currentIndex >= maxIndex;
            }
            
            function goToSlide(index) {
                currentIndex = Math.max(0, Math.min(index, maxIndex));
                const slideWidth = images[0].offsetWidth + 20;
                track.style.transition = 'scroll-left 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                track.scrollLeft = currentIndex * slideWidth;
                
                setTimeout(() => {
                    track.style.transition = '';
                }, 400);
                
                updateDots();
                updateButtons();
            }
            
            prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
            nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
            
            let isDragging = false;
            let startX = 0;
            let scrollLeft = 0;
            
            track.addEventListener('mousedown', (e) => {
                isDragging = true;
                startX = e.pageX - track.offsetLeft;
                scrollLeft = track.scrollLeft;
                track.style.cursor = 'grabbing';
            });
            
            track.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                e.preventDefault();
                const x = e.pageX - track.offsetLeft;
                const walk = (x - startX) * 1.5;
                track.scrollLeft = scrollLeft - walk;
            });
            
            track.addEventListener('mouseleave', () => {
                isDragging = false;
                track.style.cursor = 'grab';
            });
            
            track.addEventListener('mouseup', () => {
                isDragging = false;
                track.style.cursor = 'grab';
            });
            
            let touchStartX = 0;
            let touchStartScrollLeft = 0;
            
            track.addEventListener('touchstart', (e) => {
                touchStartX = e.touches[0].pageX;
                touchStartScrollLeft = track.scrollLeft;
            }, { passive: true });
            
            track.addEventListener('touchmove', (e) => {
                const diff = e.touches[0].pageX - touchStartX;
                track.scrollLeft = touchStartScrollLeft - diff;
            }, { passive: true });
            
            createDots();
            updateButtons();
        });
    }
    
    initSliders();
});
