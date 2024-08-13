import React, { useState } from 'react';

export const Search = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (day) => {
    setHovered(day);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-54 px-4 py-8 sm:px-8 sm:py-12 lg:px-16 lg:py-24">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-4">
        Weather App 🌤
      </h1>
      <p className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-6 text-center">
        Real-time Weather App for all cities in the world.
      </p>
      <input
        type="text"
        placeholder="Search Your City..."
        className="w-full max-w-xs py-3 px-4 sm:py-4 sm:px-6 border border-gray-500 rounded-lg text-white text-left bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex flex-wrap items-center justify-center mt-8 space-x-4 sm:space-x-6 md:space-x-8">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
          <div
            key={index}
            className={`border border-gray-400 rounded-lg px-4 py-3 sm:px-6 sm:py-4 text-center space-y-2 md:space-y-3 relative transition-transform duration-300 ${
              day === hovered ? 'bg-white text-black translate-y-[-4px]' : 'bg-transparent text-white'
            }`}
            onMouseEnter={() => handleMouseEnter(day)}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              {day === hovered ? getHoverEmoji(day) : getWeatherIcon(day)}
            </h1>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg">
              {day === hovered ? getHoverText(day) : day}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to return the weather icon based on the day
const getWeatherIcon = (day) => {
  const icons = {
    Mon: '🌤',
    Tue: '☀️',
    Wed: '🌦',
    Thu: '⛈',
    Fri: '🌧',
    Sat: '🌥',
    Sun: '🌦',
  };
  return icons[day] || '🌤';
};

// Function to return different emojis for each day on hover
const getHoverEmoji = (day) => {
  const hoverEmojis = {
    Mon: '😎',
    Tue: '😃',
    Wed: '😉',
    Thu: '🤔',
    Fri: '😄',
    Sat: '🤩',
    Sun: '😍',
  };
  return hoverEmojis[day] || '😎';
};

// Function to return different hover text for each day
const getHoverText = (day) => {
  const hoverTexts = {
    Mon: 'Sunny Day!',
    Tue: 'Bright & Clear!',
    Wed: 'Showers!',
    Thu: 'Thunderstorms!',
    Fri: 'Rainy Day!',
    Sat: 'Partly Cloudy!',
    Sun: 'Weekend Vibes!',
  };
  return hoverTexts[day] || 'Great Day!';
};
