import { CONTRACT_ADDRESS, isValidContractAddress } from '@/lib/contract';

export default function ContractWarning() {
  if (isValidContractAddress(CONTRACT_ADDRESS)) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-red-900 border border-red-500 rounded-lg p-4 max-w-md z-50 shadow-lg">
      <div className="flex items-start gap-3">
        <span className="text-2xl">⚠️</span>
        <div className="flex-1">
          <h4 className="font-bold text-red-300 mb-1">عنوان العقد غير صحيح</h4>
          <p className="text-sm text-red-200 mb-2">
            يرجى تحديث ملف .env.local بعنوان عقد صحيح للاختبار
          </p>
          <div className="text-xs text-red-300 font-mono">
            العنوان الحالي: {CONTRACT_ADDRESS}
          </div>
        </div>
      </div>
    </div>
  );
}
