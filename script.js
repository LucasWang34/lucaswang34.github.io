document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        zh: {
            logo_title: '广州致迪雅货运代理有限公司',
            nav_home: '首页',
            nav_products: '主要产品',
            nav_about: '关于我们',
            nav_contact: '联系方式',
            hero_title: '专业刚果金海运服务',
            hero_subtitle: '广州致迪雅货运代理有限公司',
            hero_desc: '提供专业的货运代理服务，专注于中国到刚果金的海运业务',
            hero_btn: '了解更多',
            product_title: '主要产品',
            product_desc: '点击下方类别查看我们的产品',
            product_trucks: '货车',
            product_cars: '汽车',
            product_electronics: '电器',
            product_machinery: '机器',
            product_building: '建筑材料',
            product_daily: '生活用品',
            about_title: '关于我们',
            about_desc: '广州致迪雅货运代理有限公司是一家专业的货运代理公司，专注于中国到刚果金的海运业务。我们提供一站式的货运服务，包括货物运输、清关、仓储等。',
            contact_title: '联系方式',
            contact_address: '广州市白云区',
            contact_phone: '联系电话',
            contact_email: '电子邮箱',
            contact_form_title: '在线留言',
            footer_copy: '© 2024 广州致迪雅货运代理有限公司. 保留所有权利.'
        },
        en: {
            logo_title: 'Guangzhou Zedya Freight Forwarding Co., Ltd.',
            nav_home: 'Home',
            nav_products: 'Products',
            nav_about: 'About Us',
            nav_contact: 'Contact',
            hero_title: 'Professional Congo Kinshasa Shipping Service',
            hero_subtitle: 'AUTO ZEDIA CHINE',
            hero_desc: 'Providing professional freight forwarding services, focusing on shipping from China to Congo Kinshasa',
            hero_btn: 'Learn More',
            product_title: 'Main Products',
            product_desc: 'Click below categories to view our products',
            product_trucks: 'Trucks',
            product_cars: 'Cars',
            product_electronics: 'Electronics',
            product_machinery: 'Machinery',
            product_building: 'Building Materials',
            product_daily: 'Daily Supplies',
            about_title: 'About Us',
            about_desc: 'Guangzhou Zedya Freight Forwarding Co., Ltd. is a professional freight forwarding company specializing in shipping from China to Congo Kinshasa. We provide one-stop freight services including cargo transportation, customs clearance, warehousing, etc.',
            contact_title: 'Contact Us',
            contact_address: 'Baiyun District, Guangzhou',
            contact_phone: 'Phone',
            contact_email: 'Email',
            contact_form_title: 'Contact Form',
            footer_copy: '© 2024 Guangzhou Zedya Freight Forwarding Co., Ltd. All rights reserved.'
        },
        fr: {
            logo_title: 'Société de Transit AUTO ZEDIA CHINE',
            nav_home: 'Accueil',
            nav_products: 'Produits',
            nav_about: 'À Propos',
            nav_contact: 'Contact',
            hero_title: 'Service de Transport Maritime Professionnel pour la RDC',
            hero_subtitle: 'AUTO ZEDIA CHINE',
            hero_desc: 'Fournir des services de transit professionnels, spécialisés dans le transport maritime de Chine vers la RDC',
            hero_btn: 'En Savoir Plus',
            product_title: 'Produits Principaux',
            product_desc: 'Cliquez sur les catégories ci-dessous pour voir nos produits',
            product_trucks: 'Camions',
            product_cars: 'Voitures',
            product_electronics: 'Électronique',
            product_machinery: 'Machines',
            product_building: 'Matériaux de Construction',
            product_daily: 'Articles de Quotidien',
            about_title: 'À Propos de Nous',
            about_desc: 'AUTO ZEDIA CHINE est une société de transit professionnelle spécialisée dans le transport maritime de Chine vers la RDC. Nous proposons des services de transit complets, y compris le transport de marchandises, le dédouanement, l\'entrepôt, etc.',
            contact_title: 'Contactez-Nous',
            contact_address: 'District Baiyun, Guangzhou',
            contact_phone: 'Téléphone',
            contact_email: 'Email',
            contact_form_title: 'Formulaire de Contact',
            footer_copy: '© 2024 AUTO ZEDIA CHINE. Tous droits réservés.'
        }
    };

    function switchLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
        
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
            localStorage.setItem('preferredLang', lang);
        });
    });

    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) {
        switchLanguage(savedLang);
    }

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
