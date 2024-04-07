const states = [
    "أدرار",
    " الشلف",
    "الأغواط",
    "أم البواقي",
    "باتنة",
    " بجاية",
    "بسكرة",
    "بشار",
    "البليدة",
    "البويرة",
    "تمنراست",
    "تبسة",
    "تلمسان",
    "تيارت",
    "تيزي وزو",
    "الجزائر",
    "الجلفة",
    "جيجل",
    "سطيف",
    "سعيدة",
    "سكيكدة",
    "سيدي بلعباس",
    "عنابة",
    "قالمة",
    "قسنطينة",
    "المدية",
    "مستغانم",
    "المسيلة",
    "معسكر",
    "ورقلة",
    "وهران",
    "البيض",
    "إليزي",
    "برج بوعريريج",
    "بومرداس",
    "الطارف",
    "تندوف",
    "تيسمسيلت",
    "الوادي",
    "خنشلة",
    "سوق أهراس",
    "تيبازة",
    "ميلة",
    "عين الدفلة",
    "النعامة",
    "عين تيموشنت",
    "غرداية",
    "غليزان",
    "تيميمون",
    "برج باجي مختار",
    "أولاد جلال",
    "بني عباس",
    "عين صالح",
    "عين قزام",
    "تقرت",
    "جانت",
    "المغير",
    "المنيعة"
];
const cities = [
    [
        "تيمقتن",
        "بودة",
        "أولاد أحمد تيمي",
        "أدرار",
        "فنوغيل",
        "إن زغمير",
        "رقان",
        "سالي",
        "السبع",
        "تسابيت",
        "تامست",
        "تامنطيط",
        "تيت",
        "زاوية كنتة",
        "اقبلي",
        "أولف"
    ],
    [
        "تلعصة",
        "الزبوجة",
        "الحجاج",
        "أولاد بن عبد القادر",
        "عين مران",
        "بريرة",
        "أولاد عباس",
        "وادي الفضة",
        "بني راشد",
        "الهرانفة",
        "تاجنة",
        "المرسى",
        "الشلف",
        "أم الدروع",
        "سنجاس",
        "سيدي عبد الرحمن",
        "سيدي عكاشة",
        "تنس",
        "بني بوعتاب",
        "الكريمية",
        "حرشون",
        "بوزغاية",
        "تاوقريت",
        "بني حواء",
        "أبو الحسن",
        "وادي قوسين",
        "الشطية",
        "مصدق",
        "أولاد فارس",
        "بوقادير",
        "وادي سلي",
        "الصبحة",
        "بنايرية",
        "الأبيض مجاجة",
        "الظهرة"
    ],
    [
        "البيضاء",
        "قلتة سيدي سعد",
        "بريدة",
        "عين سيدي علي",
        "تاجموت",
        "الحاج مشري",
        "تاويالة",
        "الغيشة",
        "تاجرونة",
        "سبقاق",
        "سيدي بوزيد",
        "وادي مرة",
        "الأغواط",
        "وادي مزي",
        "قصر الحيران",
        "العسافية",
        "سيدي مخلوف",
        "حاسي الدلاعة",
        "حاسي الرمل",
        "عين ماضي",
        "الحويطة",
        "الخنق",
        "بن ناصر بن شهرة",
        "أفلو"
    ],
    [
        "فكيرينة",
        "الفجوج بوغرارة سعودي",
        "عين فكرون",
        "الرحية",
        "مسكيانة",
        "البلالة",
        "بحير الشرقي",
        "قصر الصباحي",
        "سوق نعمان",
        "أولاد زواي",
        "أم البواقي",
        "عين ببوش",
        "عين الزيتون",
        "بئر الشهداء",
        "عين البيضاء",
        "بريش",
        "الزرق",
        "عين مليلة",
        "أولاد قاسم",
        "أولاد حملة",
        "العامرية",
        "سيقوس",
        "وادي نيني",
        "عين الديس",
        "الضلعة",
        "الجازية",
        "عين كرشة",
        "الحرملية",
        "هنشير تومغني"
    ],
    [
        "معافة",
        "القصبات",
        "تيمقاد",
        "تاكسلانت",
        "أولاد سي سليمان",
        "لمسان",
        "تالخمت",
        "رأس العيون",
        "الرحبات",
        "أولاد سلام",
        "القيقبة",
        "ثنية العابد",
        "باتنة",
        "فسديس",
        "وادي الشعبة",
        "حيدوسة",
        "قصر بلزمة",
        "مروانة",
        "وادي الماء",
        "لازرو",
        "سريانة",
        "زانة البيضاء",
        "منعة",
        "تغرغار",
        "عين ياقوت",
        "بومية",
        "جرمة",
        "المعذر",
        "عيون العصافير",
        "تازولت",
        "بومقر",
        "نقاوس",
        "سفيان",
        "أريس",
        "تيغانمين",
        "عين جاسر",
        "الحاسي",
        "سقانة",
        "تيلاطو",
        "فم الطوب",
        "إشمول",
        "إينوغيسن",
        "بوزينة",
        "لارباع",
        "بولهيلات",
        "الشمرة",
        "بريكة",
        "بيطام",
        "إمدوكل",
        "عزيل عبد القادر",
        "الجزار",
        "أولاد عمار",
        "غسيرة",
        "كيمل",
        "تكوت",
        "عين التوتة",
        "بني فضالة الحقانية",
        "أولاد فاضل",
        "أولاد عوف",
        "شير",
        "وادي الطاقة"
    ],
    [
        "سيدي عياد",
        "برباشة",
        "الفلاي",
        "كنديرة",
        "سيدي عيش",
        "تيفرة",
        "تينبدار",
        "القصر",
        "فناية الماثن",
        "توجة",
        "ذراع القايد",
        "خراطة",
        "بجاية",
        "وادي غير",
        "بني معوش",
        "بني جليل",
        "فرعون",
        "سمعون",
        "تيمزريت",
        "مالبو",
        "سوق لإثنين",
        "تامريجت",
        "بوخليفة",
        "تالة حمزة",
        "تيشي",
        "أيت رزين",
        "إغيل علي",
        "أيت إسماعيل",
        "درقينة",
        "تاسكريوت",
        "أوقاس",
        "تيزي نبربر",
        "أدكار",
        "بني كسيلة",
        "تاوريرت إغيل",
        "أقبو",
        "شلاطة",
        "اغرم",
        "تامقرة",
        "أمالو",
        "بوحمزة",
        "مسيسنة",
        "صدوق",
        "بني مليكش",
        "بو جليل",
        "تازمالت",
        "أكفادو",
        "شميني",
        "سوق اوفلا",
        "طيبان",
        "أوزلاقن",
        "أميزور"
    ],
    [
        "الفيض",
        "ليشانة",
        "بوشقرون",
        "مخادمة",
        "جمورة",
        "برانيس",
        "الوطاية",
        "القنطرة",
        "خنقة سيدي ناجي",
        "عين زعطوط",
        "زريبة الوادي",
        "المزيرعة",
        "بسكرة",
        "الحاجب",
        "مليلي",
        "فوغالة",
        "الغروس",
        "برج بن عزوز",
        "أورلال",
        "أوماش",
        "عين الناقة",
        "شتمة",
        "الحوش",
        "سيدي عقبة",
        "مشونش",
        "ليوة",
        "طولقة"
    ],
    [
        "بشار",
        "بوكايس",
        "لحمر",
        "موغل",
        "المريجة",
        "تاغيت",
        "العبادلة",
        "عرق فراج",
        "مشرع هواري بومدين",
        "بني ونيف",
        "تبلبالة",
        "القنادسة"
    ],
    [
        "بني مراد",
        "اولاد سلامة",
        "موزاية",
        "حمام ملوان",
        "بوقرة",
        "صوحان",
        "الأربعاء",
        "الصومعة",
        "قرواو",
        "بوفاريك",
        "مفتاح",
        "الشفة",
        "عين الرمانة",
        "وادي جر",
        "العفرون",
        "أولاد يعيش",
        "الشريعة",
        "جبابرة",
        "وادي العلايق",
        "بن خليل",
        "بني تامو",
        "الشبلي",
        "بوعينان",
        "بوعرفة",
        "البليدة"
    ],
    [
        "عين العلوي",
        "الحجرة الزرقاء",
        "مزدور",
        "تاقديت",
        "ريدان",
        "المعمورة",
        "الحاكمية",
        "أهل القصر",
        "ديرة",
        "الدشمية",
        "بشلول",
        "آث  منصور",
        "سحاريج",
        "العجيبة",
        "الأسنام",
        "أمشدالة",
        "برج أوخريص",
        "سور الغزلان",
        "حنيف",
        "شرفة",
        "أولاد راشد",
        "عين الحجر",
        "أغبالو",
        "روراوة",
        "الخبوزية",
        "بئر غبالو",
        "البويرة",
        "عين الترك",
        "أيت لعزيز",
        "عين بسام",
        "المقراني",
        "سوق الخميس",
        "أعمر",
        "جباحية",
        "الهاشمية",
        "حيزر",
        "تاغزوت",
        "بودربالة",
        "بوكرم",
        "قرومة",
        "الأخضرية",
        "معلة",
        "قادرية",
        "زبربر",
        "وادي البردي"
    ],
    [
        "تاظروك",
        "ابلسة",
        "تمنراست",
        "عين امقل",
        "أدلس"
    ],
    [
        "الحويجبات",
        "العوينات",
        "فركان",
        "نقرين",
        "بئر مقدم",
        "بئر الذهب",
        "صفصاف الوسرى",
        "قريقر",
        "بكارية",
        "بولحاف الدير",
        "أم علي",
        "بوخضرة",
        "الماء الابيض",
        "الونزة",
        "المريج",
        "عين الزرقاء",
        "سطح قنطيس",
        "العقلة",
        "المزرعة",
        "بجن",
        "مرسط",
        "ثليجان",
        "الشريعة",
        "العقلة المالحة",
        "بئر العاتر",
        "تبسة",
        "الحمامات",
        "الكويف"
    ],
    [
        "باب العسة",
        "تيرني بني هديل",
        "منصورة",
        "بني مستر",
        "عين غرابة",
        "شتوان",
        "عمير",
        "عين فزة",
        "هنين",
        "بني خلاد",
        "سيدي الجيلالي",
        "البويهي",
        "ندرومة",
        "مسيردة الفواقة",
        "مرسى بن مهيدي",
        "سيدي مجاهد",
        "بني بوسعيد",
        "سبدو",
        "القور",
        "العريشة",
        "بوحلو",
        "مغنية",
        "حمام بوغرارة",
        "زناتة",
        "أولاد رياح",
        "الحناية",
        "سيدي العبدلي",
        "سوق الثلاثاء",
        "بن سكران",
        "فلاوسن",
        "عين الكبيرة",
        "عين فتاح",
        "تلمسان",
        "عين النحالة",
        "عين تالوت",
        "عين يوسف",
        "بني وارسوس",
        "الفحول",
        "الرمشي",
        "سبعة شيوخ",
        "السواني",
        "صبرة",
        "دار يغمراسن",
        "الغزوات",
        "السواحلية",
        "تيانت",
        "بني صميل",
        "وادي الخضر",
        "أولاد ميمون",
        "بني بهدل",
        "بني سنوس",
        "العزايل",
        "جبالة"
    ],
    [
        "مهدية",
        "عين دزاريت",
        "السبعين",
        "الفايجة",
        "سي عبد الغني",
        "السوقر",
        "توسنينة",
        "مغيلة",
        "السبت",
        "سيدي حسني",
        "عين الحديد",
        "فرندة",
        "تخمرت",
        "عين كرمس",
        "جبيلات الرصفاء",
        "مادنة",
        "مدريسة",
        "سيدي عبد الرحمن",
        "قصر الشلالة",
        "قرطوفة",
        "سرغين",
        "زمالة  الأمير عبد القادر",
        "وادي ليلي",
        "سيدي علي ملال",
        "جيلالي بن عمار",
        "مشرع الصفا",
        "تاقدمت",
        "بوقرة",
        "حمادية",
        "الرشايقة",
        "تيدة",
        "الناظورة",
        "تيارت",
        "مدروسة",
        "ملاكو",
        "سيدي بختي",
        "عين الذهب",
        "شحيمة",
        "النعيمة",
        "عين بوشقيف",
        "دحموني",
        "الرحوية"
    ],
    [
        "ميزرانـــة",
        "إيجــار",
        "بني دوالة",
        "بني زيكــي",
        "إيلولة أومـــالو",
        "أقني قغران",
        "أيت بــوادو",
        "واضية",
        "تيزي نثلاثة",
        "أغريب",
        "أيت شافع",
        "أقرو",
        "أزفون",
        "إفليـــسن",
        "تيقـزيرت",
        "أسي يوسف",
        "بوغني",
        "بونوح",
        "مشطراس",
        "ذراع بن خدة",
        "سيدي نعمان",
        "تادمايت",
        "تيرمتين",
        "أيت بومهدي",
        "أيت تودرت",
        "بني عيسي",
        "واسيف",
        "أيت خليلي",
        "مقــلع",
        "صوامـــع",
        "بني يني",
        "إبودرارن",
        "تيزي وزو",
        "أبي يوسف",
        "عين الحمام",
        "أيت يحيى",
        "اقبيل",
        "بوجيمة",
        "ماكودة",
        "عين الزاوية",
        "أيت يحي موسى",
        "ذراع الميزان",
        "فريقات",
        "مكيرة",
        "تيزي غنيف",
        "يطــافن",
        "إيلـيــلتـن",
        "إمســوحال",
        "عزازقة",
        "فريحة",
        "إيفيغاء",
        "إعــكورن",
        "زكري",
        "أيت عقـواشة",
        "إيرجـــن",
        "الأربعــاء ناث إيراثن",
        "أيت  أومالو",
        "تيزي راشد",
        "أيت عيسى ميمون",
        "واقنون",
        "تيمـيزار",
        "معـــاتقة",
        "سوق الإثنين",
        "أيت محمود",
        "بنــــي زمنزار",
        "إفــرحــونان",
        "بوزقــن"
    ],
    [
        "حسين داي",
        "الكاليتوس",
        "سيدي موسى",
        "القبة",
        "محمد بلوزداد",
        "عين طاية",
        "باب الزوار",
        "برج الكيفان",
        "الدار البيضاء",
        "المرسى",
        "المحمدية",
        "بئر توتة",
        "اولاد شبل",
        "تسالة المرجة",
        "هراوة",
        "رغاية",
        "الرويبة",
        "المعالمة",
        "الرحمانية",
        "سويدانية",
        "سطاوالي",
        "زرالدة",
        "بابا حسن",
        "الدويرة",
        "الدرارية",
        "العاشور",
        "الخرايسية",
        "عين بنيان",
        "الشراقة",
        "دالي ابراهيم",
        "الحمامات",
        "اولاد فايت",
        "الجزائر الوسطى",
        "المدنية",
        "المرادية",
        "سيدي امحمد",
        "السحاولة",
        "بولوغين بن زيري",
        "القصبة",
        "وادي قريش",
        "الرايس حميدو",
        "بئر مراد رايس",
        "بئر خادم",
        "جسر قسنطينة",
        "حيدرة",
        "المغارية",
        "ابن عكنون",
        "بني مسوس",
        "بوزريعة",
        "الابيار",
        "باش جراح",
        "بوروبة",
        "الحراش",
        "وادي السمار",
        "براقي",
        "برج البحري",
        "باب الوادي"
    ],
    [
        "حاسي العش",
        "عين الإبل",
        "القديد",
        "الشارف",
        "بن يعقوب",
        "سيدي بايزيد",
        "مليليحة",
        "دار الشيوخ",
        "تعظميت",
        "حد الصحاري",
        "بويرة الأحداب",
        "عين فقه",
        "سيدي لعجال",
        "حاسي فدول",
        "الخميس",
        "سلمانة",
        "سد الرحال",
        "مسعد",
        "قطارة",
        "دلدول",
        "زكار",
        "دويس",
        "الادريسية",
        "عين الشهداء",
        "الجلفة",
        "بيرين",
        "أم العظام",
        "فيض البطمة",
        "عمورة",
        "زعفران",
        "قرنيني",
        "عين وسارة",
        "بنهار",
        "عين معبد",
        "حاسي بحبح",
        "مجبارة"
    ],
    [
        "جيجل",
        "العوانة",
        "سلمى بن زيادة",
        "أراقن سويسي",
        "بوسيف أولاد عسكر",
        "زيامة منصورية",
        "الشحنة",
        "الامير عبد القادر",
        "وجانة",
        "الطاهير",
        "الشقفة",
        "القنار نشفي",
        "سيدي عبد العزيز",
        "الميلية",
        "أولاد يحيى خدروش",
        "أولاد رابح",
        "سيدي معروف",
        "غبالة",
        "السطارة",
        "بوراوي بلهادف",
        "العنصر",
        "خيري واد عجول",
        "جيملة",
        "قاوس",
        "تاكسنة",
        "برج الطهر",
        "بودريعة بني  ياجيس",
        "الجمعة بني حبيبي"
    ],
    [
        "الرصفة",
        "واد البارد",
        "تيزي نبشار",
        "مزلوق",
        "قلال",
        "قصر الابطال",
        "أولاد سي أحمد",
        "أيت نوال مزادة",
        "ايت تيزي",
        "بوعنداس",
        "بوسلام",
        "حمام السخنة",
        "الطاية",
        "التلة",
        "عين ولمان",
        "بوطالب",
        "الحامة",
        "أولاد تبان",
        "عموشة",
        "صالح باي",
        "عين أزال",
        "عين الحجر",
        "بيضاء برج",
        "بئر حدادة",
        "قنزات",
        "حربيل",
        "عين الروى",
        "بني وسين",
        "أوريسيا",
        "بوقاعة",
        "ذراع قبيلة",
        "حمام قرقور",
        "سطيف",
        "عين الكبيرة",
        "الدهامشة",
        "أولاد عدوان",
        "عين السبت",
        "بني عزيز",
        "معاوية",
        "بلاعة",
        "بئر العرش",
        "الولجة",
        "تاشودة",
        "تالة إيفاسن",
        "سرج الغول",
        "قجال",
        "أولاد صابر",
        "بازر سكرة",
        "العلمة",
        "قلتة زرقاء",
        "بني فودة",
        "جميلة",
        "عين لقراج",
        "بني شبانة",
        "بني ورتيلان",
        "بني موحلي",
        "عين عباسة",
        "عين أرنات",
        "بابور",
        "ماوكلان"
    ],
    [
        "سعيدة",
        "تيرسين",
        "أولاد إبراهيم",
        "عين السلطان",
        "المعمورة",
        "الحساسنة",
        "عين السخونة",
        "سيدي بوبكر",
        "أولاد خالد",
        "هونت",
        "يوب",
        "دوي ثابت",
        "سيدي احمد",
        "مولاي العربي",
        "عين الحجر",
        "سيدي عمر"
    ],
    [
        "عين بوزيان",
        "صالح بو الشعور",
        "الحدائق",
        "زردازة",
        "أولاد حبابة",
        "بني ولبان",
        "سيدي مزغيش",
        "بني بشير",
        "رمضان جمال",
        "بين الويدان",
        "مجاز الدشيش",
        "تمالوس",
        "عين قشرة",
        "الولجة بولبلوط",
        "أم الطوب",
        "الغدير",
        "الكركرة",
        "الحروش",
        "الزيتونة",
        "أولاد عطية",
        "وادي الزهور",
        "القل",
        "الشرايع",
        "بني زيد",
        "خناق مايو",
        "المرسى",
        "بن عزوز",
        "بكوش لخضر",
        "السبت",
        "عين شرشار",
        "عزابة",
        "بوشطاطة",
        "فلفلة",
        "حمادي كرومة",
        "سكيكدة",
        "عين زويت",
        "جندل سعدي محمد",
        "قنواع"
    ],
    [
        "سيدي علي بن يوب",
        "مولاي سليسن",
        "الحصيبة",
        "عين تندمين",
        "تنيرة",
        "وادي سفيون",
        "حاسي دحو",
        "وادي تاوريرة",
        "بن عشيبة شلية",
        "سيدي يعقوب",
        "سيدي لحسن",
        "سيدي خالد",
        "طابية",
        "سيدي ابراهيم",
        "العمارنة",
        "بوخنفيس",
        "حاسي زهانة",
        "شيطوان البلايلة",
        "بن باديس",
        "بضرابين المقراني",
        "سفيزف",
        "مسيد",
        "بوجبهة البرج",
        "عين أدن",
        "سيدي حمادوش",
        "سيدي شعيب",
        "مكدرة",
        "عين البرد",
        "رجم دموش",
        "راس الماء",
        "وادي السبع",
        "مرحوم",
        "سيدي بلعباس",
        "عين الثريد",
        "السهالة الثورة",
        "تسالة",
        "بلعربي",
        "مصطفى بن ابراهيم",
        "تلموني",
        "زروالة",
        "الضاية",
        "مزاورو",
        "تغاليمت",
        "تلاغ",
        "عين قادة",
        "لمطار",
        "سيدي علي بوسيدي",
        "سيدي دحو الزاير",
        "بئر الحمام",
        "مرين",
        "تفسور",
        "تاودموت"
    ],
    [
        "عنابة",
        "سرايدي",
        "برحال",
        "واد العنب",
        "الحجار",
        "سيدي عمار",
        "البوني",
        "عين الباردة",
        "الشرفة",
        "العلمة",
        "التريعات",
        "شطايبي"
    ],
    [
        "نشماية",
        "بوحمدان",
        "حمام دباغ",
        "الركنية",
        "الدهوارة",
        "حمام النبايل",
        "قالمة",
        "بومهرة أحمد",
        "عين بن بيضاء",
        "بوشقوف",
        "مجاز الصفاء",
        "وادي فراغة",
        "بوعاتي محمود",
        "الفجوج",
        "هيليوبوليس",
        "مجاز عمار",
        "هواري بومدين",
        "رأس العقبة",
        "سلاوة عنونة",
        "جبالة الخميسي",
        "برج صباط",
        "وادي الزناتي",
        "عين رقادة",
        "عين العربي",
        "عين مخلوف",
        "تاملوكة",
        "عين صندل",
        "بوحشانة",
        "لخزارة",
        "بلخير",
        "بني مزلين",
        "قلعة بوصبع",
        "وادي الشحم",
        "بن جراح"
    ],
    [
        "ديدوش مراد",
        "حامة بوزيان",
        "بني حميدان",
        "زيغود يوسف",
        "عين السمارة",
        "الخروب",
        "أولاد رحمون",
        "عين عبيد",
        "أبن باديس الهرية",
        "ابن زياد",
        "بوجريو مسعود",
        "قسنطينة"
    ],
    [
        "أولاد هلال",
        "السواقي",
        "قصر البخاري",
        "مفاتحة",
        "السانق",
        "العزيزية",
        "مغراوة",
        "ميهوب",
        "بوعيش",
        "بوغزول",
        "الشهبونية",
        "حناشة",
        "عوامري",
        "وادي حربيل",
        "بني سليمان",
        "بوعيشون",
        "أولاد بوعشرة",
        "سي المحجوب",
        "بوسكن",
        "سيدي الربيع",
        "البرواقية",
        "أولاد دايد",
        "الربعية",
        "مجبر",
        "ثلاث دوائر",
        "الزبيرية",
        "العيساوية",
        "الحوضان",
        "مزغنة",
        "تابلاط",
        "بوغار",
        "سغوان",
        "ذراع السمار",
        "المدية",
        "تمسقيدة",
        "بن شكاو",
        "الحمدانية",
        "وزرة",
        "تيزي مهدي",
        "عين بوسيف",
        "العوينات",
        "الكاف الاخضر",
        "أولاد امعرف",
        "سيدي دامد",
        "بعطة",
        "العمارية",
        "أولاد إبراهيم",
        "بئر بن عابد",
        "القلب الكبير",
        "سدراية",
        "عين اقصير",
        "شلالة العذاورة",
        "شنيقل",
        "تفراوت",
        "بوشراحيل",
        "خمس جوامع",
        "سيدي نعمان",
        "عزيز",
        "دراق",
        "أم الجليل",
        "جواب",
        "سيدي زهار",
        "سيدي زيان",
        "أولاد عنتر"
    ],
    [
        "فرناقة",
        "وادي الخير",
        "الحسيان بني ياحي",
        "حاسي ماماش",
        "مزغران",
        "ستيدية",
        "عين تادلس",
        "سيدي بلعطار",
        "سور",
        "عين بودينار",
        "خير الدين",
        "صيادة",
        "سيدي علي",
        "تزقايت",
        "بن عبد المالك رمضان",
        "مستغانم",
        "حجاج",
        "سيدي لخضر",
        "عشعاشة",
        "خضرة",
        "نكمارية",
        "أولاد بوغالم",
        "بوقيراط",
        "صفصاف",
        "سيرات",
        "السوافلية",
        "عين سيدي الشريف",
        "منصورة",
        "ماسرة",
        "الطواهرية",
        "عين نويسي",
        "أولاد مع الله"
    ],
    [
        "شلال",
        "أولاد ماضي",
        "خطوطي سد الجير",
        "بلعايبة",
        "برهوم",
        "دهاهنة",
        "مقرة",
        "بني يلمان",
        "بوطي السايح",
        "سيدي عيسى",
        "عين الحجل",
        "سيدي هجرس",
        "بوسعادة",
        "الهامل",
        "ولتام",
        "بن زوه",
        "أولاد سيدي ابراهيم",
        "سيدي عامر",
        "تامسة",
        "بن سرور",
        "محمد بوضياف",
        "أولاد سليمان",
        "زرزور",
        "عين الملح",
        "عين فارس",
        "عين الريش",
        "بئر فضة",
        "سيدي امحمد",
        "امجدل",
        "مناعة",
        "جبل مساعد",
        "سليم",
        "المسيلة",
        "حمام الضلعة",
        "ونوغة",
        "أولاد منصور",
        "تارمونت",
        "المعاضيد",
        "المطارفة",
        "معاريف",
        "أولاد دراج",
        "السوامع",
        "الحوامد",
        "خبانة",
        "مسيف",
        "عين الخضراء",
        "أولاد عدي لقبالة"
    ],
    [
        "وادي الأبطال",
        "سيدي عبد المومن",
        "سجرارة",
        "المحمدية",
        "تيغنيف",
        "مقطع الدوز",
        "فراقيق",
        "الغمري",
        "زهانة",
        "القعدة",
        "رأس عين عميروش",
        "عقاز",
        "العلايمية",
        "سيق",
        "الشرفاء",
        "بوهني",
        "المأمونية",
        "القطنة",
        "عين فارس",
        "غروس",
        "بنيان",
        "عوف",
        "قرجوم",
        "عين أفرص",
        "عين فكان",
        "خلوية",
        "المنور",
        "البرج",
        "سيدي بوسعيد",
        "المطمور",
        "سيدي قادة",
        "ماقضة",
        "معسكر",
        "بوحنيفية",
        "غريس",
        "حسين",
        "القرط",
        "فروحة",
        "تيزي",
        "السهايلية",
        "ماوسة",
        "سيدي عبد الجبار",
        "الحشم",
        "نسمط",
        "زلامطة",
        "عين فراح",
        "وادي التاغية"
    ],
    [
        "ورقلة",
        "حاسي مسعود",
        "عين البيضاء",
        "حاسي بن عبد الله",
        "سيدي خويلد",
        "البرمة",
        "الرويسات",
        "انقوسة"
    ],
    [
        "سيدي الشحمي",
        "حاسي مفسوخ",
        "بئر الجير",
        "حاسي بن عقبة",
        "قديل",
        "حاسي بونيف",
        "الكرمة",
        "السانية",
        "بن فريحة",
        "أرزيو",
        "سيدي بن يبقى",
        "عين البية",
        "بطيوة",
        "مرسى الحجاج",
        "عين الترك",
        "وهران",
        "العنصر",
        "المرسى الكبير",
        "بوفاتيس",
        "البراية",
        "وادي تليلات",
        "عين الكرمة",
        "بوتليليس",
        "مسرغين",
        "بوسفر",
        "طفراوي"
    ],
    [
        "عين العراك",
        "كراكدة",
        "سيدي سليمان",
        "سيدي عامر",
        "بوعلام",
        "البنود",
        "بوقطب",
        "الخيثر",
        "توسمولين",
        "سيدي طيفور",
        "ستيتن",
        "البيض",
        "رقاصة",
        "المحرة",
        "الكاف الأحمر",
        "بريزينة",
        "الغاسول",
        "الأبيض سيدي الشيخ",
        "بوسمغون",
        "الشقيق",
        "شلالة",
        "اربوات"
    ],
    [
        "برج عمر إدريس",
        "دبداب",
        "إن أمناس",
        "إيليزي"
    ],
    [
        "الحمادية",
        "أولاد سيدي ابراهيم",
        "عين تاغروت",
        "تيكستار",
        "بليمور",
        "العناصر",
        "غيلاسة",
        "تقلعيت",
        "برج الغدير",
        "العش",
        "سيدي أمبارك",
        "خليل",
        "بئر قاصد علي",
        "تفرق",
        "الماين",
        "جعافرة",
        "القلة",
        "ثنية النصر",
        "المهير",
        "القصور",
        "المنصورة",
        "حرازة",
        "الرابطة",
        "الياشير",
        "حسناوة",
        "مجانة",
        "عين تسرة",
        "أولاد أبراهم",
        "رأس الوادي",
        "برج زمورة",
        "أولاد دحمان",
        "تسامرت",
        "برج بوعريرج",
        "بن داود"
    ],
    [
        "الخروبة",
        "دلس",
        "بن شود",
        "أعفير",
        "الثنية",
        "بني عمران",
        "خميس الخشنة",
        "عمال",
        "تيمزريت",
        "زموري",
        "الاربعطاش",
        "يسر",
        "شعبة العامر",
        "أولاد عيسى",
        "الناصرية",
        "بوزقزة قدارة",
        "سوق الحد",
        "سيدي داود",
        "بغلية",
        "لقاطة",
        "جنات",
        "تيجلابين",
        "سي مصطفى",
        "أولاد هداج",
        "أولاد موسى",
        "بومرداس",
        "قورصو",
        "برج منايل",
        "بودواو",
        "بودواو البحري",
        "تاورقة",
        "حمادي"
    ],
    [
        "عين العسل",
        "بوقوس",
        "الطارف",
        "الزيتونة",
        "البسباس",
        "عين الكرمة",
        "بوحجار",
        "حمام بني صالح",
        "وادي الزيتون",
        "بن مهيدي",
        "بريحان",
        "شبيطة مختار",
        "الشط",
        "العيون",
        "القالة",
        "السوارخ",
        "زريزر",
        "بوثلجة",
        "الشافية",
        "بحيرة الطيور",
        "شحاني",
        "رمل السوق",
        "عصفور",
        "الذرعـان"
    ],
    [
        "تندوف",
        "أم العسل"
    ],
    [
        "خميستي",
        "ثنية الاحد",
        "أولاد بسام",
        "سيدي بوتوشنت",
        "تيسمسيلت",
        "سيدي العنتري",
        "بني شعيب",
        "بني لحسن",
        "سيدي عابد",
        "سيدي سليمان",
        "بوقائد",
        "الأربعاء",
        "الأزهرية",
        "لرجام",
        "الملعب",
        "العيون",
        "تملاحت",
        "اليوسفية",
        "برج الأمير عبد القادر",
        "عماري",
        "المعاصم",
        "برج بونعامة"
    ],
    [
        "دوار الماء",
        "العقلة",
        "المقرن",
        "سيدي عون",
        "اميه وانسة",
        "كوينين",
        "البياضة",
        "النخلة",
        "الرباح",
        "قمار",
        "بن  قشة",
        "ورماس",
        "تغزوت",
        "الحمراية",
        "الرقيبة",
        "الدبيلة",
        "حساني عبد الكريم",
        "حاسي خليفة",
        "الطريفاوي",
        "الطالب العربي",
        "وادي العلندة",
        "الوادي"
    ],
    [
        "خيران",
        "بابار",
        "المحمل",
        "أولاد رشاش",
        "جلال",
        "يابوس",
        "خنشلة",
        "قايس",
        "شلية",
        "الرميلة",
        "تاوزيانت",
        "بغاي",
        "الحامة",
        "انسيغة",
        "طامزة",
        "عين الطويلة",
        "متوسة",
        "بوحمامة",
        "الولجة",
        "مصارة",
        "ششار"
    ],
    [
        "سوق أهراس",
        "عين سلطان",
        "سدراتة",
        "الحنانشة",
        "المشروحة",
        "عين الزانة",
        "أولاد إدريس",
        "ترقالت",
        "أم العظايم",
        "وادي الكبريت",
        "تيفاش",
        "الراقوبة",
        "الدريعة",
        "تاورة",
        "الزعرورية",
        "الحدادة",
        "الخضارة",
        "أولاد مومن",
        "المراهنة",
        "ويلان",
        "سيدي فرج",
        "بئر بوحوش",
        "سافل الويدان",
        "خميسة",
        "مداوروش",
        "الزوابي"
    ],
    [
        "حجوط",
        "مراد",
        "مناصر",
        "أغبال",
        "الناظور",
        "سيدي عامر",
        "قوراية",
        "مسلمون",
        "شرشال",
        "حجرة النص",
        "سيدي غيلاس",
        "الداموس",
        "الأرهاط",
        "فوكة",
        "عين تاقورايت",
        "بوهارون",
        "بواسماعيل",
        "خميستي",
        "أحمر العين",
        "بورقيقة",
        "دواودة",
        "سيدي راشد",
        "الحطاطبة",
        "الشعيبة",
        "القليعة",
        "سيدي سميان",
        "تيبازة",
        "بني ميلك"
    ],
    [
        "مشيرة",
        "العياضي برباس",
        " عين البيضاء أحريش",
        "تسالة لمطاعي",
        "ترعي باينان",
        "اعميرة اراس",
        "تسدان حدادة",
        "مينار زارزة",
        "سيدي مروان",
        "الشيقارة",
        "حمالة",
        "القرارم قوقة",
        "تيبرقنت",
        "الرواشد",
        "دراحي بوصلاح",
        "زغاية",
        "وادي النجاء",
        "أحمد راشدي",
        "تاجنانت",
        "عين الملوك",
        "أولاد اخلوف",
        "بن يحي عبد الرحمن",
        "التلاغمة",
        "وادي سقان",
        "وادي العثمانية",
        "عين التين",
        "شلغوم العيد",
        "يحي بني قشة",
        "فرجيوة",
        "سيدي خليفة",
        "ميلة",
        "بوحاتم"
    ],
    [
        "خميس مليانة",
        "سيدي الأخضر",
        "عين البنيان",
        "عين التركي",
        "حمام ريغة",
        "بوراشد",
        "الحسينية",
        "جليدة",
        "عريب",
        "جمعة أولاد الشيخ",
        "العامرة",
        "العطاف",
        "تبركانين",
        "عين بويحيى",
        "العبادية",
        "تاشتة زقاغة",
        "بربوش",
        "جندل",
        "بن علال",
        "وادي الشرفاء",
        "بومدفع",
        "عين الاشياخ",
        "عين السلطان",
        "واد الجمعة",
        "الماين",
        "الروينة",
        "زدين",
        "بئر ولد خليفة",
        "برج الأمير خالد",
        "طارق بن زياد",
        "بطحية",
        "بلعاص",
        "الحسانية",
        "عين الدفلى",
        "مليانة",
        "المخاطرية"
    ],
    [
        "تيوت",
        "مغرار",
        "عسلة",
        "القصدير",
        "مكمن بن عمار",
        "عين الصفراء",
        "المشرية",
        "البيوض",
        "عين بن خليل",
        "النعامة",
        "جنين بورزق",
        "سفيسيفة"
    ],
    [
        "سيدي بومدين",
        "تامزورة",
        "شعبة اللحم",
        "المالح",
        "أولاد الكيحل",
        "شنتوف",
        "تارقة",
        "وادي الصباح",
        "العامرية",
        "حاسي الغلة",
        "أولاد بوجمعة",
        "أغلال",
        "عين الكيحل",
        "عين الطلبة",
        "عقب الليل",
        "بني صاف",
        "الحساسنة",
        "الأمير عبد القادر",
        "سيدي صافي",
        "ولهاصة الغرابة",
        "سيدي ورياش",
        "عين الأربعاء",
        "المساعيد",
        "وادي برقش",
        "سيدي بن عدة",
        "عين تموشنت",
        "بوزجار",
        "حمام بوحجر"
    ],
    [
        "ضاية بن ضحوة",
        "المنصورة",
        "العطف",
        "بونورة",
        "زلفانة",
        "القرارة",
        "سبسب",
        "متليلي",
        "بريان",
        "غرداية"
    ],
    [
        "القطار",
        "أولاد يعيش",
        "بني درقن",
        "دار بن عبد الله",
        "زمورة",
        "جديوية",
        "حمري",
        "بلعسل بوزقزة",
        "المطمر",
        "سيدي  خطاب",
        "سيدي امحمد بن عودة",
        "عين طارق",
        "حد الشكالة",
        "الولجة",
        "مازونة",
        "عين الرحمة",
        "القلعة",
        "سيدي سعادة",
        "يلل",
        "سوق الحد",
        "منداس",
        "وادي السلام",
        "سيدي لزرق",
        "عمي موسى",
        "واريزان",
        "مرجة سيدي عابد",
        "أولاد سيدي الميهوب",
        "بن داود",
        "وادي رهيو",
        "الحاسي",
        "سيدي أمحمد بن علي",
        "مديونة",
        "بني زنطيس",
        "وادي الجمعة",
        "لحلاف",
        "غليزان",
        "الحمادنة",
        "الرمكة"
    ],
    [
        "تنركوك",
        "تيميمون",
        "أولاد السعيد",
        "المطارفة",
        "طالمين",
        "أولاد عيسى",
        "شروين",
        "أوقروت",
        "دلدول",
        "قصر قدور"
    ],
    [
        "تيمياوين",
        "برج باجي مختار"
    ],
    [
        "رأس الميعاد",
        "بسباس",
        "سيدي  خالد",
        "الدوسن",
        "الشعيبة",
        "أولاد جلال"
    ],
    [
        "بني عباس",
        "تامترت",
        "إقلي",
        "الواتة",
        "أولاد خضير",
        "كرزاز",
        "تيمودي",
        "القصابي",
        "بن يخلف"
    ],
    [
        "إينغر",
        "عين صالح",
        "فقارة الزوى"
    ],
    [
        "تين زواتين",
        "عين قزام"
    ],
    [
        "تماسين",
        "سيدي سليمان",
        "المقارين",
        "النزلة",
        "بلدة اعمر",
        "تبسبست",
        "تقرت",
        "الطيبات",
        "العالية",
        "الحجيرة",
        "بن ناصر",
        "المنقر",
        "الزاوية العابدية"
    ],
    [
        "جانت",
        "برج الحواس"
    ],
    [
        "أم الطيور",
        "سيدي عمران",
        "المرارة",
        "جامعة",
        "تندلة",
        "المغير",
        "سطيل",
        "سيدي خليل"
    ],
    [
        "المنيعة",
        "حاسي القارة",
        "حاسي الفحل"
    ]
];


export { states, cities };