// import type { Metadata } from 'next';
// import { Cairo } from 'next/font/google';
// // تعديل المسار ليكون متوافق مع مكان ملف الـ CSS في الـ styles folder
// import '../styles/globals.css'; 

// // تهيئة خط Cairo - الأنسب للأطفال والماميز لأنه Rounded وواضح
// const cairo = Cairo({
//   subsets: ['arabic'],
//   weight: ['400', '500', '600', '700', '800', '900'],
//   variable: '--font-cairo',
//   display: 'swap', // لضمان سرعة التحميل وعدم ظهور نص فارغ
// });

// export const metadata: Metadata = {
//   title: {
//     template: '%s | Mozo Code Academy',
//     default: 'أكاديمية موزو - تعلم البرمجة للأطفال بطريقة ممتعة',
//   },
//   description: 'أكاديمية موزو متخصصة في تعليم البرمجة والذكاء الاصطناعي للأطفال من سن 6 لـ 18 سنة. مناهج تفاعلية، ومشاريع حقيقية.',
//   keywords: ['برمجة الأطفال', 'مستقبل البرمجة', 'كودنج للأطفال', 'Mozo Academy'],
//   // إضافة OpenGraph عشان لما تبعت اللينك على الواتساب تظهر صورة الويبسايت ووصف شيك
//   openGraph: {
//     title: 'Mozo Code Academy',
//     description: 'ابنك بيصنع المستقبل بالكود',
//     type: 'website',
//     locale: 'ar_EG',
//     url: 'https://mozo-academy.com',
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="ar" dir="rtl" className="scroll-smooth">
//       <body
//         className={`${cairo.variable} font-cairo antialiased bg-mozo-dark text-white selection:bg-mozo-orange selection:text-white overflow-x-hidden`}
//       >
//         {/* الخلفية المضيئة (Glow) اللي هتفضل ثابتة ورا الـ Layout كله */}
//         <div className="bg-glow fixed inset-0 z-[-1]" />

//         <main className="relative min-h-screen">
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import '../styles/globals.css'; 
import CustomCursor from '@/components/CustomCursor';
import Chatbot from '@/components/Chatbot'; // 1. استدعاء الشات بوت الذكي هنا

// تهيئة خط Cairo - الموحد للأكاديمية
const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Mozo Code Academy',
    default: 'أكاديمية موزو - تعلم البرمجة للأطفال بطريقة ممتعة',
  },
  description: 'أكاديمية موزو متخصصة في تعليم البرمجة والذكاء الاصطناعي للأطفال من سن 6 لـ 18 سنة. مناهج تفاعلية، ومشاريع حقيقية.',
  keywords: ['برمجة الأطفال', 'مستقبل البرمجة', 'كودنج للأطفال', 'Mozo Academy'],
  openGraph: {
    title: 'Mozo Code Academy',
    description: 'ابنك بيصنع المستقبل بالكود',
    type: 'website',
    locale: 'ar_EG',
    url: 'https://mozo-academy.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body
        className={`${cairo.variable} font-cairo antialiased bg-mozo-dark text-white selection:bg-mozo-orange selection:text-white overflow-x-hidden relative`}
      >
        {/* الخلفية المضيئة الثابتة */}
        <div className="bg-glow fixed inset-0 z-[-1]" />

        {/* تفعيل الماوس السحري الموحد */}
        <CustomCursor />

        {/* 2. تفعيل الشات بوت الذكي بعد معالجة السينتاكس */}
        <Chatbot />

        {/* زرار الواتساب لسه كومنت لحد ما نجهز فايله */}
        {/* <WhatsAppButton /> */}

        {/* المحتوى الديناميكي للصفحات */}
        <main className="relative min-h-screen z-10">
          {children}
        </main>
      </body>
    </html>
  );
}