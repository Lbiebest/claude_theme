// Load theme toggle state
chrome.storage.sync.get(['themeEnabled'], (result) => {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.checked = result.themeEnabled || false;
});

// Handle theme toggle
document.getElementById('theme-toggle').addEventListener('change', (e) => {
    const enabled = e.target.checked;

    // Save state
    chrome.storage.sync.set({ themeEnabled: enabled });

    // Send message to content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: 'toggleTheme',
                enabled: enabled
            }).catch(() => {
                // Ignore errors if content script isn't loaded
                console.log('Content script not available on this page');
            });
        }
    });

    // Show feedback
    const settingItem = document.querySelector('.setting-item');
    settingItem.style.borderColor = enabled ? '#CC785C' : '#E5E5E3';

    setTimeout(() => {
        settingItem.style.borderColor = '';
    }, 300);
});

// Add click effect to color boxes
document.querySelectorAll('.color-box').forEach(box => {
    box.addEventListener('click', () => {
        const color = box.style.backgroundColor;

        // Copy color to clipboard
        navigator.clipboard.writeText(color).then(() => {
            // Show feedback
            const originalBorder = box.style.border;
            box.style.border = '2px solid #CC785C';

            setTimeout(() => {
                box.style.border = originalBorder;
            }, 300);
        });
    });
});
