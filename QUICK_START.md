# البدء السريع - Crypto Presale Landing Page ⚡

## 🚀 التشغيل في 5 دقائق

### 1. تثبيت المتطلبات
```bash
# تحقق من Node.js (مطلوب 16.0+)
node --version

# إذا لم يكن مثبتاً، حمل من: https://nodejs.org
```

### 2. تحميل المشروع
```bash
git clone https://github.com/taki-deen/DApp.git
cd DApp
```

### 3. تثبيت المكتبات
```bash
npm install
```

### 4. إنشاء ملف البيئة
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

### 5. تشغيل المشروع
```bash
npm run dev
```

### 6. فتح المتصفح
```
http://localhost:3000
```

## 🎯 المميزات

- ✅ **لغتين:** عربي/إنجليزي مع RTL
- ✅ **ثيمين:** ليلي/نهاري
- ✅ **Web3:** MetaMask integration
- ✅ **بيانات حية:** من البلوكشين
- ✅ **تصميم متجاوب:** موبايل + ديسكتوب

## 🔧 حلول سريعة

### Port 3000 مستخدم؟
```bash
npm run dev -- -p 3001
```

### مشكلة في npm install؟
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### الوصول من الهاتف؟
```bash
npm run dev -- --hostname 0.0.0.0
# ثم استخدم IP الجهاز: http://YOUR_IP:3000
```

## 📱 أنظمة التشغيل

### Windows
1. حمل Node.js من nodejs.org
2. حمل Git من git-scm.com
3. اتبع الخطوات أعلاه

### macOS
```bash
# تثبيت Homebrew أولاً
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# تثبيت Node.js
brew install node git
```

### Ubuntu/Debian
```bash
sudo apt update
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs git
```

## 🚀 للنشر

### Vercel (مجاني)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# ارفع مجلد .next
```

---

**📖 للمزيد من التفاصيل: راجع SETUP_GUIDE.md**
