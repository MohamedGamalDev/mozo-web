"use client";
import React from "react";
import Link from "next/link";
import { CheckCircle2, Home, ArrowLeft, Clock } from "lucide-react";

function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#0f1135] text-white flex items-center justify-center px-6 relative overflow-hidden" dir="rtl">
      {/* لمسات جمالية خلفية */}
      <div className="absolute top-1/4 -right-24 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full bg-[#1c1f5e] rounded-[40px] p-8 md:p-12 text-center shadow-2xl border border-white/10">
        <div className="w-24 h-24 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
          <CheckCircle2 className="text-green-400 w-12 h-12" />
        </div>

        <h1 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">تم حجز مكانك بنجاح! 🎉</h1>
        
        {/* صندوق التواصل */}
        <div className="bg-white/5 p-4 rounded-2xl mb-8 border border-white/10 flex items-center justify-center gap-3">
          <Clock className="text-orange-400" />
          <p className="text-white/90 font-medium">
            سيتواصل معك أحد أعضاء فريقنا في خلال <span className="text-orange-400 font-bold">24 ساعة</span>.
          </p>
        </div>

        <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">
          شكراً لثقتكم في <strong>أكاديمية MOZO للبرمجة</strong>. لقد استلمنا بياناتكم بنجاح.
          <br /><br />
          سيقوم أحد أعضاء فريقنا بالتواصل معكم عبر <strong>واتساب</strong> لمراجعة البيانات وتنسيق الموعد المناسب للبدء في رحلة طفلكم البرمجية.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold px-6 py-3.5 rounded-2xl transition-all border border-white/10 text-sm"
          >
            <Home size={18} />
            العودة للرئيسية
          </Link>
          
          <a 
            href="https://wa.me/201006413142" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-black px-6 py-3.5 rounded-2xl transition-all shadow-[0_4px_0_0_#15803d] active:shadow-none active:translate-y-1 text-sm"
          >
            تواصل معنا فوراً
            <ArrowLeft size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;