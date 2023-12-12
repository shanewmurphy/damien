import MobileMenu from "./Mobile-menu";

export default function NavBarMobile() {
  return (
    <div className="flex m-4 justify-between items-center mobile-nav">
      <div className="font-bold text-3xl">Logo</div>
      <div>
        <button className="bg-black text-white p-2">
          <MobileMenu />
        </button>
      </div>
    </div>
  );
}
