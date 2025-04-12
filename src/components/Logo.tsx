
import React from 'react';
import athenaLogo from '@/assets/athena-logo.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-24 h-24'
  };
  
  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <img 
        src={athenaLogo} 
        alt="Athena Gaming Society" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
