import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { sulama_placeholder3 } from "../assets/images";
import WhatsAppButton from "../components/WhatsAppButton";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-[130px] max-w-[1440px] mx-auto px-4 xl:px-[65px]"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Kaplanlar Otomatik Sulama Sistemleri
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Kaplanlar
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Otomatik</span>
          Sulama Hizmetleri
        </h1>
        <p className="text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Su israfını önleyen, yalnızca ihtiyaç duyulan yeşil alanları hedef
          alan otomatik çim sulama sistemlerimizle, verimli ve sürdürülebilir
          bir sulama deneyimi sunuyoruz.
        </p>
        <WhatsAppButton label="Bizimle iletişime geçin" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 hidden lg:flex">
        <img
          src={sulama_placeholder3}
          alt="sulama sistemi"
          width={700}
          height={740}
          className="object-contain relative rounded-2xl z-1 border-2 border-coral-red"
        />
      </div>
    </section>
  );
};

export default Hero;
