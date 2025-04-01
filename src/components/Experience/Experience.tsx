import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience: React.FC = () => {
  return (
    <div
      id="experience"
      className="bg-gray-50 sm:px-1 md:px-5 xl:px-20 rounded-lg"
    >
      <div className="container py-4">
        <div className="flex flex-col lg:flex-row first-letter">
          {/* Experience Header */}
          <div className="w-full lg:w-1/4">
            <h2 className="text-2xl font-light ml-5 pb-4">Experience</h2>
          </div>

          {/* Timeline Content */}
          <div className="w-full lg:w-3/4 relative">
            {/* Neon Experience (First) */}
            <ExperienceCard
              first
              title="Software Engineer"
              company="Neon"
              location="Ottawa, ON"
              dateRange="Present"
              description={[]}
              logoUrl="https://samharrison-portfolio.s3.us-east-2.amazonaws.com/neonlogo.png"
              websiteUrl="http://neon.tech/home"
            />

            {/* Skyworks Experience */}
            <ExperienceCard
              title="Machine Learning Engineer II, III-V Modeling Group"
              company="Skyworks Solutions Inc."
              location="Ottawa, ON"
              dateRange="July 2024 - Present"
              description={[
                "Designed physics-informed neural network of GaAs pHEMT devices, improving bias point selection accuracy for intermodulation distortion suppression",
                "Developed PyTorch-to-Verilog-A transpiler to deploy deep learning models into Cadence and Keysight simulators",
                "Created a CLI for on-prem HPC management that simplified ML workflows through templated resource allocation, automated storage mounting, containerized Apptainer environments, and experiment monitoring",
              ]}
              logoUrl="https://samharrison-portfolio.s3.us-east-2.amazonaws.com/skyworkslogo.png"
              websiteUrl="https://www.skyworksinc.com/"
            />

            {/* GBatteries Experience */}
            <ExperienceCard
              title="Algorithm Developer Intern, R&D Division"
              company="GBatteries"
              location="Ottawa, ON"
              dateRange="August 2023 – January 2024"
              description={[
                "Developed recurrent deep learning models for state estimation of Li-Ion batteries during drive cycles, achieving a 4% accuracy improvement over previous approaches by utilizing using memory effects ",
                "Architected a real-time inference system using FastAPI and Redis, implementing a pub/sub pattern for battery telemetry data that enabled low-latency state predictions during active charging cycles for 1000's of batteries",
                "Consolidated disparate battery data from multiple charging platforms into a central MongoDB database, and developed a React based web platform for analysis of battery cycling and EIS results",
              ]}
              logoUrl="https://samharrison-portfolio.s3.us-east-2.amazonaws.com/gbatterieslogo.png"
              websiteUrl="https://www.gbatteries.com/"
            />

            {/* PSPC Experience (Last) */}
            <ExperienceCard
              last
              title="Junior Data Scientist, National Project Oversight Branch"
              company="Public Services and Procurement Canada"
              location="Quebec, QC"
              dateRange="April 2022 – September 2022"
              description={[
                "Developed an automated review system for the National Project Management System to provide early warnings for projects at risk of exceeding time, budget, or scope constraints, reducing quarterly review exercise timeline from over 60 hours to approximately 5 minutes",
                "Created a comprehensive dashboard to visualize project data, highlighting trends across projects, regions, and project managers",
              ]}
              logoUrl="https://samharrison-portfolio.s3.us-east-2.amazonaws.com/pspclogo.png"
              websiteUrl="https://www.canada.ca/en/public-services-procurement.html"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
