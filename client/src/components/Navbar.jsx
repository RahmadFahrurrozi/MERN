import { LogOutIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = { name: "rozi" };
  const navigate = useNavigate();

  const logOutUser = () => {
    navigate("/");
  };

  return (
    <div className="shadow bg-white">
      <nav className="flex justify-between max-w-7xl mx-auto py-3.5 text-slate-800 transition-all">
        <Link to={"/"}>
          <img src="./logo.svg" alt="logo" className="h-11 w-auto" />
        </Link>
        <div className="flex items-center gap-4">
          <p className="max-sm:hidden">Hi, {user.name} </p>
          <button
            onClick={logOutUser}
            className="border border-gray-300 bg-white flex items-center gap-3 hover:bg-slate-100 px-7 py-1.5 rounded-full active:scale-95 transition-all"
          >
            Logout
            <LogOutIcon className="w-4 h-4 text-red-400" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
