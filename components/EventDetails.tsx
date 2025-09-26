import React from 'react';

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-4 md:mr-0 md:ml-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-4 md:mr-0 md:ml-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-4 md:mr-0 md:ml-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

// Heart icon for the timeline marker
const HeartIconMarker = () => (
    <div className="absolute top-1 left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-cream p-2 rounded-full border-2 border-gold z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.24,6.65A6.33,6.33,0,0,0,12,3,6.33,6.33,0,0,0,2.76,6.65C2.76,12.52,12,21,12,21S21.24,12.52,21.24,6.65Z"/>
        </svg>
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
                    <div className="relative mb-20">
                        <HeartIconMarker />
                        <div className="ml-14 md:ml-0 md:w-1/2 md:pr-10" data-aos="fade-right" data-aos-offset="200">
                            <div className="bg-cream p-8 rounded-lg shadow-lg text-left md:text-right">
                                <h3 className="font-serif text-3xl text-brown-dark mb-6">Lễ Thành Hôn</h3>
                                <div className="space-y-4 text-lg">
                                   <div className="flex items-center md:flex-row-reverse">
                                       <div>
                                           <p className="font-bold">Ngày</p>
                                           <p>Thứ Bảy, 28/12/2024</p>
                                       </div>
                                       <CalendarIcon />
                                   </div>
                                   <div className="flex items-center md:flex-row-reverse">
                                       <div>
                                           <p className="font-bold">Thời gian</p>
                                           <p>10:00 Sáng</p>
                                       </div>
                                       <ClockIcon />
                                   </div>
                                   <div className="flex items-center md:flex-row-reverse">
                                       <div>
                                           <p className="font-bold">Địa điểm</p>
                                           <p>Tư Gia Nhà Gái</p>
                                           <p className="text-sm">Quận 1, TP. Hồ Chí Minh</p>
                                       </div>
                                       <LocationIcon />
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Event 2: Reception */}
                     <div className="relative">
                        <HeartIconMarker />
                        <div className="ml-14 md:ml-[50%] md:w-1/2 md:pl-10" data-aos="fade-left" data-aos-offset="200">
                            <div className="bg-cream p-8 rounded-lg shadow-lg text-left">
                                <h3 className="font-serif text-3xl text-brown-dark mb-6">Tiệc Cưới</h3>
                                <div className="space-y-4 text-lg">
                                   <div className="flex items-center">
                                       <CalendarIcon />
                                       <div>
                                           <p className="font-bold">Ngày</p>
                                           <p>Thứ Bảy, 28/12/2024</p>
                                       </div>
                                   </div>
                                   <div className="flex items-center">
                                       <ClockIcon />
                                       <div>
                                           <p className="font-bold">Thời gian</p>
                                           <p>6:00 Tối</p>
                                       </div>
                                   </div>
                                   <div className="flex items-center">
                                       <LocationIcon />
                                       <div>
                                           <p className="font-bold">Địa điểm</p>
                                           <p>Trung tâm Hội nghị White Palace</p>
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
