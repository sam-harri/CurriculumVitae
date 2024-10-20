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
              title="Software Engineer, Contractor"
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
                "Created CLI to interface with on-prem HPC cluster and file system for training, boot standardized project templates and environments with Apptainer, and manage and monitor experiments",
                "Developed PyTorch-to-Verilog-A transpiler to deploy DL models into Cadence and ADS simulators",
                "Designed physics-informed neural network of GaAs pHEMT devices, enabling more precise bias point selection for intermodulation distortion suppression",
                "Built an internal RF switch design math package, deployed behind a RESTful API and Next dashboard,  and as a standalone pip package; automated test, build, and deployment workflows on Azure DevOps"
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
                "Developed and deployed various machine learning and deep learning models to tackle state estimation of Li-Ion batteries during drive cycles",
                "Deployed models with FastAPI and Redis for data buffering using a CI pipeline with automated unit testing and deployment workflows",
                "Created Electrochemical Impedance Spectroscopy dashboard in React and accompanying REST API to standardize data acquisition for all platforms and allow researchers to access, plot, compare and share battery cycling results across teams",
                "Integrated API calls into existing EIS platforms for transmission of sweep conditions and impedance results into MongoDB"
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
                "Worked extensively with large, complex datasets in the project management and financial industry"
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
