# Chrome 扩展打包指南

## 关于私钥文件

已生成的 `claude_theme.pem` 文件是您的扩展私钥，用于：
- 保持扩展 ID 的一致性
- 对扩展进行签名
- 发布更新时保持扩展的身份

> **⚠️ 重要提示**: 请妥善保管此文件，不要将其上传到公共代码仓库！

## 打包扩展

### 方法 1: 使用 Chrome 打包

1. **打开扩展页面**
   ```
   chrome://extensions/
   ```

2. **启用开发者模式**

3. **点击"打包扩展程序"按钮**

4. **填写信息**
   - 扩展根目录：`d:\Desktop\claude_theme`
   - 私有密钥文件（可选）：`d:\Desktop\claude_theme\claude_theme.pem`

5. **完成**
   - 生成 `claude_theme.crx` (扩展安装包)
   - 如果是首次打包，会生成 `.pem` 文件（我们已经有了）

### 方法 2: 使用命令行

```bash
# 使用 Chrome 命令行打包
chrome --pack-extension=d:\Desktop\claude_theme --pack-extension-key=d:\Desktop\claude_theme\claude_theme.pem
```

## 发布到 Chrome Web Store

### 准备工作

1. **创建开发者账号**
   - 访问 [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
   - 支付一次性注册费（$5 USD）

2. **准备资源**
   - ✅ 扩展压缩包（.zip）
   - ✅ 图标（已有：128x128）
   - 📸 屏幕截图（需要准备：1280x800 或 640x400）
   - 📝 宣传图片（可选：440x280）

### 上传步骤

1. **创建 ZIP 文件**
   ```bash
   # 不包含 .pem 文件
   cd d:\Desktop
   Compress-Archive -Path claude_theme\* -DestinationPath claude_theme.zip -Force -ExcludeVia @('*.pem', '.git', 'claude_theme.pem')
   ```

2. **上传到 Web Store**
   - 登录开发者控制台
   - 点击"新增项目"
   - 上传 `claude_theme.zip`
   - 填写商店信息（见下文）

### 商店信息模板

#### 简短描述（中文）
```
将 Claude.ai 的优雅设计带到您的浏览器 - 精美的新标签页和主题切换
```

#### 详细描述（中文）
```
Claude Theme 是一个优雅的 Chrome 扩展，为您的浏览器带来 Claude.ai 的设计美学。

主要功能：
• 精美的新标签页，包含实时时钟和快捷链接
• 智能问候语（根据时间变化）
• 快速搜索功能
• 主题切换 - 将 Claude 的配色应用到任何网站
• 完整的调色板参考

设计特点：
• 使用 Claude.ai 的标志性配色方案
• 流畅的动画和过渡效果
• 响应式设计，适配所有屏幕尺寸
• 简洁优雅的用户界面
```

#### 类别
- 工具 (Productivity)

#### 语言
- 中文（简体）
- English

## 文件结构

打包时应包含：
```
claude_theme/
├── manifest.json          ✅ 必需
├── newtab.html           ✅ 必需
├── newtab.css            ✅ 必需
├── newtab.js             ✅ 必需
├── popup.html            ✅ 必需
├── popup.css             ✅ 必需
├── popup.js              ✅ 必需
├── content.js            ✅ 必需
├── icons/                ✅ 必需
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── README.md             ❌ 可选（不影响功能）
├── README_CN.md          ❌ 可选（不影响功能）
└── claude_theme.pem      ❌ 不要打包！（保密）
```

## 版本更新

更新扩展时：

1. **修改代码**

2. **更新版本号**
   - 编辑 `manifest.json` 中的 `version` 字段
   - 例如：从 `1.0.0` 改为 `1.0.1`

3. **重新打包**
   - 使用相同的 `.pem` 文件
   - 这样可以保持扩展 ID 不变

4. **上传更新**
   - 在开发者控制台上传新的 ZIP 文件

## 本地安装（开发/测试）

不需要打包，直接：
1. 访问 `chrome://extensions/`
2. 启用开发者模式
3. 点击"加载已解压的扩展程序"
4. 选择 `d:\Desktop\claude_theme` 文件夹

## 安全提示

✅ **应该做的：**
- 将 `claude_theme.pem` 保存在安全的地方
- 添加到 `.gitignore`（已完成）
- 定期备份私钥文件

❌ **不应该做的：**
- 不要分享私钥文件
- 不要上传到 GitHub 等公共仓库
- 不要包含在分发的 ZIP 文件中

---

**准备好发布您的扩展了！🚀**
