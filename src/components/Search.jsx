import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

const Search = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const searchTerms = ['topics', 'discoveries', 'reports', 'articles'];
  const [isAnimating, setIsAnimating] = useState(false);
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!inputValue) {
        setIsAnimating(true);
        setTimeout(() => {
          setPlaceholderIndex((prev) => (prev + 1) % searchTerms.length);
          setIsAnimating(false);
        }, 500);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={`bg-[#d6d9fdb4] rounded-[15px] p-4 md:p-5 ${
      isTabletOrDesktop ? 'w-full ml-0' : 'w-[90%] ml-4'
    } hover:shadow-md transition-all duration-300`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-full flex items-center justify-center">
          <FaSearch className="text-purple-500 text-base md:text-lg" />
        </div>
        <div>
          <h2 className="text-base md:text-lg font-semibold text-gray-800">Quick Search</h2>
          <p className="text-xs md:text-sm text-gray-500">Find what you need</p>
        </div>
      </div>

      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full h-[40px] md:h-[50px] pl-10 md:pl-12 pr-4 md:pr-6 rounded-[20px] md:rounded-[25px] 
            bg-white/80 text-sm md:text-base text-gray-800 placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all tracking-[1px]"
          placeholder="Explore medical "
        />
        <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <FaSearch className="text-base md:text-lg" />
        </div>
        
        {!inputValue && (
          <div className="absolute left-[180px] md:left-[205px] top-1/2 -translate-y-1/2 pointer-events-none">
            <span className={`text-gray-400 text-sm md:text-base transition-opacity duration-500 tracking-[1px] ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}>
              {searchTerms[placeholderIndex]}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search; 