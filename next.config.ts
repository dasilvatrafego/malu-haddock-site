import type { NextConfig } from "next";

/**
 * Páginas que existiam no Wix e ainda não foram migradas.
 * Enquanto não forem reconstruídas, redirecionam para a página mais próxima
 * em vez de devolver erro 404. Redirect temporário (307): se a página for
 * migrada depois, basta remover a linha, sem cache permanente nos buscadores.
 *
 * Para migrar uma delas: criar app/<slug>/page.tsx e apagar a entrada aqui.
 */
const PAGINAS_NAO_MIGRADAS: { source: string; destination: string }[] = [
  { source: "/about", destination: "/" },
  { source: "/metodo", destination: "/" },
  { source: "/workshop", destination: "/" },
  { source: "/workshopmalu", destination: "/" },
  { source: "/combo", destination: "/" },
  { source: "/combobf", destination: "/" },
  { source: "/bfdamalu", destination: "/" },
  { source: "/blackinfinita", destination: "/" },
  { source: "/bemvindos", destination: "/" },
  { source: "/event-list", destination: "/" },
  { source: "/blank", destination: "/" },
  // Loja do Wix: só tinha produtos de exemplo, nunca foi usada
  { source: "/product-page/:slug*", destination: "/" },
  { source: "/category/:slug*", destination: "/" },
  // Área de membros do Wix (login, pedidos, carteira etc.)
  { source: "/account/:path*", destination: "/" },
  { source: "/my-addresses", destination: "/" },
  { source: "/my-orders", destination: "/" },
  { source: "/my-wallet", destination: "/" },
  { source: "/my-subscriptions", destination: "/" },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return PAGINAS_NAO_MIGRADAS.map((r) => ({ ...r, permanent: false }));
  },
};

export default nextConfig;
