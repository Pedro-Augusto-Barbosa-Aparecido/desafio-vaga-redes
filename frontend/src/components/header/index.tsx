import { Globe } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <nav className="bg-gray-900 w-full h-16 flex justify-start items-center p-0 m-0 pl-4">
      <NavLink to="/" className="flex justify-start items-center gap-3">
        <Globe size={24} className="text-slate-500" />
        <span className="text-slate-500 text-xl font-bold p-0 m-0">
          4G Networking
        </span>
      </NavLink>
    </nav>
  );
}
