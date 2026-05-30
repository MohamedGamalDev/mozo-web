"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, ChevronLeft
} from "lucide-react";

// 1. المراحل الخمسة الجديدة لدبلومة خوارزمي المستقبل
const mazeSteps = [
  {
    id: 1,
    title: "المرحلة الأولى: مَجَّانًا بِالْكَامِلِ",
    subTitle: "شرارة الشغف وبناء عقلية الخوارزميات",
    details: "أسبوعين (مَجَّانًا بِالْكَامِلِ 🎁)",
    content: "قبل كتابة سطر كود واحد، نأخذ الطفل في رحلة ملهمة لفهم تاريخ الآلة وكيف يفكر الذكاء الاصطناعي, وتفكيك المشكلات المعقدة لخطوات منطقية متتالية.",
    value: "التفكير المنطقي، التخطيط، والقدرة على التحليل الفكري (Computational Thinking).",
    project: "تصميم 'قصة تفاعلية' يبتكر فيها الطفل شخصيات ويحركها لحل لغز غامض من خياله.",
    icon: "🧠",
    pos: "md:mr-auto",
    isFree: true
  },
  {
    id: 2,
    title: "المرحلة الثانية: صانع الألعاب المبتكر",
    subTitle: "ابنك هيتحول من مجرد لاعب مستهلك.. إلى مصمم ومبتكر للألعاب بنفسه!",
    details: "10 أسابيع",
    content: "هنا هينتهي وقت اللعب الضائع، ويبدأ وقت الإبداع! من خلال واجهة بصرية ممتعة وملونة، هيتعلم طفلك إعطاء أوامر ذكية، وتوجيه أبطال اللعبة، وتنظيم حركتهم بذكاء وسلاسة لتصميم ألعاب كاملة وقصص تفاعلية تعبر عن خياله.",
    value: "تغيير كامل في طريقة تفكير الطفل: هيكتسب عقلية المخطط والمطور، وهيتعلم إزاي يرتب خطواته ويحلل التفاصيل بذكاء وصبر.",
    project: "تصميم 'لعبة مغامرات كاملة' (بطل، عوائق، ومكافآت) تعكس هوايات الطفل وشخصيته المحببة.",
    icon: "🎮",
    pos: "md:mx-auto",
    isFree: false
  },
  {
    id: 3,
    title: "المرحلة الثالثة: احتراف لغة الأكواد",
    subTitle: "العبور إلى عالم الأكواد الحقيقية (Python Core)",
    details: "9 أسابيع",
    content: "كسر حاجز الخوف من الشاشات السوداء والكتابة النصية. يتعلم لغة Python (الأولى عالمياً في الذكاء الاصطناعي)، وكيفية بناء هياكل البيانات وحماية البرامج من الانهيار.",
    value: "مهارة الكتابة البرمجية الصحيحة، حل المشكلات البرمجية العميقة، والتعامل مع الأخطاء بصبر وثقة.",
    project: "برمجة 'لعبة ألغاز ذكية' تعتمد على التفكير المنطقي وتحدي السرعة في اتخاذ القرار.",
    icon: "🐍",
    pos: "md:ml-auto",
    isFree: false
  },
  {
    id: 4,
    title: "المرحلة الرابعة: معسكر المحترفين",
    subTitle: "البرمجة كائنية التوجه وإدارة السحاب",
    details: "11 أسبوعاً",
    content: "نقلة نوعية بمستوى الشركات الكبرى! يتعلم الطفل رفع وحماية الأكواد على السحاب باستخدام Git & GitHub، وهضم الأعمدة الأربعة للـ OOP لكتابة كود نظيف بمواصفات عالمية.",
    value: "العمل الجماعي البرمجي (Teamwork) على السحاب، وفهم وهندسة الأنظمة البرمجية المعقدة (Clean Architecture).",
    project: "بناء 'موسوعة رقمية تفاعلية' منظمة، تحتوي على مكتبة خاصة للطفل تجمع اهتماماته.",
    icon: "💼",
    pos: "md:mx-auto",
    isFree: false
  },
  {
    id: 5,
    title: "المرحلة الخامسة: مارثون التخرج",
    subTitle: "قواعد البيانات العلائقية (SQL) وماراثون التخرج التنافسي",
    details: "13 أسبوعاً",
    content: "المرحلة الختامية الكبرى. يتعلم تصميم وإدارة قواعد البيانات الضخمة بالـ SQL وربطها ببايثون، ثم يدخل في مسابقة وماراثون مغلق ومكثف لبناء مشروع متكامل (بزنس وكود) في فرق ثنائية.",
    value: "إدارة المشاريع، التفكير التجاري والتقني معاً، والتسويق الشخصي للمهارات.",
    project: "إطلاق 'مشروع العمر': ابتكار نظام رقمي متكامل يحل مشكلة يومية في المنزل أو المدرسة ويتم عرضه باحترافية.",
    icon: "🏆",
    pos: "md:mr-auto",
    isFree: false
  }
];

const specializations: any = {
  "Mobile Apps": { 
    dept: "Software Engineering", title: "تطبيقات الموبايل", lessons: "24 حصة", 
    levels: [
      { name: "L1: Dart Logic", detail: "تأسيس المتغيرات، الدوال، والبرمجة الكائنية (OOP) لبناء منطق التطبيق." },
      { name: "L2: UI Implementation", detail: "التحكم في الـ Widgets، بناء هياكل الشاشات، وإدارة الـ State داخل التطبيق." },
      { name: "L3: Backend Data", detail: "ربط التطبيق بقواعد البيانات (Firebase)، وتأمين تدفق البيانات (API Integration)." }
    ], 
    topics: ["Dart Core", "Flutter Architecture", "State Management", "API Consumption"], 
    finalProject: "تطبيق متكامل يحتوي على نظام مستخدمين، حفظ بيانات، وعمليات (CRUD).", 
    outcome: "مطور تطبيقات يفهم كيف يُبنى منطق البرمجة. عقلية المهندس: القدرة على تحليل معمارية أي تطبيق عالمي وفهم كيفية عمله من الداخل.", icon: "📱" 
  },
  "Full-Stack Web": { 
    dept: "Software Engineering", title: "تطوير الويب الشامل", lessons: "32 حصة", 
    levels: [
      { name: "L1: Web Core", detail: "فهم بروتوكولات الشبكة (HTTP/HTTPS) وكيفية تواصل المتصفح مع السيرفر." },
      { name: "L2: Server Logic", detail: "برمجة الـ Backend باستخدام Node.js وبناء الـ RESTful APIs." },
      { name: "L3: Database Arch", detail: "تصميم قواعد البيانات (MongoDB) وضمان استقرار البيانات (Data Integrity)." }
    ], 
    topics: ["Next.js App Router", "Server Side Logic", "API Development", "Authentication"], 
    finalProject: "نظام إدارة (Dashboard) للتحكم في البيانات مع صلاحيات أمان (RBAC).", 
    outcome: "مهندس ويب يربط الفرونت إند بالباك إند. عقلية المهندس: القدرة على تصميم أنظمة قابلة للتوسع (Scalable Systems) وتأمينها ضد الثغرات.", icon: "💻" 
  },
  "Game Dev": { 
    dept: "Software Engineering", title: "تطوير الألعاب 3D", lessons: "40 حصة", 
    levels: [
      { name: "L1: Engine Physics", detail: "التعامل مع الـ Game Engine، فهم قوانين الحركة، والجاذبية في الألعاب." },
      { name: "L2: Game Logic", detail: "برمجة ميكانيكا اللعبة باستخدام C#، وبناء الذكاء الاصطناعي للأعداء." },
      { name: "L3: Performance", detail: "إدارة الذاكرة (Memory Management) وتحسين أداء اللعبة لتعمل بكفاءة." }
    ], 
    topics: ["C# Advanced", "3D Mathematics", "Collision Detection", "Game State Management"], 
    finalProject: "لعبة 3D متكاملة تعتمد على المنطق البرمجي (ليس مجرد تصميم جاهز).", 
    outcome: "مطور ألعاب يفهم ما خلف الكواليس. عقلية المهندس: القدرة على تحويل أي فكرة خيالية إلى قوانين فيزيائية ومنطقية داخل بيئة اللعبة.", icon: "🎮" 
  },
  "Data Analysis": { 
    dept: "Artificial Intelligence", title: "تحليل البيانات", lessons: "20 حصة", 
    levels: [
      { name: "L1: SQL Engineering", detail: "هيكلة قواعد البيانات العملاقة واستخراج المعلومات بدقة (Complex Queries)." },
      { name: "L2: Python Logic", detail: "استخدام Pandas/NumPy لمعالجة البيانات وتحويلها إلى معادلات منطقية." },
      { name: "L3: Data Modeling", detail: "تحليل الأنماط والنمذجة الرياضية (Statistical Modeling)." }
    ], 
    topics: ["Advanced SQL", "Data Cleaning", "Statistical Analysis", "Excel Mastery"], 
    finalProject: "بناء نظام تنبؤي لبيانات مالية حقيقية وتحليل الأداء.", 
    outcome: "محلل بيانات يربط الأرقام بالواقع. عقلية المهندس: القدرة على تحويل البيانات الصماء إلى استراتيجيات عمل وقرارات ذكية.", icon: "📊" 
  },
  "Machine Learning": { 
    dept: "Artificial Intelligence", title: "الماشين ليرنينج", lessons: "28 حصة", 
    levels: [
      { name: "L1: Algorithms", detail: "بناء الخوارزميات من الصفر لفهم كيف تتعلم الآلة." },
      { name: "L2: Neural Networks", detail: "التعمق في الشبكات العصبية والتعامل مع (Backpropagation)." },
      { name: "L3: Optimization", detail: "تحسين الموديلات (Feature Engineering) لرفع كفاءة التنبؤ." }
    ], 
    topics: ["Scikit-learn", "TensorFlow", "Math for AI", "Gradient Descent"], 
    finalProject: "بناء موديل AI يقوم بالتصنيف والتنبؤ في بيئة حقيقية.", 
    outcome: "مهندس فاهم الرياضيات خلف كل موديل. عقلية المهندس: الابتكار في حل المشكلات باستخدام نماذج الذكاء الاصطناعي لا مجرد استدعاء دوال جاهزة.", icon: "🤖" 
  },
  "Data Engineering": { 
    dept: "Artificial Intelligence", title: "هندسة البيانات", lessons: "32 حصة", 
    levels: [
      { name: "L1: ETL Pipelines", detail: "هندسة عمليات نقل وتجميع البيانات بين الأنظمة." },
      { name: "L2: Big Data Logic", detail: "التعامل مع Hadoop/Spark لمعالجة البيانات الضخمة." },
      { name: "L3: Cloud Arch", detail: "إدارة البنية التحتية للبيانات (AWS/Azure)." }
    ], 
    topics: ["ETL Workflows", "Kafka", "Data Modeling", "Cloud Infra"], 
    finalProject: "بناء نظام Pipeline يقوم بمعالجة وتحويل بيانات ضخمة بشكل لحظي.", 
    outcome: "مهندس بيانات يبني الطرق السريعة للبيانات. عقلية المهندس: التفكير في الكفاءة (Efficiency) واستمرارية الأنظمة (Reliability).", icon: "⚙️" 
  },
  "Network Security": { 
    dept: "Cyber Security", title: "أمن الشبكات", lessons: "20 حصة", 
    levels: [
      { name: "L1: Network Stack", detail: "فهم الـ OSI Model وتفاصيل تواصل البروتوكولات (TCP/UDP)." },
      { name: "L2: Defense Arch", detail: "تأمين الشبكات ببناء الجدران النارية (Firewalls) وكشف التسلل (IDS)." },
      { name: "L3: Traffic Monitoring", detail: "تحليل حركة الشبكة لحظياً لاكتشاف أي نشاط مشبوه." }
    ], 
    topics: ["Network Protocol Analysis", "Linux Server Security", "Wireshark", "Encryption"], 
    finalProject: "تأمين شبكة افتراضية (Corporate Lab) ضد هجمات خارجية.", 
    outcome: "خبير تأمين. عقلية المهندس: التفكير كالمدافع (Blue Teamer) الذي يتوقع الثغرة قبل أن يستغلها المخرب.", icon: "📡" 
  },
  "Ethical Hacking": { 
    dept: "Cyber Security", title: "الاختراق الأخلاقي", lessons: "28 حصة", 
    levels: [
      { name: "L1: Recon & Discovery", detail: "طرق تجميع المعلومات عن الهدف واكتشاف الثغرات." },
      { name: "L2: Exploitation", detail: "تنفيذ هجمات لمحاكاة اختبار الاختراق (Penetration Testing)." },
      { name: "L3: Web Security", detail: "اكتشاف ثغرات المواقع (SQLi/XSS) وإصلاحها برمجياً." }
    ], 
    topics: ["Kali Linux", "Metasploit", "Network Pentesting", "Bug Bounty"], 
    finalProject: "إجراء اختبار اختراق كامل لشركة وإعداد تقرير ثغرات محترف.", 
    outcome: "خبير (Red Teamer). عقلية المهندس: فهم نقاط الضعف في الأنظمة وتطوير عقلية 'المخترق الأخلاقي' لحماية البيانات.", icon: "🛡️" 
  }
};

const departments = [
  { name: "Software Engineering", color: "text-blue-300" },
  { name: "Artificial Intelligence", color: "text-purple-300" },
  { name: "Cyber Security", color: "text-red-300" }
];

export default function Tracks() {
  const [selectedKey, setSelectedKey] = useState<null | string>(null);

  return (
    <section id="tracks" className="py-24 px-4 relative bg-gradient-to-b from-[#1a1c4b] via-[#2a1b52] to-[#121431] overflow-hidden text-right">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-mozo-purple opacity-10 blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="bg-mozo-purple/20 text-mozo-purple border border-mozo-purple/30 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">الهندسة والتحول البرمجي الشامل</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4 drop-shadow-lg">
            متاهة <span className="text-mozo-purple italic">خوارزمي المستقبل</span>
          </h2>
          <div className="h-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            رحلة صناعة مهندس برمجيات محترف ممتدة على مدار <span className="text-mozo-orange font-bold">45 أسبوعاً</span> تنقل طفلك من مجرد مستهلك للألعاب إلى صانع ومبتكر للأنظمة الذكية.
          </p>
        </div>

        {/* --- المتاهة التأسيسية (المراحل الـ 5) --- */}
        <div className="relative space-y-16 mb-40">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-mozo-purple via-mozo-orange to-transparent hidden md:block -translate-x-1/2 opacity-30" />

          {mazeSteps.map((step) => (
            <motion.div key={step.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className={`w-full md:w-[450px] p-8 glass-card-sharp rounded-[35px] border border-white/20 bg-white/5 backdrop-blur-md relative shadow-2xl transition-all hover:border-white/40 ${step.pos}`}>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-mozo-purple to-mozo-pink rounded-full flex items-center justify-center font-black text-white shadow-[0_0_20px_rgba(145,113,248,0.6)] text-lg">
                {step.id}
              </div>
              <div className="text-5xl mb-4 text-right">{step.icon}</div>
              <h3 className="text-xl font-black text-white mb-1">{step.title}</h3>
              <p className="text-mozo-purple text-xs font-black mb-2 italic">{step.subTitle}</p>
              <p className="text-mozo-orange text-xs font-bold mb-4 bg-mozo-orange/10 w-fit px-3 py-1 rounded-md"> ⏳ المدة: {step.details}</p>
              <div className="space-y-3 text-sm mb-6">
                <div>
                  <span className="text-white/50 text-xs font-bold block"> 💡 وصف المرحلة للأهل:</span>
                  <p className="text-gray-200 text-[12px] leading-relaxed">{step.content}</p>
                </div>
                <div>
                  <span className="text-white/50 text-xs font-bold block"> 🎯 القيمة المكتسبة:</span>
                  <p className="text-gray-300 text-[12px] leading-relaxed font-medium">{step.value}</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 mb-5">
                <p className="text-[12px] text-mozo-pink font-black uppercase tracking-tighter flex items-center gap-1">
                  <Sparkles size={14} className="animate-spin duration-1000" /> المخرج العملي والمشروع:
                </p>
                <p className="text-white text-[12px] mt-1 font-medium bg-white/5 p-2.5 rounded-xl border border-white/5">{step.project}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- تراكات التخصص المتكاملة --- */}
        <div className="space-y-32">
          {departments.map((dept) => (
            <div key={dept.name} className="space-y-10">
              <div className="flex items-center gap-4 justify-end border-b border-white/10 pb-4">
                <h3 className={`text-2xl md:text-4xl font-black ${dept.color}`}>{dept.name}</h3>
                <div className="w-12 h-1 bg-mozo-purple rounded-full shadow-[0_0_10px_#9171f8]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir="rtl">
                {Object.keys(specializations)
                  .filter(key => specializations[key].dept === dept.name)
                  .map((key) => (
                    <motion.div key={key} whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0 0 30px rgba(145,113,248,0.2)" }} onClick={() => setSelectedKey(key)}
                      className="cursor-pointer p-8 rounded-[35px] border border-white/10 bg-gradient-to-br from-white/10 to-transparent hover:border-mozo-purple transition-all group backdrop-blur-sm">
                      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{specializations[key].icon}</div>
                      <h4 className="text-xl font-black text-white mb-2">{specializations[key].title}</h4>
                      <p className="text-xs text-gray-300 font-bold mb-4">{specializations[key].lessons}</p>
                      <span className="text-mozo-purple text-[10px] font-black uppercase tracking-widest">عرض التفاصيل ←</span>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Modal عرض تفاصيل التراكات المتخصصة --- */}
      <AnimatePresence>
        {selectedKey && specializations[selectedKey] && (
          <div className="fixed inset-0 z-[190] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedKey(null)} className="fixed inset-0" />

            <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="bg-[#1c1f5e] border border-white/10 p-6 md:p-10 rounded-[40px] max-w-2xl w-full relative z-10 shadow-2xl my-8 text-right overflow-y-auto max-h-[90vh]" dir="rtl">
              
              <button onClick={() => setSelectedKey(null)} className="absolute top-6 left-6 text-white/50 hover:text-white text-2xl transition-transform hover:rotate-90"> ✕ </button>
              
              <div className="text-5xl mb-4">{specializations[selectedKey].icon}</div>
              <span className="text-xs font-black text-mozo-purple bg-mozo-purple/10 px-3 py-1 rounded-md border border-mozo-purple/20">{specializations[selectedKey].dept}</span>
              <h3 className="text-2xl md:text-3xl font-black text-white mt-3 mb-1">{specializations[selectedKey].title}</h3>
              <p className="text-mozo-orange text-xs font-bold mb-6 bg-mozo-orange/10 w-fit px-3 py-1 rounded-md"> ⏳ المدة: {specializations[selectedKey].lessons}</p>
              
              <div className="space-y-6 text-sm mb-8">
                <div className="space-y-3">
                  <h4 className="text-white font-black text-base flex items-center gap-2">
                    <div className="w-2 h-6 bg-mozo-purple rounded-full" /> مستويات ومراحل التراك:
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {specializations[selectedKey].levels.map((lvl: any, idx: number) => (
                      <div key={idx} className="bg-white/5 p-4 rounded-2xl border border-white/5">
                        <span className="text-mozo-pink font-black text-xs block mb-1">{lvl.name}</span>
                        <p className="text-gray-200 text-xs leading-relaxed">{lvl.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-black text-xl mb-4 flex items-center gap-2">
                    <div className="w-2 h-6 bg-mozo-orange rounded-full" /> المهارات
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {specializations[selectedKey].topics.map((t: string, i: number) => (
                      <span key={i} className="bg-mozo-purple/20 text-mozo-purple border border-mozo-purple/30 px-3 py-1 rounded-lg text-xs font-bold">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/10 pt-4">
                  <div>
                    <span className="text-white/50 text-xs font-bold block mb-1"> 🚀 النتيجة والمخرج النهائي:</span>
                    <p className="text-gray-200 text-xs leading-relaxed font-medium">{specializations[selectedKey].outcome}</p>
                  </div>
                  <div>
                    <span className="text-mozo-pink text-xs font-bold block mb-1"> 🎯 مشروع التخرج المحوري:</span>
                    <p className="text-gray-200 text-xs leading-relaxed font-medium bg-white/5 p-2.5 rounded-xl border border-white/5">{specializations[selectedKey].finalProject}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}