export const mazeSteps = [
  {
    id: 1,
    title: "المرحلة الأولى: مَجَّانًا بِالْكَامِلِ",
    subTitle: "شرارة الشغف وبناء عقلية الخوارزميات",
    details: "أسبوعين",
    content: "قبل كتابة سطر كود واحد، نأخذ الطفل في رحلة ملهمة لفهم تاريخ الآلة وكيف يفكر الذكاء الاصطناعي, وتفكيك المشكلات المعقدة لخطوات منطقية متتالية.",
    value: "التفكير المنطقي، التخطيط، والقدرة على التحليل الفكري (Computational Thinking).",
    project: "أول عرض تقديمي (Presentation 1) يطرح فيه الطفل حلاً ذكياً لمشكلة بيئية أو واقعية.",
    icon: "🧠",
    isFree: true
  },
  {
    id: 2,
    title: "المرحلة الثانية: صانع الألعاب المبتكر",
    subTitle: "ابنك هيتحول من مجرد لاعب مستهلك.. إلى مصمم ومبتكر للألعاب بنفسه!",
    details: "10 أسابيع",
    content: "هنا هينتهي وقت اللعب الضائع، ويبدأ وقت الإبداع! من خلال واجهة بصرية ممتعة وملونة، هيتعلم طفلك إعطاء أوامر ذكية، وتوجيه أبطال اللعبة، وتنظيم حركتهم بذكاء وسلاسة.",
    value: "تغيير كامل في طريقة تفكير الطفل: هيكتسب عقلية المخطط والمطور.",
    project: "تصميم مشروع تخرج متكامل (لعبة من فكرته وتنفيذه بالكامل).",
    icon: "🎮",
    isFree: false
  },
  {
    id: 3,
    title: "المرحلة الثالثة: احتراف لغة الأكواد",
    subTitle: "العبور إلى عالم الأكواد الحقيقية (Python Core)",
    details: "9 أسابيع",
    content: "كسر حاجز الخوف من الشاشات السوداء والكتابة النصية. يتعلم لغة Python (الأولى عالمياً في الذكاء الاصطناعي).",
    value: "مهارة الكتابة البرمجية الصحيحة، حل المشكلات البرمجية العميقة.",
    project: "بناء 'مساعد رقمي ذكي شات بوت' متكامل.",
    icon: "🐍",
    isFree: false
  },
  {
    id: 4,
    title: "المرحلة الرابعة: معسكر المحترفين",
    subTitle: "البرمجة كائنية التوجه وإدارة السحاب",
    details: "11 أسبوعاً",
    content: "نقلة نوعية بمستوى الشركات الكبرى! يتعلم الطفل رفع وحماية الأكواد على السحاب باستخدام Git & GitHub.",
    value: "العمل الجماعي البرمجي (Teamwork) وفهم هندسة الأنظمة البرمجية (Clean Architecture).",
    project: "إطلاق 'سيستم عيادات المستشفى الذكي' كمشروع جماعي.",
    icon: "💼",
    isFree: false
  },
  {
    id: 5,
    title: "المرحلة الخامسة: مارثون التخرج",
    subTitle: "قواعد البيانات العلائقية (SQL) وماراثون التخرج التنافسي",
    details: "13 أسبوعاً",
    content: "المرحلة الختامية الكبرى. يتعلم تصميم وإدارة قواعد البيانات الضخمة بالـ SQL وربطها ببايثون.",
    value: "إدارة المشاريع، التفكير التجاري والتقني، والتسويق الشخصي للمهارات.",
    project: "مناقشة مشروع التخرج لايف أمام أولياء الأمور.",
    icon: "🏆",
    isFree: false
  }
];

export const specializations: any = {
  "Mobile Apps": {
    dept: "Software Engineering",
    title: "تطبيقات الموبايل",
    lessons: "36 حصة (9 شهور)",
    levels: [
      { name: "L1: Dart Master", detail: "أساسيات لغة Dart والبرمجة الكائنية (OOP)." },
      { name: "L2: UI/UX Flutter", detail: "تصميم واجهات احترافية وحركات (Animations)." },
      { name: "L3: Backend Auth", detail: "ربط التطبيق بـ Firebase والبيانات السحابية." }
    ],
    topics: ["Flutter Architecture", "State Management", "API Integration", "App Store Publishing"],
    finalProject: "تطبيق متجر إلكتروني كامل يقبل الطلبات والدفع.",
    outcome: "مطور تطبيقات موبايل جاهز لنشر تطبيقاته الخاصة أو العمل في شركات برمجية.",
    icon: "📱"
  },
  "Full-Stack Web": {
    dept: "Software Engineering",
    title: "تطوير الويب الشامل",
    lessons: "36 حصة (9 شهور)",
    levels: [
      { name: "L1: Frontend Pro", detail: "احتراف React.js و Next.js وبناء الواجهات." },
      { name: "L2: Backend Hero", detail: "بناء السيرفرات بـ Node.js وتأمين البيانات." },
      { name: "L3: Full DB System", detail: "إدارة قواعد البيانات MongoDB وربطها بالكامل." }
    ],
    topics: ["Next.js App Router", "Server Components", "Express.js API", "Authentication"],
    finalProject: "نظام إدارة مدرسة أو شركة كامل بـ Dashboard.",
    outcome: "مهندس ويب قادر على بناء مواقع من الصفر (Front & Back).",
    icon: "💻"
  },
  "Game Dev": {
    dept: "Software Engineering",
    title: "تطوير الألعاب 3D",
    lessons: "48 حصة (12 شهر)",
    levels: [
      { name: "L1: Unity Basics", detail: "فهم محرك Unity والتعامل مع الأجسام 3D." },
      { name: "L2: C# Scripting", detail: "برمجة قوانين اللعبة وحركات الشخصيات." },
      { name: "L3: Visual Effects", detail: "إضافة الإضاءة والظلال والأصوات الاحترافية." }
    ],
    topics: ["C# Advanced", "3D Physics", "Level Design", "Game Logic"],
    finalProject: "لعبة مغامرات 3D كاملة بـ 5 مراحل وقصة مترابطة.",
    outcome: "مطور ألعاب قادر على تحويل الأفكار إلى ألعاب تفاعلية ونشرها على Steam.",
    icon: "🎮"
  },
  "Data Analysis": {
    dept: "Artificial Intelligence",
    title: "تحليل البيانات",
    lessons: "24 حصة (6 شهور)",
    levels: [
      { name: "L1: SQL Master", detail: "كيفية التعامل مع قواعد البيانات الضخمة وسحب المعلومات." },
      { name: "L2: Python Data", detail: "استخدام Pandas و NumPy لتحويل الأرقام لتقارير." },
      { name: "L3: Visualization", detail: "تصميم Dashboards تفاعلية تشرح البيانات بصرياً." }
    ],
    topics: ["Power BI Basics", "Data Cleaning", "Statistical Analysis", "Excel Mastery"],
    finalProject: "تحليل كامل لبيانات مبيعات شركة حقيقية لزيادة أرباحها.",
    outcome: "محلل بيانات محترف يستطيع استخراج الفرص من وسط ملايين الأرقام.",
    icon: "📊"
  },
  "Machine Learning": {
    dept: "Artificial Intelligence",
    title: "الماشين ليرنينج",
    lessons: "36 حصة (9 شهور)",
    levels: [
      { name: "L1: ML Algorithms", detail: "فهم كيف تتعلم الآلة من الأنماط السابقة." },
      { name: "L2: Neural Networks", detail: "بناء الشبكات العصبية التي تحاكي عقل الإنسان." },
      { name: "L3: Deep Learning", detail: "التعرف على الصور (Vision) وفهم اللغات (NLP)." }
    ],
    topics: ["Scikit-learn", "TensorFlow", "Feature Engineering", "Mathematics for ML"],
    finalProject: "نموذج ذكاء اصطناعي يتوقع أسعار العقارات أو يشخص الأمراض.",
    outcome: "مهندس تعلم آلة قادر على بناء أنظمة ذكية تتخذ قرارات مستقلة.",
    icon: "🤖"
  },
  "Data Engineering": {
    dept: "Artificial Intelligence",
    title: "هندسة البيانات",
    lessons: "36 حصة (9 شهور)",
    levels: [
      { name: "L1: Pipeline Build", detail: "كيفية نقل البيانات من مكان لآخر بأمان وسرعة." },
      { name: "L2: Big Data Tools", detail: "التعامل مع Hadoop و Spark لمعالجة البيانات الضخمة." },
      { name: "L3: Cloud Infra", detail: "إدارة البيانات على AWS و Azure وبناء المستودعات (DW)." }
    ],
    topics: ["ETL Processes", "Kafka Streaming", "Docker for Data", "Cloud Architecture"],
    finalProject: "بناء Pipeline لنقل بيانات البورصة لحظة بلحظة ومعالجتها.",
    outcome: "مهندس بيانات يبني الطرق التحتية التي يعتمد عليها محللو البيانات.",
    icon: "⚙️"
  },
  "Network Security": {
    dept: "Cyber Security",
    title: "أمن الشبكات",
    lessons: "24 حصة (6 شهور)",
    levels: [
      { name: "L1: Network Core", detail: "فهم كيف تتواصل الأجهزة (Protocols) والشبكات." },
      { name: "L2: Defensive Lab", detail: "بناء الجدران النارية (Firewalls) وتأمين الـ WiFi." },
      { name: "L3: Monitoring", detail: "مراقبة حركة الشبكة وكشف المتسللين في الوقت الفعلي." }
    ],
    topics: ["TCP/IP Security", "VPN Configuration", "Linux Server Admin", "Wireshark"],
    finalProject: "تصميم شبكة شركة آمنة تماماً ضد الاختراقات الخارجية.",
    outcome: "مسؤول أمن شبكات يحمي المنظمات من أي اختراق لبياناتها الحساسة.",
    icon: "📡"
  },
  "Ethical Hacking": {
    dept: "Cyber Security",
    title: "الاختراق الأخلاقي",
    lessons: "36 حصة (9 شهور)",
    levels: [
      { name: "L1: Reconnaissance", detail: "طرق جمع المعلومات عن الهدف واكتشاف الثغرات." },
      { name: "L2: System Attack", detail: "تعلم كيفية اختراق الأنظمة لاختبار قوتها (Pentesting)." },
      { name: "L3: Web Security", detail: "اكتشاف ثغرات المواقع SQLi و XSS وحلها." }
    ],
    topics: ["Kali Linux", "Metasploit", "Bug Bounty Hunting", "Cyber Ethics"],
    finalProject: "عمل اختبار اختراق كامل لشركة وهمية واكتشاف 5 ثغرات أمنية.",
    outcome: "هاكر أخلاقي (Red Teamer) يكتشف الثغرات قبل أن يجدها المخربون.",
    icon: "🛡️"
  }
};