/**
 * Constantes do site — todos os links de conversão em um lugar só.
 * Trocar um checkout aqui atualiza todos os botões daquela página.
 */

export const WHATSAPP_PHONE = "5521987370503";

export const whatsappLink = (texto = "Olá") =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(texto)}`;

export const SOCIAL = {
  instagram: "https://www.instagram.com/maluhaddocklobo/",
  facebook: "https://www.facebook.com/bluelotusti",
  whatsapp: whatsappLink(),
} as const;

/** Checkouts da Hotmart, por página. */
export const CHECKOUT = {
  /** Home — Formação em Aromaterapia Clínica Integral */
  home: "https://pay.hotmart.com/U99882325O?off=8equi8rr&checkoutMode=10",
  /** /cursoaromaterapia */
  cursoAromaterapia: "https://pay.hotmart.com/T71893945T?off=2khz5fxc",
  /** /terapiaintegral */
  terapiaIntegral: "https://pay.hotmart.com/Q66497469T?off=v2qglwhc",
  /** /cosmetico */
  cosmetico: "https://pay.hotmart.com/S80063284V",
} as const;

/** Grupo de WhatsApp do pré-lançamento Travessia (Mulheres 40+). */
export const GRUPO_TRAVESSIA = "https://chat.whatsapp.com/BPty1DQPXZ2H9G3rmAPV3H";

export const SITE_NAME = "Malu Haddock Lobo";
export const SITE_URL = "https://maluhaddocklobo.com";
