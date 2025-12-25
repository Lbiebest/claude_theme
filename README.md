# Claude Theme - Chrome Extension

A beautiful Chrome extension that brings Claude.ai's elegant design system to your browser.

![Version](https://img.shields.io/badge/version-1.1.0-orange)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Features

- **🎨 Claude-Themed New Tab Page**
  - Beautiful, minimal design inspired by Claude.ai
  - Live clock with time-based greetings
  - Quick search functionality with customizable search engines
  - Fully customizable quick links to your favorite sites

- **🎯 Theme Toggle**
  - Apply Claude's color palette to any website
  - Easy on/off toggle from the extension popup
  - Persistent settings saved across sessions

- **⚙️ Full Customization (NEW in v1.1.0)**
  - Choose your preferred search engine (Google, Bing, DuckDuckGo, Baidu, or Custom)
  - Add, edit, and remove quick links
  - Customize link icons with emojis
  - All settings sync across devices via Chrome Sync

- **🎨 Color Palette**
  - Primary: `#CC785C` (Coral/Orange)
  - Background: `#F5F5F3` (Warm Light Gray)
  - Text: `#1F1F1F` (Near Black)
  - Accent: `#8B5E3C` (Brown)

## 📦 Installation

### Install from Source (Developer Mode)

1. **Download the extension**
   ```bash
   git clone https://github.com/dantaKing/claude-theme.git
   # or download and extract the ZIP file
   ```

2. **Open Chrome Extensions page**
   - Navigate to `chrome://extensions/`
   - Or click Menu → More Tools → Extensions

3. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top-right corner

4. **Load the extension**
   - Click "Load unpacked"
   - Select the `claude_theme` folder
   - The extension should now appear in your extensions list

5. **Pin the extension** (optional)
   - Click the puzzle icon in Chrome toolbar
   - Find "Claude Theme" and click the pin icon

## 🚀 Usage

### New Tab Page
- Open a new tab to see the Claude-themed page
- Use the search bar to search Google or navigate to URLs
- Click on quick links to visit your favorite sites

### Theme Toggle
1. Click the Claude Theme icon in your Chrome toolbar
2. Toggle "Theme Toggle" to apply Claude's colors to the current website
3. Toggle off to return to the original design

### Customization Settings
1. Click the settings icon (gear) in the top-right of the new tab page
2. **Search Engine**: Choose from Google, Bing, DuckDuckGo, Baidu, or set a custom URL
3. **Quick Links**: Add, edit, or remove links. Use emojis for icons!
4. Click "Save Settings" to apply changes
5. Use "Reset to Default" to restore original settings

### Color Palette Reference
- Click on any color box in the popup to copy the color code to your clipboard

## 📁 Project Structure

```
claude_theme/
├── manifest.json          # Extension configuration
├── newtab.html           # New tab page HTML
├── newtab.css            # New tab page styles
├── newtab.js             # New tab page functionality
├── popup.html            # Extension popup HTML
├── popup.css             # Extension popup styles
├── popup.js              # Extension popup functionality
├── content.js            # Content script for theme injection
├── icons/                # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md             # This file
```

## 🎨 Design Philosophy

This extension is inspired by Claude.ai's clean, elegant, and user-friendly design system. The color palette and UI elements are carefully chosen to create a calm, focused browsing experience.

## 🛠️ Development

### Making Changes

1. Edit the source files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the Claude Theme extension card
4. Test your changes

### Customizing Quick Links

Quick links are stored in Chrome's sync storage. You can modify the default links in `newtab.js`:

```javascript
const defaultLinks = [
    { name: 'Claude', url: 'https://claude.ai', icon: '🤖' },
    // Add your custom links here
];
```

## 📝 License

MIT License - feel free to use and modify as you wish!

## 👤 Author

**dantaKing**

## 🙏 Acknowledgments

- Design inspired by [Claude.ai](https://claude.ai/)
- Built with love for the Claude community

## 📸 Screenshots

### New Tab Page
A clean, minimal new tab page with search and quick links.

### Extension Popup
Toggle theme and view the color palette.

---

**Enjoy your Claude-themed browsing experience! 🎨✨**
