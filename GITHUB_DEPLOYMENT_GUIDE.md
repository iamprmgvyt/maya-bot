# 🚀 Hướng dẫn Deploy lên GitHub Pages cho Maya Bot Website

## ✅ Đã cấu hình sẵn!

Website của bạn đã được cấu hình sẵn để deploy lên GitHub Pages tự động:
- ✅ GitHub Actions workflow
- ✅ Static export configuration
- ✅ Build script
- ✅ .gitignore file

---

## 📝 Các bước đơn giản để deploy

### 1️⃣ Initialize Git (chỉ chạy lần đầu)

```bash
cd /home/z/my-project
git init
```

### 2️⃣ Thêm remote repository

```bash
git remote add origin https://github.com/iamprmgvyt/maya-bot.git
```

### 3️⃣ Add tất cả file

```bash
git add .
```

### 4️⃣ Commit code

```bash
git commit -m "Initial commit: Maya Bot website"
```

### 5️⃣ Push lên GitHub

```bash
git branch -M main
git push -u origin main
```

### 6️⃣ Kích hoạt GitHub Pages trên GitHub

1. Mở repository: https://github.com/iamprmgvyt/maya-bot
2. Click tab **Settings** ⚙️
3. Click **Pages** ở menu bên trái
4. Trong phần **Build and deployment**:
   - **Source**: Chọn **GitHub Actions** ⚙️
   - (Không cần chọn branch vì đang dùng Actions)
5. Click **Save** 💾

### 7️⃣ Chờ deploy hoàn tất

- GitHub Actions sẽ tự động chạy
- Thời gian deploy: ~2-5 phút
- Xem trạng thái ở tab **Actions** 🔄

### 8️⃣ Truy cập website của bạn

🎉 Website sẽ có tại:
```
https://iamprmgvyt.github.io/maya-bot/
```

---

## 🔄 Cập nhật website

Khi bạn muốn cập nhật website sau này:

```bash
cd /home/z/my-project
git add .
git commit -m "Mô tả thay đổi của bạn"
git push origin main
```

GitHub sẽ tự động deploy lại! 🚀

---

## 📂 Files đã được cấu hình

### GitHub Workflow
- File: `.github/workflows/deploy.yml`
- Tự động build và deploy khi push code lên branch `main`

### Static Export Config
- File: `next.config.static.ts`
- Cấu hình để export static HTML cho GitHub Pages

### TypeScript Config
- File: `tsconfig.json`
- Đã exclude các folder không cần: `examples`, `skills`, `mini-services`, `download`

### Git Ignore
- File: `.gitignore`
- Loại bỏ các file không cần upload (node_modules, .next, log files, v.v.)

---

## 🔍 Kiểm tra Deployment

### Xem workflow status
1. Vào tab **Actions** trên GitHub
2. Click vào workflow "Deploy to GitHub Pages"
3. Xem build process và kết quả

### Nếu deployment thành công ✅
- Bạn sẽ thấy link ở job summary
- Website sẽ có sẵn tại: `https://iamprmgvyt.github.io/maya-bot/`

### Nếu deployment thất bại ❌
- Kiểm tra error log trong Actions
- Thường là do build errors hoặc configuration issues

---

## 🐛 Khắc phục sự cố phổ biến

### ❌ Error: Build failed

**Nguyên nhân**: Code có lỗi TypeScript hoặc dependencies

**Giải pháp**:
```bash
# Kiểm tra build locally trước
bun run build

# Nếu có lỗi, fix lỗi rồi push lại
git add .
git commit -m "Fix build errors"
git push origin main
```

### ❌ Error: 404 Not Found

**Nguyên nhân**: GitHub Pages chưa được kích hoạt hoặc chưa deploy xong

**Giải pháp**:
1. Đảm bảo GitHub Pages đã được kích hoạt (Settings → Pages)
2. Chờ thêm vài phút
3. Kiểm tra workflow có đang chạy không

### ❌ Animation không hoạt động

**Nguyên nhân**: JavaScript files không load đúng

**Giải pháp**:
1. Mở browser console (F12)
2. Kiểm tra có error nào không
3. Đảm bảo `framer-motion` được cài đặt

### ❌ Styles bị vỡ

**Nguyên nhân**: CSS files không load đúng

**Giải pháp**:
1. Kiểm tra network tab trong dev tools
2. Đảm bảo CSS files được serve đúng
3. Clear cache và reload lại trang

---

## 🎯 Testing Local Build

Trước khi push, bạn có thể test build locally:

```bash
# Build static export
cp next.config.static.ts next.config.ts
bun run build

# Xem kết quả trong folder out/
ls out/

# Test với local server (tùy chọn)
cd out
python3 -m http.server 8000
# Truy cập http://localhost:8000
```

---

## 🌐 Custom Domain (Tùy chọn)

Nếu bạn muốn dùng domain riêng (ví dụ: `maya-bot.com`):

### 1. Mua domain
- Namecheap, GoDaddy, Cloudflare, v.v.

### 2. Cấu hình trên GitHub
1. Vào repository Settings → Pages
2. Phần **Custom domain**, nhập domain của bạn
3. Click **Save**

### 3. Cấu hình DNS
Theo hướng dẫn của GitHub:
- Thêm CNAME record: `iamprmgvyt.github.io`
- Hoặc A records trỏ đến GitHub's IPs

Xem chi tiết: [GitHub Pages - Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## 📊 Website Structure

Sau khi deploy, website sẽ có các pages:

```
/                          → Home page
/tos                       → Terms of Service
/privacy                   → Privacy Policy
/404.html                  → 404 Page
```

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Languages**: English, Vietnamese, Hindi
- **Hosting**: GitHub Pages

---

## 📚 Tài liệu tham khảo

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/deployment/static-exports)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## ✨ Tính năng của Website

- ✅ Multi-language support (EN/VI/HI)
- ✅ Beautiful animations (Hero section)
- ✅ Responsive design (Mobile-friendly)
- ✅ Dark mode ready
- ✅ Fast static loading
- ✅ SEO optimized

---

## 🎉 Chúc mừng!

Website Maya Bot của bạn sẽ online sau vài phút! 🚀🎵

**Website URL**: https://iamprmgvyt.github.io/maya-bot/

---

*Questions? Check GitHub Actions logs for deployment status!*
