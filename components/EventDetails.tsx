import React from 'react';

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

// Heart icon for the timeline marker
const HeartIconMarker = () => (
    <div className="absolute top-8 left-6 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-center bg-cream h-9 w-9 rounded-full border-2 border-gold z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        </div>
    </div>
);


const EventDetails: React.FC = () => {
    return (
        <section className="py-20 md:py-32" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')"}}>
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h2 className="font-serif text-4xl md:text-5xl text-brown-dark mb-20" data-aos="fade-up">Thông Tin Sự Kiện</h2>
                </div>
                
                <div className="relative max-w-4xl mx-auto">
                    {/* The Timeline Line */}
                    <div className="absolute top-0 h-full w-0.5 bg-gold/30 left-6 md:left-1/2 transform -translate-x-1/2" aria-hidden="true"></div>
                    
                    {/* Event 1: Ceremony */}
                    <div className="relative mb-16">
                        <HeartIconMarker />
                        <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8" data-aos="fade-right">
                            <div className="bg-white p-6 rounded-xl shadow-lg text-left">
                                <h3 className="font-serif text-3xl text-brown-dark mb-6">Lễ Thành Hôn</h3>
                                <div className="space-y-5 text-base">
                                   <div className="flex items-start">
                                       <div className="pt-1"><CalendarIcon /></div>
                                       <div className="ml-4">
                                           <p className="font-bold text-brown-dark">Ngày</p>
                                           <p className="text-text-main">Thứ Bảy, 28/12/2024</p>
                                       </div>
                                   </div>
                                   <div className="flex items-start">
                                       <div className="pt-1"><ClockIcon /></div>
                                       <div className="ml-4">
                                           <p className="font-bold text-brown-dark">Thời gian</p>
                                           <p className="text-text-main">10:00 Sáng</p>
                                       </div>
                                   </div>
                                   <div className="flex items-start">
                                       <div className="pt-1"><LocationIcon /></div>
                                       <div className="ml-4">
                                           <p className="font-bold text-brown-dark">Địa điểm</p>
                                           <p className="text-text-main">Tư Gia Nhà Gái</p>
                                           <p className="text-sm text-text-main/80">Quận 1, TP. Hồ Chí Minh</p>
                                       </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Event 2: Reception */}
                     <div className="relative">
                        <HeartIconMarker />
                        <div className="ml-16 md:ml-[50%] md:w-1/2 md:pl-8" data-aos="fade-left">
                            <div className="bg-white p-6 rounded-xl shadow-lg text-left">
                                <h3 className="font-serif text-3xl text-brown-dark mb-6">Tiệc Cưới</h3>
                                <div className="space-y-5 text-base">
                                   <div className="flex items-start">
                                       <div className="pt-1"><CalendarIcon /></div>
                                       <div className="ml-4">
                                           <p className="font-bold text-brown-dark">Ngày</p>
                                           <p className="text-text-main">Thứ Bảy, 28/12/2024</p>
                                       </div>
                                   </div>
                                   <div className="flex items-start">
                                       <div className="pt-1"><ClockIcon /></div>
                                       <div className="ml-4">
                                           <p className="font-bold text-brown-dark">Thời gian</p>
                                           <p className="text-text-main">6:00 Tối</p>
                                       </div>
                                   </div>
                                   <div className="flex items-start">
                                       <div className="pt-1"><LocationIcon /></div>
                                       <div className="ml-4">
                                           <p className="font-bold text-brown-dark">Địa điểm</p>
                                           <p className="text-text-main">Trung tâm Hội nghị White Palace</p>
                                           <a href="https://maps.app.goo.gl/g6z6rYm4x3F5Z9p98" target="_blank" rel="noopener noreferrer" className="text-sm text-gold hover:underline">Xem bản đồ</a>
                                       </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventDetails;