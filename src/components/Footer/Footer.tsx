import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-4">
      <div className="container mx-auto px-5 text-center">
        {/* Footer Information */}
        <div className="">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Sam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
