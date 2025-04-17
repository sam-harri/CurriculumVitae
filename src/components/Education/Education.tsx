import React from "react";
import EducationCard from "./EducationCard";

const Education: React.FC = () => {
  return (
    <div
      id="education"
      className="bg-gray-50 sm:px-1 md:px-5 xl:px-20 rounded-lg"
    >
      <div className="container py-4">
        <div className="flex flex-col lg:flex-row first-letter">

          <div className="w-full lg:w-1/4">
            <h2 className="text-2xl font-light ml-5 pb-4">Education</h2>
          </div>

          <div className="w-full lg:w-3/4 relative">
            <EducationCard
              degree="Bachelor of Science in Computer Science"
              school="University of Ottawa"
              location="Ottawa, ON"
              dateRange="2020 - 2025"
              logoUrl="/image.png"
              websiteUrl="https://www.uottawa.ca/en"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
