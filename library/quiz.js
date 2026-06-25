/* Noor al-Hidayah — multilingual quiz bank.
   Each question: d=difficulty(1 easy .. 4 hardest), cat, q{en,ar,ur,fa},
   o = options as [en,ar,ur,fa], a = correct option index, ex = short note. */
window.LIB_QUIZ = [
/* ===================== EASY (1) ===================== */
{ d:1, cat:"Qur'an",
  q:{ en:"How many sūrahs are in the Holy Qur'an?", ar:"كم عددُ سُوَرِ القرآنِ الكريم؟", ur:"قرآنِ مجید میں کتنی سورتیں ہیں؟", fa:"قرآن کریم چند سوره دارد؟" },
  o:[ ["114","١١٤","114","114"], ["110","١١٠","110","110"], ["120","١٢٠","120","120"], ["100","١٠٠","100","100"] ], a:0,
  ex:"The Holy Qur'an has 114 sūrahs." },

{ d:1, cat:"Qur'an",
  q:{ en:"What is the first sūrah of the Qur'an?", ar:"ما هي أوّلُ سورةٍ في القرآن؟", ur:"قرآن کی پہلی سورت کون سی ہے؟", fa:"نخستین سورهٔ قرآن کدام است؟" },
  o:[ ["Al-Fātiḥah","الفاتحة","الفاتحہ","الفاتحه"], ["Al-Baqarah","البقرة","البقرہ","البقره"], ["Yāsīn","يس","یٰسین","یس"], ["Al-Ikhlāṣ","الإخلاص","الاخلاص","الاخلاص"] ], a:0,
  ex:"Sūrat al-Fātiḥah (‘The Opening’) is the first chapter." },

{ d:1, cat:"Ahl al-Bayt",
  q:{ en:"Who is the first Imam after the Prophet (ṣ)?", ar:"مَن هو الإمامُ الأوّلُ بعد النبيِّ (ص)؟", ur:"نبی اکرمؐ کے بعد پہلے امام کون ہیں؟", fa:"نخستین امام پس از پیامبر (ص) کیست؟" },
  o:[ ["Imam ʿAlī (ʿa)","الإمام عليّ (ع)","امام علیؑ","امام علی (ع)"], ["Imam Ḥasan (ʿa)","الإمام الحسن (ع)","امام حسنؑ","امام حسن (ع)"], ["Imam Ḥusayn (ʿa)","الإمام الحسين (ع)","امام حسینؑ","امام حسین (ع)"], ["Imam al-Ṣādiq (ʿa)","الإمام الصادق (ع)","امام صادقؑ","امام صادق (ع)"] ], a:0,
  ex:"Imam ʿAlī ibn Abī Ṭālib (ʿa) is the first Imam." },

{ d:1, cat:"Karbalāʾ",
  q:{ en:"In which city was Imam al-Ḥusayn (ʿa) martyred?", ar:"في أيِّ مدينةٍ استُشهِدَ الإمامُ الحسينُ (ع)؟", ur:"امام حسینؑ کس شہر میں شہید ہوئے؟", fa:"امام حسین (ع) در کدام شهر شهید شد؟" },
  o:[ ["Karbalāʾ","كربلاء","کربلا","کربلا"], ["Najaf","النجف","نجف","نجف"], ["Madīnah","المدينة","مدینہ","مدینه"], ["Kūfah","الكوفة","کوفہ","کوفه"] ], a:0,
  ex:"Imam al-Ḥusayn (ʿa) was martyred at Karbalāʾ in 61 AH." },

{ d:1, cat:"Fiqh",
  q:{ en:"How many obligatory daily prayers are there?", ar:"كم عددُ الصلواتِ اليوميّةِ الواجبة؟", ur:"روزانہ کتنی واجب نمازیں ہیں؟", fa:"نمازهای واجب روزانه چند تاست؟" },
  o:[ ["5","٥","5","5"], ["3","٣","3","3"], ["7","٧","7","7"], ["2","٢","2","2"] ], a:0,
  ex:"Five: Fajr, Ẓuhr, ʿAṣr, Maghrib and ʿIshāʾ." },

/* ===================== MEDIUM (2) ===================== */
{ d:2, cat:"Qur'an",
  q:{ en:"Which sūrah is known as the ‘heart of the Qur'an’?", ar:"أيُّ سورةٍ تُعرَفُ بـ«قلبِ القرآن»؟", ur:"کون سی سورت ’قرآن کا دل‘ کہلاتی ہے؟", fa:"کدام سوره به «قلب قرآن» معروف است؟" },
  o:[ ["Yāsīn","يس","یٰسین","یس"], ["Al-Raḥmān","الرحمن","الرحمٰن","الرحمن"], ["Al-Kahf","الكهف","الکہف","الکهف"], ["Al-Mulk","الملك","الملک","الملک"] ], a:0,
  ex:"Sūrat Yāsīn is often called the heart of the Qur'an." },

{ d:2, cat:"Hadith",
  q:{ en:"In Ḥadīth al-Thaqalayn, the Prophet (ṣ) left the Qur'an and what else?", ar:"في حديثِ الثقلين، تَرَكَ النبيُّ (ص) القرآنَ ومَنْ معه؟", ur:"حدیثِ ثقلین میں نبیؐ نے قرآن کے ساتھ کس کو چھوڑا؟", fa:"در حدیث ثقلین، پیامبر (ص) قرآن و چه چیزی را به‌جا گذاشت؟" },
  o:[ ["The Ahl al-Bayt (ʿa)","أهلَ البيت (ع)","اہلِ بیتؑ","اهل‌بیت (ع)"], ["The Companions","الصحابة","صحابہ","صحابه"], ["The Sunnah only","السنّةَ فقط","صرف سنت","تنها سنت"], ["The Caliphs","الخلفاء","خلفاء","خلفا"] ], a:0,
  ex:"“…the Book of Allah and my progeny, my Ahl al-Bayt.”" },

{ d:2, cat:"Ahl al-Bayt",
  q:{ en:"How many Imams are there in Twelver (Ithnā ʿAsharī) Islam?", ar:"كم عددُ الأئمّةِ عند الشيعةِ الاثني عشرية؟", ur:"اثنا عشری مکتب میں کتنے امام ہیں؟", fa:"در مکتب اثنی‌عشری چند امام وجود دارد؟" },
  o:[ ["12","١٢","12","12"], ["7","٧","7","7"], ["11","١١","11","11"], ["14","١٤","14","14"] ], a:0,
  ex:"Twelve Imams; with the Prophet and Lady Fāṭimah (ʿa) they form the fourteen infallibles." },

{ d:2, cat:"Fiqh",
  q:{ en:"The one-fifth religious due on surplus wealth is called?", ar:"ما اسمُ الحقِّ الشرعيِّ الذي مقدارُه الخُمس؟", ur:"اضافی مال پر پانچواں حصہ کیا کہلاتا ہے؟", fa:"حق شرعی یک‌پنجم بر مازاد دارایی چه نام دارد؟" },
  o:[ ["Khums","الخُمس","خمس","خمس"], ["Zakāh","الزكاة","زکات","زکات"], ["Ṣadaqah","الصدقة","صدقہ","صدقه"], ["Kaffārah","الكفّارة","کفارہ","کفاره"] ], a:0,
  ex:"Khums (one-fifth) is an obligation in Shīʿī fiqh." },

{ d:2, cat:"Karbalāʾ",
  q:{ en:"ʿĀshūrāʾ falls on which day of Muḥarram?", ar:"في أيِّ يومٍ من مُحرَّمَ يقعُ يومُ عاشوراء؟", ur:"عاشورا محرم کی کونسی تاریخ کو ہے؟", fa:"عاشورا در چندم محرم است؟" },
  o:[ ["10th","العاشر","دسویں","دهم"], ["1st","الأول","پہلی","یکم"], ["3rd","الثالث","تیسری","سوم"], ["15th","الخامس عشر","پندرہویں","پانزدهم"] ], a:0,
  ex:"ʿĀshūrāʾ is the 10th of Muḥarram." },

/* ===================== HARD (3) ===================== */
{ d:3, cat:"Qur'an",
  q:{ en:"The commonly cited number of verses (āyāt) in the Qur'an is?", ar:"ما العددُ المشهورُ لآياتِ القرآن؟", ur:"قرآن کی آیات کی مشہور تعداد کتنی ہے؟", fa:"تعداد مشهور آیات قرآن چند است؟" },
  o:[ ["6,236","٦٢٣٦","6,236","6,236"], ["6,000","٦٠٠٠","6,000","6,000"], ["7,000","٧٠٠٠","7,000","7,000"], ["5,500","٥٥٠٠","5,500","5,500"] ], a:0,
  ex:"6,236 verses by the well-known (Kūfī) counting." },

{ d:3, cat:"Ahl al-Bayt",
  q:{ en:"Which Imam holds the title ‘al-Ṣādiq’ (the Truthful)?", ar:"أيُّ إمامٍ يحملُ لقبَ «الصادق»؟", ur:"’الصادق‘ کا لقب کس امام کا ہے؟", fa:"لقب «الصادق» از آنِ کدام امام است؟" },
  o:[ ["Imam Jaʿfar (6th)","الإمام جعفر (السادس)","امام جعفرؑ (چھٹے)","امام جعفر (ششم)"], ["Imam al-Bāqir (5th)","الإمام الباقر (الخامس)","امام باقرؑ (پانچویں)","امام باقر (پنجم)"], ["Imam al-Kāẓim (7th)","الإمام الكاظم (السابع)","امام کاظمؑ (ساتویں)","امام کاظم (هفتم)"], ["Imam al-Riḍā (8th)","الإمام الرضا (الثامن)","امام رضاؑ (آٹھویں)","امام رضا (هشتم)"] ], a:0,
  ex:"Imam Jaʿfar ibn Muḥammad al-Ṣādiq (ʿa), the sixth Imam." },

{ d:3, cat:"Hadith",
  q:{ en:"Al-Kāfī, foremost of the Four Books, was compiled by?", ar:"مَن جَمَعَ كتابَ «الكافي» أعظمَ الكتبِ الأربعة؟", ur:"چار کتب میں سرفہرست ’الکافی‘ کس نے مرتب کی؟", fa:"«الکافی»، سرآمد کتب اربعه، را چه کسی گرد آورد؟" },
  o:[ ["Al-Kulaynī","الكُليني","شیخ کلینی","شیخ کلینی"], ["Al-Ṣadūq","الصدوق","شیخ صدوق","شیخ صدوق"], ["Al-Ṭūsī","الطوسي","شیخ طوسی","شیخ طوسی"], ["Al-Majlisī","المجلسي","علامہ مجلسی","علامه مجلسی"] ], a:0,
  ex:"Thiqat al-Islām al-Kulaynī (d. 329 AH) compiled al-Kāfī." },

{ d:3, cat:"Ahl al-Bayt",
  q:{ en:"Who compiled Nahj al-Balāghah?", ar:"مَن جَمَعَ «نهجَ البلاغة»؟", ur:"’نہج البلاغہ‘ کس نے مرتب کی؟", fa:"«نهج‌البلاغه» را چه کسی گرد آورد؟" },
  o:[ ["Al-Sharīf al-Raḍī","الشريف الرضي","سید رضی","سید رضی"], ["Al-Kulaynī","الكليني","شیخ کلینی","شیخ کلینی"], ["Al-Mufīd","المفيد","شیخ مفید","شیخ مفید"], ["Al-Ṣadūq","الصدوق","شیخ صدوق","شیخ صدوق"] ], a:0,
  ex:"Al-Sharīf al-Raḍī (d. 406 AH) compiled the sermons, letters and sayings of Imam ʿAlī (ʿa)." },

{ d:3, cat:"Marājiʿ",
  q:{ en:"Which Marjaʿ, based in Najaf, is the most widely followed today?", ar:"أيُّ مرجعٍ في النجفِ هو الأوسعُ تقليداً اليوم؟", ur:"نجف میں آج سب سے زیادہ تقلید کیے جانے والے مرجع کون ہیں؟", fa:"کدام مرجع ساکن نجف امروز پرپیروترین است؟" },
  o:[ ["Sayyid al-Sīstānī","السيد السيستاني","سید سیستانی","سید سیستانی"], ["Shaykh Makārim Shīrāzī","الشيخ مكارم الشيرازي","شیخ مکارم شیرازی","شیخ مکارم شیرازی"], ["Sayyid al-Khāmaneʾī","السيد الخامنئي","سید خامنہ ای","سید خامنه‌ای"], ["Sayyid al-Khūʾī","السيد الخوئي","سید خوئی","سید خوئی"] ], a:0,
  ex:"Sayyid ʿAlī al-Sīstānī, based in Najaf, is the most widely followed Marjaʿ today." },

/* ===================== HARDEST (4) ===================== */
{ d:4, cat:"Ahl al-Bayt",
  q:{ en:"Which Imam is buried in Mashhad, martyred by poison in Khurāsān?", ar:"أيُّ إمامٍ مدفونٌ في مشهد، استُشهِدَ بالسُّمِّ في خُراسان؟", ur:"کون سے امام مشہد میں مدفون اور خراسان میں زہر سے شہید ہوئے؟", fa:"کدام امام در مشهد مدفون و در خراسان با سمّ شهید شد؟" },
  o:[ ["Imam al-Riḍā (8th)","الإمام الرضا (الثامن)","امام رضاؑ (آٹھویں)","امام رضا (هشتم)"], ["Imam al-Kāẓim (7th)","الإمام الكاظم (السابع)","امام کاظمؑ (ساتویں)","امام کاظم (هفتم)"], ["Imam al-Jawād (9th)","الإمام الجواد (التاسع)","امام جوادؑ (نویں)","امام جواد (نهم)"], ["Imam al-Hādī (10th)","الإمام الهادي (العاشر)","امام ہادیؑ (دسویں)","امام هادی (دهم)"] ], a:0,
  ex:"Imam ʿAlī al-Riḍā (ʿa), the eighth Imam, is buried in Mashhad." },

{ d:4, cat:"Hadith",
  q:{ en:"Which of these is NOT one of the Four Books (al-Kutub al-Arbaʿa)?", ar:"أيٌّ من هذه ليس من الكتبِ الأربعة؟", ur:"ان میں سے کونسی ’کتب اربعہ‘ میں شامل نہیں؟", fa:"کدام‌یک از این‌ها جزو «کتب اربعه» نیست؟" },
  o:[ ["Biḥār al-Anwār","بحار الأنوار","بحار الانوار","بحار الانوار"], ["Al-Kāfī","الكافي","الکافی","الکافی"], ["Man lā yaḥḍuruhu al-Faqīh","من لا يحضره الفقيه","من لا یحضرہ الفقیہ","من لا یحضره الفقیه"], ["Tahdhīb al-Aḥkām","تهذيب الأحكام","تہذیب الاحکام","تهذیب الاحکام"] ], a:0,
  ex:"The Four Books are al-Kāfī, Man lā yaḥḍuruhu al-Faqīh, Tahdhīb al-Aḥkām and al-Istibṣār. Biḥār al-Anwār is a later, larger collection by al-Majlisī." },

{ d:4, cat:"Qur'an",
  q:{ en:"Which sūrah does NOT begin with the Bismillāh?", ar:"أيُّ سورةٍ لا تبدأُ بالبسملة؟", ur:"کونسی سورت بسم اللہ سے شروع نہیں ہوتی؟", fa:"کدام سوره با بسم‌الله آغاز نمی‌شود؟" },
  o:[ ["Al-Tawbah (9)","التوبة (٩)","التوبہ (۹)","التوبه (۹)"], ["Al-Fātiḥah (1)","الفاتحة (١)","الفاتحہ (۱)","الفاتحه (۱)"], ["Al-Ikhlāṣ (112)","الإخلاص (١١٢)","الاخلاص (۱۱۲)","الاخلاص (۱۱۲)"], ["Al-Nās (114)","الناس (١١٤)","الناس (۱۱۴)","الناس (۱۱۴)"] ], a:0,
  ex:"Sūrat al-Tawbah (Barāʾah) is the only sūrah that does not open with the Bismillāh." },

{ d:4, cat:"Ahl al-Bayt",
  q:{ en:"The twelfth Imam, al-Mahdī (ʿaj), is also known by which title?", ar:"الإمامُ الثاني عشر، المهديُّ (عج)، يُلقَّبُ أيضاً بـ؟", ur:"بارہویں امام مہدیؑ کا ایک اور لقب کیا ہے؟", fa:"امام دوازدهم، مهدی (عج)، به چه لقبی نیز شناخته می‌شود؟" },
  o:[ ["Al-Ḥujjah","الحُجّة","الحجت","الحجة"], ["Al-Bāqir","الباقر","الباقر","الباقر"], ["Al-Sajjād","السجّاد","السجاد","السجاد"], ["Al-ʿAskarī","العسكري","العسکری","العسکری"] ], a:0,
  ex:"He is al-Ḥujjah / Ṣāḥib al-Zamān (ʿaj). Al-ʿAskarī is his father, the eleventh Imam." },

{ d:4, cat:"Supplication",
  q:{ en:"Al-Ṣaḥīfa al-Sajjādiyyah (‘Psalms of Islam’) is attributed to which Imam?", ar:"الصحيفةُ السجّاديّةُ تُنسَبُ إلى أيِّ إمام؟", ur:"صحیفہ سجادیہ کس امام سے منسوب ہے؟", fa:"صحیفهٔ سجادیه به کدام امام منسوب است؟" },
  o:[ ["Imam al-Sajjād (ʿa)","الإمام السجّاد (ع)","امام سجادؑ","امام سجاد (ع)"], ["Imam al-Bāqir (ʿa)","الإمام الباقر (ع)","امام باقرؑ","امام باقر (ع)"], ["Imam ʿAlī (ʿa)","الإمام علي (ع)","امام علیؑ","امام علی (ع)"], ["Imam al-Ḥusayn (ʿa)","الإمام الحسين (ع)","امام حسینؑ","امام حسین (ع)"] ], a:0,
  ex:"Imam ʿAlī Zayn al-ʿĀbidīn al-Sajjād (ʿa), the fourth Imam." }
];
