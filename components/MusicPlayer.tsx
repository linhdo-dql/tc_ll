import React, { useState, useRef, useCallback } from 'react';

const MusicOnIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-13c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
    </svg>
);

const MusicOffIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15.1L19 1.686M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-13c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M1.686 19L15.1 5.586" />
    </svg>
);


const MusicPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    // A classic, royalty-free wedding track from a reliable public archive.
    // This is a more direct link to prevent hotlinking issues.
    const musicSrc = "https://ia800905.us.archive.org/28/items/CanonInD_20/CanonInD.mp3";

    const togglePlay = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(error => console.error("Audio play failed:", error));
        }
        setIsPlaying(!isPlaying);
    }, [isPlaying]);

    return (
        <>
            <audio ref={audioRef} src={musicSrc} loop />
            <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
                className="fixed bottom-5 right-5 z-50 bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-brown-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
            >
                {isPlaying ? <MusicOnIcon /> : <MusicOffIcon />}
            </button>
        </>
    );
};

export default MusicPlayer;
