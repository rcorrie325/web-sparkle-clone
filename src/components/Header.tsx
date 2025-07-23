import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import carpeDataumLogo from "@/assets/carpe-datum-logo.png";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="bg-slate-800 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top banner */}
        <div className="flex justify-between items-center py-3 border-b border-slate-700">
          <div className="flex items-center space-x-4">
            <img 
              src={carpeDataumLogo} 
              alt="Carpe Datum Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">Carpe Datum</h1>
            </div>
          </div>
          <div className="text-right">
            <p className="text-primary font-semibold text-lg italic">
              Seize the Data... To Grow Your Business
            </p>
            <p className="text-slate-300 text-sm">
              Learn More! 202-253-2060
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="py-4">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-slate-300 hover:bg-slate-700 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;