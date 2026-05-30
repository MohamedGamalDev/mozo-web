"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    // شيلنا اللون المخصوص هنا عشان يندمج مع الـ Hero
    <section id="about" className="py-24 px-4 relative overflow-hidden bg-transparent">
      
      {/* Glow خفيف عشان يربط السكشن باللي فوقه */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-mozo-purple/10 blur-[120px] z-0" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        {/* الجانب الأيمن: النص العربي */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-right"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
            فريقنا ليس مجرد مدرسين، <br/>
            <span className="bg-gradient-to-r from-mozo-purple to-mozo-pink bg-clip-text text-transparent">بل مهندسون خبراء</span>
          </h2>
          
          <div className="space-y-6 text-white/80" dir="rtl">
            <p className="text-lg md:text-xl leading-relaxed opacity-90 text-right">
               في <span className="text-white font-bold underline decoration-mozo-purple">Mozo Academy</span>، نعتمد على نخبة من المهندسين الممارسين، مما يضمن لابنك تعلم أحدث التقنيات المستخدمة عالمياً.
            </p>
            
            <ul className="space-y-4 list-none p-0">
              <li className="flex items-center gap-3 justify-start font-medium leading-relaxed">
                <div className="w-2 h-2 rounded-full bg-mozo-orange shrink-0" />
                <span>خبرة عملية حقيقية في بناء البرمجيات والذكاء الاصطناعي</span>
              </li>
              <li className="flex items-center gap-3 justify-start font-medium leading-relaxed">
                <div className="w-2 h-2 rounded-full bg-mozo-purple shrink-0" />
                <span>مهارة استثنائية في تبسيط أعقد المفاهيم التقنية للأطفال</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* الجانب الأيسر: كارت الكود (Python) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <div className="glass-card-sharp p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl relative group">
            <div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/40" />
            </div>

            <pre className="font-mono text-sm md:text-base text-left" dir="ltr">
              <code className="text-white/30 block mb-2"># Mozo Academy</code>
              <code className="text-mozo-pink block">{`def start_journey(child):`}</code>
              <code className="text-white/70 block pl-4">{`mentors = "Expert Engineers"`}</code>
              <code className="text-mozo-purple block pl-4">{`child.learn(`}</code>
              <code className="text-white/50 block pl-8">{`logic=True,`}</code>
              <code className="text-white/50 block pl-8">{`coding="Hands-on",`}</code>
              <code className="text-white/50 block pl-8">{`fun="100%"`}</code>
              <code className="text-mozo-purple block pl-4">{`)`}</code>
            </pre>
          </div>
        </motion.div>

      </div>
    </section>
  );
}