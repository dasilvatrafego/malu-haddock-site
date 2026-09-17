/**
 * Trecho com destaque dourado — no original era um <span> com
 * background-color:#A77936 dentro do texto.
 */
export default function Marca({ children }: { children: React.ReactNode }) {
  return (
    <span className="box-decoration-clone bg-gold px-1.5 text-white [text-shadow:rgba(0,0,0,0.4)_0_4px_5px]">
      {children}
    </span>
  );
}
