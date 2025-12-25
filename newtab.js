// Time and Greeting Update
function updateTimeAndGreeting() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Update time display
    const timeElement = document.getElementById('time');
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    timeElement.textContent = timeString;

    // Update greeting based on time
    const greetingElement = document.getElementById('greeting');
    let greeting;

    if (hours >= 5 && hours < 12) {
        greeting = 'Good morning';
    } else if (hours >= 12 && hours < 17) {
        greeting = 'Good afternoon';
    } else if (hours >= 17 && hours < 22) {
        greeting = 'Good evening';
    } else {
        greeting = 'Good night';
    }

    greetingElement.textContent = greeting;
}

// Initialize time and update every minute
updateTimeAndGreeting();
setInterval(updateTimeAndGreeting, 60000);

// Search Engines Configuration
const searchEngines = {
    google: 'https://www.google.com/search?q=%s',
    bing: 'https://www.bing.com/search?q=%s',
    duckduckgo: 'https://duckduckgo.com/?q=%s',
    baidu: 'https://www.baidu.com/s?wd=%s',
    custom: ''
};

// Search functionality
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();

    if (query) {
        // Check if it's a URL
        if (query.includes('.') && !query.includes(' ')) {
            const url = query.startsWith('http') ? query : `https://${query}`;
            window.location.href = url;
        } else {
            // Search using configured search engine
            chrome.storage.sync.get(['searchEngine', 'customSearchUrl'], (result) => {
                const engine = result.searchEngine || 'google';
                let searchUrl;

                if (engine === 'custom' && result.customSearchUrl) {
                    searchUrl = result.customSearchUrl.replace('%s', encodeURIComponent(query));
                } else {
                    searchUrl = searchEngines[engine].replace('%s', encodeURIComponent(query));
                }

                window.location.href = searchUrl;
            });
        }
    }
});

// Quick Links
const defaultLinks = [
    { name: 'Claude', url: 'https://claude.ai', icon: '🤖' },
    { name: 'GitHub', url: 'https://github.com', icon: '💻' },
    { name: 'Gmail', url: 'https://gmail.com', icon: '📧' },
    { name: 'YouTube', url: 'https://youtube.com', icon: '📺' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'Reddit', url: 'https://reddit.com', icon: '🔴' }
];

function renderLinks(links) {
    const linksGrid = document.getElementById('links-grid');
    linksGrid.innerHTML = '';

    links.forEach((link, index) => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'link-item';
        linkElement.style.animationDelay = `${0.1 * index}s`;

        linkElement.innerHTML = `
            <div class="link-icon">${link.icon}</div>
            <div class="link-name">${link.name}</div>
            <div class="link-url">${new URL(link.url).hostname}</div>
        `;

        linksGrid.appendChild(linkElement);
    });
}

// Load links from storage or use defaults
chrome.storage.sync.get(['quickLinks'], (result) => {
    const links = result.quickLinks || defaultLinks;
    renderLinks(links);

    // Save default links if none exist
    if (!result.quickLinks) {
        chrome.storage.sync.set({ quickLinks: defaultLinks });
    }
});

// Focus search input on load
searchInput.focus();

// Settings Modal functionality
const settingsButton = document.getElementById('settings-button');
const editLinksButton = document.getElementById('edit-links-button');
const settingsModal = document.getElementById('settings-modal');
const closeSettings = document.getElementById('close-settings');
const searchEngineSelect = document.getElementById('search-engine-select');
const customSearchContainer = document.getElementById('custom-search-container');
const customSearchUrl = document.getElementById('custom-search-url');
const linksEditor = document.getElementById('links-editor');
const addLinkButton = document.getElementById('add-link-button');
const saveSettingsButton = document.getElementById('save-settings-button');
const resetButton = document.getElementById('reset-button');

// Open settings modal
function openSettings() {
    settingsModal.classList.add('active');
    loadSettingsData();
}

settingsButton.addEventListener('click', openSettings);
editLinksButton.addEventListener('click', openSettings);

// Close settings modal
function closeSettingsModal() {
    settingsModal.classList.remove('active');
}

closeSettings.addEventListener('click', closeSettingsModal);
settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
        closeSettingsModal();
    }
});

// Toggle custom search URL input
searchEngineSelect.addEventListener('change', (e) => {
    if (e.target.value === 'custom') {
        customSearchContainer.style.display = 'block';
    } else {
        customSearchContainer.style.display = 'none';
    }
});

// Load settings data
function loadSettingsData() {
    chrome.storage.sync.get(['searchEngine', 'customSearchUrl', 'quickLinks'], (result) => {
        // Load search engine setting
        searchEngineSelect.value = result.searchEngine || 'google';
        if (result.searchEngine === 'custom') {
            customSearchContainer.style.display = 'block';
            customSearchUrl.value = result.customSearchUrl || '';
        }

        // Load quick links
        const links = result.quickLinks || defaultLinks;
        renderLinksEditor(links);
    });
}

// Render links editor
function renderLinksEditor(links) {
    linksEditor.innerHTML = '';
    links.forEach((link, index) => {
        const editorItem = document.createElement('div');
        editorItem.className = 'link-editor-item';
        editorItem.innerHTML = `
            <input type="text" value="${link.icon}" placeholder="Icon" maxlength="2" data-index="${index}" data-field="icon">
            <input type="text" value="${link.name}" placeholder="Name" data-index="${index}" data-field="name">
            <input type="url" value="${link.url}" placeholder="URL" data-index="${index}" data-field="url">
            <button class="remove-link-button" data-index="${index}">×</button>
        `;
        linksEditor.appendChild(editorItem);
    });

    // Add event listeners for remove buttons
    document.querySelectorAll('.remove-link-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            removeLink(index);
        });
    });
}

// Add new link
addLinkButton.addEventListener('click', () => {
    chrome.storage.sync.get(['quickLinks'], (result) => {
        const links = result.quickLinks || defaultLinks;
        links.push({ name: 'New Link', url: 'https://example.com', icon: '🔗' });
        renderLinksEditor(links);
    });
});

// Remove link
function removeLink(index) {
    chrome.storage.sync.get(['quickLinks'], (result) => {
        const links = result.quickLinks || defaultLinks;
        links.splice(index, 1);
        renderLinksEditor(links);
    });
}

// Save settings
saveSettingsButton.addEventListener('click', () => {
    const searchEngine = searchEngineSelect.value;
    const customUrl = customSearchUrl.value;

    // Collect links from editor
    const linkInputs = linksEditor.querySelectorAll('.link-editor-item');
    const links = [];

    linkInputs.forEach(item => {
        const icon = item.querySelector('[data-field="icon"]').value;
        const name = item.querySelector('[data-field="name"]').value;
        const url = item.querySelector('[data-field="url"]').value;

        if (name && url) {
            links.push({ icon, name, url });
        }
    });

    // Save to storage
    chrome.storage.sync.set({
        searchEngine: searchEngine,
        customSearchUrl: customUrl,
        quickLinks: links
    }, () => {
        // Update display
        renderLinks(links);
        closeSettingsModal();

        // Show success feedback
        saveSettingsButton.textContent = '✓ Saved!';
        setTimeout(() => {
            saveSettingsButton.textContent = 'Save Settings';
        }, 2000);
    });
});

// Reset to default
resetButton.addEventListener('click', () => {
    if (confirm('Reset all settings to default? This cannot be undone.')) {
        chrome.storage.sync.set({
            searchEngine: 'google',
            customSearchUrl: '',
            quickLinks: defaultLinks
        }, () => {
            loadSettingsData();
            renderLinks(defaultLinks);
            resetButton.textContent = '✓ Reset!';
            setTimeout(() => {
                resetButton.textContent = 'Reset to Default';
            }, 2000);
        });
    }
});
