import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export default function Logo({ className = '', light = false, size = 'md', onClick }: LogoProps) {
  const iconSize = size === 'sm' ? 'h-8 w-8' : size === 'lg' ? 'h-14 w-14' : 'h-10 w-10';
  const textTitleSize = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-2xl' : 'text-lg';
  const textSubSize = size === 'sm' ? 'text-[7px]' : size === 'lg' ? 'text-[11px]' : 'text-[9px]';

  return (
    <div
      id="logo-container"
      onClick={onClick}
      className={`flex items-center gap-3 select-none cursor-pointer ${className}`}
    >
      {/* Geometric 'N' interlocking vector logo with gold/bronze gradients */}
      <svg
        id="logo-icon"
        className={`${iconSize} transition-transform duration-500 hover:scale-105`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bronzeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D2BEA3" />
            <stop offset="50%" stopColor="#8C6E51" />
            <stop offset="100%" stopColor="#473727" />
          </linearGradient>
          <linearGradient id="bronzeGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FAF6F0" />
            <stop offset="50%" stopColor="#B79C7B" />
            <stop offset="100%" stopColor="#5E4935" />
          </linearGradient>
          <linearGradient id="shadowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#121212" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#121212" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Left Vertical Pillar */}
        <path
          d="M20 15 L38 15 L38 85 L20 85 Z"
          fill="url(#bronzeGrad1)"
        />

        {/* Diagonal Intersecting Beam */}
        <path
          d="M38 15 L80 85 L62 85 L20 15 Z"
          fill="url(#bronzeGrad2)"
        />

        {/* Right Vertical Pillar (positioned slightly to create letter N and architectural frame) */}
        <path
          d="M62 15 L80 15 L80 85 L62 85 Z"
          fill="url(#bronzeGrad1)"
          opacity="0.95"
        />

        {/* Subtle architectural overlay for structural depth */}
        <path
          d="M38 15 L50 35 L38 55 Z"
          fill="url(#shadowGrad)"
        />
      </svg>

      <div id="logo-text" className="flex flex-col leading-tight">
        <span
          id="logo-title"
          className={`${textTitleSize} font-display font-bold tracking-[0.15em] transition-colors duration-300 ${
            light ? 'text-white' : 'text-charcoal-950'
          }`}
        >
          NEXARCH
        </span>
        <span
          id="logo-subtitle"
          className={`${textSubSize} font-sans font-medium tracking-[0.4em] uppercase transition-colors duration-300 ${
            light ? 'text-bronze-300' : 'text-bronze-600'
          }`}
        >
          ARCHITECTS
        </span>
      </div>
    </div>
  );
}
