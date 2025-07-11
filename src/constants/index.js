import { facebook, instagram, shieldTick, support, twitter, whatsapp } from "../assets/icons";

export const navLinks = [
  { href: "#home", label: "Ana Sayfa" },
  { href: "#about-us", label: "Hakkımızda" },
  { href: "#services", label: "Hizmetlerimiz" },
  { href: "#contact-us", label: "İletişim" },
];

export const statistics = [
  { value: 'Ankara', label: 'Konum' },
  { value: 'Otomatik', label: 'Sulama Sistemleri' },
];

export const services = [
  {
    imgURL: whatsapp,
    label: "Ücretsiz Keşif",
    subtext: "Otomatik sulama sistemleri için ücretsiz keşif hizmeti sunuyoruz."
  },
  {
    imgURL: shieldTick,
    label: "Aynı Gün Teknik Servis",
    subtext: "Ankara içi aynı gün tamir, bakım ve teknik servis hizmeti sunuyoruz."
  },
  {
    imgURL: support,
    label: "Hizmet Garantisi",
    subtext: "Kurulum sonrası destekle her zaman yanınızdayız."
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
