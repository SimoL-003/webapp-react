import HeaderLogo from "../atoms/HeaderLogo";
import Navbar from "../molecules/Navbar";

export default function Header() {
  return (
    <header className="h-20 bg-slate-900 border-b border-s-slate-700">
      <div className="container flex justify-between items-center h-full">
        <HeaderLogo />

        <Navbar />
      </div>
    </header>
  );
}
