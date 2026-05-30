"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const facebookUrl = "https://www.facebook.com/share/17VcBSUfZE/";
  const instagramUrl =
  "https://www.instagram.com/mozocoding?igsh=eDE5eTlpeDF4dDJt";
  const whatsappNumber = "201006413142";
  const phoneNumber = "+201006413142";

  return (
    <footer className="w-full bg-mozo-dark/80 backdrop-blur-md border-t border-white/5 py-12 px-4 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* اليمين: اللوجو والوصف الصغير */}
        <div className="flex flex-col items-center md:items-start text-center md:text-right">
          <div className="text-3xl font-black tracking-tighter leading-none">
            <span className="text-white">MO</span>
            <span className="text-mozo-orange">ZO</span>
          </div>
          <div className="text-[10px] font-bold text-white/60 tracking-[0.2em] uppercase mt-1 mb-3">
            Code Academy
          </div>
          <p className="text-sm text-white/50 max-w-xs">
            منصة مخصصة لتعليم البرمجة والذكاء الاصطناعي لجيل الغد بطرق تفاعلية ممتعة.
          </p>
        </div>

        {/* المنتصف: أزرار التواصل السريع والتفاعل المباشر */}
        <div className="grid grid-cols-2 sm:flex items-center gap-4">
          
          {/* 1. اتصال هاتفي مباشر */}
          <motion.a
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            إتصال مباشر
          </motion.a>

          {/* 2. رسالة واتساب مباشرة */}
          <motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-[#25D366]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            واتساب
          </motion.a>

          {/* 3. فيسبوك */}
          <motion.a
            href={facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/20 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-[#1877F2]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            فيسبوك
          </motion.a>

          {/* 4. إنستجرام موجه للفيسبوك مؤقتاً */}
          <motion.a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-[#E1306C]/10 hover:bg-[#E1306C]/20 border border-[#E1306C]/20 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-[#E1306C]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            إنستجرام
          </motion.a>

        </div>

        {/* اليسار: الحقوق والـ Credits */}
        <div className="text-center md:text-left text-xs text-white/40">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لأكاديمية MOZO .</p>
          <p className="mt-1">ابنك بيصنع المستقبل بالكود 🚀</p>
        </div>

      </div>
    </footer>
  );
}