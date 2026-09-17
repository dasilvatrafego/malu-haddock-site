import Image from "next/image";
import Link from "next/link";

/** Barra verde do topo com a logo — igual ao original (54px de altura). */
export default function Header() {
  return (
    <header className="bg-green-header">
      <div className="site-container flex h-[54px] items-center">
        <Link href="/" aria-label="Malu Haddock Lobo — página inicial">
          <Image
            src="/img/logo-topo.png"
            alt="Malu Haddock Lobo"
            width={331}
            height={79}
            priority
            className="h-[30px] w-auto"
          />
        </Link>
      </div>
    </header>
  );
}
