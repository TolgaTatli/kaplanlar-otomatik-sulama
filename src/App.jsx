import {
  Hero,
  Services,
  AboutUs,
  Footer,
  FAQSection,
  WhatsappHelp,
  OurServices, 
} from "./sections";
import Nav from "./components/Nav";
import { KaplanlarCollage1, KaplanlarCollage2 } from "./assets/images";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { Analytics } from "@vercel/analytics/react";
import { Helmet } from "react-helmet"; // Helmet importunu ekle

const App = () => (
  <main className="relative">
    <Helmet>
      <title>Kaplanlar Sulama | Ankara Otomatik Sulama Sistemleri</title>
      <meta
        name="description"
        content="Kaplanlar Sulama, Ankara ve çevresinde otomatik çim ve bahçe sulama sistemleri, damlama sulama, teknik servis ve ücretsiz keşif hizmetleri sunar. Sürdürülebilir ve ekonomik çözümler."
      />
    </Helmet>
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <hr className="h-0.5 bg-gradient-to-r from-coral-red to-black border-0 mx-auto w-11/12" />
    <section className="padding">
      <AboutUs />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <OurServices
        image={KaplanlarCollage1}
        name="Çim"
        description="Otomatik çim sulama sistemleri, yeşil alanlarınızı düzenli ve verimli şekilde sulamanızı sağlar"
        descriptionSub="Sprink, rotor, selenoid vana ve zamanlayıcı ile çalışan bu sistemler, su israfını önlerken çimlerinizin her zaman canlı ve sağlıklı kalmasına yardımcı olur."
        descriptionEnd="Zahmetsiz bakım, maksimum verim. Yeşil alanlarını teknolojiyle koru, doğayı akıllı sistemlerle buluştur."
      />
    </section>
    <section className="padding">
      <OurServices
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
      <WhatsappHelp />
    </section>
    <hr className="h-0.5 bg-gradient-to-r from-coral-red to-black border-0 mx-auto w-11/12" />

    <section className="bg-pale-blue">
      <FAQSection />
    </section>
    <section className="bg-gradient-to-b from-red-950 to-black padding-x ">
      <Footer />
    </section>

    <ScrollToTopButton />
    <Analytics/>
  </main>
);

export default App;