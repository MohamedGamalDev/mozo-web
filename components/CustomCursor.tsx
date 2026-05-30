"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // استخدام نظام حركي ناعم جداً (Spring Physics) عشان الروبوت يلحق الماوس بانسيابية
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* الروبوت الصغير الطاير المضيء - مخفي في الموبايل وممتاز في الشاشات الكبيرة */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.3 : 1,
          rotate: isHovered ? 15 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* تصميم الروبوت الصغير بالـ SVG مع تأثير توهج (Glow Effect) خلفي */}
        <div className="relative p-2 flex items-center justify-center">
          
          {/* دائرة التوهج الخلفية للروبوت */}
          <div className={`absolute inset-0 rounded-full blur-md transition-all duration-300 ${
            isHovered ? 'bg-mozo-orange/40 scale-125' : 'bg-mozo-purple/20 scale-100'
          }`} />

          {/* جسم الروبوت الصغير */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 drop-shadow-[0_2px_8px_rgba(255,110,0,0.5)]"
          >
            {/* الرأس */}
            <rect x="5" y="6" width="14" height="10" rx="3" fill="#1e1b4b" stroke={isHovered ? "#ff6e00" : "#9171f8"} strokeWidth="2" />
            {/* العينين المضيئة */}
            <circle cx="9" cy="11" r="1.5" fill={isHovered ? "#ff6e00" : "#00f2fe"} />
            <circle cx="15" cy="11" r="1.5" fill={isHovered ? "#ff6e00" : "#00f2fe"} />
            {/* الابتسامة الشقية */}
            <path d="M10 14C10 14 11 15 12 15C13 15 14 14 14 14" stroke="white" strokeWidth="1" strokeLinecap="round" />
            {/* الـ Antenna (الإريال فوق الرأس مع لمبة صغيرة منورة) */}
            <line x1="12" y1="6" x2="12" y2="3" stroke={isHovered ? "#ff6e00" : "#9171f8"} strokeWidth="2" />
            <circle cx="12" cy="2" r="1.5" fill={isHovered ? "#ff2a00" : "#ff6e00"} className="animate-pulse" />
            {/* سماعات الأذن أو المفاصل الجانبية */}
            <rect x="3" y="9" width="2" height="4" rx="1" fill={isHovered ? "#ff6e00" : "#9171f8"} />
            <rect x="19" y="9" width="2" height="4" rx="1" fill={isHovered ? "#ff6e00" : "#9171f8"} />
            {/* الجزء السفلي (قاعدة طائرة أو نفاثة) */}
            <path d="M8 16H16L14 19H10L8 16Z" fill={isHovered ? "#ff6e00" : "#9171f8"} opacity="0.8" />
            {/* اللهب النفاث الصغير المتحرك */}
            <path d="M11 19L12 22L13 19Z" fill="#ff6e00" className="animate-bounce" />
          </svg>
        </div>
      </motion.div>
    </>
  );
}