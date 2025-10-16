# بنية المشروع النظيفة

## 📁 البنية الحالية

```
DApp/
├── 📁 frontend/              # تطبيق Next.js
│   ├── 📁 components/        # مكونات React
│   ├── 📁 contexts/          # سياقات React
│   ├── 📁 hooks/             # hooks مخصصة
│   ├── 📁 lib/               # مكتبات وملفات التكوين
│   ├── 📁 pages/             # صفحات Next.js
│   ├── 📁 styles/            # ملفات CSS
│   ├── 📁 public/            # ملفات ثابتة
│   ├── 📄 package.json       # تبعيات Frontend
│   ├── 📄 .env.local         # متغيرات البيئة
│   └── 📄 README.md          # دليل Frontend
│
├── 📁 smart-contracts/       # العقود الذكية
│   ├── 📁 contracts/         # عقود Solidity
│   ├── 📁 scripts/           # سكريبت النشر
│   ├── 📁 test/              # اختبارات العقود
│   ├── 📄 package.json       # تبعيات العقود
│   └── 📄 README.md          # دليل العقود
│
├── 📄 package.json           # ملف التحكم الرئيسي
├── 📄 .env.local             # متغيرات البيئة الرئيسية
├── 📄 .gitignore             # ملف تجاهل Git
├── 📄 README.md              # دليل المشروع الرئيسي
└── 📄 QUICK_START_SEPARATED.md # دليل البدء السريع
```

## ✅ الملفات المحذوفة

تم حذف الملفات والمجلدات المكررة التالية:
- `components/` (مكرر)
- `contexts/` (مكرر)
- `hooks/` (مكرر)
- `lib/` (مكرر)
- `pages/` (مكرر)
- `styles/` (مكرر)
- `public/` (مكرر)
- `contracts/` (العقود القديمة)
- `node_modules/` (التبعيات القديمة)
- `.next/` (ملفات البناء القديمة)
- ملفات التكوين المكررة:
  - `next.config.js`
  - `postcss.config.js`
  - `tailwind.config.js`
  - `tsconfig.json`
  - `global.d.ts`
  - `next-env.d.ts`
- ملفات التوثيق المكررة:
  - `QUICK_START.md`
  - `SETUP_GUIDE.md`
  - `GUIDE_AR.md`

## 🚀 الاستخدام

### تشغيل Frontend
```bash
npm run frontend:dev
```

### تطوير العقود
```bash
npm run contracts:compile
npm run contracts:test
```

### تثبيت كل شيء
```bash
npm run install:all
```
