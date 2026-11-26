"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { META_PIXEL_ID } from "@/lib/site";

type Fbq = (...args: unknown[]) => void;
const fbq: Fbq = (...args) => (window as unknown as { fbq?: Fbq }).fbq?.(...args);

/**
 * Pixel do Meta (Facebook/Instagram) no site inteiro.
 * - PageView a cada página aberta, inclusive na navegação interna do Next.
 * - InitiateCheckout em qualquer clique num link de checkout da Hotmart.
 * A compra (Purchase) é enviada pela própria Hotmart, com o mesmo pixel
 * configurado no produto.
 */
export default function MetaPixel() {
  const pathname = usePathname();
  const primeiraPagina = useRef(true);

  // O PageView da primeira página vai junto com o init do pixel (abaixo);
  // aqui só contam as trocas de página feitas sem recarregar o site.
  useEffect(() => {
    if (primeiraPagina.current) {
      primeiraPagina.current = false;
      return;
    }
    fbq("track", "PageView");
  }, [pathname]);

  useEffect(() => {
    const aoClicar = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href*="pay.hotmart.com"]');
      if (link) fbq("track", "InitiateCheckout");
    };
    document.addEventListener("click", aoClicar);
    return () => document.removeEventListener("click", aoClicar);
  }, []);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
