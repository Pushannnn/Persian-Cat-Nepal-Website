import React, { useState } from 'react';
import { X, Play } from 'lucide-react';
import video1 from '../../public/img/video1.mp4';
import video2 from '../../public/img/video2.mp4';
import photo1 from '../../public/img/photo1.jpg';
import photo2 from '../../public/img/photo2.jpg';
import photo3 from '../../public/img/photo3.jpg';
import photo4 from '../../public/img/photo4.webp';

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = {
        2: photo1,
        3: photo2,
        5: photo4,
        7: photo3,
    };

    const videos = {
        1: video1,
        4: video2
    };

    return (
        <div className="h-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-[1400px] mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold uppercase text-black mb-8 text-center">
                    Media Gallery
                </h1>

                {/* RESPONSIVE GRID */}
                <div className="grid gap-4
                grid-cols-2         /* ✅ 2 columns on phone */
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-12 lg:grid-rows-6
                lg:h-[800px]
">


                    {/* Position 1 - Video */}
                    <div className="
            col-span-1 sm:col-span-2 md:col-span-3 
            lg:col-span-3 lg:row-span-6  
            relative group overflow-hidden rounded-2xl shadow-2xl
          ">
                        <video
                            src={videos[1]}
                            className="w-full h-full object-cover"
                            controls
                            loop
                            autoPlay
                            muted
                        />
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                            <Play size={14} /> Video
                        </div>
                    </div>

                    {/* Position 2 - Image */}
                    <div
                        className="
              col-span-1 
              lg:col-span-3 lg:row-span-3 lg:col-start-4 
              relative group overflow-hidden rounded-2xl shadow-2xl cursor-pointer 
              transform transition-transform hover:scale-105
            "
                        onClick={() => setSelectedImage(images[2])}
                    >
                        <img src={images[2]} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <p className="text-white font-semibold">Click to expand</p>
                        </div>
                    </div>

                    {/* Position 3 - Image */}
                    <div
                        className="
              col-span-1 
              lg:col-span-3 lg:row-span-3 lg:col-start-7
              relative group overflow-hidden rounded-2xl shadow-2xl cursor-pointer 
              transform transition-transform hover:scale-105
            "
                        onClick={() => setSelectedImage(images[3])}
                    >
                        <img src={images[3]} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <p className="text-white font-semibold">Click to expand</p>
                        </div>
                    </div>

                    {/* Position 4 - Video */}
                    <div className="
            col-span-1 
            sm:col-span-2 
            lg:col-span-3 lg:row-span-4 lg:col-start-10
            relative group overflow-hidden rounded-2xl shadow-2xl
          ">
                        <video
                            src={videos[4]}
                            className="w-full h-full object-cover"
                            controls
                            loop
                            autoPlay
                            muted
                        />
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                            <Play size={14} /> Video
                        </div>
                    </div>

                    {/* Position 5 - Image */}
                    <div
                        className="
              col-span-1 sm:col-span-2 md:col-span-3
              lg:col-span-6 lg:row-span-4 lg:col-start-4 lg:row-start-4
              relative group overflow-hidden rounded-2xl shadow-2xl cursor-pointer 
              transform transition-transform hover:scale-105
            "
                        onClick={() => setSelectedImage(images[5])}
                    >
                        <img src={images[5]} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                            <p className="text-white font-semibold text-lg">Click to expand</p>
                        </div>
                    </div>

                    {/* Position 7 - Image */}
                    <div
                        className="
              col-span-1 
              md:col-span-1
              lg:col-span-3 lg:row-span-3 lg:col-start-10 lg:row-start-5
              relative group overflow-hidden rounded-2xl shadow-2xl cursor-pointer 
              transform transition-transform hover:scale-105
            "
                        onClick={() => setSelectedImage(images[7])}
                    >
                        <img src={images[7]} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <p className="text-white font-semibold">Click to expand</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Popup Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={24} />
                    </button>
                    <img
                        src={selectedImage}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}
