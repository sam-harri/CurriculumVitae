import React from "react";
import { EducationItemProps } from "./types";

const EducationCard: React.FC<EducationItemProps> = ({
  degree,
  school,
  location,
  dateRange,
  logoUrl,
  websiteUrl,
}) => {
  return (
    <div className="relative flex items-start pb-4 max-w-3xl">

      <div className="ml-4 w-full bg-white p-4 rounded-xl shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-3 sm:mb-0 sm:mr-4 flex-shrink-0 flex justify-center items-center"
          >
            <img src={logoUrl} alt={`${school} Logo`} className="h-8 md:h-12 w-auto" />
          </a>

          <div>
            <h5 className="text-sm sm:text-base md:text-xl font-light">{degree}</h5>
            <h6 className="text-xs md:text-sm text-gray-500">{school}</h6>
            <p className="text-xs md:text-sm text-gray-400">
              {dateRange} · {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
