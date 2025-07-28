import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-12 fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center text-center">
        <p className="text-lg text-center">
          &copy; {new Date().getFullYear()} App Planter. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
