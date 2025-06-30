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
              location="San Francisco, CA (Remote from Canada)"
              dateRange="November 2024 - Present"
              description={[]}
              logoUrl="https://samharrison-portfolio.s3.us-east-2.amazonaws.com/neonlogo.png"
              websiteUrl="http://neon.tech/home"
            />

            {/* Skyworks Experience */}
            <ExperienceCard
              title="Machine Learning Engineer II, III-V Modeling Group"
              company="Skyworks Solutions Inc."
              location="Ottawa, ON"
              dateRange="July 2024 - November 2024"
              description={[
                "Developed PINNs of GaAs pHEMT devices, improved bias point selection accuracy to suppress intermodulation distortion and reduced simulation wall times",
                "Implemented a PyTorch-to-Verilog-A transpiler that converts trained neural networks into Verilog-A modules, allowingdevice teams to drop deep learning models straight into Cadence and Keysight simulators",
                "Created a CLI for HPC management that simplified ML workflows through templated resource allocation, automated storage mounting, containerized Apptainer environments, and experiment monitoring",
              ]}
              logoUrl="https://samharrison-portfolio.s3.us-east-2.amazonaws.com/skyworkslogo.png"
              websiteUrl="https://www.skyworksinc.com/"
            />

            {/* GBatteries Experience */}
            <ExperienceCard
              title="Algorithm Developer Intern, R&D Division"
              company="GBatteries"
              location="Ottawa, ON"
              dateRange="August 2023 - January 2024"
              description={[
                "Developed CNN-LSTM and LightGBM models for Li-Ion battery state estimation, improved accuracy by 4% and enabled efficient inference on resource-constrained devices",
                "Created a real-time inference system using FastAPI and Redis telemetry data buffering, capable of delivering low-latency state predictions during active charging cycles for thousands of batteries",
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
              dateRange="April 2022 - September 2022"
              description={[
                "Developed an automated review system for the National Project Management System to provide early warnings for projects at risk of exceeding time, budget, or scope constraints, reducing the quarterly review timeline from over 60 hours to approximately 5 minutes",
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
