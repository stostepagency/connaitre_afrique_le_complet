// Interactive Africa Map JavaScript
$(document).ready(function() {
    'use strict';

    // Country data with flag codes, regions, and page links
    const countries = [
        // North Africa
        { id: 'MA', code: 'ma', name: 'Maroc', capital: 'Rabat', population: '37M', region: 'north', regionName: 'Afrique du Nord', pageUrl: 'pays-maroc.html' },
        { id: 'DZ', code: 'dz', name: 'Algerie', capital: 'Alger', population: '45M', region: 'north', regionName: 'Afrique du Nord', pageUrl: 'pays-algerie.html' },
        { id: 'TN', code: 'tn', name: 'Tunisie', capital: 'Tunis', population: '12M', region: 'north', regionName: 'Afrique du Nord', pageUrl: 'pays-tunisie.html' },
        { id: 'LY', code: 'ly', name: 'Libye', capital: 'Tripoli', population: '7M', region: 'north', regionName: 'Afrique du Nord', pageUrl: 'pays-libye.html' },
        { id: 'EG', code: 'eg', name: 'Egypte', capital: 'Le Caire', population: '104M', region: 'north', regionName: 'Afrique du Nord', pageUrl: 'pays-egypte.html' },
        { id: 'EH', code: 'eh', name: 'Sahara Occidental', capital: 'El Aaiun', population: '0.6M', region: 'north', regionName: 'Afrique du Nord', pageUrl: 'pays-sahara-occidental.html' },
        { id: 'MR', code: 'mr', name: 'Mauritanie', capital: 'Nouakchott', population: '5M', region: 'north', regionName: 'Afrique du Nord', pageUrl: 'pays-mauritanie.html' },

        // West Africa
        { id: 'ML', code: 'ml', name: 'Mali', capital: 'Bamako', population: '21M', region: 'west', regionName: 'Afrique de l\'Ouest', pageUrl: 'pays-mali.html' },
        { id: 'NE', code: 'ne', name: 'Niger', capital: 'Niamey', population: '25M', region: 'west', regionName: 'Afrique de l\'Ouest', pageUrl: 'pays-niger.html' },
        { id: 'SN', code: 'sn', name: 'Senegal', capital: 'Dakar', population: '17M', region: 'west', regionName: 'Afrique de l\'Ouest', pageUrl: 'pays-senegal.html' },
        { id: 'GN', code: 'gn', name: 'Guinee', capital: 'Conakry', population: '13M', region: 'west', regionName: 'Afrique de l\'Ouest', pageUrl: 'pays-guinee.html' },
        { id: 'CI', code: 'ci', name: 'Cote d\'Ivoire', capital: 'Yamoussoukro', population: '27M', region: 'west', regionName: 'Afrique de l\'Ouest', pageUrl: 'pays-cote-ivoire.html' },
        { id: 'GH', code: 'gh', name: 'Ghana', capital: 'Accra', population: '32M', region: 'west', regionName: 'Afrique de l\'Ouest', pageUrl: 'pays-ghana.html' },
        { id: 'BF', code: 'bf', name: 'Burkina Faso', capital: 'Ouagadougou', population: '22M', region: 'west', regionName: 'Afrique de l\'Ouest', pageUrl: 'pays-burkina-faso.html' },
        { id: 'NG', code: 'ng', name: 'Nigeria', capital: 'Abuja', population: '218M', region: 'west', regionName: 'Afrique de l\'Ouest', pageUrl: 'pays-nigeria.html' },
        { id: 'BJ', code: 'bj', name: 'Benin', capital: 'Porto-Novo', population: '13M', region: 'west', regionName: 'Afrique de l\'Ouest', pageUrl: 'pays-benin.html' },
        { id: 'TG', code: 'tg', name: 'Togo', capital: 'Lome', population: '8M', region: 'west', regionName: 'Afrique de l\'Ouest', pageUrl: 'pays-togo.html' },
        { id: 'SL', code: 'sl', name: 'Sierra Leone', capital: 'Freetown', population: '8M', region: 'west', regionName: 'Afrique de l\'Ouest', pageUrl: 'pays-sierra-leone.html' },
        { id: 'LR', code: 'lr', name: 'Liberia', capital: 'Monrovia', population: '5M', region: 'west', regionName: 'Afrique de l\'Ouest', pageUrl: 'pays-liberia.html' },
        { id: 'GM', code: 'gm', name: 'Gambie', capital: 'Banjul', population: '2.5M', region: 'west', regionName: 'Afrique de l\'Ouest', pageUrl: 'pays-gambie.html' },
        { id: 'GW', code: 'gw', name: 'Guinee-Bissau', capital: 'Bissau', population: '2M', region: 'west', regionName: 'Afrique de l\'Ouest', pageUrl: 'pays-guinee-bissau.html' },
        { id: 'CV', code: 'cv', name: 'Cap-Vert', capital: 'Praia', population: '0.6M', region: 'west', regionName: 'Afrique de l\'Ouest', pageUrl: 'pays-cap-vert.html' },

        // Central Africa
        { id: 'TD', code: 'td', name: 'Tchad', capital: 'N\'Djamena', population: '17M', region: 'central', regionName: 'Afrique Centrale', pageUrl: 'pays-tchad.html' },
        { id: 'CM', code: 'cm', name: 'Cameroun', capital: 'Yaounde', population: '28M', region: 'central', regionName: 'Afrique Centrale', pageUrl: 'pays-cameroun.html' },
        { id: 'CF', code: 'cf', name: 'Centrafrique', capital: 'Bangui', population: '5M', region: 'central', regionName: 'Afrique Centrale', pageUrl: 'pays-centrafrique.html' },
        { id: 'CD', code: 'cd', name: 'RD Congo', capital: 'Kinshasa', population: '99M', region: 'central', regionName: 'Afrique Centrale', pageUrl: 'pays-rd-congo.html' },
        { id: 'CG', code: 'cg', name: 'Congo', capital: 'Brazzaville', population: '6M', region: 'central', regionName: 'Afrique Centrale', pageUrl: 'pays-congob.html' },
        { id: 'GA', code: 'ga', name: 'Gabon', capital: 'Libreville', population: '2M', region: 'central', regionName: 'Afrique Centrale', pageUrl: 'pays-gabon.html' },
        { id: 'GQ', code: 'gq', name: 'Guinee Equatoriale', capital: 'Malabo', population: '1.5M', region: 'central', regionName: 'Afrique Centrale', pageUrl: 'pays-guinee-equatoriale.html' },
        { id: 'ST', code: 'st', name: 'Sao Tome-et-Principe', capital: 'Sao Tome', population: '0.2M', region: 'central', regionName: 'Afrique Centrale', pageUrl: 'pays-sao-tome.html' },

        // East Africa
        { id: 'SD', code: 'sd', name: 'Soudan', capital: 'Khartoum', population: '45M', region: 'east', regionName: 'Afrique de l\'Est', pageUrl: 'pays-soudan.html' },
        { id: 'SS', code: 'ss', name: 'Soudan du Sud', capital: 'Juba', population: '11M', region: 'east', regionName: 'Afrique de l\'Est', pageUrl: 'pays-soudan-sud.html' },
        { id: 'ET', code: 'et', name: 'Ethiopie', capital: 'Addis-Abeba', population: '120M', region: 'east', regionName: 'Afrique de l\'Est', pageUrl: 'pays-ethiopie.html' },
        { id: 'ER', code: 'er', name: 'Erythree', capital: 'Asmara', population: '4M', region: 'east', regionName: 'Afrique de l\'Est', pageUrl: 'pays-erythree.html' },
        { id: 'DJ', code: 'dj', name: 'Djibouti', capital: 'Djibouti', population: '1M', region: 'east', regionName: 'Afrique de l\'Est', pageUrl: 'pays-djibouti.html' },
        { id: 'SO', code: 'so', name: 'Somalie', capital: 'Mogadiscio', population: '17M', region: 'east', regionName: 'Afrique de l\'Est', pageUrl: 'pays-somalie.html' },
        { id: 'KE', code: 'ke', name: 'Kenya', capital: 'Nairobi', population: '54M', region: 'east', regionName: 'Afrique de l\'Est', pageUrl: 'pays-kenya.html' },
        { id: 'UG', code: 'ug', name: 'Ouganda', capital: 'Kampala', population: '47M', region: 'east', regionName: 'Afrique de l\'Est', pageUrl: 'pays-ouganda.html' },
        { id: 'RW', code: 'rw', name: 'Rwanda', capital: 'Kigali', population: '13M', region: 'east', regionName: 'Afrique de l\'Est', pageUrl: 'pays-rwanda.html' },
        { id: 'BI', code: 'bi', name: 'Burundi', capital: 'Bujumbura', population: '12M', region: 'east', regionName: 'Afrique de l\'Est', pageUrl: 'pays-burundi.html' },
        { id: 'TZ', code: 'tz', name: 'Tanzanie', capital: 'Dodoma', population: '63M', region: 'east', regionName: 'Afrique de l\'Est', pageUrl: 'pays-tanzanie.html' },
        { id: 'SC', code: 'sc', name: 'Seychelles', capital: 'Victoria', population: '0.1M', region: 'east', regionName: 'Afrique de l\'Est', pageUrl: 'pays-seychelles.html' },
        { id: 'KM', code: 'km', name: 'Comores', capital: 'Moroni', population: '0.9M', region: 'east', regionName: 'Afrique de l\'Est', pageUrl: 'pays-comores.html' },
        { id: 'MU', code: 'mu', name: 'Maurice', capital: 'Port-Louis', population: '1.3M', region: 'east', regionName: 'Afrique de l\'Est', pageUrl: 'pays-maurice.html' },

        // Southern Africa
        { id: 'AO', code: 'ao', name: 'Angola', capital: 'Luanda', population: '34M', region: 'south', regionName: 'Afrique Australe', pageUrl: 'pays-angola.html' },
        { id: 'ZM', code: 'zm', name: 'Zambie', capital: 'Lusaka', population: '19M', region: 'south', regionName: 'Afrique Australe', pageUrl: 'pays-zambie.html' },
        { id: 'ZW', code: 'zw', name: 'Zimbabwe', capital: 'Harare', population: '15M', region: 'south', regionName: 'Afrique Australe', pageUrl: 'pays-zimbabwe.html' },
        { id: 'MW', code: 'mw', name: 'Malawi', capital: 'Lilongwe', population: '20M', region: 'south', regionName: 'Afrique Australe', pageUrl: 'pays-malawi.html' },
        { id: 'MZ', code: 'mz', name: 'Mozambique', capital: 'Maputo', population: '32M', region: 'south', regionName: 'Afrique Australe', pageUrl: 'pays-mozambique.html' },
        { id: 'NA', code: 'na', name: 'Namibie', capital: 'Windhoek', population: '3M', region: 'south', regionName: 'Afrique Australe', pageUrl: 'pays-namibie.html' },
        { id: 'BW', code: 'bw', name: 'Botswana', capital: 'Gaborone', population: '2.5M', region: 'south', regionName: 'Afrique Australe', pageUrl: 'pays-botswana.html' },
        { id: 'ZA', code: 'za', name: 'Afrique du Sud', capital: 'Pretoria', population: '60M', region: 'south', regionName: 'Afrique Australe', pageUrl: 'pays-afrique-du-sud.html' },
        { id: 'LS', code: 'ls', name: 'Lesotho', capital: 'Maseru', population: '2M', region: 'south', regionName: 'Afrique Australe', pageUrl: 'pays-lesotho.html' },
        { id: 'SZ', code: 'sz', name: 'Eswatini', capital: 'Mbabane', population: '1.2M', region: 'south', regionName: 'Afrique Australe', pageUrl: 'pays-eswatini.html' },
        { id: 'MG', code: 'mg', name: 'Madagascar', capital: 'Antananarivo', population: '29M', region: 'south', regionName: 'Afrique Australe', pageUrl: 'pays-madagascar.html' }
    ];

    // Region colors
    const regionColors = {
        north: '#f8d7a4',
        west: '#a8e6cf',
        central: '#dcedc1',
        east: '#ffd3b6',
        south: '#ffaaa5'
    };

    let svgDoc = null;
    let currentRegionFilter = 'all';
    let currentCountry = null;

    // Wait for the SVG object to load
    const svgObject = document.getElementById('africaMapObject');
    if (svgObject) {
        svgObject.addEventListener('load', function() {
            svgDoc = svgObject.contentDocument;
            if (svgDoc) {
                initializeMap();
            }
        });

        // If already loaded
        if (svgObject.contentDocument && svgObject.contentDocument.querySelector('path')) {
            svgDoc = svgObject.contentDocument;
            initializeMap();
        }
    }

    function initializeMap() {
        if (!svgDoc) return;

        // Style all country paths
        const paths = svgDoc.querySelectorAll('path');
        paths.forEach(path => {
            const id = path.id || path.getAttribute('data-id');
            const country = countries.find(c => c.id === id);

            if (country) {
                // Apply region color
                path.style.fill = regionColors[country.region] || '#ddd';
                path.style.stroke = '#fff';
                path.style.strokeWidth = '1';
                path.style.cursor = 'pointer';
                path.style.transition = 'fill 0.3s ease, stroke-width 0.3s ease';

                // Add data attributes
                path.setAttribute('data-region', country.region);

                // Mouse events
                path.addEventListener('mouseenter', function(e) {
                    this.style.fill = '#E67E22';
                    this.style.strokeWidth = '2';
                    showTooltip(country, e);
                });

                path.addEventListener('mousemove', function(e) {
                    updateTooltipPosition(e);
                });

                path.addEventListener('mouseleave', function() {
                    if (currentRegionFilter === 'all' || currentRegionFilter === country.region) {
                        this.style.fill = regionColors[country.region];
                    } else {
                        this.style.fill = '#eee';
                    }
                    this.style.strokeWidth = '1';
                    hideTooltip();
                });

                path.addEventListener('click', function() {
                    // Highlight in list
                    $('.country-list-item').removeClass('active');
                    $(`.country-list-item[data-id="${id}"]`).addClass('active');

                    // Scroll list to item
                    const $listItem = $(`.country-list-item[data-id="${id}"]`);
                    if ($listItem.length) {
                        $('#countryList').animate({
                            scrollTop: $listItem.position().top + $('#countryList').scrollTop() - 100
                        }, 300);
                    }
                });
            }
        });
    }

    // Populate country list
    function populateCountryList(filter = '') {
        const $list = $('#countryList');
        $list.empty();

        let filteredCountries = countries;

        // Filter by search
        if (filter) {
            filteredCountries = countries.filter(c =>
                c.name.toLowerCase().includes(filter.toLowerCase()) ||
                c.capital.toLowerCase().includes(filter.toLowerCase())
            );
        }

        // Filter by region
        if (currentRegionFilter !== 'all') {
            filteredCountries = filteredCountries.filter(c => c.region === currentRegionFilter);
        }

        // Sort alphabetically
        filteredCountries.sort((a, b) => a.name.localeCompare(b.name));

        filteredCountries.forEach(country => {
            const $item = $(`
            
                <div onclick="window.location.href = 'https://afrique.stostep.tech/${country.pageUrl}';" class="country-list-item" data-id="${country.id}" data-region="${country.region}">
                    <div class="country-flag">
                        <img src="https://flagcdn.com/w40/${country.code}.png" alt="${country.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <span class="flag-placeholder" style="display:none;">${country.name.charAt(0)}</span>
                    </div>
                    <div class="country-info">
                        <h5>${country.name}</h5>
                        <small>${country.capital} | ${country.population}</small>
                    </div>
                    <i class="bi bi-chevron-right"></i>
                </div>
            `);
            $list.append($item);
        });
    }

    populateCountryList();

    // Country search
    $('#countrySearch').on('input', function() {
        populateCountryList($(this).val());
    });

    // Country list item hover (not click - it's now a link)
    $(document).on('mouseenter', '.country-list-item', function() {
        const id = $(this).data('id');
        const country = countries.find(c => c.id === id);

        if (country) {
            currentCountry = country;
            showTooltip(country, null);

            // Highlight on map
            if (svgDoc) {
                const paths = svgDoc.querySelectorAll('path');
                paths.forEach(path => {
                    const pathId = path.id || path.getAttribute('data-id');
                    const pathCountry = countries.find(c => c.id === pathId);

                    if (pathCountry) {
                        if (pathId === id) {
                            path.style.fill = '#E67E22';
                            path.style.strokeWidth = '2';
                        } else {
                            if (currentRegionFilter === 'all' || currentRegionFilter === pathCountry.region) {
                                path.style.fill = regionColors[pathCountry.region];
                            }
                            path.style.strokeWidth = '1';
                        }
                    }
                });
            }
        }
    });

    $(document).on('mouseleave', '.country-list-item', function() {
        const id = $(this).data('id');
        const country = countries.find(c => c.id === id);

        if (country && svgDoc) {
            const paths = svgDoc.querySelectorAll('path');
            paths.forEach(path => {
                const pathId = path.id || path.getAttribute('data-id');
                const pathCountry = countries.find(c => c.id === pathId);

                if (pathCountry) {
                    if (currentRegionFilter === 'all' || currentRegionFilter === pathCountry.region) {
                        path.style.fill = regionColors[pathCountry.region];
                    } else {
                        path.style.fill = '#eee';
                    }
                    path.style.strokeWidth = '1';
                }
            });
        }
        hideTooltip();
    });

    // Show tooltip
    function showTooltip(country, event) {
        currentCountry = country;
        const $tooltip = $('#countryTooltip');

        $('#tooltipName').text(country.name);
        $('#tooltipCapital').text(country.capital);
        $('#tooltipPopulation').text(country.population);
        $('#tooltipRegion').text(country.regionName);
        $('#tooltipText').text(country.pageUrl);
        $('#tooltipFlag').attr('src', `https://flagcdn.com/w80/${country.code}.png`);

        // Update the "En savoir plus" link dynamically
        $('#tooltipLink').attr('href', `https://afrique.stostep.tech/${country.pageUrl}`);

        $tooltip.addClass('visible');

        if (event) {
            updateTooltipPosition(event);
        } else {
            // Position in center of map
            const $container = $('#mapContainer');
            $tooltip.css({
                left: $container.width() / 2 - $tooltip.width() / 2,
                top: 50
            });
        }
    }

    // Update tooltip position
    function updateTooltipPosition(event) {
        const $tooltip = $('#countryTooltip');
        const $container = $('#mapContainer');
        const containerOffset = $container.offset();

        let x = event.pageX - containerOffset.left + 15;
        let y = event.pageY - containerOffset.top + 15;

        // Keep tooltip within container
        x = Math.min(x, $container.width() - $tooltip.outerWidth() - 10);
        y = Math.min(y, $container.height() - $tooltip.outerHeight() - 10);
        x = Math.max(x, 10);
        y = Math.max(y, 10);

        $tooltip.css({ left: x, top: y });
    }

    // Hide tooltip
    function hideTooltip() {
        $('#countryTooltip').removeClass('visible');
    }

    // Region filter
    $('.filter-btn').on('click', function() {
        const region = $(this).data('region');
        currentRegionFilter = region;

        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        // Update map colors
        if (svgDoc) {
            const paths = svgDoc.querySelectorAll('path');
            paths.forEach(path => {
                const pathId = path.id || path.getAttribute('data-id');
                const country = countries.find(c => c.id === pathId);

                if (country) {
                    if (region === 'all' || country.region === region) {
                        path.style.fill = regionColors[country.region];
                        path.style.opacity = '1';
                    } else {
                        path.style.fill = '#eee';
                        path.style.opacity = '0.5';
                    }
                }
            });
        }

        // Update list
        populateCountryList($('#countrySearch').val());
    });
});
