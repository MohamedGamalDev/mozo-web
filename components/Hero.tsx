// "use client";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import robotAnimation from "../public/ai-service.json";

// export default function Hero() {
//   return (
//     /* تم إضافة pb-32 هنا لزيادة المسافة في الأسفل */
//     <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 overflow-hidden">
      
//       {/* 1. الأنيميشن (الفروبوت) */}
//       <motion.div 
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="z-20 w-64 h-64 md:w-80 md:h-80 mb-8"
//       >
//         <Lottie 
//           animationData={robotAnimation} 
//           loop={true} 
//           className="drop-shadow-[0_0_40px_rgba(145,113,248,0.4)]"
//         />
//       </motion.div>

//       {/* 2. المحتوى النصي المعدل */}
//       <div className="text-center z-20 px-4 max-w-4xl">
//         <motion.h1 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="text-5xl md:text-8xl font-black tracking-tight leading-tight"
//         >
//           {/* الجملة الأولى مع مسافة سفلية (mb-6) للتحكم في البعد عن الكلمة التالية */}
//           <span className="bg-gradient-to-r from-white via-mozo-purple to-mozo-pink bg-clip-text text-transparent block mb-6">
//             اصنع مستقبل ابنك
//           </span>
//           {/* كلمة البرمجة في سطر منفصل */}
//           <span className="text-mozo-orange drop-shadow-md block">
//             بالبرمجة
//           </span>
//         </motion.h1>

//         <motion.p 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="text-xl md:text-2xl text-gray-300 font-medium mt-10 mb-12 leading-relaxed"
//         >
//           أكاديمية <span className="text-white font-bold">Mozo</span> تعلم طفلك لغات المستقبل بطريقة <span className="text-mozo-purple border-b-2 border-mozo-purple/30">تفاعلية</span> وممتعة.
//         </motion.p>

//         {/* 3. زرار الـ Action */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.7 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <button className="relative group overflow-hidden bg-mozo-orange text-white text-2xl font-black px-12 py-5 rounded-2xl shadow-[0_8px_0_0_#b34b00] hover:shadow-[0_5px_0_0_#b34b00] active:shadow-none active:translate-y-2 transition-all">
//             <span className="relative z-10">ابدأ الرحلة الآن! 🚀</span>
//             <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//           </button>
//         </motion.div>
//       </div>

//       {/* 4. عناصر الديكور الخلفية */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mozo-purple/10 rounded-full blur-[120px]" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mozo-pink/10 rounded-full blur-[120px]" />
        
//         <motion.div 
//           animate={{ y: [0, -20, 0] }} 
//           transition={{ duration: 4, repeat: Infinity }}
//           className="absolute top-1/3 right-10 md:right-32 text-4xl text-mozo-purple/30 font-mono hidden md:block"
//         >
//           {"<Code />"}
//         </motion.div>
//         <motion.div 
//           animate={{ y: [0, 20, 0] }} 
//           transition={{ duration: 5, repeat: Infinity, delay: 1 }}
//           className="absolute bottom-1/3 left-10 md:left-32 text-4xl text-mozo-pink/30 font-mono hidden md:block"
//         >
//           {"{ AI }"}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import robotAnimation from "../public/ai-service.json";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 overflow-hidden">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="z-20 w-64 h-64 md:w-80 md:h-80 mb-8"
      >
        <Lottie animationData={robotAnimation} loop={true} className="drop-shadow-[0_0_40px_rgba(145,113,248,0.4)]" />
      </motion.div>

      <div className="text-center z-20 px-4 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-8xl font-black tracking-tight leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-mozo-purple to-mozo-pink bg-clip-text text-transparent block mb-6">
            اصنع مستقبل ابنك
          </span>
          <span className="text-mozo-orange drop-shadow-md block">بالبرمجة</span>
        </motion.h1>

        <motion.p className="text-xl md:text-2xl text-gray-300 font-medium mt-10 mb-12 leading-relaxed">
          أكاديمية <span className="text-white font-bold">Mozo</span> تعلم طفلك لغات المستقبل بطريقة <span className="text-mozo-purple border-b-2 border-mozo-purple/30">تفاعلية</span> وممتعة.
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="#register">
            <button className="relative group overflow-hidden bg-mozo-orange text-white text-2xl font-black px-12 py-5 rounded-2xl shadow-[0_8px_0_0_#b34b00] hover:shadow-[0_5px_0_0_#b34b00] active:shadow-none active:translate-y-2 transition-all">
              <span className="relative z-10">ابدأ الرحلة الآن! 🚀</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mozo-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mozo-pink/10 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}