export async function getAiResponse(userText: string, history: any[], systemInstruction: string) {
  // بنكلم السيرفر الداخلي بتاعنا
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userText, history, systemInstruction }),
  });

  const data = await response.json();

  if (data.error) {
    console.error("Server Error:", data.error);
    throw new Error(data.error);
  }

  // التأكد من إن السيرفر رجع المحتوى المطلوب
  if (!data || !data.content) {
    console.error("الرد فاضي من السيرفر الداخلي:", data);
    throw new Error("سيرفر الذكاء الاصطناعي لا يستجيب.");
  }

  return data.content;
}