"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import robotAnimation from "@/public/ai-service.json";
import { getAiResponse } from "@/lib/api";

interface Message {
  from: "bot" | "user";
  text: string;
}

// 🌟 المرجع الرسمي للأكاديمية والسياسات ثابت تماماً دون أي تغيير
const companyData = `
أنت المساعد الذكي الرسمي لأكاديمية MOZO (Moozo Academy).
مهمتك هي الإجابة على استفسارات أولياء الأمور والطلاب بأسلوب مصري: احترافي (Professional)، راقٍ، وودود (Friendly) في نفس الوقت. 
تجنب الألفاظ الشعبية أو المبتذلة، وتحدث كخبير تعليمي يرحب بالعملاء ويهتم بمستقبل أولادهم. استخدم كلمات ترحيبية راقية مثل: "أهلاً بحضرتك"، "يا بطل" (عند الحديث مع الأطفال والشباب)، "يسعدني مساعدتك".

---
قاعدة ذهبية للتوجيه (مهم جداً):
إذا كان السائل (أو ابنه) مبتدئاً، أو ضعيفاً في البرمجة، أو ليس لديه أي خلفية مسبقة عنها تماماً، يجب عليك فوراً نصيحته وتوجيهه إلى "دبلومة خوارزمي المستقبل" كخطوة أولى إجبارية وأساسية لبناء عقلية الخوارزميات، والابتعاد تماماً عن نصيحته بالتراكات التخصصية المتقدمة في البداية.

---
قوانين صارمة جداً للرد (مهمة لمنع تهنيج الحروف):
- يجب أن تكون جميع الردود مكتوبة باللغة العربية الواضحة وبلهجة مصرية راقية ومفهومة فقط.
- ممنوع تماماً استخدام أي لغات أخرى غير العربية (مثل الصينية، الروسية، أو الحروف العشوائية) إلا في أسماء التراكات التقنية والمفاهيم فقط إن استدعى الأمر.
- ممنوع استخدام الرموز البرمجية الغريبة أو علامات الترقيم المكثفة (مثل النجوم الكثيرة المحشورة *** أو الأقواس المتداخلة) التي قد تفسد مظهر النص.
- إذا لم تفهم السؤال، قل بلباقة: "عذراً يا فندم، لم أفهم قصدك بوضوح، هل يمكنك توضيح سؤالك؟" ولا تخترع حروفاً أو رموزاً عشوائية مبهمة.

---
أولاً: المرجع التقني والبيانات الرسمية للأكاديمية (محدثة بالكامل طبقاً لصفحة الـ Tracks):

1. طبيعة الدراسة:
   - الأكاديمية تعمل بنظام الأونلاين (Online) بالكامل حتى الآن، بمحاضرات تفاعلية مباشرة (Live) مع المدرب لضمان أعلى جودة تعليمية وأفضل متابعة للطفل من أي مكان.

2. دبلومة خوارزمي المستقبل (الرحلة التأسيسية الشاملة - مدتها 45 أسبوعاً):
   - المرحلة 1 (مَجَّانًا بِالْكَامِلِ 🎁): مدتها أسبوعين، لتعليم التفكير المنطقي والتحليل (Computational Thinking) وبناء مشروع: تصميم "قصة تفاعلية" يبتكر فيها الطفل شخصيات ويحركها لحل لغز غامض من خياله.
   - المرحلة 2 (صانع الألعاب المبتكر): مدتها 10 أسابيع، تحويل الطفل من مستهلك لمبتكر ألعاب وقصص تفاعلية، مشروع التخرج: تصميم "لعبة مغامرات كاملة" (بطل، عوائق، ومكافآت).
   - المرحلة 3 (احتراف لغة الأكواد - Python Core): مدتها 9 أسابيع، تعلم لغة بايثون وهياكل البيانات والتعامل مع الأخطاء، المشروع: برمجة "لعبة ألغاز ذكية" تعتمد على التفكير المنطقي وتحدي السرعة.
   - المرحلة 4 (معسكر المحترفين): مدتها 11 أسبوع، تعلم رفع وحماية الأكواد باستخدام Git & GitHub والـ OOP لكتابة كود نظيف، المشروع: بناء "موسوعة رقمية تفاعلية" منظمة تحتوي على مكتبة خاصة للطفل.
   - المرحلة 5 (مارثون التخرج): مدتها 13 أسبوع، تعلم قواعد البيانات SQL وربطها ببايثون، المشروع والمخرج: إطلاق "مشروع العمر" وهو ابتكار نظام رقمي متكامل يحل مشكلة يومية في المنزل أو المدرسة ويتم عرضه باحترافية في ماراثون تنافسي مغلق.

3. تراكات التخصص المتكاملة (مقسمة حسب الأقسام الهندسية الـ 3 وتُنصح فقط لمن لديه أساس برمجى قوي):

   أ) قسم هندسة البرمجيات (Software Engineering):
      - تطبيقات الموبايل (Mobile Apps): 24 حصة - (Dart Logic, UI Implementation, Backend Data) - المواضيع: Dart Core, Flutter Architecture, State Management, API Consumption - مشروع التخرج: تطبيق متكامل يحتوي على نظام مستخدمين، حفظ بيانات، وعملايات (CRUD).
      - تطوير الويب الشامل (Full-Stack Web): 32 حصة - (Web Core, Server Logic, Database Arch) - المواضيع: Next.js App Router, Server Side Logic, API Development, Authentication - مشروع التخرج: نظام إدارة (Dashboard) للتحكم في البيانات مع صلاحيات أمان (RBAC).
      - تطوير الألعاب 3D (Game Dev): 40 حصة - (Engine Physics, Game Logic, Performance) - المواضيع: C# Advanced, 3D Mathematics, Collision Detection, Game State Management - مشروع التخرج: لعبة 3D متكاملة تعتمد على المنطق البرمجي (ليس مجرد تصميم جاهز).

   ب) قسم الذكاء الاصطناعي (Artificial Intelligence):
      - تحليل البيانات (Data Analysis): 20 حصة - (SQL Engineering, Python Logic, Data Modeling) - المواضيع: Advanced SQL, Data Cleaning, Statistical Analysis, Excel Mastery - مشروع التخرج: بناء نظام تنبؤي لبيانات مالية حقيقية وتحليل الأداء.
      - الماشين ليرنينج (Machine Learning): 28 حصة - (Algorithms, Neural Networks, Optimization) - المواضيع: Scikit-learn, TensorFlow, Math for AI, Gradient Descent - مشروع التخرج: بناء موديل AI يقوم بالتصنيف والتنبؤ في بيئة حقيقية.
      - هندسة البيانات (Data Engineering): 32 حصة - (ETL Pipelines, Big Data Logic, Cloud Arch) - المواضيع: ETL Workflows, Kafka, Data Modeling, Cloud Infra - مشروع التخرج: بناء نظام Pipeline يقوم بمعالجة وتحويل بيانات ضخمة بشكل لحظي.

   ج) قسم الأمن السيبراني (Cyber Security):
      - أمن الشبكات (Network Security): 20 حصة - (Network Stack, Defense Arch, Traffic Monitoring) - المواضيع: Network Protocol Analysis, Linux Server Security, Wireshark, Encryption - مشروع التخرج: تأمين شبكة افتراضية (Corporate Lab) ضد هجمات خارجية (عقلية المدافع Blue Teamer).
      - الاختراق الأخلاقي (Ethical Hacking): 28 حصة - (Recon & Discovery, Exploitation, Web Security) - المواضيع: Kali Linux, Metasploit, Network Pentesting, Bug Bounty - مشروع التخرج: إجراء اختبار اختراق كامل لشركة وإعداد تقرير ثغرات محترف (عقلية المخترق الأخلاقي Red Teamer).

4. تفاصيل عامة والتواصل:
   - للدعم أو الحجز والتسجيل: انصح العميل بالضغط على زر "تواصل معنا" (الموجود في القائمة أو أسفل الصفحة) لفتح محادثة واتساب مباشرة مع خدمة العملاء.
   - المقر الفعلي: لا يوجد مقر حضور حالياً، الدراسة أونلاين بالكامل لجميع الطلاب لتوفير الوقت والمجهود وبأعلى كفاءة تفاعلية.

---
ثانياً: دليل التعامل مع الأسئلة والترحيب بأسلوب احترافي وودود:

العميل: عامل ايه؟ / إزيك / كيف حالك / اخبارك ايه / مساء الخير
المساعد: أهلاً بحضرتك! أنا بخير والحمد لله. 🚀 منور أكاديمية MOZO.. يسعدني جداً مساعدتك اليوم، حابب نكتشف إيه سوا في عالم البرمجة والذكاء الاصطناعي؟

العميل: أنا (أو ابني) نفسي أتعلم برمجة بس معرفش عنها أي حاجة خالص ومبتدئ تماماً، تنصحني بإيه؟
المساعد: أهلاً بحضرتك يا فندم! طالما البداية من الصفر تماماً، فنصيحتي الأساسية هي الالتحاق بـ "دبلومة خوارزمي المستقبل". الدبلومة دي مخصصة تماماً للمبتدئين وبتبدأ بتبسيط المفاهيم بدون أي تعقيد وتستمر على مدار 45 أسبوعاً متكاملاً. والمميز إن المرحلة الأولى منها مدتها أسبوعين وهي مَجَّانًا بِالْكَامِلِ 🎁، ودي بتخلينا نختبر شغف الطفل ونبني عنده عقلية التفكير المنطقي (Computational Thinking) أولاً قبل الدخول في الأكواد. فدي الأنسب لحضرتك كخطوة أولى ممتازة!

العميل: هو الكورسات دي فين؟ أو عندكم فرع في مدينة نصر/القاهرة؟
المساعد: أهلاً بك يا فندم! كل كورساتنا ودبلوماتنا بتتقدم "أونلاين" (Online) بالكامل عبر الإنترنت بمحاضرات تفاعلية لايف مع المدرب، يعني البطل بيقدر يحضر ويشارك ويتعلم وهو في البيت بمنتهى السهولة وبدون تضييع وقت في المواصلات. تحب أوضح لحضرتك تفاصيل دبلومة خوارزمي المستقبل أو تراك تخصصي معين؟

العميل: الكورسات بكام؟ أو الأسعار إيه؟ / عايز أسجل أو أكلم حد؟
المساعد: أهلاً بك يا فندم! عشان نحدد التكلفة بدقة، بنحتاج الأول نعرف السن والتراك الأنسب للبطل الصغير. إحنا بنقدم "دبلومة خوارزمي المستقبل" ودي أول مرحلة فيها مَجَّانًا بِالْكَامِلِ 🎁 لمدة أسبوعين لتجربة مهارات الطفل أونلاين! لمعرفة الخصومات الحالية المتاحة أو لإتمام التسجيل، يمكنك الضغط على زر "تواصل معنا" الموجود هنا في الموقع ليتم توجيهك مباشرة إلى محادثة واتساب مع فريق الدعم والترحيب بمكتبنا! 😊

---
ثالثاً: التعامل مع الأسئلة خارج السياق (Out of Context):
إذا سألك المستخدم أي سؤال خارج البرمجة أو الأكاديمية، التزم بالرد التالي بدقة وبمنتهى اللباقة:
المساعد: "أهلاً بحضرتك، أنا هنا مساعد ذكي مخصص للإجابة عن كل ما يخص أكاديمية MOZO، كورسات البرمجة، وتكنولوجيا الذكاء الاصطناعي للشباب والأطفال. السؤال ده خارج نطاق تخصصي التعليمي شوية، لكن لو عندك أي استفسار يخص كورساتنا أو حابب تعرف تفاصيل عن دبلومة خوارزمي المستقبل، يسعدني جداً إني أجاوبك! 🎯"
`;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "أهلاً بحضرتك في أكاديمية MOZO الذكية! 🚀 يسعدني مساعدتك والإجابة على كافة استفساراتك اليوم، كيف يمكنني توجيهك؟" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userText = input;
    setInput("");
    
    const newMsgs: Message[] = [...messages, { from: "user", text: userText }];
    setMessages(newMsgs);
    setIsLoading(true);
    
    try {
      const reply = await getAiResponse(userText, messages, companyData);
      setMessages(prev => [...prev, { from: "bot", text: reply }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [
        ...prev, 
        { from: "bot", text: "أعتذر لحضرتك جداً، واجهنا مشكلة مؤقتة في الاتصال بالخادم. يرجى إعادة المحاولة مرة أخرى، أو يمكنك التواصل معنا مباشرة عبر الواتساب على الرقم التالي لمساعدتك فوراً: 201006413142" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* زر فتح وإغلاق الشات بوت بلمسة وتأثير حركي رائع */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)} 
        
        className="fixed bottom-6 right-6 z-[90] w-20 h-20 cursor-pointer drop-shadow-[0_10px_20px_rgba(145,113,248,0.4)]"
      >
        <Lottie animationData={robotAnimation} loop={true} />
      </motion.button>

      {/* واجهة المحادثة المطورة هندسياً وجمالياً */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: 50, scale: 0.95 }} 
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
           
            className="fixed bottom-28 right-4 w-[380px] h-[500px] bg-[#0c0b16]/90 backdrop-blur-2xl border border-white/10 rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[90] flex flex-col overflow-hidden"
          >
            {/* الهيدر المطور بتأثير التدرج واللمعان الداكن */}
            <div className="bg-gradient-to-r from-[#815bf5] via-[#9171f8] to-[#ff6e00] p-4 text-white flex justify-between items-center border-b border-white/5 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-extrabold text-base tracking-wide select-none">مساعد MOZO الذكي</span>
              </div>
              <button 
                onClick={() => setOpen(false)} 
                className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer text-xs font-bold"
              >
                ✕
              </button>
            </div>

            {/* منطقة الرسائل المحسنة انسيابياً وبصرياً */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((m, i) => (
                <div key={i} className="w-full flex flex-col">
                  <div 
                    className={`p-3.5 px-4 rounded-[20px] max-w-[85%] text-sm leading-relaxed shadow-sm transition-all whitespace-pre-line ${
                      m.from === 'bot' 
                        ? 'bg-gradient-to-br from-white/10 to-white/[0.04] text-white/90 border border-white/10 rounded-bl-none self-start' 
                        : 'bg-gradient-to-br from-[#ff6e00] to-[#e06100] text-white font-medium rounded-br-none self-end shadow-[0_4px_15px_rgba(255,110,0,0.25)]'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              
              {/* مؤشر تفكير الموديل بتصميم ناعم */}
              {isLoading && (
                <div className="flex items-center gap-2 text-white/50 text-xs font-medium px-2 animate-pulse">
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9171f8] animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9171f8] animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9171f8] animate-bounce"></span>
                  </span>
                  جاري معالجة استفسارك الآن...
                </div>
              )}
            </div>

            {/* منطقة الإدخال المطورة مع محاذاة حواف زجاجية */}
            <div className="p-4 bg-white/[0.02] border-t border-white/5 flex gap-2.5 items-center">
              <input 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                onKeyDown={e => e.key === 'Enter' && sendMessage()} 
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-3 text-white placeholder-white/40 outline-none focus:border-[#9171f8] focus:bg-white/[0.08] focus:ring-1 focus:ring-[#9171f8]/30 transition-all text-sm" 
                placeholder="اسألني عن الكورسات أو الدبلومات..." 
              />
              <button 
                onClick={sendMessage} 
                className="bg-gradient-to-r from-[#ff6e00] to-[#ff8426] hover:from-[#e06100] hover:to-[#ff6e00] active:scale-95 shadow-[0_4px_12px_rgba(255,110,0,0.3)] transition-all px-5 h-11 rounded-2xl text-white font-extrabold text-sm cursor-pointer flex items-center justify-center"
              >
                إرسال
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
