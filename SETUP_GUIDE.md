# دليل تشغيل المشروع - Crypto Presale Landing Page 🚀

## 📋 المتطلبات الأساسية

### 1. Node.js
- **الإصدار المطلوب:** Node.js 16.0 أو أحدث
- **التحقق من الإصدار:**
```bash
node --version
npm --version
```

### 2. Git
- **التحقق من التثبيت:**
```bash
git --version
```

### 3. محرر نصوص
- **Visual Studio Code** (مُوصى به)
- **WebStorm**
- **Sublime Text**
- **Atom**

## 🚀 خطوات التشغيل

### الخطوة 1: تحميل المشروع

#### أ) من GitHub:
```bash
git clone https://github.com/taki-deen/DApp.git
cd DApp
```

#### ب) تحميل ZIP:
1. اذهب إلى: https://github.com/taki-deen/DApp
2. اضغط "Code" → "Download ZIP"
3. فك الضغط في مجلد مناسب
4. افتح Terminal في المجلد

### الخطوة 2: تثبيت المكتبات

```bash
npm install
```

**ملاحظة:** قد يستغرق التثبيت 2-5 دقائق حسب سرعة الإنترنت

### الخطوة 3: إعداد متغيرات البيئة

أنشئ ملف `.env.local` في المجلد الرئيسي:

```bash
# Windows
echo NEXT_PUBLIC_PRESALE_CONTRACT_ADDRESS=0x1234567890123456789012345678901234567890 > .env.local
echo NEXT_PUBLIC_NETWORK=bsc-testnet >> .env.local
echo NEXT_PUBLIC_RPC_URL=https://data-seed-prebsc-1-s1.binance.org:8545/ >> .env.local
echo NEXT_PUBLIC_CHAIN_ID=97 >> .env.local

# macOS/Linux
cat > .env.local << EOF
NEXT_PUBLIC_PRESALE_CONTRACT_ADDRESS=0x1234567890123456789012345678901234567890
NEXT_PUBLIC_NETWORK=bsc-testnet
NEXT_PUBLIC_RPC_URL=https://data-seed-prebsc-1-s1.binance.org:8545/
NEXT_PUBLIC_CHAIN_ID=97
EOF
```

### الخطوة 4: تشغيل المشروع

```bash
npm run dev
```

### الخطوة 5: فتح المتصفح

افتح المتصفح واذهب إلى:
```
http://localhost:3000
```

## 🖥️ أنظمة التشغيل المختلفة

### Windows

#### متطلبات إضافية:
- **Windows 10/11**
- **PowerShell** أو **Command Prompt**
- **Git for Windows**

#### خطوات خاصة بـ Windows:

1. **تحميل Node.js:**
   - اذهب إلى: https://nodejs.org
   - حمل LTS version
   - شغّل الملف المُحمّل

2. **تحميل Git:**
   - اذهب إلى: https://git-scm.com/download/win
   - حمل وثبت Git

3. **تشغيل Terminal:**
   ```cmd
   # فتح Command Prompt
   cmd

   # أو PowerShell
   powershell
   ```

### macOS

#### متطلبات إضافية:
- **macOS 10.15** أو أحدث
- **Xcode Command Line Tools**

#### خطوات خاصة بـ macOS:

1. **تثبيت Xcode Command Line Tools:**
   ```bash
   xcode-select --install
   ```

2. **تثبيت Node.js:**
   ```bash
   # باستخدام Homebrew
   brew install node

   # أو تحميل مباشر من nodejs.org
   ```

3. **تثبيت Git:**
   ```bash
   brew install git
   ```

### Linux (Ubuntu/Debian)

#### متطلبات إضافية:
- **Ubuntu 18.04** أو أحدث
- **curl**

#### خطوات خاصة بـ Linux:

1. **تحديث النظام:**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **تثبيت Node.js:**
   ```bash
   # تثبيت NodeSource repository
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   
   # تثبيت Node.js
   sudo apt-get install -y nodejs
   ```

3. **تثبيت Git:**
   ```bash
   sudo apt install git -y
   ```

### Linux (CentOS/RHEL/Fedora)

#### خطوات خاصة بـ Linux (Red Hat):

1. **تحديث النظام:**
   ```bash
   # CentOS/RHEL
   sudo yum update -y
   
   # Fedora
   sudo dnf update -y
   ```

2. **تثبيت Node.js:**
   ```bash
   # CentOS/RHEL
   sudo yum install nodejs npm -y
   
   # Fedora
   sudo dnf install nodejs npm -y
   ```

3. **تثبيت Git:**
   ```bash
   sudo yum install git -y  # CentOS/RHEL
   sudo dnf install git -y  # Fedora
   ```

## 🔧 حل المشاكل الشائعة

### مشكلة: `npm install` لا يعمل

**الحل:**
```bash
# مسح cache
npm cache clean --force

# حذف node_modules
rm -rf node_modules package-lock.json

# إعادة التثبيت
npm install
```

### مشكلة: Port 3000 مستخدم

**الحل:**
```bash
# تشغيل على port مختلف
npm run dev -- -p 3001

# أو قتل العملية
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

### مشكلة: Node.js version قديم

**الحل:**
```bash
# التحقق من الإصدار
node --version

# تثبيت إصدار جديد
# Windows: حمل من nodejs.org
# macOS: brew upgrade node
# Linux: اتبع الخطوات أعلاه
```

### مشكلة: Git غير مثبت

**الحل:**
```bash
# Windows: حمل من git-scm.com
# macOS: xcode-select --install
# Ubuntu: sudo apt install git
# CentOS: sudo yum install git
```

## 📱 تشغيل على الأجهزة المحمولة

### 1. الوصول من الشبكة المحلية

```bash
# تشغيل المشروع مع IP عام
npm run dev -- --hostname 0.0.0.0
```

### 2. العثور على IP الجهاز

```bash
# Windows
ipconfig

# macOS/Linux
ifconfig
# أو
ip addr show
```

### 3. الوصول من الهاتف

افتح المتصفح في الهاتف واذهب إلى:
```
http://YOUR_IP_ADDRESS:3000
```

مثال:
```
http://192.168.1.100:3000
```

## 🚀 نشر المشروع للإنتاج

### 1. بناء المشروع

```bash
npm run build
```

### 2. تشغيل الإنتاج

```bash
npm start
```

### 3. نشر على Vercel (مجاني)

```bash
# تثبيت Vercel CLI
npm i -g vercel

# نشر المشروع
vercel
```

### 4. نشر على Netlify

```bash
# بناء المشروع
npm run build

# رفع مجلد .next إلى Netlify
```

## 🔐 إعدادات الأمان

### 1. متغيرات البيئة الآمنة

```bash
# لا تشارك ملف .env.local
echo ".env.local" >> .gitignore
```

### 2. مفاتيح API

```bash
# استخدم متغيرات البيئة للأسرار
NEXT_PUBLIC_CONTRACT_ADDRESS=0x...
PRIVATE_KEY=your_private_key_here
```

## 📊 مراقبة الأداء

### 1. تحليل الحجم

```bash
npm run build
npm run analyze
```

### 2. مراقبة الذاكرة

```bash
# مراقبة استخدام الذاكرة
node --max-old-space-size=4096 node_modules/.bin/next dev
```

## 🆘 الدعم الفني

### في حالة المشاكل:

1. **تحقق من الإصدارات:**
   ```bash
   node --version
   npm --version
   git --version
   ```

2. **تحقق من الأخطاء:**
   ```bash
   npm run build
   ```

3. **مراجعة الـ Logs:**
   - افتح Developer Tools في المتصفح
   - تحقق من Console للأخطاء

4. **إعادة تشغيل كامل:**
   ```bash
   # حذف كل شيء وإعادة البدء
   rm -rf node_modules package-lock.json .next
   npm install
   npm run dev
   ```

## 📞 معلومات الاتصال

- **GitHub Repository:** https://github.com/taki-deen/DApp
- **Issues:** استخدم GitHub Issues للإبلاغ عن المشاكل

## ✅ قائمة التحقق السريع

- [ ] Node.js مثبت (16.0+)
- [ ] Git مثبت
- [ ] المشروع مُحمّل
- [ ] `npm install` تم بنجاح
- [ ] ملف `.env.local` موجود
- [ ] `npm run dev` يعمل
- [ ] الموقع يفتح على localhost:3000

---

**🎉 مبروك! مشروعك جاهز للتشغيل!**

