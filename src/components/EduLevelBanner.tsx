
import React from "react";

interface EduLevelBannerProps {
  title: string;
  subtitle: string;
  description: string;
}

const EduLevelBanner: React.FC<EduLevelBannerProps> = ({
  title,
  subtitle,
  description
}) => {
  return (
    <div className="w-full bg-colegio-amarelo py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-colegio-azul mb-8">
          {title}
        </h1>
        
        {/* White stripe with subtitle and description */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold text-colegio-azul text-center mb-4">
            {subtitle}
          </h2>
          <p className="text-gray-700 text-center md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EduLevelBanner;
