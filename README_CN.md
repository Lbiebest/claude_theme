# Claude 主题 - Chrome 扩展

一个将 Claude.ai 优雅设计系统带到您浏览器的精美 Chrome 扩展。

![Version](https://img.shields.io/badge/version-1.1.0-orange)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ 特性

- **🎨 Claude 主题新标签页**
  - 灵感来自 Claude.ai 的精美简约设计
  - 实时时钟与基于时间的问候语
  - 可自定义搜索引擎的快速搜索功能
  - 完全可自定义的快捷链接

- **🎯 主题切换**
  - 将 Claude 的配色方案应用到任何网站
  - 从扩展弹窗轻松开关
  - 跨会话保存持久化设置

- **⚙️ 完全自定义 (v1.1.0 新增)**
  - 选择您喜欢的搜索引擎（Google、Bing、DuckDuckGo、百度或自定义）
  - 添加、编辑和删除快捷链接
  - 使用 Emoji 自定义链接图标
  - 所有设置通过 Chrome 同步跨设备保存

- **🎨 调色板**
  - 主色：`#CC785C` (珊瑚橙)
  - 背景：`#F5F5F3` (温暖浅灰)
  - 文字：`#1F1F1F` (近黑色)
  - 强调色：`#8B5E3C` (棕色)

## 📦 安装

### 从源码安装（开发者模式）

1. **下载扩展**
   ```bash
   git clone https://github.com/dantaKing/claude-theme.git
   # 或下载并解压 ZIP 文件
   ```

2. **打开 Chrome 扩展页面**
   - 访问 `chrome://extensions/`
   - 或点击菜单 → 更多工具 → 扩展程序

3. **启用开发者模式**
   - 打开右上角的"开发者模式"开关

4. **加载扩展**
   - 点击"加载已解压的扩展程序"
   - 选择 `claude_theme` 文件夹
   - 扩展现在应该出现在您的扩展列表中

5. **固定扩展**（可选）
   - 点击 Chrome 工具栏中的拼图图标
   - 找到"Claude Theme"并点击固定图标

## 🚀 使用方法

### 新标签页
- 打开新标签页即可看到 Claude 主题页面
- 使用搜索栏搜索 Google 或导航到 URL
- 点击快捷链接访问您喜爱的网站

### 主题切换
1. 点击 Chrome 工具栏中的 Claude Theme 图标
2. 切换"主题切换"以将 Claude 的颜色应用到当前网站
3. 关闭切换以恢复原始设计

### 自定义设置 (NEW)
1. 点击新标签页右上角的设置图标（⚙️齿轮）
2. **搜索引擎**：从 Google、Bing、DuckDuckGo、百度中选择，或设置自定义 URL
3. **快捷链接**：添加、编辑或删除链接，使用 Emoji 作为图标！
4. 点击"保存设置"应用更改
5. 使用"重置为默认"恢复初始设置

详细使用说明请查看 `CUSTOMIZATION_CN.md` 文件。

### 调色板参考
- 点击弹窗中的任何颜色框即可将颜色代码复制到剪贴板

## 📁 项目结构

```
claude_theme/
├── manifest.json          # 扩展配置
├── newtab.html           # 新标签页 HTML
├── newtab.css            # 新标签页样式
├── newtab.js             # 新标签页功能
├── popup.html            # 扩展弹窗 HTML
├── popup.css             # 扩展弹窗样式
├── popup.js              # 扩展弹窗功能
├── content.js            # 用于主题注入的内容脚本
├── icons/                # 扩展图标
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── README.md             # 英文说明文档
└── README_CN.md          # 中文说明文档
```

## 🎨 设计理念

本扩展的灵感来自 Claude.ai 简洁、优雅且用户友好的设计系统。配色方案和 UI 元素经过精心选择，旨在创造平静、专注的浏览体验。

## 🛠️ 开发

### 修改代码

1. 编辑源文件
2. 访问 `chrome://extensions/`
3. 点击 Claude Theme 扩展卡片上的刷新图标
4. 测试您的更改

### 自定义快捷链接

快捷链接存储在 Chrome 的同步存储中。您可以在 `newtab.js` 中修改默认链接：

```javascript
const defaultLinks = [
    { name: 'Claude', url: 'https://claude.ai', icon: '🤖' },
    // 在此添加您的自定义链接
];
```

## 📝 许可证

MIT 许可证 - 欢迎随意使用和修改！

## 👤 作者

**dantaKing**

## 🙏 致谢

- 设计灵感来自 [Claude.ai](https://claude.ai/)
- 为 Claude 社区倾情打造

## 📸 截图

### 新标签页
带有搜索和快捷链接的简洁新标签页。

### 扩展弹窗
切换主题并查看调色板。

---

**享受您的 Claude 主题浏览体验！🎨✨**
