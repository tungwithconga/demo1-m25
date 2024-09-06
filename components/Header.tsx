// components/Header.tsx
const Header = () => {
    return (
      <header className="flex items-center justify-between bg-white shadow px-6 py-4">
        <div className="text-xl font-semibold">Welcome back, Rikkei Academy</div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md"
          />
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
        </div>
      </header>
    );
  };
  
  export default Header;
  