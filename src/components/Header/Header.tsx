import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

  return (
    <header>
      <nav className="bg-gray-50 p-3 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <a className="font-bold text-xl hover:no-underline text-gray-800 hover:text-gray-800" href="/">Sam Harrison</a>
            <Link to="/blog" className="text-gray-800 hover:text-gray-600">Blog</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
