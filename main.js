// Toutel'afrique.ua - Main JavaScript
$(document).ready(function() {
    'use strict';

    // ===== SEARCH DATABASE =====
    const searchDatabase = [
        // Actualite
        { title: "Sommet de l'UA 2026 : les grandes decisions pour l'integration africaine", category: "Actualite", image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Elections presidentielles 2026 : le Nigeria se prepare", category: "Politique", image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Afrique du Sud : les enjeux economiques de la nouvelle coalition", category: "Economie", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=100&h=70&fit=crop", url: "article.html" },
        { title: "CEDEAO : quelles relations avec l'Union Africaine ?", category: "Institutions", image: "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Zone de libre-echange continentale africaine (ZLECAf)", category: "Economie", image: "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Crise au Sahel : quels enjeux pour l'Afrique ?", category: "Securite", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Le Maroc accelere sa transition energetique", category: "Environnement", image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Kenya : Nairobi devient le hub technologique de l'Afrique de l'Est", category: "Innovation", image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Ethiopie : le nouveau plan de developpement economique 2026-2030", category: "Economie", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Defense et securite : la Force africaine en attente", category: "Defense", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Les enjeux du numerique en Afrique", category: "Technologie", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Grande Muraille Verte : le projet africain contre la desertification", category: "Environnement", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Commission de l'Union Africaine : role et fonctionnement", category: "Institutions", image: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=100&h=70&fit=crop", url: "article.html" },
        { title: "L'histoire de l'Union Africaine en 3 minutes", category: "Histoire", image: "https://images.unsplash.com/photo-1569511166187-97eb6e387e19?w=100&h=70&fit=crop", url: "article.html" },
        // Pays
        { title: "Sénégal dans l'Union Africaine", category: "Pays", image: "https://flagcdn.com/w80/sn.png", url: "pays.html" },
        { title: "Nigeria : premiere economie d'Afrique", category: "Pays", image: "https://flagcdn.com/w80/ng.png", url: "pays.html" },
        { title: "Egypte : le pays le plus peuple d'Afrique du Nord", category: "Pays", image: "https://flagcdn.com/w80/eg.png", url: "pays.html" },
        { title: "Afrique du Sud : la nation arc-en-ciel", category: "Pays", image: "https://flagcdn.com/w80/za.png", url: "pays.html" },
        { title: "Maroc : porte de l'Afrique vers l'Europe", category: "Pays", image: "https://flagcdn.com/w80/ma.png", url: "pays.html" },
        { title: "Algerie : le plus grand pays d'Afrique", category: "Pays", image: "https://flagcdn.com/w80/dz.png", url: "pays.html" },
        { title: "Ethiopie : berceau de l'humanite", category: "Pays", image: "https://flagcdn.com/w80/et.png", url: "pays.html" },
        { title: "RD Congo : geant de l'Afrique centrale", category: "Pays", image: "https://flagcdn.com/w80/cd.png", url: "pays.html" },
        { title: "Kenya : safari et innovation", category: "Pays", image: "https://flagcdn.com/w80/ke.png", url: "pays.html" },
        { title: "Ghana : etoile de l'Afrique de l'Ouest", category: "Pays", image: "https://flagcdn.com/w80/gh.png", url: "pays.html" },
        { title: "Cote d'Ivoire : locomotive economique ouest-africaine", category: "Pays", image: "https://flagcdn.com/w80/ci.png", url: "pays.html" },
        { title: "Tanzanie : entre Serengeti et Zanzibar", category: "Pays", image: "https://flagcdn.com/w80/tz.png", url: "pays.html" },
        // Economie
        { title: "La monnaie unique africaine : ou en est le projet ?", category: "Economie", image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Commerce intra-africain : les chiffres cles", category: "Economie", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Les ports africains : infrastructures strategiques", category: "Economie", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Investissements directs etrangers en Afrique", category: "Economie", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Les startups africaines qui revolutionnent le continent", category: "Innovation", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=70&fit=crop", url: "article.html" },
        // Environnement
        { title: "Changement climatique : l'Afrique en premiere ligne", category: "Environnement", image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Les parcs nationaux africains menaces", category: "Environnement", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Energies renouvelables : le soleil africain comme ressource", category: "Environnement", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Eau potable en Afrique : defis et solutions", category: "Environnement", image: "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=100&h=70&fit=crop", url: "article.html" },
        // Culture
        { title: "Litterature africaine : les auteurs a decouvrir", category: "Culture", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Cinema africain : Nollywood et au-dela", category: "Culture", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Musique africaine : des traditions aux hits mondiaux", category: "Culture", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Art contemporain africain : les artistes qui font bouger les lignes", category: "Culture", image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=100&h=70&fit=crop", url: "article.html" },
        // Sport
        { title: "CAN 2026 : tout savoir sur la competition", category: "Sport", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Athlètes africains : domination sur les pistes", category: "Sport", image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=100&h=70&fit=crop", url: "article.html" },
        // Sante
        { title: "Sante en Afrique : les defis post-Covid", category: "Sante", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Vaccination en Afrique : bilan et perspectives", category: "Sante", image: "https://images.unsplash.com/photo-1615631648086-325025c9e51e?w=100&h=70&fit=crop", url: "article.html" },
        // Education
        { title: "Education en Afrique : les innovations pedagogiques", category: "Education", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=100&h=70&fit=crop", url: "article.html" },
        { title: "Universites africaines : classements et excellence", category: "Education", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=70&fit=crop", url: "article.html" },
        // Quiz
        { title: "[Quiz] Connaissez-vous les capitales africaines ?", category: "Quiz", image: "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?w=100&h=70&fit=crop", url: "article.html" },
        { title: "[Quiz] Les drapeaux africains", category: "Quiz", image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=100&h=70&fit=crop", url: "article.html" },
        { title: "[Quiz] Histoire de l'Union Africaine", category: "Quiz", image: "https://images.unsplash.com/photo-1569511166187-97eb6e387e19?w=100&h=70&fit=crop", url: "article.html" }
    ];

    // ===== DARK MODE =====
    function initDarkMode() {
        // Check for saved preference
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode === 'enabled') {
            $('body').addClass('dark-mode');
            updateDarkModeIcon();
        }
    }

    function updateDarkModeIcon() {
        const $icon = $('.dark-mode-toggle i');
        if ($('body').hasClass('dark-mode')) {
            $icon.removeClass('bi-moon-fill').addClass('bi-sun-fill');
        } else {
            $icon.removeClass('bi-sun-fill').addClass('bi-moon-fill');
        }
    }

    $('.dark-mode-toggle').on('click', function() {
        $('body').toggleClass('dark-mode');

        if ($('body').hasClass('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', null);
        }

        updateDarkModeIcon();
    });

    initDarkMode();

    // ===== SEARCH FUNCTIONALITY =====
    function performSearch(query) {
        const $results = $('#searchResults');
        $results.empty();

        if (query.length < 2) {
            $results.html('<p class="text-muted text-center">Tapez au moins 2 caracteres pour rechercher...</p>');
            return;
        }

        const filteredResults = searchDatabase.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredResults.length === 0) {
            $results.html(`
                <div class="no-results">
                    <i class="bi bi-search"></i>
                    <p>Aucun resultat trouve pour "${query}"</p>
                </div>
            `);
            return;
        }

        filteredResults.forEach(item => {
            const $item = $(`
                <a href="${item.url}" class="search-result-item">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="search-result-content">
                        <h4>${highlightText(item.title, query)}</h4>
                        <span class="search-result-category">${item.category}</span>
                    </div>
                </a>
            `);
            $results.append($item);
        });
    }

    function highlightText(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    // Search input handler with debounce
    let searchTimeout;
    $('#searchInput').on('input', function() {
        const query = $(this).val().trim();

        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 300);
    });

    // Search form submit
    $('#searchForm').on('submit', function(e) {
        e.preventDefault();
        const query = $('#searchInput').val().trim();
        performSearch(query);
    });

    // Clear search on modal close
    $('#searchModal').on('hidden.bs.modal', function() {
        $('#searchInput').val('');
        $('#searchResults').empty();
    });

    // ===== SMOOTH SCROLL =====
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 600, 'swing');
        }
    });

    // ===== NAVBAR SCROLL EFFECT =====
    const header = $('.header');

    $(window).on('scroll', function() {
        const scrollTop = $(this).scrollTop();

        if (scrollTop > 100) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }

        // Header reste toujours fixe - pas de hide/show
    });

    // ===== FEATURED NEWS CAROUSEL =====
    const featuredCarouselElement = document.getElementById('featuredCarousel');
    if (featuredCarouselElement) {
        const featuredCarousel = new bootstrap.Carousel(featuredCarouselElement, {
            interval: 5000,
            wrap: true,
            pause: 'hover',
            ride: 'carousel',
            touch: true
        });

        // Gestion des boutons de navigation personnalisés
        $('.carousel-nav-btn.prev').on('click', function(e) {
            e.preventDefault();
            featuredCarousel.prev();
        });

        $('.carousel-nav-btn.next').on('click', function(e) {
            e.preventDefault();
            featuredCarousel.next();
        });

        // Animation des indicateurs
        $('#featuredCarousel').on('slide.bs.carousel', function (e) {
            $('.carousel-indicators-custom button').removeClass('active');
            $('.carousel-indicators-custom button').eq(e.to).addClass('active');
        });
    }

    // ===== SCROLL REVEAL ANIMATION =====
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('revealed');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all animatable sections
    $('.featured-dossier, .horizontal-section, .quiz-section, .country-section, .essential-section, .events-section, .services-section, .articles-grid').each(function() {
        this.style.opacity = '0';
        this.style.transform = 'translateY(30px)';
        this.style.transition = 'all 0.6s ease-out';
        observer.observe(this);
    });

    // ===== CARD HOVER EFFECTS =====
    $('.news-card, .article-card, .country-card, .quiz-card, .horizontal-card, .essential-card').on('mouseenter', function() {
        $(this).find('.card-arrow, .article-arrow, .quiz-arrow').css({
            'animation-play-state': 'paused',
            'transform': 'translateY(-8px)'
        });
    }).on('mouseleave', function() {
        $(this).find('.card-arrow, .article-arrow, .quiz-arrow').css({
            'animation-play-state': 'running',
            'transform': 'translateY(0)'
        });
    });

    // ===== DOSSIER ITEM HOVER EFFECT =====
    $('.dossier-item').on('mouseenter', function() {
        $(this).find('h4').css('color', '#D35400');
    }).on('mouseleave', function() {
        const parentSection = $(this).closest('.featured-dossier');
        if (parentSection.hasClass('dossier-blue')) {
            $(this).find('h4').css('color', '#F39C12');
        } else {
            $(this).find('h4').css('color', '#E67E22');
        }
    });

    // ===== SERVICE ITEM ANIMATION =====
    $('.service-item').on('mouseenter', function() {
        $(this).find('i').css('transform', 'translateX(5px)');
    }).on('mouseleave', function() {
        $(this).find('i').css('transform', 'translateX(0)');
    });

    // ===== TAGS HORIZONTAL SCROLL =====
    const tagsWrapper = $('.tags-wrapper');
    let isDown = false;
    let startX;
    let scrollLeft;

    tagsWrapper.on('mousedown', function(e) {
        isDown = true;
        startX = e.pageX - tagsWrapper.offset().left;
        scrollLeft = tagsWrapper.scrollLeft();
    });

    tagsWrapper.on('mouseleave mouseup', function() {
        isDown = false;
    });

    tagsWrapper.on('mousemove', function(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - tagsWrapper.offset().left;
        const walk = (x - startX) * 2;
        tagsWrapper.scrollLeft(scrollLeft - walk);
    });

    // ===== SEARCH MODAL FOCUS =====
    $('#searchModal').on('shown.bs.modal', function() {
        $(this).find('input').focus();
    });

    // ===== LAZY LOADING IMAGES =====
    const lazyImages = $('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.each(function() {
            imageObserver.observe(this);
        });
    }

    // ===== BACK TO TOP BUTTON =====
    const backToTop = $('<button class="back-to-top" aria-label="Retour en haut"><i class="bi bi-arrow-up"></i></button>');
    $('body').append(backToTop);

    backToTop.css({
        'position': 'fixed',
        'bottom': '30px',
        'right': '30px',
        'width': '50px',
        'height': '50px',
        'border-radius': '50%',
        'background': '#E67E22',
        'color': '#fff',
        'border': 'none',
        'cursor': 'pointer',
        'opacity': '0',
        'visibility': 'hidden',
        'transition': 'all 0.3s ease',
        'z-index': '999',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'font-size': '1.2rem',
        'box-shadow': '0 4px 15px rgba(230, 126, 34, 0.4)'
    });

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            backToTop.css({
                'opacity': '1',
                'visibility': 'visible'
            });
        } else {
            backToTop.css({
                'opacity': '0',
                'visibility': 'hidden'
            });
        }
    });

    backToTop.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    backToTop.on('mouseenter', function() {
        $(this).css({
            'transform': 'scale(1.1)',
            'background': '#D35400'
        });
    }).on('mouseleave', function() {
        $(this).css({
            'transform': 'scale(1)',
            'background': '#E67E22'
        });
    });

    // ===== NEWSLETTER FORM VALIDATION =====
    $('.search-form').on('submit', function(e) {
        e.preventDefault();
        const input = $(this).find('input');
        const query = input.val().trim();

        if (query.length > 0) {
            // Simulate search
            alert('Recherche pour: ' + query);
            input.val('');
            $('#searchModal').modal('hide');
        }
    });

    // ===== TOOLTIP INITIALIZATION =====
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // ===== IMAGE ERROR HANDLING =====
    $('img').on('error', function() {
        if (!$(this).data('error-handled')) {
            $(this).data('error-handled', true);
            $(this).attr('src', 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250"%3E%3Crect fill="%23f0f0f0" width="400" height="250"/%3E%3Ctext fill="%23999" font-family="Arial" font-size="16" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage non disponible%3C/text%3E%3C/svg%3E');
        }
    });

    // ===== COUNTER ANIMATION =====
    function animateCounter(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 16);

        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }

        updateCounter();
    }

    // ===== PARALLAX EFFECT (subtle) =====
    $(window).on('scroll', function() {
        const scrolled = $(this).scrollTop();
        $('.dossier-main-image img').each(function() {
            const speed = 0.1;
            $(this).css('transform', 'translateY(' + (scrolled * speed) + 'px) scale(1)');
        });
    });

    // ===== MOBILE MENU CLOSE ON LINK CLICK =====
    $('.offcanvas .nav-link').on('click', function() {
        const offcanvas = bootstrap.Offcanvas.getInstance($('#sideMenu')[0]);
        if (offcanvas) {
            offcanvas.hide();
        }
    });

    // ===== PRELOADER (optional) =====
    $(window).on('load', function() {
        $('.preloader').fadeOut('slow');
    });

    // ===== READING PROGRESS BAR =====
    const progressBar = $('<div class="reading-progress"></div>');
    $('body').append(progressBar);

    progressBar.css({
        'position': 'fixed',
        'top': '0',
        'left': '0',
        'height': '3px',
        'background': 'linear-gradient(90deg, #E67E22, #F39C12)',
        'z-index': '9999',
        'transition': 'width 0.1s ease'
    });

    $(window).on('scroll', function() {
        const windowHeight = $(document).height() - $(window).height();
        const scrolled = $(this).scrollTop();
        const progress = (scrolled / windowHeight) * 100;
        progressBar.css('width', progress + '%');
    });

    // ===== PAGE TRANSITIONS =====
    // Add page transition class on load
    $('body').addClass('page-transition');

    // Handle internal link clicks with transition
    $(document).on('click', 'a[href$=".html"]', function(e) {
        const href = $(this).attr('href');

        // Skip if it's an external link or same page
        if (href.startsWith('http') || href.startsWith('#')) {
            return;
        }

        // Skip if current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        if (href === currentPage) {
            e.preventDefault();
            return;
        }

        e.preventDefault();

        // Add exit animation
        $('body').removeClass('page-transition').addClass('page-exit');

        // Navigate after animation
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });

    // Fade in sections on scroll
    const fadeSections = document.querySelectorAll('.featured-dossier, .horizontal-section, .quiz-section, .country-section, .essential-section, .events-section, .services-section, .articles-grid, .contact-content, .organizations-section');

    if (fadeSections.length > 0) {
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        fadeSections.forEach(section => {
            section.classList.add('fade-in-section');
            fadeObserver.observe(section);
        });
    }

    // ===== CONSOLE MESSAGE =====
    console.log('%c Bienvenue sur Toutel\'afrique.ua! ',
        'background: #E67E22; color: white; font-size: 14px; padding: 10px; border-radius: 5px;');

    // ===== ACCESSIBILITY: SKIP TO MAIN CONTENT =====
    const skipLink = $('<a href="#main-content" class="skip-link">Aller au contenu principal</a>');
    $('body').prepend(skipLink);

    skipLink.css({
        'position': 'absolute',
        'top': '-40px',
        'left': '0',
        'background': '#E67E22',
        'color': '#fff',
        'padding': '10px 20px',
        'z-index': '10000',
        'transition': 'top 0.3s'
    });

    skipLink.on('focus', function() {
        $(this).css('top', '0');
    }).on('blur', function() {
        $(this).css('top', '-40px');
    });

    // ===== EASTER EGG =====
    let konamiCode = [];
    const konamiPattern = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

    $(document).on('keydown', function(e) {
        konamiCode.push(e.keyCode);

        if (konamiCode.length > konamiPattern.length) {
            konamiCode.shift();
        }

        if (konamiCode.join(',') === konamiPattern.join(',')) {
            $('body').css('animation', 'rainbow 2s infinite');
            setTimeout(() => {
                $('body').css('animation', 'none');
            }, 5000);
        }
    });

    // Add rainbow animation
    $('<style>@keyframes rainbow { 0% { filter: hue-rotate(0deg); } 100% { filter: hue-rotate(360deg); } }</style>').appendTo('head');

});
