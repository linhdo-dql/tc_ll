import React, { useState, useCallback } from 'react';
import { generateThankYouMessage } from '../services/geminiService';
import type { RsvpData } from '../types';

const RsvpForm: React.FC = () => {
    const [formData, setFormData] = useState<RsvpData>({
        name: '',
        attending: 'yes',
        guests: 1,
        message: '',
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [responseMessage, setResponseMessage] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name) {
            setError('Vui lòng nhập tên của bạn.');
            return;
        }
        setLoading(true);
        setError('');
        setResponseMessage('');
        try {
            const message = await generateThankYouMessage(formData);
            setResponseMessage(message);
        } catch (err) {
            console.error(err);
            setError('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
            // Fallback message
            setResponseMessage(`Cảm ơn ${formData.name} rất nhiều vì đã phản hồi! Chúng tôi rất mong được gặp bạn tại lễ cưới.`);
        } finally {
            setLoading(false);
        }
    }, [formData]);

    return (
        <section className="py-20 md:py-32 bg-cover bg-center" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/az-subtle.png')"}}>
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto bg-cream p-8 md:p-12 rounded-xl shadow-2xl" data-aos="zoom-in-up">
                    <h2 className="font-serif text-4xl md:text-5xl text-brown-dark text-center mb-4">Phản Hồi</h2>
                    <p className="text-center text-text-main mb-8">Vui lòng xác nhận sự tham dự của bạn trước ngày 15.12.2024</p>
                    
                    {!responseMessage ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-brown-dark font-bold mb-2">Tên của bạn</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-brown-light/50 rounded-lg focus:ring-gold focus:border-gold transition"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="attending" className="block text-brown-dark font-bold mb-2">Bạn sẽ tham dự chứ?</label>
                                <select
                                    id="attending"
                                    name="attending"
                                    value={formData.attending}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-brown-light/50 rounded-lg focus:ring-gold focus:border-gold transition"
                                >
                                    <option value="yes">Có, tôi sẽ đến</option>
                                    <option value="no">Rất tiếc, tôi không thể</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-brown-dark font-bold mb-2">Lời chúc phúc</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-brown-light/50 rounded-lg focus:ring-gold focus:border-gold transition"
                                    placeholder="Gửi lời chúc đến cô dâu và chú rể..."
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-gold text-white font-bold py-3 px-8 rounded-full hover:bg-brown-dark transition-colors duration-300 disabled:bg-gray-400"
                                >
                                    {loading ? 'Đang gửi...' : 'Gửi Phản Hồi'}
                                </button>
                            </div>
                             {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                        </form>
                    ) : (
                        <div className="text-center p-8 border-2 border-dashed border-gold rounded-lg">
                            <h3 className="font-serif text-2xl text-brown-dark mb-4">Cảm ơn bạn!</h3>
                            <p className="text-text-main text-lg whitespace-pre-wrap">{responseMessage}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default RsvpForm;