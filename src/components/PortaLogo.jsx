import React from 'react';

const PortaLogo = ({ size = 'md', isDark = false }) => {
  // Size variants
  const sizes = {
    sm: { icon: 24, text: 'text-sm font-bold' },
    md: { icon: 40, text: 'text-lg font-bold' },
    lg: { icon: 60, text: 'text-2xl font-bold' }
  };

  const sizeConfig = sizes[size];
  const textColor = isDark ? '#003560' : '#ffffff';
  const iconColor = '#8DAE10';

  return (
    <div className="flex items-center gap-2">
      {/* Tor-Symbol als SVG */}
      <svg
        width={sizeConfig.icon}
        height={sizeConfig.icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Linke Torseite */}
        <line x1="8" y1="10" x2="8" y2="30" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Rechte Torseite */}
        <line x1="32" y1="10" x2="32" y2="30" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Obere Querstange (das "Tor-Dach") */}
        <line x1="8" y1="10" x2="32" y2="10" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Innensymbol: aufsteigende Linie (Aufstieg/Weg) */}
        <path
          d="M 12 25 Q 20 15 28 12"
          stroke={iconColor}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
      </svg>

      {/* Text "PoRTA" */}
      <span className={sizeConfig.text} style={{ color: textColor, letterSpacing: '0.02em' }}>
        <span style={{ color: '#003560' }}>Po</span>
        <span style={{ color: '#8DAE10' }}>RTA</span>
      </span>
    </div>
  );
};

export default PortaLogo;
