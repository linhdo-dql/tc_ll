import { GoogleGenAI } from "@google/genai";
import type { RsvpData } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY is not set in environment variables. Using a fallback message.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateThankYouMessage = async (formData: RsvpData): Promise<string> => {
    const { name, attending, message: userMessage } = formData;

    const fallbackMessage = `Cảm ơn ${name} rất nhiều vì đã phản hồi! Huy và Linh rất vui và mong được chung vui cùng bạn trong ngày trọng đại.`;

    if (!API_KEY) {
        return Promise.resolve(fallbackMessage);
    }

    try {
        let prompt = `Bạn là trợ lý cho cặp đôi Huy và Linh. Hãy viết một lời cảm ơn ngắn gọn, chân thành và ấm áp bằng tiếng Việt để gửi cho khách mời tên là "${name}" sau khi họ đã gửi phản hồi cho thiệp cưới. Giữ giọng văn thân mật, vui vẻ.`;

        if (attending === 'yes') {
            prompt += ` Vị khách này đã xác nhận SẼ tham dự. Hãy bày tỏ sự vui mừng và mong đợi được gặp họ trong ngày cưới.`;
        } else {
            prompt += ` Rất tiếc, vị khách này KHÔNG thể tham dự. Hãy bày tỏ sự tiếc nuối một cách lịch sự nhưng vẫn cảm ơn họ đã dành thời gian báo lại.`;
        }

        if (userMessage) {
            prompt += ` Họ cũng có để lại lời nhắn sau: "${userMessage}". Hãy tinh tế nhắc đến và cảm ơn họ vì lời chúc tốt đẹp này.`;
        }

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
        return fallbackMessage;
    }
};
