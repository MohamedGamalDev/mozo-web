// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full z-[100] px-4 py-6">
//       <motion.div 
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         className="max-w-7xl mx-auto glass-card rounded-[25px] px-8 py-4 flex items-center justify-between"
//       >
//         <div className="flex items-center">
//           <Link href="/" className="flex flex-col leading-none">
//             <div className="text-3xl font-black tracking-tighter">
//               <span className="text-white">MO</span>
//               <span className="text-mozo-orange">ZO</span>
//             </div>
//             <div className="text-[10px] font-bold text-white/60 tracking-[0.2em] uppercase mt-1">
//               Code Academy
//             </div>
//           </Link>
//         </div>

//         <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
//           <li className="cursor-pointer text-white/90 hover:text-mozo-orange font-bold transition-colors">
//             <Link href="#about">عن الأكاديمية</Link>
//           </li>
//           <li className="cursor-pointer text-white/90 hover:text-mozo-orange font-bold transition-colors">
//             <Link href="#tracks">المسارات</Link>
//           </li>
          
//           <li className="cursor-pointer text-white/90 hover:text-mozo-orange font-bold transition-colors">
//             <a href="https://wa.me/201006413142" target="_blank" rel="noreferrer">تواصل معنا</a>
//           </li>
//         </ul>

//         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           <Link href="#register">
//             <button className="bg-white text-mozo-dark px-8 py-2.5 rounded-xl font-black shadow-lg hover:bg-mozo-orange hover:text-white transition-all duration-300">
//               ابدأ الآن
//             </button>
//           </Link>
//         </motion.div>
//       </motion.div>
//     </nav>
//   );
// }

"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  // اللينك الموحد للسوشيال ميديا حالياً بناءً على طلبك
  const facebookUrl = "https://www.facebook.com/share/17VcBSUfZE/";
  const instagramUrl =
  "https://www.instagram.com/mozocoding?igsh=eDE5eTlpeDF4dDJt";
  return (
    <nav className="fixed top-0 w-full z-[100] px-4 py-6">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-7xl mx-auto glass-card rounded-[25px] px-6 md:px-8 py-4 flex items-center justify-between backdrop-blur-md bg-white/5 border border-white/10"
      >
        
        {/* 1. اليمين: اللوجو */}
        <div className="flex items-center">
          <Link href="/" className="flex flex-col leading-none">
            <div className="text-3xl font-black tracking-tighter">
              <span className="text-white">MO</span>
              <span className="text-mozo-orange">ZO</span>
            </div>
            <div className="text-[10px] font-bold text-white/60 tracking-[0.2em] uppercase mt-1">
              Code Academy
            </div>
          </Link>
        </div>

        {/* 2. المنتصف: الروابط والسوشيال ميديا الموحدة */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            <li className="cursor-pointer text-white/90 hover:text-mozo-orange font-bold transition-colors">
              <Link href="#about">عن الأكاديمية</Link>
            </li>
            <li className="cursor-pointer text-white/90 hover:text-mozo-orange font-bold transition-colors">
              <Link href="#tracks">المسارات التعليمية</Link>
            </li>
            <li className="cursor-pointer text-white/90 hover:text-mozo-orange font-bold transition-colors">
              <a href="https://wa.me/201006413142" target="_blank" rel="noreferrer">تواصل معنا</a>
            </li>
          </ul>

          {/* فاصل رأسي أنيق */}
          <div className="h-5 w-[1px] bg-white/20" />

          {/* الأيقونات باستخدام SVG نقي لمنع أي إيرور في الـ Imports */}
          <div className="flex items-center gap-4">
            {/* فيسبوك */}
            <motion.a 
              href={facebookUrl} 
              target="_blank" 
              rel="noreferrer"
              className="text-white/70 hover:text-[#1877F2] transition-colors"
              whileHover={{ scale: 1.2, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </motion.a>

            {/* إنستجرام */}
            <motion.a 
              href={instagramUrl} 
              target="_blank" 
              rel="noreferrer"
              className="text-white/70 hover:text-[#E1306C] transition-colors"
              whileHover={{ scale: 1.2, rotate: -8 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </motion.a>
          </div>
        </div>

        {/* 3. اليسار: زرار "ابدأ الآن" */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="#register">
            <button className="bg-white text-mozo-dark px-8 py-2.5 rounded-xl font-black shadow-lg hover:bg-mozo-orange hover:text-white transition-all duration-300 cursor-pointer">
              ابدأ الآن
            </button>
          </Link>
        </motion.div>

      </motion.div>
    </nav>
  );
}