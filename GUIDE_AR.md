# دليل الاستخدام - صفحة البيع المسبق 🚀

## المميزات ✨

✅ **نظام لغتين** (عربي/إنجليزي مع دعم RTL)
✅ **ربط المحفظة** (MetaMask، WalletConnect)
✅ **بيانات حية** من البلوكشين
✅ **نظام شراء آمن** مع التحقق
✅ **تصميم متجاوب** للموبايل والديسكتوب
✅ **أداء سريع** مع Next.js

## التشغيل السريع 🏃

### 1. تثبيت المكتبات

```bash
npm install
```

### 2. إعداد البيئة

أنشئ ملف `.env.local`:

```env
NEXT_PUBLIC_PRESALE_CONTRACT_ADDRESS=عنوان_العقد_الذكي
NEXT_PUBLIC_NETWORK=bsc-testnet
NEXT_PUBLIC_RPC_URL=https://data-seed-prebsc-1-s1.binance.org:8545/
NEXT_PUBLIC_CHAIN_ID=97
```

### 3. تشغيل المشروع

```bash
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000)

## نظام اللغات 🌍

### كيف يعمل

- زر تبديل اللغة في الرأسية
- يحفظ اختيارك تلقائياً
- يغير اتجاه الصفحة للعربي (RTL)
- جميع النصوص من ملف واحد

### إضافة ترجمات جديدة

عدّل `lib/translations.ts`:

```typescript
export const translations = {
  en: {
    mySection: {
      title: 'My Title'
    }
  },
  ar: {
    mySection: {
      title: 'عنواني'
    }
  }
};
```

استخدمها في المكون:

```tsx
import { useLanguage } from '@/contexts/LanguageContext';

export default function MyComponent() {
  const { t } = useLanguage();
  return <h1>{t.mySection.title}</h1>;
}
```

## العقد الذكي المطلوب 📋

يجب أن يحتوي عقدك على:

```solidity
function buyTokens() external payable
function tokenPrice() external view returns (uint256)
function tokensSold() external view returns (uint256)
function tokensAvailable() external view returns (uint256)
function endTime() external view returns (uint256)

// للتوزيع (اختياري)
function totalSupply() external view returns (uint256)
function presaleAllocation() external view returns (uint256)
function liquidityAllocation() external view returns (uint256)
function marketingAllocation() external view returns (uint256)
function teamAllocation() external view returns (uint256)
function reserveAllocation() external view returns (uint256)
```

عقد مثالي متوفر في `contracts/PresaleSample.sol`

## البنية 📁

```
├── components/           # مكونات React
│   ├── Header.tsx       # الرأسية + المحفظة
│   ├── Hero.tsx         # البانر + الإحصائيات
│   ├── About.tsx        # معلومات المشروع
│   ├── Tokenomics.tsx   # توزيع العملة
│   ├── PresalePanel.tsx # واجهة الشراء
│   ├── Roadmap.tsx      # الخارطة الزمنية
│   ├── Team.tsx         # الفريق
│   └── Footer.tsx       # التذييل
├── contexts/            # السياقات
│   ├── Web3Context.tsx  # إدارة المحفظة
│   └── LanguageContext.tsx # اللغات
├── hooks/               # Hooks مخصصة
│   ├── useContractData.ts # بيانات العقد
│   └── useTokenomics.ts   # بيانات التوزيع
└── lib/                 # أدوات
    ├── contract.ts      # العقد والإعدادات
    └── translations.ts  # ملفات اللغة
```

## الاختبار على BSC Testnet 🧪

1. بدّل MetaMask إلى BSC Testnet
2. احصل على BNB مجاني من [الفوست](https://testnet.bnbchain.org/faucet-smart)
3. انشر عقدك أو استخدم العقد المثالي
4. حدّث `.env.local` بعنوان العقد
5. جرّب عملية الشراء

## النشر للإنتاج 🚀

```bash
npm run build
npm start
```

## التخصيص 🎨

### الألوان

عدّل `tailwind.config.js`:

```js
colors: {
  primary: '#5B21B6',  // بنفسجي
  accent: '#FBBF24',   // ذهبي
  dark: '#0F172A',     // أزرق داكن
}
```

### التوزيع (Tokenomics)

إذا لم يكن عقدك يحتوي على دوال التوزيع، عدّل `hooks/useTokenomics.ts` لاستخدام قيم ثابتة.

## نصائح مهمة 💡

### تبديل الشبكة تلقائياً

عند الضغط على "شراء" والشبكة خاطئة، سيظهر زر لإضافة/تبديل الشبكة تلقائياً.

### رسائل الخطأ

جميع رسائل الخطأ مترجمة وواضحة:
- محفظة غير متصلة
- شبكة خاطئة  
- رصيد غير كافٍ
- معاملة مرفوضة

### البيانات الحية

- الإحصائيات تتحدث كل 10 ثوان
- التوزيع يُجلب من العقد مباشرة
- العداد التنازلي حي

## الدعم الفني 💬

للمساعدة، راجع:
- التعليقات في الكود
- العقد المثالي في `/contracts`
- ملف README الرئيسي

## استعمال نظام اللغتين

### في أي مكون:

```tsx
import { useLanguage } from '@/contexts/LanguageContext';

export default function MyComponent() {
  const { t, language, isRTL } = useLanguage();
  
  return (
    <div>
      <h1>{t.hero.title}</h1>
      <p>اللغة الحالية: {language}</p>
      <p>RTL: {isRTL ? 'نعم' : 'لا'}</p>
    </div>
  );
}
```

### تبديل اللغة برمجياً:

```tsx
const { setLanguage } = useLanguage();

<button onClick={() => setLanguage('ar')}>عربي</button>
<button onClick={() => setLanguage('en')}>English</button>
```

جاهز! 🎉

