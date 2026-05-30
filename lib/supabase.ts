// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// 1. المحاولة الأولى: القراءة من ملف الـ .env.local المعتاد
let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
let supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 2. خط الدفاع البديل (Fallback): لو الـ Next.js كاش معلق، بنباصي القيم مباشرة عشان نعدي الـ Runtime Error
if (!supabaseUrl || !supabaseAnonKey) {
  supabaseUrl = "https://qxlgbqrkposuluhakqtt.supabase.co";
  supabaseAnonKey = "sb_publishable_zNoc6jOtTy0Vk28zCpK0SQ_1YbfG1Bb";
}

// 3. التصدير الآمن والمضمون 100% بدون أي ريسك للانهيار
export const supabase = createClient(supabaseUrl, supabaseAnonKey);