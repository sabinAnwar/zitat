// State management
const state = {
    theme: localStorage.getItem('theme') || 'light',
    currentLanguage: localStorage.getItem('language') || 'en',
    currentCategory: null,
    currentProverb: null,
    activeContainer: null,
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    history: JSON.parse(localStorage.getItem('history')) || []
};

// DOM Elements
const elements = {
    themeToggle: document.querySelector('#checkbox'),
    mainNav: document.querySelector('.main-nav'),
    mobileMenuToggle: document.querySelector('#mobile-menu-toggle'),
    languageButtons: document.querySelectorAll('.lang-btn'),
    categoryCards: document.querySelectorAll('.category-card'),
    favoriteBtn: document.querySelector('#favorite-btn'),
    historyBtn: document.querySelector('#history-btn'),
    newProverbBtn: document.querySelector('#new-proverb'),
    searchBtn: document.querySelector('#search-btn'),
    searchInput: document.querySelector('#search-input'),
    frenchProverb: document.querySelector('#french-proverb'),
    translation: document.querySelector('#translation'),
    containers: {
        favorites: document.querySelector('.favorites-container'),
        history: document.querySelector('.history-container'),
        quiz: document.querySelector('.quiz-container'),
        grammar: document.querySelector('.grammar-container'),
        pronunciation: document.querySelector('.pronunciation-container'),
        cultural: document.querySelector('.cultural-container')
    },
    favoritesList: document.querySelector('#favorites-list'),
    historyList: document.querySelector('#history-list')
};

// Database of French proverbs with translations and categories
const proverbs = [
    {
        french: "L'appétit vient en mangeant",
        translations: {
            en: "Appetite comes with eating",
            de: "Der Appetit kommt beim Essen",
            ar: "الشهية تأتي مع الأكل"
        },
        category: "wisdom",
        meaning: "The more you have, the more you want"
    },
    {
        french: "Qui vivra verra",
        translations: {
            en: "Time will tell",
            de: "Die Zeit wird es zeigen",
            ar: "الوقت سيخبرنا"
        },
        category: "wisdom",
        meaning: "Only time will reveal what will happen"
    },
    {
        french: "Petit à petit, l'oiseau fait son nid",
        translations: {
            en: "Little by little, the bird builds its nest",
            de: "Schritt für Schritt baut der Vogel sein Nest",
            ar: "قليلاً قليلاً، يبني الطائر عشه"
        },
        category: "success",
        meaning: "Success comes through steady progress"
    },
    {
        french: "L'amour est aveugle",
        translations: {
            en: "Love is blind",
            de: "Die Liebe ist blind",
            ar: "الحب أعمى"
        },
        category: "love",
        meaning: "Love makes us overlook flaws"
    },
    {
        french: "La vie est belle",
        translations: {
            en: "Life is beautiful",
            de: "Das Leben ist schön",
            ar: "الحياة جميلة"
        },
        category: "life",
        meaning: "Life is full of beauty and joy"
    },
    {
        french: "Rien ne sert de courir, il faut partir à point",
        translations: {
            en: "There's no point in running, you have to leave on time",
            de: "Es nützt nichts zu rennen, man muss rechtzeitig losgehen",
            ar: "لا فائدة من الجري، يجب المغادرة في الوقت المناسب"
        },
        category: "wisdom",
        meaning: "Better to be prepared and on time than to rush"
    },
    {
        french: "Qui sème le vent récolte la tempête",
        translations: {
            en: "He who sows the wind reaps the storm",
            de: "Wer Wind sät, wird Sturm ernten",
            ar: "من يزرع الريح يحصد العاصفة"
        },
        category: "wisdom",
        meaning: "Actions have consequences"
    },
    {
        french: "L'habit ne fait pas le moine",
        translations: {
            en: "The habit doesn't make the monk",
            de: "Die Kutte macht nicht den Mönch",
            ar: "الرداء لا يصنع الراهب"
        },
        category: "wisdom",
        meaning: "Appearances can be deceiving"
    },
    {
        french: "Qui cherche trouve",
        translations: {
            en: "He who seeks shall find",
            de: "Wer sucht, der findet",
            ar: "من يبحث يجد"
        },
        category: "success",
        meaning: "Persistence leads to success"
    },
    {
        french: "L'amour fait passer le temps, le temps fait passer l'amour",
        translations: {
            en: "Love makes time pass, time makes love pass",
            de: "Die Liebe lässt die Zeit vergehen, die Zeit lässt die Liebe vergehen",
            ar: "الحب يجعل الوقت يمر، والوقت يجعل الحب يمر"
        },
        category: "love",
        meaning: "Love and time are interconnected"
    },
    {
        french: "La vie est un long fleuve tranquille",
        translations: {
            en: "Life is a long quiet river",
            de: "Das Leben ist ein langer ruhiger Fluss",
            ar: "الحياة نهر هادئ طويل"
        },
        category: "life",
        meaning: "Life flows smoothly"
    },
    {
        french: "Qui vole un œuf vole un bœuf",
        translations: {
            en: "He who steals an egg steals an ox",
            de: "Wer ein Ei stiehlt, stiehlt auch einen Ochsen",
            ar: "من يسرق بيضة يسرق ثوراً"
        },
        category: "wisdom",
        meaning: "Small thefts lead to bigger ones"
    },
    {
        french: "L'amour est plus fort que tout",
        translations: {
            en: "Love is stronger than everything",
            de: "Die Liebe ist stärker als alles",
            ar: "الحب أقوى من كل شيء"
        },
        category: "love",
        meaning: "Love conquers all"
    },
    {
        french: "La vie est faite de petits bonheurs",
        translations: {
            en: "Life is made of small happinesses",
            de: "Das Leben besteht aus kleinen Glücksmomenten",
            ar: "الحياة مصنوعة من السعادة الصغيرة"
        },
        category: "life",
        meaning: "Life's joy comes from small moments"
    },
    {
        french: "Qui veut voyager loin ménage sa monture",
        translations: {
            en: "He who wants to travel far spares his mount",
            de: "Wer weit reisen will, schont sein Reittier",
            ar: "من يريد السفر بعيداً يحافظ على مركوبه"
        },
        category: "success",
        meaning: "Take care of your resources for long-term success"
    }
];

// Initialize the application
function initializeApp() {
    applyTheme();
    displayRandomProverb();
    updateUI();
    initializeEventListeners();
}

// Theme Management
function applyTheme() {
    document.body.setAttribute('data-theme', state.theme);
    elements.themeToggle.checked = state.theme === 'dark';
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', state.theme);
    applyTheme();
}

// Proverb Management
function displayRandomProverb() {
    const proverb = getRandomProverb();
    displayProverb(proverb);
}

function getRandomProverb() {
    let filteredProverbs = proverbs;
    if (state.currentCategory) {
        filteredProverbs = proverbs.filter(p => p.category === state.currentCategory);
    }
    const randomIndex = Math.floor(Math.random() * filteredProverbs.length);
    return filteredProverbs[randomIndex];
}

function displayProverb(proverb) {
    if (!proverb) return;
    
    state.currentProverb = proverb;
    elements.frenchProverb.textContent = proverb.french;
    elements.translation.textContent = proverb.translations[state.currentLanguage];
    
    addToHistory(proverb);
    updateUI();
}

// Language Management
function changeLanguage(lang) {
    state.currentLanguage = lang;
    if (state.currentProverb) {
        elements.translation.textContent = state.currentProverb.translations[lang];
    }
    updateUI();
}

// Category Management
function filterProverbs(category) {
    state.currentCategory = category === state.currentCategory ? null : category;
    displayRandomProverb();
    updateUI();
}

// Favorites Management
function toggleFavorite() {
    if (!state.currentProverb) return;
    
    const index = state.favorites.findIndex(f => f.french === state.currentProverb.french);
    if (index === -1) {
        state.favorites.push(state.currentProverb);
        showNotification('Added to favorites', 'success');
    } else {
        state.favorites.splice(index, 1);
        showNotification('Removed from favorites', 'success');
    }
    
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
    updateUI();
}

// History Management
function addToHistory(proverb) {
    const historyItem = {
        ...proverb,
        timestamp: new Date().toISOString()
    };
    
    state.history.unshift(historyItem);
    if (state.history.length > 50) state.history.pop();
    
    localStorage.setItem('history', JSON.stringify(state.history));
    updateUI();
}

// Enhanced Search Management
function searchProverbs(query) {
    if (!query.trim()) {
        hideSearchResults();
        return;
    }
    
    const results = proverbs.filter(proverb => {
        const searchTerms = query.toLowerCase().split(' ');
        const proverbText = `${proverb.french} ${Object.values(proverb.translations).join(' ')} ${proverb.meaning}`.toLowerCase();
        return searchTerms.every(term => proverbText.includes(term));
    });
    
    displaySearchResults(results, query);
}

function displaySearchResults(results, query) {
    const searchContainer = document.querySelector('.search-container');
    let resultsContainer = document.querySelector('.search-results');
    
    if (!resultsContainer) {
        resultsContainer = document.createElement('div');
        resultsContainer.className = 'search-results';
        searchContainer.appendChild(resultsContainer);
    }
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No proverbs found for "${query}"</p>
                <p class="suggestion">Try different keywords or check the spelling</p>
            </div>
        `;
    } else {
        resultsContainer.innerHTML = `
            <div class="results-header">
                <h4>Found ${results.length} results for "${query}"</h4>
                <button class="close-results"><i class="fas fa-times"></i></button>
            </div>
            <div class="results-list">
                ${results.map(proverb => `
                    <div class="result-item" data-category="${proverb.category}">
                        <div class="result-content">
                            <h5>${proverb.french}</h5>
                            <p>${proverb.translations[state.currentLanguage]}</p>
                            <div class="result-meta">
                                <span class="category-tag">${proverb.category}</span>
                                <span class="meaning">${proverb.meaning}</span>
                            </div>
                        </div>
                        <div class="result-actions">
                            <button class="action-btn copy-btn" data-copy="french" title="Copy French">
                                <i class="fas fa-copy"></i>
                            </button>
                            <button class="action-btn audio-btn" title="Listen">
                                <i class="fas fa-volume-up"></i>
                            </button>
                            <button class="action-btn favorite-btn" title="Add to Favorites">
                                <i class="far fa-heart"></i>
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Add event listeners to result items
        resultsContainer.querySelectorAll('.result-item').forEach(item => {
            item.addEventListener('click', () => {
                const proverb = results.find(p => p.french === item.querySelector('h5').textContent);
                if (proverb) {
                    displayProverb(proverb);
                    hideSearchResults();
                }
            });
        });
        
        // Add event listeners to action buttons
        resultsContainer.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const action = btn.classList.contains('copy-btn') ? 'copy' :
                             btn.classList.contains('audio-btn') ? 'audio' : 'favorite';
                const item = btn.closest('.result-item');
                const proverb = results.find(p => p.french === item.querySelector('h5').textContent);
                
                if (proverb) {
                    switch (action) {
                        case 'copy':
                            navigator.clipboard.writeText(proverb.french);
                            showNotification('Copied to clipboard!', 'success');
                            break;
                        case 'audio':
                            speakText(proverb.french);
                            break;
                        case 'favorite':
                            toggleFavorite(proverb);
                            break;
                    }
                }
            });
        });
    }
    
    resultsContainer.classList.add('active');
}

function hideSearchResults() {
    const resultsContainer = document.querySelector('.search-results');
    if (resultsContainer) {
        resultsContainer.classList.remove('active');
    }
}

// Container Management
function toggleContainer(containerId) {
    if (state.activeContainer === containerId) {
        state.activeContainer = null;
    } else {
        state.activeContainer = containerId;
    }
    
    Object.entries(elements.containers).forEach(([id, container]) => {
        if (container) {
            container.classList.toggle('active', id === state.activeContainer);
        }
    });
}

// UI Updates
function updateUI() {
    // Update language buttons
    elements.languageButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === state.currentLanguage);
    });

    // Update category cards
    elements.categoryCards.forEach(card => {
        card.classList.toggle('active', card.dataset.category === state.currentCategory);
    });

    // Update favorite button
    if (state.currentProverb) {
        const isFavorite = state.favorites.some(f => f.french === state.currentProverb.french);
        elements.favoriteBtn.innerHTML = `<i class="fa${isFavorite ? 's' : 'r'} fa-heart"></i>`;
        elements.favoriteBtn.classList.toggle('active', isFavorite);
    }

    // Update favorites list
    updateFavoritesDisplay();

    // Update history list
    updateHistoryDisplay();
}

function updateFavoritesDisplay() {
    if (!elements.favoritesList) return;
    
    elements.favoritesList.innerHTML = state.favorites.map(proverb => `
        <div class="favorite-item">
            <p class="favorite-french">${proverb.french}</p>
            <p class="favorite-translation">${proverb.translations[state.currentLanguage]}</p>
            <button class="remove-favorite" data-french="${proverb.french}">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');

    // Add event listeners to remove buttons
    elements.favoritesList.querySelectorAll('.remove-favorite').forEach(btn => {
        btn.addEventListener('click', () => {
            const french = btn.dataset.french;
            state.favorites = state.favorites.filter(f => f.french !== french);
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
            updateUI();
            showNotification('Removed from favorites', 'success');
        });
    });
}

function updateHistoryDisplay() {
    if (!elements.historyList) return;
    
    elements.historyList.innerHTML = state.history.map(item => `
        <div class="history-item">
            <p class="history-french">${item.french}</p>
            <p class="history-translation">${item.translations[state.currentLanguage]}</p>
            <span class="history-time">${new Date(item.timestamp).toLocaleTimeString()}</span>
        </div>
    `).join('');
}

// Add text-to-speech functionality
function speakText(text, lang = 'fr-FR') {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.8; // Slightly slower for better pronunciation
        window.speechSynthesis.speak(utterance);
    } else {
        showNotification('Text-to-speech is not supported in your browser', 'error');
    }
}

// Event Listeners
function initializeEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-section ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            e.stopPropagation(); // Stop event bubbling
            handleNavigation(link);
        });
    });

    // Language selection
    elements.languageButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            changeLanguage(btn.dataset.lang);
        });
    });

    // Category selection
    elements.categoryCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            filterProverbs(card.dataset.category);
        });
    });

    // Controls
    elements.favoriteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleFavorite();
    });
    
    elements.historyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleContainer('history');
    });
    
    elements.newProverbBtn.addEventListener('click', (e) => {
        e.preventDefault();
        displayRandomProverb();
    });
    
    elements.searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchProverbs(elements.searchInput.value);
    });
    
    elements.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchProverbs(elements.searchInput.value);
        }
    });

    // Theme toggle
    elements.themeToggle.addEventListener('change', toggleTheme);

    // Mobile menu
    elements.mobileMenuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        elements.mainNav.classList.toggle('active');
    });

    // Copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const type = btn.dataset.copy;
            const text = type === 'french' ? elements.frenchProverb.textContent : elements.translation.textContent;
            navigator.clipboard.writeText(text).then(() => {
                showNotification('Copied to clipboard!', 'success');
            }).catch(() => {
                showNotification('Failed to copy', 'error');
            });
        });
    });

    // Close containers when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.side-panel') && !e.target.closest('.history-btn') && !e.target.closest('.favorite-btn')) {
            state.activeContainer = null;
            Object.values(elements.containers).forEach(container => {
                if (container) container.classList.remove('active');
            });
        }
    });

    // Audio buttons
    document.querySelectorAll('.audio-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const container = btn.closest('.proverb-french, .proverb-translation');
            const text = container.querySelector('p').textContent;
            const lang = container.classList.contains('proverb-french') ? 'fr-FR' : state.currentLanguage === 'en' ? 'en-US' : 
                        state.currentLanguage === 'de' ? 'de-DE' : 'ar-SA';
            speakText(text, lang);
        });
    });

    // Enhanced search input handling
    let searchTimeout;
    elements.searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchProverbs(e.target.value);
        }, 300);
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            hideSearchResults();
        }
    });
}

// Navigation Handler
function handleNavigation(link) {
    const id = link.id;
    const category = link.dataset.category;
    const lang = link.dataset.lang;

    if (category) {
        filterProverbs(category);
        return;
    }

    if (lang) {
        changeLanguage(lang);
        return;
    }

    switch (id) {
        case 'favorites-nav':
            toggleContainer('favorites');
            break;
        case 'history-nav':
            toggleContainer('history');
            break;
        case 'daily-nav':
            displayRandomProverb();
            break;
        case 'search-nav':
            elements.searchInput.focus();
            break;
        case 'quiz-nav':
            toggleContainer('quiz');
            initializeQuiz();
            break;
        case 'grammar-nav':
            toggleContainer('grammar');
            displayGrammarContent();
            break;
        case 'pronunciation-nav':
            toggleContainer('pronunciation');
            displayPronunciationContent();
            break;
        case 'culture-nav':
            toggleContainer('cultural');
            displayCulturalContent();
            break;
        case 'export-nav':
            exportProverbs();
            break;
    }
}

// Add export functionality
function exportProverbs() {
    const data = {
        favorites: state.favorites,
        history: state.history,
        currentLanguage: state.currentLanguage
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'french-proverbs-export.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Proverbs exported successfully', 'success');
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Add content for grammar section
function displayGrammarContent() {
    const grammarContent = document.getElementById('grammar-content');
    if (!grammarContent) return;

    grammarContent.innerHTML = `
        <div class="grammar-section">
            <h4>Common Grammar Patterns in French Proverbs</h4>
            <ul>
                <li>Present tense is often used for timeless truths</li>
                <li>Conditional mood (si + imparfait, conditionnel) for hypothetical situations</li>
                <li>Subjunctive mood after certain conjunctions</li>
                <li>Reflexive verbs to express actions on oneself</li>
            </ul>
        </div>
        <div class="grammar-section">
            <h4>Key Grammar Points</h4>
            <ul>
                <li>Gender agreement in adjectives</li>
                <li>Verb conjugation patterns</li>
                <li>Use of articles (definite, indefinite, partitive)</li>
                <li>Pronoun placement and agreement</li>
            </ul>
        </div>
    `;
}

// Add content for pronunciation section
function displayPronunciationContent() {
    const pronunciationContent = document.getElementById('pronunciation-content');
    if (!pronunciationContent) return;

    pronunciationContent.innerHTML = `
        <div class="pronunciation-section">
            <h4>French Pronunciation Guide</h4>
            <ul>
                <li>Nasal vowels (an, en, in, on, un)</li>
                <li>Silent letters (h, final consonants)</li>
                <li>Liaison rules</li>
                <li>Stress patterns</li>
            </ul>
        </div>
        <div class="pronunciation-section">
            <h4>Common Sound Patterns</h4>
            <ul>
                <li>é vs è pronunciation</li>
                <li>ou vs u sounds</li>
                <li>R pronunciation</li>
                <li>Diphthongs and glides</li>
            </ul>
        </div>
    `;
}

// Add content for cultural section
function displayCulturalContent() {
    const culturalContent = document.getElementById('cultural-content');
    if (!culturalContent) return;

    culturalContent.innerHTML = `
        <div class="cultural-section">
            <h4>Cultural Context of French Proverbs</h4>
            <ul>
                <li>Historical origins and evolution</li>
                <li>Regional variations</li>
                <li>Modern usage and adaptations</li>
                <li>Cultural significance</li>
            </ul>
        </div>
        <div class="cultural-section">
            <h4>Common Themes</h4>
            <ul>
                <li>Love and relationships</li>
                <li>Wisdom and life lessons</li>
                <li>Success and achievement</li>
                <li>Family and community</li>
            </ul>
        </div>
    `;
}

// Add quiz functionality
function initializeQuiz() {
    const quizContent = document.getElementById('quiz-content');
    if (!quizContent) return;

    // Get 4 random proverbs for the quiz
    const quizProverbs = [...proverbs]
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

    quizContent.innerHTML = `
        <div class="quiz-section">
            <h4>Translate this proverb:</h4>
            <p class="quiz-proverb">${quizProverbs[0].french}</p>
            <div class="quiz-options">
                ${quizProverbs.map((proverb, index) => `
                    <button class="quiz-option" data-index="${index}">
                        ${proverb.translations[state.currentLanguage]}
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    // Add event listeners to quiz options
    quizContent.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', () => {
            const selectedIndex = parseInt(option.dataset.index);
            if (selectedIndex === 0) {
                showNotification('Correct!', 'success');
            } else {
                showNotification('Try again!', 'error');
            }
        });
    });
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp); 