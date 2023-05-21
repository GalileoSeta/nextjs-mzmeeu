import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-4 px-6">
        <div className="flex items-center justify-between">
          <p>
            &copy; {new Date().getFullYear()} Writer's Blog. All rights
            reserved.
          </p>
          <div className="space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              Facebook
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Twitter
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
