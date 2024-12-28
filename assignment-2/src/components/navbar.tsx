const Header = () => {
    return (
      <div className="flex justify-between bg-gray-400">
        <div className="font-bold text-2xl p-8">LOGO</div>
        
        <div className="flex gap-8 p-8 text-lg font-normal">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">About</div>
          <div className="cursor-pointer">Services</div>
          <div className="cursor-pointer">Contact Us</div>
        </div>
        </div>
    );
  };
  
  export default Header;