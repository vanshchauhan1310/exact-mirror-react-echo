import React from 'react';

const Header = () => {
  return (
    <div className="bg-[#171A26] p-4 border-b border-[#1E2134]">
      <div className="max-w-[70rem] mx-auto flex items-center">
        <img src="/Frame 1.png" alt="KoinX Logo" className="h-6 w-24 mr-4 " />
        {/* <div className="koinx-logo text-xl font-bold text-white">
          Koin<span className="text-[#FFBB38]">X</span><sup className="text-xs">®</sup>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
