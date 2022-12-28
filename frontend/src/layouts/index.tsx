import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export function DefaultLayout() {
  return (
    <div className="w-full h-screen bg-slate-800">
      <Header />
      <Outlet />
    </div>
  );
}
