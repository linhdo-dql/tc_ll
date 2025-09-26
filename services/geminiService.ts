import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this example, we'll throw an error if the key is missing.
  // In the target environment, this variable is expected to be set.
  console.warn("API_KEY is not set in environment variables. Using a fallback message.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateThankYouMessage = async (guestName: string): Promise<string> => {
    if (!API_KEY) {
        return Promise.resolve(`Cảm ơn ${guestName} rất nhiều vì đã phản hồi! Huy và Linh rất vui và mong được chung vui cùng bạn trong ngày trọng đại.`);
    }

    try {
        const prompt = `Bạn là trợ lý cho cặp đôi Huy và Linh. Hãy viết một lời cảm ơn ngắn gọn, chân thành và ấm áp bằng tiếng Việt để gửi cho khách mời tên là "${guestName}" sau khi họ đã gửi phản hồi cho thiệp cưới. Nhấn mạnh rằng Huy và Linh rất vui và mong được gặp họ. Giữ giọng văn thân mật, vui vẻ.`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        const text = response.text;
        
        if (!text) {
          throw new Error("No text returned from API");
        }

        return text.trim();
    } catch (error) {
        console.error("Error generating thank you message:", error);
        // Provide a fallback message in case of an API error
        return `Cảm ơn ${guestName} rất nhiều vì đã phản hồi! Huy và Linh rất vui và mong được chung vui cùng bạn trong ngày trọng đại.`;
    }
};