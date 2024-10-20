import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList: React.FC = () => {
  return (
    <div id="projects" className="project-section bg-gray-100 rounded-lg py-4">
      <div className="container mx-auto">
        <div className="text-center mb-2">
          <h1 className="text-2xl font-light mb-0">Projects</h1>
        </div>
        {/* Add justify-center to center items when there's only one column */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto justify-center">
          {/* TensorCraft Project */}
          <ProjectItem
            title="TensorCraft"
            description="Drag-and-Drop Neural Network Builder"
            websiteUrl="https://tensorcraft.click"
            githubUrl="https://github.com/sam-harri/TensorCraft"
            listItems={[
              "Allows users to easily build neural networks by dragging, connecting, and defining layers in an interactive playground",
              "Provides real-time feedback on tensor shapes and generates PyTorch code instantly",
              "Powered by React, ReactFlow, Zustand, and AWS on the backend",
            ]}
          />

          <ProjectItem
            title="ProcessDataStreaming"
            description="Real-Time Chemical Process Data Pipeline"
            githubUrl="https://github.com/sam-harri/ProcessDataStreaming"
            listItems={[
              "Built an end-to-end data pipeline for real-time streaming, processing, and storing chemical process data",
              "Developed a Rust service for data generation, Kafka Raft with Schema Registry for streaming, Spark for anomaly detection, and TimescaleDB for storage",
              "Orchestrated multi-container services with Docker and Compose, used Prometheus and Grafana for real-time monitoring and visualization"
            ]}
          />


          <ProjectItem
            title="GaussianPI"
            description="ML Based Process Control PI Tuner"
            githubUrl="https://github.com/sam-harri/GaussianPI"
            listItems={[
              "Tuned control loop constants using Gaussian Processes and Bayesian Optimization",
              "Developed a MATLAB simulation of the process to test sampled controller configurations, interfaced via Python's matlabengine",
              "Applied distributed computing to overcome near-real-time simulation constraints."
            ]}
          />


          {/* Uranium Milling Plant Project */}
          <ProjectItem
            title="Uranium Milling Plant - Hatch Ltd"
            description="Chemical Engineering Capstone Project"
            githubUrl="https://github.com/sam-harri/CHG4250-PlantDesign"
            reportUrl="https://uottawa-my.sharepoint.com/"
            listItems={[
              "Collaborated with Hatch Ltd. to design a uranium milling process for a pilot plant in Saskatchewan",
              "Winner of University of Ottawa plant design competition",
              "Designed a solvent extraction process using deep reinforcement learning",
              "Performed economic analysis with Monte Carlo simulations",
            ]}
          />

          {/* Boxing Club Website Project */}
          <ProjectItem
            title="University of Ottawa Boxing Club Website"
            description="Website for the boxing club to manage registrations"
            websiteUrl="https://sam-harri.github.io/uOBC/"
            githubUrl="https://github.com/sam-harri/uOBC"
            listItems={[
              "Developed a website using Next.js, Tailwind, and Framer Motion",
              "Implemented enrollment and waitlisting functionalities",
              "Created automated email systems for registrations/unregistrations",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
