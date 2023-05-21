const Header = () => {
  return (
    <header className="sticky z-10 p-6 bg-gray-100 shadow-md">
      <div className="flex items-center justify-between">
        <img
          src="https://d33wubrfki0l68.cloudfront.net/ed60aa29dce99d51afcfe3d250c548f8ccd51541/3032c/8_assetsfull/0_menubar/logoblack.svg"
          alt="Site Logo"
          className="w-16"
        />
        <nav className="space-x-8">
          <a href="#" className="hover:text-gray-600">
            Home
          </a>
          <a href="#" className="hover:text-gray-600">
            Blog
          </a>
          <a href="#" className="hover:text-gray-600">
            About
          </a>
          <a href="#" className="hover:text-gray-600">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
