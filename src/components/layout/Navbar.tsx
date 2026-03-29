import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../ui/Button";

const Navbar = () => {
  const user = false;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <img src={logo} alt="logo" className="h-8 w-auto object-contain" />
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-4">
          {user ? (
            <>
              <Link to="/profile">
                <Button variant="ghost" size="md">
                  My Plan
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/auth/sign-in">
                <Button variant="ghost" size="md">
                  Sign In
                </Button>
              </Link>

              <Link to="/auth/sign-up">
                <Button variant="primary" size="md">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
