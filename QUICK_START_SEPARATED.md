# دليل البدء السريع - المشروع المقسم

تم تقسيم المشروع إلى مجلدين منفصلين:

## 📁 بنية المشروع الجديدة

```
DApp/
├── frontend/           # تطبيق Next.js
├── smart-contracts/    # العقود الذكية
└── contracts/          # العقود القديمة (يمكن حذفها)
```

## 🚀 البدء السريع

### 1. تشغيل Frontend

```bash
# من المجلد الرئيسي
npm run frontend:dev

# أو من داخل مجلد frontend
cd frontend
npm run dev
```

### 2. تطوير العقود الذكية

```bash
# من المجلد الرئيسي
npm run contracts:compile
npm run contracts:test
npm run contracts:deploy:testnet

# أو من داخل مجلد smart-contracts
cd smart-contracts
npm run compile
npm run test
npm run deploy:testnet
```

### 3. تثبيت جميع التبعيات

```bash
npm run install:all
```

## 📋 الأوامر المتاحة

### Frontend
- `npm run frontend:dev` - تشغيل خادم التطوير
- `npm run frontend:build` - بناء المشروع للإنتاج
- `npm run frontend:start` - تشغيل خادم الإنتاج

### Smart Contracts
- `npm run contracts:compile` - تجميع العقود
- `npm run contracts:test` - تشغيل الاختبارات
- `npm run contracts:deploy` - نشر العقد محلياً
- `npm run contracts:deploy:testnet` - نشر العقد على BSC Testnet

### عامة
- `npm run dev` - تشغيل Frontend (افتراضي)
- `npm run build` - بناء كل شيء
- `npm run test` - تشغيل اختبارات العقود

## 🔧 إعداد البيئة

1. **للـ Frontend:**
   ```bash
   cd frontend
   cp .env.example .env.local
   # تحديث عنوان العقد في .env.local
   ```

2. **للعقود الذكية:**
   ```bash
   cd smart-contracts
   # إضافة مفاتيح الخصوصية في hardhat.config.js
   ```

## 🌐 الروابط

- **Frontend:** http://localhost:3000
- **BSC Testnet:** https://testnet.bscscan.com

## 📚 المزيد من المعلومات

- `frontend/README.md` - دليل Frontend المفصل
- `smart-contracts/README.md` - دليل العقود الذكية المفصل
- `README.md` - دليل المشروع الرئيسي
