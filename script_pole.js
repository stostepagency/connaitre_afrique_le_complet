$(document).ready(function() {
    // Dark Mode Toggle
    const darkModeToggle = $('#darkModeToggle');
    const icon = darkModeToggle.find('i');

    // Check saved preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        $('body').addClass('dark-mode');
        icon.removeClass('fa-moon').addClass('fa-sun');
    }

    darkModeToggle.click(function() {
        $('body').toggleClass('dark-mode');

        if ($('body').hasClass('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            icon.removeClass('fa-moon').addClass('fa-sun');
        } else {
            localStorage.setItem('darkMode', 'disabled');
            icon.removeClass('fa-sun').addClass('fa-moon');
        }
    });

    // Cookie Banner
    $('#acceptCookies').click(function() {
        $('#cookieBanner').fadeOut(300);
        localStorage.setItem('cookiesAccepted', 'true');
    });

    // Check if cookies already accepted
    if (localStorage.getItem('cookiesAccepted')) {
        $('#cookieBanner').hide();
    }

    // Destinations Data with Unsplash images
    const destinations = [
        {
            id: 1,
            name: 'Parc National d\'Andasibe',
            image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
            rating: 5,
            badge: 'Incontournable',
            tags: ['Parc', 'Nature', 'Faune'],
            description: 'Forêt tropicale humide abritant des lémuriens indri-indri, caméléons et une biodiversité exceptionnelle.',
            categories: ['top', 'nature', 'parc', 'aventure']
        },
        {
            id: 2,
            name: 'Allée des Baobabs',
            image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
            rating: 5,
            badge: 'Incontournable',
            tags: ['Nature', 'Photo', 'Paysage'],
            description: 'Route spectaculaire bordée de baobabs centenaires, l\'un des sites les plus photographiés de Madagascar.',
            categories: ['top', 'nature']
        },
        {
            id: 3,
            name: 'Nosy Be',
            image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
            rating: 5,
            tags: ['Île', 'Plage', 'Plongée'],
            description: 'Île paradisiaque aux plages de sable blanc, eaux turquoise et fonds marins exceptionnels.',
            categories: ['top', 'plage']
        },
        {
            id: 4,
            name: 'Tsingy de Bemaraha',
            image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
            rating: 5,
            badge: 'UNESCO',
            tags: ['Parc', 'Aventure', 'Géologie'],
            description: 'Formations calcaires uniques au monde, forêt de pierres inscrite au patrimoine mondial de l\'UNESCO.',
            categories: ['top', 'parc', 'nature', 'aventure']
        },
        {
            id: 5,
            name: 'Ifaty',
            image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
            rating: 4,
            tags: ['Plage', 'Snorkeling', 'Village'],
            description: 'Village de pêcheurs aux magnifiques plages, idéal pour le snorkeling et la découverte de la barrière de corail.',
            categories: ['plage', 'village']
        },
        {
            id: 6,
            name: 'Antsirabe',
            image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80',
            rating: 4,
            tags: ['Ville', 'Culture', 'Artisanat'],
            description: 'Ville thermale coloniale réputée pour ses pousse-pousse colorés et son artisanat traditionnel.',
            categories: ['culture', 'village']
        },
        {
            id: 7,
            name: 'Parc National d\'Isalo',
            image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
            rating: 5,
            tags: ['Parc', 'Randonnée', 'Canyon'],
            description: 'Massif ruiniforme spectaculaire avec canyons, piscines naturelles et formations rocheuses époustouflantes.',
            categories: ['top', 'parc', 'nature', 'aventure']
        },
        {
            id: 8,
            name: 'Sainte-Marie',
            image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
            rating: 5,
            tags: ['Île', 'Plage', 'Baleines'],
            description: 'Île aux plages paradisiaques, célèbre pour l\'observation des baleines à bosse de juillet à septembre.',
            categories: ['top', 'plage']
        },
        {
            id: 9,
            name: 'Ranomafana',
            image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
            rating: 4,
            tags: ['Parc', 'Nature', 'Thermes'],
            description: 'Parc national de forêt tropicale avec sources chaudes, lémuriens dorés et biodiversité exceptionnelle.',
            categories: ['parc', 'nature', 'aventure']
        },
        {
            id: 10,
            name: 'Antananarivo',
            image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80',
            rating: 4,
            tags: ['Ville', 'Culture', 'Histoire'],
            description: 'Capitale perchée sur les collines, mélange fascinant d\'architecture coloniale et de marchés animés.',
            categories: ['culture']
        },
        {
            id: 11,
            name: 'Anakao',
            image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
            rating: 4,
            tags: ['Plage', 'Village', 'Kitesurf'],
            description: 'Village de pêcheurs authentique avec plages immaculées, parfait pour le kitesurf et la détente.',
            categories: ['plage', 'village', 'aventure']
        },
        {
            id: 12,
            name: 'Morondava',
            image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80',
            rating: 4,
            tags: ['Ville', 'Plage', 'Culture'],
            description: 'Ville côtière porte d\'entrée vers l\'Allée des Baobabs et les plages de la côte ouest.',
            categories: ['plage', 'culture']
        },
        {
            id: 13,
            name: 'Montagne d\'Ambre',
            image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
            rating: 4,
            tags: ['Parc', 'Cascade', 'Randonnée'],
            description: 'Parc national de montagne avec forêt luxuriante, cascades spectaculaires et microclimat unique.',
            categories: ['parc', 'nature', 'aventure']
        },
        {
            id: 14,
            name: 'Tuléar',
            image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80',
            rating: 3,
            tags: ['Ville', 'Plage', 'Marché'],
            description: 'Ville portuaire animée, point de départ vers les plages du sud et les réserves marines.',
            categories: ['culture', 'plage']
        },
        {
            id: 15,
            name: 'Masoala',
            image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
            rating: 5,
            badge: 'Sauvage',
            tags: ['Parc', 'Jungle', 'Aventure'],
            description: 'Plus grande aire protégée de Madagascar, forêt primaire accessible uniquement en bateau.',
            categories: ['top', 'parc', 'nature', 'aventure']
        },
        {
            id: 16,
            name: 'Ambohimanga',
            image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80',
            rating: 4,
            badge: 'UNESCO',
            tags: ['Culture', 'Histoire', 'Patrimoine'],
            description: 'Colline royale sacrée classée UNESCO, haut lieu spirituel et historique de Madagascar.',
            categories: ['culture']
        },
        {
            id: 17,
            name: 'Réserve d\'Anja',
            image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
            rating: 4,
            tags: ['Réserve', 'Lémuriens', 'Randonnée'],
            description: 'Petite réserve communautaire idéale pour observer les lémuriens catta dans leur habitat naturel.',
            categories: ['parc', 'nature']
        },
        {
            id: 18,
            name: 'Fort Dauphin',
            image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
            rating: 4,
            tags: ['Ville', 'Plage', 'Histoire'],
            description: 'Ville côtière entourée de montagnes et plages magnifiques, riche en histoire coloniale.',
            categories: ['plage', 'culture']
        }
    ];

    // Render Destinations
    function renderDestinations(filteredDestinations) {
        const grid = $('#destinationsGrid');
        grid.empty();

        if (filteredDestinations.length === 0) {
            grid.append('<div class="col-12 text-center py-5"><p class="text-muted">Aucune destination trouvée</p></div>');
            return;
        }

        filteredDestinations.forEach(dest => {
            const stars = generateStars(dest.rating);
            const tags = dest.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
            const badge = dest.badge ? `<div class="card-badge">${dest.badge}</div>` : '';

            const card = `
                <div class="col-md-6 col-lg-4">
                    <div class="destination-card" data-id="${dest.id}">
                        <div class="card-image">
                            <img src="${dest.image}" alt="${dest.name}" loading="lazy">
                            ${badge}
                        </div>
                        <div class="card-content">
                            <div class="card-rating">${stars}</div>
                            <h3 class="card-title">${dest.name}</h3>
                            <div class="card-tags">${tags}</div>
                            <p class="card-description">${dest.description}</p>
                            <div class="card-actions">
                                <button class="btn-outline-primary">En savoir plus</button>
                                <button class="btn-save" data-id="${dest.id}">
                                    <i class="far fa-bookmark"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            grid.append(card);
        });

        // Animate cards on load
        $('.destination-card').each(function(index) {
            $(this).css({
                opacity: 0,
                transform: 'translateY(20px)'
            });
            $(this).delay(index * 100).animate({
                opacity: 1
            }, 500);
            setTimeout(() => {
                $(this).css('transform', 'translateY(0)');
            }, index * 100);
        });
    }

    // Generate Stars
    function generateStars(rating) {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars += '<i class="fas fa-star star"></i>';
            } else {
                stars += '<i class="fas fa-star star empty"></i>';
            }
        }
        return stars;
    }

    // Filter Functionality
    $('.filter-btn').click(function() {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        const filter = $(this).data('filter');

        if (filter === 'all') {
            renderDestinations(destinations);
        } else {
            const filtered = destinations.filter(dest =>
                dest.categories.includes(filter)
            );
            renderDestinations(filtered);
        }

        // Smooth scroll to grid
        $('html, body').animate({
            scrollTop: $('#destinationsGrid').offset().top - 100
        }, 500);
    });

    // Save Button Toggle
    $(document).on('click', '.btn-save', function() {
        const $btn = $(this);
        const icon = $btn.find('i');
        const destId = $btn.data('id');

        $btn.toggleClass('saved');

        if ($btn.hasClass('saved')) {
            icon.removeClass('far').addClass('fas');
            // Save to localStorage
            let saved = JSON.parse(localStorage.getItem('savedDestinations') || '[]');
            if (!saved.includes(destId)) {
                saved.push(destId);
                localStorage.setItem('savedDestinations', JSON.stringify(saved));
            }
        } else {
            icon.removeClass('fas').addClass('far');
            // Remove from localStorage
            let saved = JSON.parse(localStorage.getItem('savedDestinations') || '[]');
            saved = saved.filter(id => id !== destId);
            localStorage.setItem('savedDestinations', JSON.stringify(saved));
        }
    });

    // Load saved destinations on page load
    function loadSavedDestinations() {
        const saved = JSON.parse(localStorage.getItem('savedDestinations') || '[]');
        saved.forEach(id => {
            $(`.btn-save[data-id="${id}"]`).addClass('saved').find('i').removeClass('far').addClass('fas');
        });
    }

    // Search functionality
    $('.search-bar input').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();

        if (searchTerm === '') {
            renderDestinations(destinations);
            return;
        }

        const filtered = destinations.filter(dest =>
            dest.name.toLowerCase().includes(searchTerm) ||
            dest.description.toLowerCase().includes(searchTerm) ||
            dest.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );

        renderDestinations(filtered);
    });

    // Smooth Scroll
    $('a[href^="#"]').click(function(e) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // Newsletter Form
    $('.newsletter-form').submit(function(e) {
        e.preventDefault();
        const email = $(this).find('input[type="email"]').val();

        if (email) {
            alert('Merci pour votre inscription ! 🎉');
            $(this).find('input').val('');
        }
    });

    // Animate on scroll
    function animateOnScroll() {
        $('.guide-card, .destination-card').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('visible');
            }
        });
    }

    $(window).scroll(animateOnScroll);

    // Initial render
    renderDestinations(destinations);
    loadSavedDestinations();
    animateOnScroll();
});
