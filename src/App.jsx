import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";
import Nav from "./components/Nav";
import ModernFAQ from "./sections/FAQSection";
import Accordion from "./sections/FAQSection";
import { KaplanlarCollage1, KaplanlarCollage2 } from "./assets/images";

const data = [
  {
    title:
      "Sulama sistemi çalışmıyor. Bir bölge çalışıyor, diğer bölge çalışmıyor.",
    content:
      "Çalışmayan bölgede su basıncı yeterli olmayabilir. Su kaçağı olabilir. Veya daha farklı bir problem ile karşı karşıya olabilirsiniz. Hızlı ve profesyonel desteğimiz ile bir günde ankara içinde destek almak için bizimle iletişime geçin.",
  },
  {
    title: "Çimlerim sarardı, kuru alan kalıyor?",
    content:
      "Sprink ve rotorlarınız bozulmuş veya ayarsız olabilir. daha fazlası için bizimle işetişime geçiniz",
  },
  {
    title: "bahçemden su kaynıyor, bahçeden su çıkıyor",
    content:
      "mevcut sulamanızda veya borularınızda patlak olabilir detay için bizi arayınız.",
  },
];
const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <hr className="h-0.5 bg-gradient-to-r from-coral-red to-black border-0 mx-auto w-11/12" />
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer
        image={KaplanlarCollage1}
        name="Çim"
        description="Otomatik çim sulama sistemleri, yeşil alanlarınızı düzenli ve verimli şekilde sulamanızı sağlar"
        descriptionSub="Sprink, rotor, selenoid vana ve zamanlayıcı ile çalışan bu sistemler, su israfını önlerken çimlerinizin her zaman canlı ve sağlıklı kalmasına yardımcı olur."
        descriptionEnd="Zahmetsiz bakım, maksimum verim. Yeşil alanlarını teknolojiyle koru, doğayı akıllı sistemlerle buluştur."
      />
    </section>
    <section className="padding">
      <SpecialOffer
      image={KaplanlarCollage2}
        name="Damlama"
        description="Otomatik damlama sulama sistemleri, bitkilerin kök bölgelerine doğrudan ve kontrollü su ulaştırmanızı sağlayan sistemlerdir."
        descriptionSub="Damlama boruları, filtreler, basınç regülatörleri ve zamanlayıcılarla çalışan bu sistem, suyu israf etmeden verimli sulama sunar ve bitkilerin sağlıklı büyümesini destekler."
        descriptionEnd="Daha az suyla daha fazla verim. Akıllı sulama teknolojisiyle toprağını koru, tarımını geleceğe taşı."
      />
    </section>
    <section
      className="padding-x
  sm:py-32 py-16 w-full"
    >
      <Subscribe />
    </section>
    <hr className="h-0.5 bg-gradient-to-r from-coral-red to-black border-0 mx-auto w-11/12" />

    <section className="bg-pale-blue">
      {/* <ModernFAQ items={data} /> */}
      <Accordion />
    </section>
    <section className="bg-gradient-to-b from-red-950 to-black padding-x ">
      <Footer />
    </section>
  </main>
);

export default App;
