import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Portfolio() {
    const [currentImage, setCurrentImage] = useState(0);

    const portfolioImages = [
        { id: 1, alt: 'Maquiagem de noiva delicada' },
        { id: 2, alt: 'Maquiagem para festa elegante' },
        { id: 3, alt: 'Maquiagem artística criativa' },
        { id: 4, alt: 'Maquiagem natural para o dia' }
    ];

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % portfolioImages.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
    };

    return ( <
        section className = "container mx-auto px-4 py-16" >
        <
        h2 className = "text-4xl font-bold text-center mb-12 text-gray-800" > Portfólio < /h2> <
        div className = "max-w-3xl mx-auto" >
        <
        div className = "relative bg-white rounded-lg shadow-lg overflow-hidden" >
        <
        div className = "aspect-video bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center" >
        <
        p className = "text-2xl text-gray-600" > Trabalho { currentImage + 1 } < /p> <
        /div>

        <
        button onClick = { prevImage }
        className = "absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100" >
        <
        ChevronLeft size = { 24 }
        /> <
        /button>

        <
        button onClick = { nextImage }
        className = "absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100" >
        <
        ChevronRight size = { 24 }
        /> <
        /button>

        <
        div className = "p-4 bg-white" >
        <
        p className = "text-center text-gray-700" > { portfolioImages[currentImage].alt } < /p> <
        /div> <
        /div>

        <
        div className = "flex justify-center gap-2 mt-6" > {
            portfolioImages.map((_, idx) => ( <
                button key = { idx }
                onClick = {
                    () => setCurrentImage(idx) }
                className = { `w-3 h-3 rounded-full transition-all ${
                                idx === currentImage ? 'bg-pink-500 w-8' : 'bg-gray-300'
                            }` }
                />
            ))
        } <
        /div> <
        /div> <
        /section>
    );
}