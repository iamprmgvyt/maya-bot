# Hướng dẫn Deploy lên GitHub Pages cho Maya Bot Website

## Tổng quan

Website Maya Bot của bạn sẽ được deploy tự động lên GitHub Pages khi bạn push code lên repository: `https://github.com/iamprmgvyt/maya-bot.git`

## Đã cấu hình sẵn

✅ GitHub Actions workflow đã được cấu hình
✅ Static export config đã có sẵn (`next.config.static.ts`)
✅ Build script đã được thêm vào (`build:static`)
✅ .gitignore đã được cấu hình

## Các bước để deploy

### 1️⃣ Kết nối với GitHub (nếu chưa làm)

```bash
cd /home/z/my-project
git init
```

### 2️⃣ Thêm remote repository

```bash
git remote add origin https://github.com/iamprmgvyt/maya-bot.git
```

### 3️⃣ Thêm tất cả file vào git

```bash
git add .
```

### 4️⃣ Commit code

```bash
git commit -m "Initial commit: Maya Bot website with multi-language support"
```

### 5️⃣ Push code lên GitHub

```bash
git branch -M main
git push -u origin main
```

### 6️⃣ Kích hoạt GitHub Pages

1. Truy cập repository của bạn: https://github.com/iamprmgvyt/maya-bot
2. Click vào tab **Settings**
3. Tìm và click **Pages** ở menu bên trái
4. Trong phần **Build and deployment**:
   - **Source**: Chọn **GitHub Actions**
   - (Không cần chọn branch vì đang dùng GitHub Actions)
5. Click **Save**

### 7️⃣ Chờ deployment hoàn tất

- GitHub Actions sẽ tự động chạy sau khi bạn push code
- Bạn có thể xem quá trình deploy ở tab **Actions**
- Sau khoảng 2-5 phút, website sẽ có sẵn

### 8️⃣ Truy cập website của bạn

Website sẽ có sẵn tại:
```
https://iamprmgvyt.github.io/maya-bot/
```

## Cập nhật website sau này

Khi bạn muốn cập nhật website:

```bash
cd /home/z/my-project
git add .
git commit -m "Update: mô tả thay đổi của bạn"
git push origin main
```

GitHub sẽ tự động deploy lại!

## Kiểm tra deployment

1. Vào tab **Actions** trên GitHub để xem workflow status
2. Nếu workflow thành công (✅), click vào deployment job
3. Tìm link đến website ở phần summary

## Khắc phục sự cố

### ❌ Build failed trong Actions

Kiểm tra log trong Actions để xem lỗi:
- Thường là do dependencies không đúng
- Hoặc có lỗi trong code

### ❌ Website hiển thị lỗi 404

1. Đảm bảo GitHub Pages đã được kích hoạt
2. Kiểm tra branch có tên là `main`
3. Chờ thêm vài phút vì deployment có thể mất thời gian

### ❌ Animation không hoạt động

1. Kiểm tra console của trình duyệt
2. Đảm bảo file JavaScript đang load đúng
3. Framer Motion cần được cài đặt và import đúng

## Tùy chọn: Custom Domain (tên miền riêng)

Nếu bạn muốn dùng tên miền riêng (ví dụ: `maya-bot.com`):

1. Mua domain từ nhà cung cấp (Namecheap, GoDaddy, v.v.)
2. Vào repository Settings → Pages
3. Phần **Custom domain**, nhập domain của bạn
4. Làm theo hướng dẫn cấu hình DNS của GitHub

## Thông tin kỹ thuật

- **Framework**: Next.js 16
- **Export**: Static HTML export cho GitHub Pages
- **Deploy method**: GitHub Actions
- **Languages**: English, Vietnamese, Hindi
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS + shadcn/ui

## Liên hệ

Nếu gặp vấn đề:
- GitHub Pages Docs: https://docs.github.com/en/pages
- Next.js Deployment: https://nextjs.org/docs/deployment

---

🎵 Website Maya Bot của bạn sẽ online sau vài phút! Chúc mừng!
