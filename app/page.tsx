// import Navbar from '@/components/Navbar';
// import Hero from '@/components/Hero';
// import About from '@/components/About';
// import Tracks from '@/components/Tracks';
// import CTAForm from '@/components/CTAForm';

// export default function Home() {
//   return (
//     <main className="min-h-screen w-full relative">
//       <Navbar />
//       <Hero />
//       <About />
//       <Tracks />
//       <CTAForm />
//     </main>
    
//   );
// }
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Tracks from '@/components/Tracks';
import CTAForm from '@/components/CTAForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="w-full relative overflow-hidden">
      {/* الـ Navbar ثابت في الأعلى ومسؤول عن التنقل */}
      <Navbar />
      
      {/* سكشن الـ Hero (البداية والروبوت التفاعلي) */}
      <section id="hero" className="relative w-full">
        <Hero />
      </section>

      {/* سكشن عن الأكاديمية */}
      <section id="about" className="relative w-full">
        <About />
      </section>

      {/* سكشن المسارات التعليمية والكورسات */}
      <section id="tracks" className="relative w-full">
        <Tracks />
      </section>

      {/* سكشن فورم التسجيل الرئيسي (بدون أسعار حالياً) */}
      <section id="register" className="relative w-full pb-12 z-20">
        <CTAForm />
      </section>
      <Footer />
    </div>
  );
}