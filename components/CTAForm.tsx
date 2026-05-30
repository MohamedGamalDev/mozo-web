"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { 
  Send, Loader2, MessageCircle, 
  AlertCircle, Sparkles, User, GraduationCap
} from "lucide-react";

const staticData: any = {
  "مصر": { 
    code: "+20", 
    cities: ["القاهرة", "الإسكندرية", "الجيزة", "الدقهلية", "الشرقية", "المنوفية", "القليوبية", "الغربية", "البحيرة", "دمياط", "بورسعيد", "الإسماعيلية", "السويس", "كفر الشيخ", "الفيوم", "بني سويف", "المنيا", "أسيوط", "سوهاج", "قنا", "الأقصر", "أسوان", "البحر الأحمر", "الوادي الجديد", "مطروح", "شمال سيناء", "جنوب سيناء"] 
  },
  "المملكة العربية السعودية": { 
    code: "+966", 
    cities: ["الرياض", "مكة المكرمة", "المدينة المنورة", "القصيم", "المنطقة الشرقية", "عسير", "تبوك", "حائل", "الحدود الشمالية", "جازان", "نجران", "الباحة", "الجوف"] 
  }
};

interface CTAFormProps {
  formType?: string; 
}

export default function CTAForm({ formType = "الفورم العامة - أسفل الموقع" }: CTAFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [countryMode, setCountryMode] = useState("مصر");
  const [phoneCode, setPhoneCode] = useState("+20");
  
  // States for Errors
  const [phoneError, setPhoneError] = useState("");
  const [nameErrors, setNameErrors] = useState({ student: "", parent: "" });
  const [schoolError, setSchoolError] = useState(""); 
  
  // State for Dynamic Form
  const [registrantType, setRegistrantType] = useState("ولي الأمر");

  useEffect(() => {
    setPhoneError("");
    if (countryMode === "مصر") setPhoneCode("+20");
    else if (countryMode === "المملكة العربية السعودية") setPhoneCode("+966");
    else setPhoneCode("+");
  }, [countryMode]);

  // دالة التحقق من الاسم الثنائي (لولي الأمر فقط كما طلبت في كودك المفضل)
  const isTwoNames = (name: string) => name.trim().split(/\s+/).filter(Boolean).length >= 2;

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // تصفير الأخطاء في البداية
    setPhoneError("");
    setNameErrors({ student: "", parent: "" });
    setSchoolError("");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const sName = registrantType === "طالب" ? (data["StudentName"] as string) : (data["ChildName"] as string);
    const pName = registrantType === "طالب" ? (data["ParentName"] as string) : (data["ParentNameForm"] as string);
    const schoolName = data["School"] as string;
    
    let hasError = false;

    // 1. التحقق من اسم الطالب
    if (!sName || sName.trim().length === 0) {
      setNameErrors(prev => ({ ...prev, student: "برجاء كتابة اسم الطالب" }));
      hasError = true;
    }
    
    // 2. التحقق من اسم ولي الأمر (ثنائي)
    if (!pName || !isTwoNames(pName)) {
      setNameErrors(prev => ({ ...prev, parent: "برجاء كتابة اسم ولي الأمر ثنائياً على الأقل" }));
      hasError = true;
    }

    // 3. التحقق من اسم المدرسة
    if (!schoolName || schoolName.trim().length === 0) {
      setSchoolError("برجاء كتابة اسم المدرسة الحالية");
      hasError = true;
    }

    // 4. التحقق من رقم الهاتف
    const phone = (data.Phone as string).replace(/\s+/g, '');
    if (countryMode === "مصر") {
      if (phone.startsWith('+20') && phone.length !== 13) {
        setPhoneError("رقم مصر بالكود الدولي يجب أن يكون 13 خانة");
        hasError = true;
      } else if (!phone.startsWith('+20') && (phone.length !== 11 || !phone.startsWith('01'))) {
        setPhoneError("رقم مصر المحلي يجب أن يكون 11 رقم ويبدأ بـ 01");
        hasError = true;
      }
    } else if (countryMode === "المملكة العربية السعودية") {
      if (phone.startsWith('+966') && phone.length !== 13) {
        setPhoneError("رقم السعودية بالكود الدولي يجب أن يكون 13 خانة");
        hasError = true;
      } else if (!phone.startsWith('+966') && (phone.length !== 10 || !phone.startsWith('05'))) {
        setPhoneError("رقم السعودية المحلي يجب أن يكون 10 أرقام ويبدأ بـ 05");
        hasError = true;
      }
    } else if (phone.length < 8) {
      setPhoneError("رقم الهاتف غير مكتمل، يرجى التأكد");
      hasError = true;
    }

    if (hasError) return;

    setLoading(true);

    // 1. الـ Payload الخاص بـ Supabase (بدون token عشان ميضربش Error)
    const supabasePayload = {
      student_name: sName,
      parent_name: pName,
      registration_type: registrantType,
      age: parseInt(data["Age"] as string) || 0,
      parent_phone: phone,
      country: countryMode === "أخرى" ? data["Other_Country"] : countryMode,
      city: data["City"] as string,
      school_name: schoolName,
      student_level: data["Level"] as string,
      selected_track: formType,
      created_at: new Date().toISOString(),
    };

    try {
      // الإرسال لـ Supabase بالـ Payload النظيف
      const { error: supabaseError } = await supabase
        .from("registrations")
        .insert([supabasePayload]);

      if (supabaseError) {
        console.error("Supabase Save Error Details:", JSON.stringify(supabaseError, null, 2));
        throw new Error(supabaseError.message || "Supabase Error");
      }

      // 2. الإرسال لـ SheetDB كنسخة احتياطية للمبيعات
      await fetch('https://sheetdb.io/api/v1/d37vll1csynwm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          data: [{ 
            ...data,
            ...supabasePayload, 
            "Registration Date": new Date().toLocaleDateString('ar-EG') 
          }] 
        }),
      });

      // 3. الإرسال لـ Google Sheets (هنا بنضيف الـ Token مع نفس البيانات)
      const googleSheetsPayload = {
        ...supabasePayload,
        token: "MOZO_SECURE_2026"
      };

      await fetch('https://script.google.com/macros/s/AKfycbx50WTpZouAbhbRK8xhL1c_wOByUjUSJ92htQLN-HCPEvcDffbWpJiSBQ1ZxGSIyMC-/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(googleSheetsPayload)
      });

      // التوجيه لصفحة الشكر بعد نجاح كل الخطوات
      router.push("/thank-you");
    } catch (error: any) {
      console.error("Submission error:", error);
      alert(`حدث خطأ أثناء الإرسال: ${error.message || "يرجى التأكد من توافق البيانات مع قاعدة البيانات"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="register" className="bg-[#0f1135] text-white pt-20 pb-10 px-6 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto bg-[#1c1f5e] rounded-[40px] p-8 md:p-12 shadow-2xl mb-20 border border-white/10 relative overflow-hidden">
          
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-mozo-orange/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-center mb-10 relative z-10">
            <span className="bg-mozo-purple/20 text-mozo-purple border border-mozo-purple/30 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest inline-flex items-center gap-1.5 mb-4">
              <Sparkles size={14} /> خطوتك الأولى تبدأ من هنا
            </span>
            <h2 className="text-center text-3xl md:text-4xl font-black mb-3">انضم إلى مبرمجي المستقبل</h2>
            <p className="text-center text-white/60 text-sm md:text-base">اختر صفتك وسجل بياناتك الآن للحصول على الحصة التجريبية</p>
          </div>
          
          <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right relative z-10" dir="rtl">
            
            {/* من يقوم بالتسجيل؟ */}
            <div className="space-y-2 md:col-span-2">
              <label className="block pr-2 text-sm font-bold text-white/80">من يقوم بتسجيل الدورة؟</label>
              <select 
                name="RegistrantType" 
                value={registrantType}
                onChange={(e) => {
                  setRegistrantType(e.target.value);
                  setNameErrors({ student: "", parent: "" });
                  setSchoolError("");
                }}
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-mozo-orange outline-none text-white cursor-pointer text-sm transition-colors hover:bg-white/10"
              >
                <option value="ولي الأمر" className="bg-[#1c1f5e]">أنا ولي أمر وأسجل لطفلي</option>
                <option value="طالب" className="bg-[#1c1f5e]">أنا الطالب وأريد التسجيل بنفسي</option>
              </select>
            </div>

            {/* حقول الأسماء الديناميكية */}
            {registrantType === "ولي الأمر" ? (
              <>
                <div className="space-y-2 animate-in fade-in duration-300">
                  <label className="flex items-center gap-2 pr-2 text-sm font-bold text-white/80">
                    <User size={16} className="text-mozo-orange" /> اسم ولي الأمر
                  </label>
                  <input type="text" name="ParentNameForm" className={`w-full p-4 rounded-2xl bg-white/5 border ${nameErrors.parent ? 'border-red-500 bg-red-500/5' : 'border-white/10'} focus:border-mozo-orange outline-none text-white transition-all text-sm`} placeholder="اسم ولي الأمر (ثنائي على الأقل)" />
                  {nameErrors.parent && <span className="text-red-400 text-xs font-bold px-2">{nameErrors.parent}</span>}
                </div>
                <div className="space-y-2 animate-in fade-in duration-300">
                  <label className="flex items-center gap-2 pr-2 text-sm font-bold text-white/80">
                    <GraduationCap size={16} className="text-mozo-orange" /> اسم الطفل
                  </label>
                  <input type="text" name="ChildName" className={`w-full p-4 rounded-2xl bg-white/5 border ${nameErrors.student ? 'border-red-500 bg-red-500/5' : 'border-white/10'} focus:border-mozo-orange outline-none text-white transition-all text-sm`} placeholder="اسم الابن أو الابنة" />
                  {nameErrors.student && <span className="text-red-400 text-xs font-bold px-2">{nameErrors.student}</span>}
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2 animate-in fade-in duration-300">
                  <label className="flex items-center gap-2 pr-2 text-sm font-bold text-white/80">
                    <GraduationCap size={16} className="text-mozo-orange" /> اسم الطالب
                  </label>
                  <input type="text" name="StudentName" className={`w-full p-4 rounded-2xl bg-white/5 border ${nameErrors.student ? 'border-red-500 bg-red-500/5' : 'border-white/10'} focus:border-mozo-orange outline-none text-white transition-all text-sm`} placeholder="اسم الطالب" />
                  {nameErrors.student && <span className="text-red-400 text-xs font-bold px-2">{nameErrors.student}</span>}
                </div>
                <div className="space-y-2 animate-in fade-in duration-300">
                  <label className="flex items-center gap-2 pr-2 text-sm font-bold text-white/80">
                    <User size={16} className="text-mozo-orange" /> اسم ولي الأمر
                  </label>
                  <input type="text" name="ParentName" className={`w-full p-4 rounded-2xl bg-white/5 border ${nameErrors.parent ? 'border-red-500 bg-red-500/5' : 'border-white/10'} focus:border-mozo-orange outline-none text-white transition-all text-sm`} placeholder="اسم الوالد أو الوالدة (ثنائي على الأقل)" />
                  {nameErrors.parent && <span className="text-red-400 text-xs font-bold px-2">{nameErrors.parent}</span>}
                </div>
              </>
            )}

            {/* دولة الإقامة */}
            <div className="space-y-2">
              <label className="block pr-2 text-sm font-bold text-white/80">دولة الإقامة</label>
              <select name="Country" required value={countryMode} onChange={(e) => setCountryMode(e.target.value)} className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-mozo-orange outline-none text-white cursor-pointer text-sm">
                <option value="مصر" className="bg-[#1c1f5e]">مصر</option>
                <option value="المملكة العربية السعودية" className="bg-[#1c1f5e]">المملكة العربية السعودية</option>
                <option value="أخرى" className="bg-[#1c1f5e]">دولة أخرى</option>
              </select>
            </div>

            {/* رقم الواتساب */}
            <div className="space-y-2">
              <label className="block pr-2 text-sm font-bold text-white/80">
                {registrantType === "طالب" ? "رقم تليفون ولي الأمر (واتساب)" : "رقم الواتساب للتواصل"}
              </label>
              <div className="relative flex flex-col gap-2" dir="ltr">
                <div className="relative flex items-center w-full">
                  <input 
                    type="tel" 
                    name="Phone" 
                    required 
                    defaultValue={phoneCode} 
                    key={phoneCode} 
                    className={`w-full p-4 rounded-2xl bg-white/5 border ${phoneError ? 'border-red-500 bg-red-500/5' : 'border-white/10'} focus:border-mozo-orange outline-none text-left pl-14 text-white font-mono text-sm transition-all`} 
                  />
                  <span className="absolute left-4 text-green-400 border-r border-white/10 pr-2">
                    <MessageCircle size={18} />
                  </span>
                </div>
                {phoneError && (
                  <div className="flex items-center gap-1.5 text-red-400 text-xs font-bold px-2" dir="rtl">
                    <AlertCircle size={14} /> <span>{phoneError}</span>
                  </div>
                )}
              </div>
            </div>

            {/* حقل اسم الدولة في حالة اختيار أخرى */}
            {countryMode === "أخرى" && (
              <div className="space-y-2 md:col-span-2 animate-in slide-in-from-top-2 fade-in duration-300">
                <label className="block pr-2 text-sm font-bold text-white/80">اسم الدولة</label>
                <input type="text" name="Other_Country" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-mozo-orange outline-none text-white text-sm" placeholder="مثال: الإمارات، الكويت..." />
              </div>
            )}

            {/* المدينة */}
            <div className="space-y-2">
              <label className="block pr-2 text-sm font-bold text-white/80">المدينة / المحافظة</label>
              {countryMode === "أخرى" ? (
                <input type="text" name="City" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-mozo-orange outline-none text-white text-sm" placeholder="اكتب مدينتك" />
              ) : (
                <select name="City" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-mozo-orange outline-none text-white cursor-pointer text-sm">
                  {staticData[countryMode]?.cities.map((city: string) => (
                    <option key={city} value={city} className="bg-[#1c1f5e]">{city}</option>
                  ))}
                </select>
              )}
            </div>

            {/* عمر الطفل / الطالب */}
            <div className="space-y-2">
              <label className="block pr-2 text-sm font-bold text-white/80">
                {registrantType === "طالب" ? "عمرك الحالي" : "عمر الطفل"}
              </label>
              <input type="number" name="Age" required min="4" max="18" onKeyDown={(e) => { if(e.key === '-' || e.key === 'e') e.preventDefault(); }} className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-mozo-orange outline-none text-white transition-all text-sm" placeholder="مثال: 12" />
            </div>

            {/* حقل المدرسة */}
            <div className="space-y-2 md:col-span-2">
              <label className="block pr-2 text-sm font-bold text-white/80">اسم المدرسة الحالية</label>
              <input 
                type="text" 
                name="School" 
                className={`w-full p-4 rounded-2xl bg-white/5 border ${schoolError ? 'border-red-500 bg-red-500/5' : 'border-white/10'} focus:border-mozo-orange outline-none text-white text-sm transition-all`} 
                placeholder="اسم مدرستك أو مدرسة طفلك" 
              />
              {schoolError && <span className="text-red-400 text-xs font-bold px-2">{schoolError}</span>}
            </div>

            {/* المستوى البرمجي */}
            <div className="md:col-span-2 space-y-2">
              <label className="block pr-2 text-sm font-bold text-white/80">المستوى الحالي في البرمجة</label>
              <select 
                name="Level" 
                required 
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-mozo-orange outline-none text-white cursor-pointer text-sm font-medium leading-relaxed"
              >
                <option value="Absolute Beginner" className="bg-[#1c1f5e]">🌱 Absolute Beginner (البداية من الصفر - لا توجد خلفية سابقة)</option>
                <option value="Visual Coding - Level 1" className="bg-[#1c1f5e]">🧩 Visual Coding / Level 1 (أساسيات برمجة الـ Blocks مثل Scratch و Blockly)</option>
                <option value="Visual Coding - Advanced" className="bg-[#1c1f5e]">🎮 Advanced Visual Coding (بناء ألعاب متكاملة وتطبيق الـ Game Logic باستخدام Scratch)</option>
                <option value="Text-based Coding - Core" className="bg-[#1c1f5e]">💻 Text-based Coding / Core (كتابة الأكواد النصية - أساسيات Python أو JavaScript أو C++)</option>
                <option value="Text-based Coding - OOP & Algorithms" className="bg-[#1c1f5e]">🛠️ Advanced Syntax (مفاهيم متقدمة - دراسة الـ OOP والـ Algorithms وبناء التطبيقات)</option>
                <option value="Web & Mobile - Basics & Experience" className="bg-[#1c1f5e]">📱 Web & Mobile (لديه خبرة بسيطة في تطوير الويب أو تطوير الموبايل)</option>
                <option value="AI - Basics & Experience" className="bg-[#1c1f5e]">🤖 Artificial Intelligence (لديه خبرة بسيطة في أدوات أو أساسيات الذكاء الاصطناعي)</option>
                <option value="CyberSec & Networks - Basics" className="bg-[#1c1f5e]">🛡️ CyberSec & Networks (لديه خبرة بسيطة في أساسيات الشبكات أو أمن المعلومات)</option>
              </select>
            </div>

            {/* زر الإرسال */}
            <button 
              type="submit" 
              disabled={loading} 
              className={`md:col-span-2 w-full py-4.5 rounded-2xl font-black text-xl text-white transition-all flex items-center justify-center gap-3 mt-4 
                ${loading 
                  ? "bg-orange-600/70 cursor-not-allowed shadow-none" 
                  : "bg-mozo-orange hover:bg-orange-600 shadow-[0_6px_0_0_#b34b00] active:shadow-none active:translate-y-1"
                }`}
            >
              {loading ? <Loader2 className="animate-spin" size={24} /> : <Send size={24} />}
              {loading ? "جاري تسجيل بياناتك..." : "احجز مكانك الآن"}
            </button>
            
          </form>
        </div>
      </div>
    </footer>
  );
}