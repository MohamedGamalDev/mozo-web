// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'mozo-dark': '#0A0B2E',     // الكحلي الغامق جداً
//         'mozo-bg-light': '#121440', // الكحلي الفاتح شوية (للـ Cards)
//         'mozo-purple': '#9171f8',   // الموف بتاع الشاشة
//         'mozo-orange': '#ff6b00',   // البرتقالي بتاع الزراير
//         'mozo-yellow': '#ffcc33',   // الأصفر بتاع الكيبورد
//       },
//       borderRadius: {
//         'mozo-xl': '50px', // الزوايا الدائرية الكبيرة أوي
//       }
//     },
//   },
//   plugins: [],
// };
// export default config;
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // الألوان الأساسية بناءً على التحليل الجديد
        mozo: {
          dark: "#0A0B2E",      // الكحلي الغامق جداً للخلفية
          card: "rgba(18, 20, 64, 0.7)", // كحلي شفاف شوية لتأثير الـ Glassmorphism
          purple: "#9171f8",    // الموف المضيء
          orange: {
            DEFAULT: "#ff6b00", // البرتقالي الأساسي
            hover: "#e65a00",   // درجة أغمق للـ Hover
          },
          yellow: "#ffcc33",    // الأصفر بتاع الكيبورد والتفاصيل
          pink: "#FF2E63",      // الوردي الهادي اللي في الدوائر
          softWhite: "#F8F9FA", // أبيض مريح للعين للنصوص
        }
      },
      borderRadius: {
        'mozo-xl': '40px', // زوايا دائرية احترافية
      },
      backgroundImage: {
        'gradient-mozo': 'linear-gradient(135deg, #0A0B2E 0%, #121440 100%)',
      },
      animation: {
        // إضافة أنيميشن بسيط للروبوت (Floating Effect)
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;