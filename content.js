// Claude Theme Content Script
// This script applies Claude's color scheme to web pages when enabled

const claudeTheme = {
    primary: '#CC785C',
    background: '#F5F5F3',
    text: '#1F1F1F',
    textSecondary: '#6B6B6B',
    border: '#E5E5E3',
    hover: '#B86A4F',
    accent: '#8B5E3C'
};

// Create style element
let styleElement = null;

function createThemeStyles() {
    return `
        /* Claude Theme Override */
        body {
            background-color: ${claudeTheme.background} !important;
            color: ${claudeTheme.text} !important;
        }
        
        a {
            color: ${claudeTheme.primary} !important;
        }
        
        a:hover {
            color: ${claudeTheme.hover} !important;
        }
        
        button, input[type="button"], input[type="submit"] {
            background-color: ${claudeTheme.primary} !important;
            color: white !important;
            border: 2px solid ${claudeTheme.primary} !important;
        }
        
        button:hover, input[type="button"]:hover, input[type="submit"]:hover {
            background-color: ${claudeTheme.hover} !important;
            border-color: ${claudeTheme.hover} !important;
        }
        
        input[type="text"], input[type="email"], input[type="password"], 
        textarea, select {
            background-color: white !important;
            color: ${claudeTheme.text} !important;
            border: 2px solid ${claudeTheme.border} !important;
        }
        
        input:focus, textarea:focus, select:focus {
            border-color: ${claudeTheme.primary} !important;
            outline: none !important;
            box-shadow: 0 0 0 3px rgba(204, 120, 92, 0.1) !important;
        }
    `;
}

function applyTheme() {
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'claude-theme-extension';
        styleElement.textContent = createThemeStyles();
        document.head.appendChild(styleElement);
    }
}

function removeTheme() {
    if (styleElement) {
        styleElement.remove();
        styleElement = null;
    }
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'toggleTheme') {
        if (request.enabled) {
            applyTheme();
        } else {
            removeTheme();
        }
        sendResponse({ success: true });
    }
});

// Check initial state
chrome.storage.sync.get(['themeEnabled'], (result) => {
    if (result.themeEnabled) {
        applyTheme();
    }
});
