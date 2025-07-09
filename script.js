document.addEventListener('DOMContentLoaded', () => {
    const translateElements = document.querySelectorAll('.translate');
    const langSwitcher = document.getElementById('language-switcher');

    let currentLang = 'en';

    const updateLangUI = () => {
        if (currentLang === 'en') {
            langSwitcher.innerHTML = '<span>ESP</span>/<span class="selected">ENG</span>';
        } else {
            langSwitcher.innerHTML = '<span class="selected">ESP</span>/<span>ENG</span>';
        }
    }

    langSwitcher.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        translateElements.forEach(element => {
            element.innerText = element.dataset[currentLang];
        });
        updateLangUI();
    });

    updateLangUI();
});