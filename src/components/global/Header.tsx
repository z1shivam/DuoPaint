import { Leckerli_One } from "next/font/google";

const logoFont = Leckerli_One({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header className="fixed top-0 h-14 w-full bg-gray-800 text-white">
      <section className="mx-auto flex h-full w-full max-w-7xl items-center px-3">
        <div className={`${logoFont.className} text-2xl`}>DuoPaint</div>
      </section>
    </header>
  );
}
