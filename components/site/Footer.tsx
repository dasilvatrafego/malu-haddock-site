import Image from "next/image";
import Link from "next/link";
import { SOCIAL } from "@/lib/site";

const REDES = [
  { href: SOCIAL.instagram, icon: "/img/icon-instagram.png", label: "Instagram" },
  { href: SOCIAL.facebook, icon: "/img/icon-facebook.png", label: "Facebook" },
  { href: SOCIAL.whatsapp, icon: "/img/icon-whatsapp.png", label: "WhatsApp" },
];

/** Rodapé lilás com copyright, redes sociais e logo — igual ao original. */
export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-footer">
      <div className="site-container flex flex-col items-center gap-3 py-6">
        <p className="text-center font-serif text-[18px] text-black">
          © {ano} – Todos os direitos reservados
        </p>

        <nav className="flex items-center gap-[13px]" aria-label="Redes sociais">
          {REDES.map((r) => (
            <a
              key={r.label}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={r.label}
              className="transition-opacity hover:opacity-70"
            >
              <Image src={r.icon} alt={r.label} width={200} height={200} className="h-[30px] w-[30px]" />
            </a>
          ))}
        </nav>

        <Link href="/" aria-label="Malu Haddock Lobo — página inicial">
          <Image
            src="/img/logo-rodape.png"
            alt="Malu Haddock Lobo"
            width={331}
            height={79}
            className="h-[57px] w-auto"
          />
        </Link>
      </div>
    </footer>
  );
}
