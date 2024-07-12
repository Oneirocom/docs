import Link from "next/link.js";

export function Logo() {
  return (
    <Link
      href="/"
      className="active:scale-105 h-2 hover:bg-bgLightest font-bold text-textHeading flex items-center rounded-md p-2 -ml-2 transition-[background-color,transform] duration-100"
    >
      <img src="/images/logo-wm.svg" className="h-6 mr-3" />
    </Link>
  );
}
