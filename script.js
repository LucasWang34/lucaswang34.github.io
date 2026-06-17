document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        zh: {
            logo_title: '广州致迪雅货运代理有限公司',
            nav_home: '首页',
            nav_products: '主要产品',
            nav_services: '服务项目',
            nav_routes: '航线介绍',
            nav_advantages: '我们的优势',
            nav_about: '关于我们',
            nav_contact: '联系方式',
            hero_title: '专业刚果金海运物流服务商',
            hero_subtitle: '从广东佛山直达刚果金马塔迪',
            hero_highlight: '10余年行业经验 | 每周发柜 | 刚果金设有大型仓库',
            hero_btn: '立即咨询',
            route_start: '广东佛山',
            route_duration: '海上运输约45天',
            route_end: '刚果金马塔迪',
            products_title: '主要产品',
            products_subtitle: '点击下方类别查看详细图片',
            product_trucks: '货车',
            product_cars: '汽车',
            product_electronics: '电器',
            product_machinery: '机器',
            product_building: '建筑材料',
            product_daily: '生活用品',
            services_title: '服务项目',
            services_subtitle: '为您提供全方位的刚果金海运物流服务',
            service_1: '整柜海运',
            service_1_desc: '20尺/40尺集装箱整柜运输，海上航行约45天，安全可靠',
            service_2: '散货拼箱',
            service_2_desc: '按立方米计费，价格优惠，适合小批量货物运输',
            service_3: '报关清关',
            service_3_desc: '专业报关清关服务，通关便捷，省时省心',
            service_4: '门到门服务',
            service_4_desc: '从广州上门取货，全程跟踪配送到客户手中',
            service_5: '代购服务',
            service_5_desc: '帮顾客找到心意的物品，提供最优价格建议',
            service_6: '仓储服务',
            service_6_desc: '佛山设有专业仓库，刚果金设有大型存储仓，方便货物存放和集运',
            routes_title: '航线介绍',
            routes_subtitle: '成熟稳定的海运航线',
            route_port: '起始港',
            route_port_desc: '广东佛山港',
            route_method: '运输方式',
            route_method_desc: '海运集装箱',
            route_time: '运输时效',
            route_time_desc: '约45天',
            route_dest: '目的港',
            route_dest_desc: '刚果金马塔迪港 (Matadi Port)',
            advantages_title: '我们的优势',
            advantages_subtitle: '为什么选择广州致迪雅货运',
            adv_1_title: '年行业经验',
            adv_1_desc: '深耕刚果金海运物流领域十余年，专业可靠',
            adv_2_title: '价格优惠',
            adv_2_desc: '每立方米价格比市场更低，性价比最高',
            adv_3_title: '一条龙服务',
            adv_3_desc: '从取货、装箱、报关、海运到清关，全程服务',
            adv_4_title: '代购服务',
            adv_4_desc: '帮顾客找到心意的物品，提供最具竞争力的价格',
            adv_5_title: '专属客服',
            adv_5_desc: '一对一服务，随时跟踪货物状态，及时反馈',
            adv_6_title: '安全可靠',
            adv_6_desc: '货物安全有保障，损坏丢失全额赔付',
            adv_7_title: '刚果金仓储',
            adv_7_desc: '在刚果金设有大型存储仓，每周都有货柜通过海运发到刚果金',
            about_title: '关于我们',
            about_p1: '广州致迪雅货运代理有限公司 (AUTO ZEDIA CHINE) 是一家专业从事刚果金海运物流的货代公司，总部位于广州市越秀区。公司成立于多年前，至今已拥有10余年丰富的行业经验。',
            about_p2: '我们专注于从广东佛山到刚果金马塔迪港的海运物流服务，为客户提供包括整柜运输、散货拼箱、报关清关、门到门配送等一站式服务。',
            about_p3: '公司秉承"客户至上、诚信经营"的理念，以优惠的价格和优质的服务赢得了广大客户的信赖。我们不仅提供运输服务，还能够帮助顾客寻找心仪的货物，并提供最具竞争力的价格建议。',
            about_highlight_1: '10余年刚果金物流经验',
            about_highlight_2: '价格实惠每立方米',
            about_highlight_3: '一条龙贴心服务',
            about_image_text: '专业刚果金物流',
            contact_title: '联系我们',
            contact_subtitle: '期待与您合作，共创未来',
            contact_company: '公司地址',
            contact_company_addr1: '广州市越秀区麓景路越秀区麓景路8号',
            contact_company_addr2: '亿达商贸中心206室',
            contact_warehouse: '仓库地址',
            contact_warehouse_addr: '广东省佛山市南海区里官路赤山段72号翔东门窗厂院内2号仓',
            contact_phone: '联系电话',
            contact_email: '电子邮箱',
            contact_email_addr1: 'wssluck198@aliyun.com',
            contact_email_addr2: 'wangshenshen34@gmail.com',
            contact_hours: '服务时间',
            contact_hours_1: '周一至周六：9:00 - 18:00',
            contact_hours_2: '周日：预约服务',
            footer_company: '广州致迪雅货运代理有限公司',
            footer_desc: '专业刚果金海运物流服务商',
            footer_desc2: '10余年行业经验，值得信赖',
            footer_quick_links: '快速链接',
            footer_contact: '联系方式',
            footer_copyright: '© 2024 广州致迪雅货运 AUTO ZEDIA CHINE 版权所有',
            contact_form_title: '在线留言'
        },
        en: {
            logo_title: 'Guangzhou Zedya Freight Forwarding Co., Ltd.',
            nav_home: 'Home',
            nav_products: 'Products',
            nav_services: 'Services',
            nav_routes: 'Routes',
            nav_advantages: 'Advantages',
            nav_about: 'About Us',
            nav_contact: 'Contact',
            hero_title: 'Professional Congo Kinshasa Shipping Service',
            hero_subtitle: 'From Foshan, Guangdong to Matadi, Congo Kinshasa',
            hero_highlight: '10+ Years Experience | Weekly Shipping | Large Warehouse in Congo Kinshasa',
            hero_btn: 'Contact Us Now',
            route_start: 'Foshan, Guangdong',
            route_duration: 'Approximately 45 days by sea',
            route_end: 'Matadi, Congo Kinshasa',
            products_title: 'Main Products',
            products_subtitle: 'Click below categories to view detailed images',
            product_trucks: 'Trucks',
            product_cars: 'Cars',
            product_electronics: 'Electronics',
            product_machinery: 'Machinery',
            product_building: 'Building Materials',
            product_daily: 'Daily Supplies',
            services_title: 'Our Services',
            services_subtitle: 'Providing comprehensive Congo Kinshasa shipping logistics services',
            service_1: 'Full Container Shipping',
            service_1_desc: '20ft/40ft container full container transport, approximately 45 days by sea, safe and reliable',
            service_2: 'LCL Consolidation',
            service_2_desc: 'Charged by cubic meter, preferential price, suitable for small batch cargo transportation',
            service_3: 'Customs Clearance',
            service_3_desc: 'Professional customs clearance service, convenient customs clearance, time-saving and worry-free',
            service_4: 'Door-to-Door Service',
            service_4_desc: 'Pick up from Guangzhou, track the whole process and deliver to customers',
            service_5: 'Purchasing Service',
            service_5_desc: 'Help customers find desired items and provide optimal price suggestions',
            service_6: 'Warehousing Service',
            service_6_desc: 'Professional warehouse in Foshan, large storage warehouse in Congo Kinshasa, convenient for cargo storage and consolidation',
            routes_title: 'Route Introduction',
            routes_subtitle: 'Mature and stable shipping routes',
            route_port: 'Port of Departure',
            route_port_desc: 'Foshan Port, Guangdong',
            route_method: 'Transport Method',
            route_method_desc: 'Sea Container',
            route_time: 'Transport Time',
            route_time_desc: 'Approximately 45 days',
            route_dest: 'Port of Destination',
            route_dest_desc: 'Matadi Port, Congo Kinshasa',
            advantages_title: 'Our Advantages',
            advantages_subtitle: 'Why Choose Guangzhou Zedya Freight',
            adv_1_title: 'Years of Industry Experience',
            adv_1_desc: 'Deeply engaged in Congo Kinshasa shipping logistics for more than ten years, professional and reliable',
            adv_2_title: 'Preferential Price',
            adv_2_desc: 'Price per cubic meter is lower than the market, highest cost performance',
            adv_3_title: 'One-Stop Service',
            adv_3_desc: 'From pickup, packing, customs declaration, shipping to clearance, full service',
            adv_4_title: 'Purchasing Service',
            adv_4_desc: 'Help customers find desired items and provide the most competitive prices',
            adv_5_title: 'Dedicated Customer Service',
            adv_5_desc: 'One-on-one service, track cargo status at any time, timely feedback',
            adv_6_title: 'Safe and Reliable',
            adv_6_desc: 'Cargo safety guaranteed, full compensation for damage or loss',
            adv_7_title: 'Congo Kinshasa Warehouse',
            adv_7_desc: 'Large storage warehouse in Congo Kinshasa, containers shipped to Congo Kinshasa by sea every week',
            about_title: 'About Us',
            about_p1: 'Guangzhou Zedya Freight Forwarding Co., Ltd. (AUTO ZEDIA CHINE) is a professional freight forwarding company engaged in Congo Kinshasa shipping logistics, headquartered in Yuexiu District, Guangzhou. The company was established many years ago and has more than 10 years of rich industry experience.',
            about_p2: 'We focus on shipping logistics services from Foshan, Guangdong to Matadi Port, Congo Kinshasa, providing customers with one-stop services including full container transport, LCL consolidation, customs clearance, and door-to-door delivery.',
            about_p3: 'The company adheres to the concept of "customer first, integrity management", winning the trust of customers with preferential prices and high-quality services. We not only provide transportation services, but also help customers find desired cargo and provide the most competitive price suggestions.',
            about_highlight_1: '10+ Years Congo Logistics Experience',
            about_highlight_2: 'Affordable Price per Cubic Meter',
            about_highlight_3: 'One-Stop Caring Service',
            about_image_text: 'Professional Congo Logistics',
            contact_title: 'Contact Us',
            contact_subtitle: 'Looking forward to cooperating with you and creating the future together',
            contact_company: 'Company Address',
            contact_company_addr1: 'No. 8 Lujing Road, Yuexiu District, Guangzhou',
            contact_company_addr2: 'Room 206, Yida Trade Center',
            contact_warehouse: 'Warehouse Address',
            contact_warehouse_addr: 'No. 72 Chishan Section, Liguan Road, Nanhai District, Foshan, Guangdong, Warehouse No. 2, Xiangdong Door and Window Factory',
            contact_phone: 'Phone',
            contact_email: 'Email',
            contact_email_addr1: 'wssluck198@aliyun.com',
            contact_email_addr2: 'wangshenshen34@gmail.com',
            contact_hours: 'Service Hours',
            contact_hours_1: 'Monday to Saturday: 9:00 - 18:00',
            contact_hours_2: 'Sunday: By Appointment',
            footer_company: 'Guangzhou Zedya Freight Forwarding Co., Ltd.',
            footer_desc: 'Professional Congo Kinshasa Shipping Logistics Service Provider',
            footer_desc2: '10+ Years of Industry Experience, Trustworthy',
            footer_quick_links: 'Quick Links',
            footer_contact: 'Contact',
            footer_copyright: '© 2024 Guangzhou Zedya Freight AUTO ZEDIA CHINE All Rights Reserved',
            contact_form_title: 'Contact Form'
        },
        fr: {
            logo_title: 'Société de Transit AUTO ZEDIA CHINE',
            nav_home: 'Accueil',
            nav_products: 'Produits',
            nav_services: 'Services',
            nav_routes: 'Itinéraires',
            nav_advantages: 'Avantages',
            nav_about: 'À Propos',
            nav_contact: 'Contact',
            hero_title: 'Service de Transport Maritime Professionnel pour la RDC',
            hero_subtitle: 'De Foshan, Guangdong à Matadi, RDC',
            hero_highlight: '10+ Années d\'Expérience | Expédition Hebdomadaire | Grand Entrepôt en RDC',
            hero_btn: 'Contactez-Nous Maintenant',
            route_start: 'Foshan, Guangdong',
            route_duration: 'Environ 45 jours par mer',
            route_end: 'Matadi, RDC',
            products_title: 'Produits Principaux',
            products_subtitle: 'Cliquez sur les catégories ci-dessous pour voir les images détaillées',
            product_trucks: 'Camions',
            product_cars: 'Voitures',
            product_electronics: 'Électronique',
            product_machinery: 'Machines',
            product_building: 'Matériaux de Construction',
            product_daily: 'Articles de Quotidien',
            services_title: 'Nos Services',
            services_subtitle: 'Fournir des services logistiques de transport maritime complets pour la RDC',
            service_1: 'Transport de Conteneur Complet',
            service_1_desc: 'Transport de conteneur complet 20ft/40ft, environ 45 jours par mer, sûr et fiable',
            service_2: 'Groupage LCL',
            service_2_desc: 'Facturé au mètre cube, prix préférentiel, adapté au transport de marchandises en petites quantités',
            service_3: 'Dédouanement',
            service_3_desc: 'Service de dédouanement professionnel, dédouanement pratique, gain de temps et tranquillité',
            service_4: 'Service Porte-à-Porte',
            service_4_desc: 'Enlèvement à Guangzhou, suivi complet et livraison aux clients',
            service_5: 'Service d\'Achat',
            service_5_desc: 'Aider les clients à trouver les articles souhaités et fournir des suggestions de prix optimales',
            service_6: 'Service d\'Entreposage',
            service_6_desc: 'Entrepôt professionnel à Foshan, grand entrepôt de stockage en RDC, pratique pour le stockage et la consolidation des marchandises',
            routes_title: 'Introduction des Itinéraires',
            routes_subtitle: 'Itinéraires maritimes matures et stables',
            route_port: 'Port de Départ',
            route_port_desc: 'Port de Foshan, Guangdong',
            route_method: 'Mode de Transport',
            route_method_desc: 'Conteneur Maritime',
            route_time: 'Temps de Transport',
            route_time_desc: 'Environ 45 jours',
            route_dest: 'Port de Destination',
            route_dest_desc: 'Port de Matadi, RDC',
            advantages_title: 'Nos Avantages',
            advantages_subtitle: 'Pourquoi Choisir Guangzhou Zedya Freight',
            adv_1_title: 'Années d\'Expérience dans l\'Industrie',
            adv_1_desc: 'Engagé dans la logistique de transport maritime RDC depuis plus de dix ans, professionnel et fiable',
            adv_2_title: 'Prix Préférentiel',
            adv_2_desc: 'Prix au mètre cube inférieur au marché, meilleur rapport qualité-prix',
            adv_3_title: 'Service Complet',
            adv_3_desc: 'De l\'enlèvement, l\'emballage, la déclaration en douane, le transport au dédouanement, service complet',
            adv_4_title: 'Service d\'Achat',
            adv_4_desc: 'Aider les clients à trouver les articles souhaités et fournir les prix les plus compétitifs',
            adv_5_title: 'Service Client Dédié',
            adv_5_desc: 'Service individuel, suivi du statut des marchandises à tout moment, retour rapide',
            adv_6_title: 'Sûr et Fiable',
            adv_6_desc: 'Sécurité des marchandises garantie, indemnisation complète en cas de dommage ou de perte',
            adv_7_title: 'Entrepôt en RDC',
            adv_7_desc: 'Grand entrepôt de stockage en RDC, conteneurs expédiés en RDC par mer chaque semaine',
            about_title: 'À Propos de Nous',
            about_p1: 'Guangzhou Zedya Freight Forwarding Co., Ltd. (AUTO ZEDIA CHINE) est une société de transit professionnelle engagée dans la logistique de transport maritime RDC, basée dans le district de Yuexiu, Guangzhou. La société a été créée il y a de nombreuses années et possède plus de 10 ans d\'expérience riche dans l\'industrie.',
            about_p2: 'Nous nous concentrons sur les services logistiques de transport maritime de Foshan, Guangdong au port de Matadi, RDC, fournissant aux clients des services complets y compris le transport de conteneur complet, le groupage LCL, le dédouanement et la livraison porte-à-porte.',
            about_p3: 'La société adhère au concept de "client d\'abord, gestion d\'intégrité", gagnant la confiance des clients avec des prix préférentiels et des services de haute qualité. Nous fournissons non seulement des services de transport, mais aidons également les clients à trouver les marchandises souhaitées et fournissons les suggestions de prix les plus compétitives.',
            about_highlight_1: '10+ Années d\'Expérience en Logistique RDC',
            about_highlight_2: 'Prix Abordable par Mètre Cube',
            about_highlight_3: 'Service Complet et Attentionné',
            about_image_text: 'Logistique Professionnelle RDC',
            contact_title: 'Contactez-Nous',
            contact_subtitle: 'Dans l\'attente de coopérer avec vous et créer l\'avenir ensemble',
            contact_company: 'Adresse de la Société',
            contact_company_addr1: 'No. 8 Lujing Road, District de Yuexiu, Guangzhou',
            contact_company_addr2: 'Chambre 206, Centre Commercial Yida',
            contact_warehouse: 'Adresse de l\'Entrepôt',
            contact_warehouse_addr: 'No. 72 Section Chishan, Route Liguan, District de Nanhai, Foshan, Guangdong, Entrepôt No. 2, Usine de Portes et Fenêtres Xiangdong',
            contact_phone: 'Téléphone',
            contact_email: 'Email',
            contact_email_addr1: 'wssluck198@aliyun.com',
            contact_email_addr2: 'wangshenshen34@gmail.com',
            contact_hours: 'Heures de Service',
            contact_hours_1: 'Lundi à Samedi: 9:00 - 18:00',
            contact_hours_2: 'Dimanche: Sur Rendez-vous',
            footer_company: 'Guangzhou Zedya Freight Forwarding Co., Ltd.',
            footer_desc: 'Fournisseur de Services Logistiques de Transport Maritime RDC Professionnel',
            footer_desc2: '10+ Années d\'Expérience, Digne de Confiance',
            footer_quick_links: 'Liens Rapides',
            footer_contact: 'Contact',
            footer_copyright: '© 2024 Guangzhou Zedya Freight AUTO ZEDIA CHINE Tous Droits Réservés',
            contact_form_title: 'Formulaire de Contact'
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

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const form = e.target;
            const formMessage = document.getElementById('formMessage');
            const submitBtn = form.querySelector('button[type="submit"]');
            
            submitBtn.disabled = true;
            submitBtn.textContent = '发送中...';
            
            try {
                const formData = new FormData(form);
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });
                
                if (response.ok) {
                    formMessage.className = 'form-message success';
                    formMessage.textContent = '留言发送成功！我们会尽快与您联系。';
                    form.reset();
                } else {
                    formMessage.className = 'form-message error';
                    formMessage.textContent = '发送失败，请稍后重试或直接联系我们。';
                }
            } catch (error) {
                formMessage.className = 'form-message error';
                formMessage.textContent = '网络错误，请检查网络后重试。';
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = '提交留言';
            }
        });
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
