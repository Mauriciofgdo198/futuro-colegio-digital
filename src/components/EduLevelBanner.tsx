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
  return <div className="w-full bg-colegio-amarelo mb-12">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-colegio-amarelo mb-6">
          {title}
        </h1>
        
        {/* White stripe with subtitle and description */}
        
      </div>
    </div>;
};
export default EduLevelBanner;