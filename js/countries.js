// Countries Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const countriesGrid = document.getElementById('countriesGrid');
    const countryModal = document.getElementById('countryModal');
    const weatherModal = document.getElementById('weatherModal');
    const countryModalBody = document.getElementById('countryModalBody');
    const weatherModalBody = document.getElementById('weatherModalBody');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    
    // Load countries
    function loadCountries() {
        if (!countriesGrid) return;
        
        countriesGrid.innerHTML = '';
        
        window.countryData.countries.forEach(country => {
            const countryCard = createCountryCard(country);
            countriesGrid.appendChild(countryCard);
        });
    }
    
    // Create country card
    function createCountryCard(country) {
        const card = document.createElement('div');
        card.className = 'country-card';
        card.dataset.country = country.id;
        
        card.innerHTML = `
            <div class="country-image">
                <img src="${country.image}" alt="${country.name}" loading="lazy">
            </div>
            <div class="country-info">
                <h3>${country.name}</h3>
                <p>${country.description}</p>
                <div class="card-buttons">
                    <button class="btn-details" onclick="showCountryDetails('${country.id}')">
                        Details
                    </button>
                    <button class="btn-travel" onclick="window.location.href='travel-form.html'">
                       Travel
                    </button>
                    <button class="btn-weather" onclick="showWeather('${country.id}')">
                        Weather
                    </button>
                    </button>
                    <button class=" Country Details" onclick="window.location.href='imageg.html'">
                       Image Gallary
                    </button>
                    <button class="btn-data" onclick="window.location.href='travel-form.html'">
                        Travel Data From
                    </button>
                </div>
            </div>
        `;
        
        return card;
    }
    
    // Show country details
    window.showCountryDetails = function(countryId) {
        const country = window.countryData.getCountryById(countryId);
        if (!country) return;
        
        let touristSpotsHTML = '';
        if (country.details.touristSpots) {
            touristSpotsHTML = country.details.touristSpots.map(spot => `
                <div class="tourist-spot">
                    <h4>${spot.name}</h4>
                    <p>${spot.description}</p>
                    <img src="${spot.image}" alt="${spot.name}" loading="lazy">
                </div>
            `).join('');
        }
        
        const modalHTML = `
            <h2>${country.name}</h2>
            
            <div class="detail-section">
                <h3> History </h3>
                <p>${country.details.history}</p>
                <img src="${country.image}" alt="${country.name} - History" loading="lazy">
            </div>
            
            <div class="detail-section">
                <h3>Culture</h3>
                <p>${country.details.culture}</p>
            </div>
            
            ${country.details.heritage ? `
            <div class="detail-section">
                <h3>Tradition</h3>
                <p>${country.details.heritage}</p>
            </div>
            ` : ''}
            
            <div class="detail-section">
                <h3>Tourist Attractions</h3>
                <div class="tourist-spots-container">
                    ${touristSpotsHTML}
                </div>
            </div>
            
            <div class="modal-actions">
                <button class="btn travel-data-btn" onclick="window.location.href='travel-form.html'">
                    Travel Data From
                </button>
            </div>
        `;
        
        countryModalBody.innerHTML = modalHTML;
        countryModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };
    
    // Show weather
    window.showWeather = function(countryId) {
        const country = window.countryData.getCountryById(countryId);
        const weather = window.countryData.getWeatherByCountry(countryId);
        
        const modalHTML = `
            <h2>${country.name} - Weather </h2>
            <div class="weather-info">
                <div class="weather-icon">
                    <i class="fas fa-sun"></i>
                </div>
                <div class="weather-details">
                    <p><strong>Temperature:</strong> ${weather.temp}</p>
                    <p><strong>Status:</strong> ${weather.condition}</p>
                    <p><strong>Humidity:</strong> ${weather.humidity}</p>
                    <p><strong>Wind speed:</strong> ${weather.wind}</p>
                </div>
            </div>
            <div class="weather-forecast">
                <h3>Forecast for the next three days</h3>
                <div class="forecast-days">
                    <div class="forecast-day">
                        <p>Today</p>
                        <p>${weather.temp}</p>
                        <p>${weather.condition}</p>
                    </div>
                    <div class="forecast-day">
                        <p>Tomorrow</p>
                        <p>${weather.temp}</p>
                        <p>${weather.condition}</p>
                    </div>
                    <div class="forecast-day">
                        <p>The day after tomorrow</p>
                        <p>${weather.temp}</p>
                        <p>${weather.condition}</p>
                    </div>
                </div>
            </div>
        `;
        
        weatherModalBody.innerHTML = modalHTML;
        weatherModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };
    
    // Close modals
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Search functionality
    function addSearchFunctionality() {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <div class="search-box">
                <input type="text" id="countrySearch" placeholder=" Search Country...">
                <button id="searchBtn"><i class="fas fa-search"></i></button>
            </div>
        `;
        
        const countriesSection = document.querySelector('.countries-section');
        if (countriesSection) {
            countriesSection.insertBefore(searchContainer, countriesSection.children[2]);
        }
        
        const searchInput = document.getElementById('countrySearch');
        const searchBtn = document.getElementById('searchBtn');
        
        if (searchInput && searchBtn) {
            searchBtn.addEventListener('click', performSearch);
            searchInput.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
        }
    }
    
    function performSearch() {
        const searchInput = document.getElementById('countrySearch');
        const searchTerm = searchInput.value.toLowerCase();
        
        const countryCards = document.querySelectorAll('.country-card');
        countryCards.forEach(card => {
            const countryName = card.querySelector('h3').textContent.toLowerCase();
            if (countryName.includes(searchTerm)) {
                card.style.display = 'block';
                card.classList.add('search-match');
            } else {
                card.style.display = 'none';
                card.classList.remove('search-match');
            }
        });
        
        // Add search result message
        const visibleCards = Array.from(countryCards).filter(card => card.style.display !== 'none');
        showNotification(`${visibleCards.length}Countries found.`, 'info');
    }
    
    // Filter functionality
    function addFilterFunctionality() {
        const filterContainer = document.createElement('div');
        filterContainer.className = 'filter-container';
        filterContainer.innerHTML = `
            <div class="filter-options">
                <select id="continentFilter">
                    <option value="">All Continents</option>
                    <option value="asia"> this year </option>
                    <option value="europe"> Europe </option>
                    <option value="america">America</option>
                </select>
                <select id="climateFilter">
                    <option value="">All weather</option>
                    <option value="tropical">Tropical</option>
                    <option value="temperate"> </option>
                    <option value="cold">Cold</option>
                </select>
                <button id="resetFilter">Reset Filter</button>
            </div>
        `;
        
        const searchContainer = document.querySelector('.search-container');
        if (searchContainer) {
            searchContainer.appendChild(filterContainer);
        }
        
        const continentFilter = document.getElementById('continentFilter');
        const climateFilter = document.getElementById('climateFilter');
        const resetFilterBtn = document.getElementById('resetFilter');
        
        if (continentFilter) {
            continentFilter.addEventListener('change', applyFilters);
        }
        
        if (climateFilter) {
            climateFilter.addEventListener('change', applyFilters);
        }
        
        if (resetFilterBtn) {
            resetFilterBtn.addEventListener('click', function() {
                if (continentFilter) continentFilter.value = '';
                if (climateFilter) climateFilter.value = '';
                applyFilters();
                showNotification('Filter reset', 'info');
            });
        }
    }
    
    function applyFilters() {
        const continentFilter = document.getElementById('continentFilter');
        const climateFilter = document.getElementById('climateFilter');
        
        const continentValue = continentFilter ? continentFilter.value : '';
        const climateValue = climateFilter ? climateFilter.value : '';
        
        const countryCards = document.querySelectorAll('.country-card');
        let visibleCount = 0;
        
        countryCards.forEach(card => {
            const countryId = card.dataset.country;
            let shouldShow = true;
            
            // Apply continent filter (mock data)
            if (continentValue) {
                const asiaCountries = ['bangladesh', 'pakistan', 'japan', 'malaysia', 'china'];
                const europeCountries = ['switzerland'];
                const americaCountries = ['america'];
                
                if (continentValue === 'asia' && !asiaCountries.includes(countryId)) {
                    shouldShow = false;
                } else if (continentValue === 'europe' && !europeCountries.includes(countryId)) {
                    shouldShow = false;
                } else if (continentValue === 'america' && !americaCountries.includes(countryId)) {
                    shouldShow = false;
                }
            }
            
            // Apply climate filter (mock data)
            if (climateValue) {
                const tropicalCountries = ['bangladesh', 'pakistan', 'malaysia'];
                const temperateCountries = ['japan', 'china', 'america'];
                const coldCountries = ['switzerland'];
                
                if (climateValue === 'tropical' && !tropicalCountries.includes(countryId)) {
                    shouldShow = false;
                } else if (climateValue === 'temperate' && !temperateCountries.includes(countryId)) {
                    shouldShow = false;
                } else if (climateValue === 'cold' && !coldCountries.includes(countryId)) {
                    shouldShow = false;
                }
            }
            
            card.style.display = shouldShow ? 'block' : 'none';
            if (shouldShow) visibleCount++;
        });
        
        showNotification(`${visibleCount}Countries filtered`, 'info');
    }
    
    // Initialize
    loadCountries();
    addSearchFunctionality();
    addFilterFunctionality();
    
    // Add some custom styles
    const style = document.createElement('style');
    style.textContent = `
        .search-container {
            max-width: 800px;
            margin: 0 auto 2rem;
        }
        
        .search-box {
            display: flex;
            gap: 10px;
            margin-bottom: 1rem;
        }
        
        .search-box input {
            flex: 1;
            padding: 0.8rem;
            border: 2px solid var(--secondary-color);
            border-radius: var(--border-radius);
            font-size: 1rem;
        }
        
        .search-box button {
            padding: 0.8rem 1.5rem;
            background: var(--secondary-color);
            color: white;
            border: none;
            border-radius: var(--border-radius);
            cursor: pointer;
        }
        
        .filter-container {
            margin-top: 1rem;
        }
        
        .filter-options {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        
        .filter-options select {
            padding: 0.5rem;
            border: 2px solid #ddd;
            border-radius: var(--border-radius);
            background: white;
        }
        
        .filter-options button {
            padding: 0.5rem 1rem;
            background: #95a5a6;
            color: white;
            border: none;
            border-radius: var(--border-radius);
            cursor: pointer;
        }
        
        .tourist-spots-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .tourist-spot {
            background: #5ba9f8ff;
            padding: 1rem;
            border-radius: var(--border-radius);
        }
        
        .tourist-spot img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: var(--border-radius);
            margin-top: 0.5rem;
        }
        
        .weather-info {
            display: flex;
            align-items: center;
            gap: 2rem;
            margin: 2rem 0;
        }
        
        .weather-icon {
            font-size: 4rem;
            color: var(--warning-color);
        }
        
        .weather-details p {
            margin: 0.5rem 0;
            font-size: 1.1rem;
        }
        
        .weather-forecast {
            margin-top: 2rem;
        }
        
        .forecast-days {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .forecast-day {
            background: #3f97efff;
            padding: 1rem;
            border-radius: var(--border-radius);
            text-align: center;
        }
        
        .modal-actions {
            display: flex;
            justify-content: center;
            margin-top: 2rem;
        }
        
        .travel-data-btn {
            background: var(--primary-color);
            color: white;
            padding: 0.8rem 2rem;
            font-size: 1.1rem;
        }
        
        .search-match {
            animation: pulse 1s ease;
        }
    `;
    document.head.appendChild(style);
});