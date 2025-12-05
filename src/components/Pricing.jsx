import React, { useState } from "react";

// Import your images here
import maleBg from '../../public/img/maleBg.jpg';
import femaleBg from '../../public/img/femaleBg.jpg';  

const Pricing = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="py-6 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center text-black mb-16">
        Our Kitten Pricing
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* ------------------- FEMALE KITTY CARD ------------------- */}
        <div
          className={`relative p-8 rounded-2xl h-[500px] shadow-2xl border-2 border-gray-700 transition-all duration-500 ${
            hoveredCard === "female" ? "scale-105 shadow-pink-500/50 border-pink-400" : ""
          }`}
          style={{
            backgroundImage: `url(${femaleBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          onMouseEnter={() => setHoveredCard("female")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 rounded-2xl" />

          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-bold text-pink-300 mb-4">Female Kitten</h3>
              <p className="text-gray-200 text-lg">
                Female kittens are calm, gentle and very affectionate.
              </p>

              <ul className="mt-6 text-gray-100 space-y-3 text-lg">
                <li className="flex items-center">
                  <span className="text-pink-400 mr-2">✔</span> Soft & Calm Behavior
                </li>
                <li className="flex items-center">
                  <span className="text-pink-400 mr-2">✔</span> Very Loving
                </li>
                <li className="flex items-center">
                  <span className="text-pink-400 mr-2">✔</span> Easy to Groom
                </li>
              </ul>
            </div>

            <div>
              <p className="text-5xl font-bold text-white mb-6">Rs. 18,000</p>
              <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Choose Female Kitten
              </button>
            </div>
          </div>
        </div>

        {/* ------------------- MALE KITTY CARD ------------------- */}
        <div
          className={`relative p-8 rounded-2xl h-[500px] shadow-2xl border-2 border-gray-700 transition-all duration-500 ${
            hoveredCard === "male" ? "scale-105 shadow-blue-500/50 border-blue-400" : ""
          }`}
          style={{
            backgroundImage: `url(${maleBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          onMouseEnter={() => setHoveredCard("male")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 rounded-2xl" />

          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-bold text-blue-300 mb-4">Male Kitten</h3>
              <p className="text-gray-200 text-lg">
                Male kittens are playful, friendly and very active.
              </p>

              <ul className="mt-6 text-gray-100 space-y-3 text-lg">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✔</span> Playful Nature
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✔</span> Active & Energetic
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✔</span> Strong Build
                </li>
              </ul>
            </div>

            <div>
              <p className="text-5xl font-bold text-white mb-6">Rs. 15,000</p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Choose Male Kitten
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;