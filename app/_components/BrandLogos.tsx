import Image from "next/image";

interface BrandLogo {
  name: string;
  src: string;
}

const brandLogos: BrandLogo[] = [
  { name: "Boldo", src: "/logo_full.svg" },
  { name: "Presto", src: "/presto_logo.png" },
  { name: "Boldo", src: "/logo_full.svg" },
  { name: "Presto", src: "/presto_logo.png" },
  { name: "Boldo", src: "/logo_full.svg" },
  { name: "Presto", src: "/presto_logo.png" },
  { name: "Boldo", src: "/logo_full.svg" },
  { name: "Presto", src: "/presto_logo.png" },
];

const BrandLogos = () => {
  return (
    <section className="py-8 bg-white mt-14">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="">
          <div className="flex items-center justify-center gap-14 overflow-x-auto scrollbar-hide">
            {brandLogos.map((logo, index) => (
              <Image
                src={logo.src}
                key={index}
                alt={`${logo.name} logo`}
                width={145}
                height={42}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
