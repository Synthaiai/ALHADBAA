# مطعم مشاوي ولحم بعجين الحدباء 🔴

موقع منيو وطلبات لمطعم الحدباء — *من موصل الحدباء إلى بغداد السلام*.
واجهة عربية (RTL)، قاعدة بيانات Firebase Realtime، وطلب عبر واتساب.

## الملفات
| الملف | الوصف |
|------|--------|
| `index.html` | موقع الزبائن (الترحيب + المنيو + السلة + الطلب عبر واتساب) |
| `admin.html` | **لوحة الإدارة** — تحكم كامل بالمنيو أونلاين |
| `firebase-config.js` | إعداد Firebase + المنيو الأولي |
| `manifest.json` | إعداد تطبيق الويب (PWA) |
| `_headers` / `_redirects` | أمان وأداء ومسارات Cloudflare Pages |
| `database.rules.json` | قواعد أمان Firebase Realtime Database |

## لوحة الإدارة
- الرابط: `https://<موقعك>/admin.html`  (أو مختصراً `/admin`)
- كلمة المرور: `AlHadbaa2026`
- منها: إضافة/تعديل/حذف الأصناف، إدارة الأقسام، ورفع الصور أونلاين (تُضغط داخل المتصفح وتُخزّن مباشرة بقاعدة البيانات — بدون أي خدمة تخزين مدفوعة).

## النشر على Cloudflare Pages (بدون سطر أوامر)
1. ادخل [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. اختر مستودع `Synthaiai/ALHADBAA`.
3. إعدادات البناء: اترك **Build command** فارغاً، و**Output directory** = `/` (الجذر). الموقع ملفات ثابتة فلا يحتاج بناء.
4. **Save and Deploy** → يطلع لك رابط خفيف وسريع مثل `alhadbaa.pages.dev`.
5. رؤوس الأمان والتخزين تُطبّق تلقائياً من ملف `_headers`.

> HTTPS/التشفير مفعّل تلقائياً على Cloudflare (TLS) وعلى Firebase.

## تطبيق قواعد أمان قاعدة البيانات
Firebase Console → **Realtime Database** → **Rules** → الصق محتوى `database.rules.json` → **Publish**.
- القراءة عامة (المنيو للزبائن)، والكتابة على مسار المنيو فقط مع التحقق من صحة البيانات.
- **للأمان الكامل للكتابة:** يُنصح بتفعيل Firebase Authentication لتسجيل دخول لوحة الإدارة (متوفر كتحسين لاحق).

## ملاحظات
- مفتاح Firebase (`apiKey`) عام بطبيعته للتطبيقات، والحماية الفعلية عبر القواعد أعلاه.
- إذا كانت قاعدة بياناتك بمنطقة أوروبا/آسيا، عدّل `databaseURL` في `firebase-config.js`.
