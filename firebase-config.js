// ════════════════════════════════════════════
//  إعداد Firebase — مطعم مشاوي ولحم بعجين الحدباء
// ════════════════════════════════════════════
// نستخدم Realtime Database.
// ملاحظة: مشروع alhadbaa الأصلي لم يزوّدنا برابط قاعدة البيانات (databaseURL)،
// فبنيناه بالصيغة الافتراضية. إذا كانت قاعدة بياناتك في منطقة أوروبا/آسيا
// غيّر السطر databaseURL أدناه إلى الرابط الظاهر في لوحة Firebase Realtime Database.
const firebaseConfig = {
  apiKey: "AIzaSyCYQ-NKCenoHEYEcLxykrq2taazvC-Dtuc",
  authDomain: "alhadbaa.firebaseapp.com",
  databaseURL: "https://alhadbaa-default-rtdb.firebaseio.com",
  projectId: "alhadbaa",
  storageBucket: "alhadbaa.firebasestorage.app",
  messagingSenderId: "609796798186",
  appId: "1:609796798186:web:b4c1029c9dfb5576094993",
  measurementId: "G-Z3MV2ZLNYG"
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
}

// ────────────────────────────────────────────
//  المنيو الأولي (يُعرض فوراً + يُرفع من لوحة الإدارة)
//  الصور الحالية (food1/food2/food3) مؤقتة وموزّعة عشوائياً.
//  غيّرها لاحقاً من لوحة الإدارة (رفع صورة أونلاين).
// ────────────────────────────────────────────
const initialData = {
  categories: [
    { id: 'lahmbajin', name: 'لحم بعجين', order: 0 },
    { id: 'kebab', name: 'كباب غنم', order: 1 },
    { id: 'pizza', name: 'بيتزا', order: 2 },
    { id: 'sides', name: 'أطباق جانبية', order: 3 },
    { id: 'drinks', name: 'المشروبات', order: 4 }
  ],
  items: [
    // ── لحم بعجين ──
    { id: 101, cat: 'lahmbajin', name: 'وسط', desc: 'عجينة رقيقة مقرمشة، لحم مفروم بلدي متبّل، طماطم وبهارات موصلية أصيلة', price: 5000, img: 'food1.jpg' },
    { id: 102, cat: 'lahmbajin', name: 'وسط بيض', desc: 'لحم بعجين وسط مع بيضة طازجة في الوسط', price: 5500, img: 'food3.jpg' },
    { id: 103, cat: 'lahmbajin', name: 'سوبر', desc: 'حجم أكبر، لحم مفروم وفير مع بهارات الحدباء المميزة', price: 6500, img: 'food1.jpg' },
    { id: 104, cat: 'lahmbajin', name: 'سوبر بيض', desc: 'لحم بعجين سوبر مع بيضة طازجة في الوسط', price: 7000, img: 'food3.jpg' },

    // ── كباب غنم ──
    { id: 201, cat: 'kebab', name: 'نص نفر (2 شيش)', desc: 'شيشتان كباب غنم عراقي مشوي على الفحم، خبز، سماق وبصل، مع المقبلات والطرشي والريحان', price: 13000, img: 'food2.jpg' },
    { id: 202, cat: 'kebab', name: 'نفر (3 شيش)', desc: 'ثلاث شيشات كباب غنم مشوي على الفحم مع الخبز والمقبلات', price: 19500, img: 'food2.jpg' },
    { id: 203, cat: 'kebab', name: 'نص نفر معلاك (2 شيش)', desc: 'شيشتان معلاك غنم (كبد وقلب) مشوي على الفحم مع الخبز والمقبلات', price: 13000, img: 'food2.jpg' },
    { id: 204, cat: 'kebab', name: 'نص نفر تكة دجاج (2 شيش)', desc: 'شيشتان تكة دجاج متبّلة مشوية على الفحم مع الخبز والمقبلات', price: 10000, img: 'food2.jpg' },

    // ── بيتزا ──
    { id: 301, cat: 'pizza', name: 'بيتزا لحم', desc: 'عجينة طرية، صلصة، جبن موزاريلا ولحم مفروم متبّل', price: 8500, img: 'food1.jpg' },
    { id: 302, cat: 'pizza', name: 'بيتزا دجاج', desc: 'عجينة طرية، جبن موزاريلا وقطع دجاج متبّلة', price: 8000, img: 'food3.jpg' },
    { id: 303, cat: 'pizza', name: 'بيتزا مشكل', desc: 'لحم ودجاج وخضار مع جبن موزاريلا', price: 8500, img: 'food1.jpg' },
    { id: 304, cat: 'pizza', name: 'بيتزا خضار', desc: 'خضار طازجة متنوعة مع جبن موزاريلا', price: 6000, img: 'food2.jpg' },
    { id: 305, cat: 'pizza', name: 'بيتزا مارغريتا', desc: 'صلصة الطماطم وجبن موزاريلا كلاسيكية', price: 5000, img: 'food3.jpg' },

    // ── أطباق جانبية ──
    { id: 401, cat: 'sides', name: 'كبة الموصل', desc: 'كبة موصلية أصيلة محشوة باللحم المفروم والبهارات', price: 8000, img: 'food2.jpg' },
    { id: 402, cat: 'sides', name: 'ماعون مقبلات', desc: 'تشكيلة مقبلات وطرشي متنوعة', price: 3500, img: 'food1.jpg' },

    // ── المشروبات ──
    { id: 501, cat: 'drinks', name: 'مشروبات غازية', desc: 'مشروب غازي بارد من اختيارك', price: 500, img: '' },
    { id: 502, cat: 'drinks', name: 'لبن', desc: 'لبن عيران بارد ومنعش', price: 500, img: '' },
    { id: 503, cat: 'drinks', name: 'شاي', desc: 'شاي عراقي', price: 500, img: '' },
    { id: 504, cat: 'drinks', name: 'ماء', desc: 'قنينة ماء معدني', price: 250, img: '' }
  ]
};
